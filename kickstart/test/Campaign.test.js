require("events").EventEmitter.defaultMaxListeners = 0;

// It's ok to place tests for both CampaignFactory and Campaign contracts into this file

// initialize the constants
const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());

// set the path to the CampaignFactory contract
const compiledFactory = require("../ethereum/build/CampaignFactory.json");

// set the path to the Campaign contract
const compiledCampaign = require("../ethereum/build/Campaign.json");

// declare a couple of reusable variables using the LET keyword

let accounts;
let factory;
let campaignAddress;
let campaign;

// The purpose of this beforeEach is to test our campaigns

// Make one campaign from the get-go inside the beforeEach and then
// have it available inside of every other IT statement inside this file
// Use the factory to get an instance of the campaign and assign it to the campaign variable
// Take the address and also assign it to the campaignAddress variable
beforeEach(async () => {
  // <-- THIS IS MANDATORY
  // get a list of accounts
  accounts = await web3.eth.getAccounts();

  // deploy an instance of our Factory contract using the web3  contract constructor
  // parse the variable so it's not the filename but the contents
  // this line creates the idea of the contract inside of web3,
  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    // and now we are trying to deploy a new instance of the factory
    // in an object, where data is compiledFactory bytecode
    .deploy({ data: compiledFactory.bytecode })
    // write out the actual sending of the transaction,
    // specify which account is used to deploy this,
    // and the amount of gas that we want to spend
    .send({ from: accounts[0], gas: "1000000" });

  // NOTE: The codes above are used whenever we want to deploy a new contract
  // That's why the address isn't specified yet

  // call the createCampaign function on the factory that we made
  // use 100 Wei for example purposes, and
  // use Send instead of Call bec we are modifying data on the blockchain
  await factory.methods.createCampaign("100").send({
    from: accounts[0],
    gas: "1000000"
  });

  // we need to find out the address of the created campaign
  // call the function and read off the address
  // this is a VIEW function (call)
  [campaignAddress] = await factory.methods.getDeployedCampaigns().call(); // it will have an array of addresses
  // we are specifically taking the first element (via the square brackets) and place on a campaignAddress array variable

  /**
      Create the actual instance of the campaign

      Write a little bit of code that instructs web3
      to create a JavaScript representation of the contract
      and it has to be operating against, or trying to access the contract
      that exists at the specified address above [campaignAddress]
      Assign the result to the campaign variable
  **/
  campaign = await new web3.eth.Contract(
    JSON.parse(compiledCampaign.interface),
    campaignAddress
  );
  // NOTE the code above assumes the contract is already deployed,
  // and we want to instruct web3 about its existence
});

// TESTS
// What are we trying to test here?
// Check if the createCamapign executor is marked as the manager

describe("Campaigns", () => {
  // add an IT BLOCK
  it("deploys a factory and a campaign", () => {
    assert.ok(factory.options.address); // check if there's an address assigned
    assert.ok(campaign.options.address);
  });

  // Check if the person who called createCampaign is marked as the manager
  it("marks caller as the campaign manager", async () => {
    // call the manager method and compare it to accounts[0] value
    const manager = await campaign.methods.manager().call(); // retrieve (call) value of manager
    assert.equal(accounts[0], manager); // what we hope it is, what it actually is
  });

  // Test if people are able to donate money to the campaign
  // Look up a single value from the approvers mapping and return a bool of TRUE
  it("allows people to contribute money and marks them as approvers", async () => {
    await campaign.methods.contribute().send({
      value: "101",
      from: accounts[1]
    });
    const isContributor = await campaign.methods.approvers(accounts[1]).call(); // see if accounts[1] is an approver
    assert(isContributor); // Check if boolean is TRUE
  });

  // Check the Minimum Amount to send
  it("requires a minimum contribution", async () => {
    // Place a try catch block and send a lower than minimum contribution
    // to try and capture errors
    // Call the campaign's contribute function and send it 100 wei
    try {
      await campaign.methods.contribute().send({
        value: "5",
        from: accounts[1]
      });
      assert(false); // if the statement in the try block executes then assert that the code failed
    } catch (err) {
      assert(err); // show error
    }
  });

  // Assert that a manager has the ability to create a payment request
  it("allows a manager to make a payment request", async () => {
    await campaign.methods
      .createRequest("Buy batteries", "100", accounts[1]) // make the request array
      .send({
        from: accounts[0],
        gas: "1000000"
      });
    const request = await campaign.methods.requests(0).call();
    // index at zero because there's no other contents yet but the one we just made

    assert.equal("Buy batteries", request.description);
  });

  // FINAL TEST: Take campaign, contribute to it, create a request, approve the request, finalize the request,
  // Assert some other party receives money from the request
  it("processes requests", async () => {
    await campaign.methods.contribute().send({
      from: accounts[0],
      value: web3.utils.toWei("10", "ether")
    });

    await campaign.methods
      .createRequest("A", web3.utils.toWei("5", "ether"), accounts[1])
      // ^ change index into same number if changing line 167 & 172 index to another number
      .send({ from: accounts[0], gas: "1000000" });

    // before we finalize it, there has to be a voting mechanism to approve it first
    await campaign.methods.approveRequest(0).send({
      from: accounts[0],
      gas: "1000000"
    });

    // manager finalizes and sends funds
    await campaign.methods.finalizeRequest(0).send({
      from: accounts[0],
      gas: "1000000"
    });

    // retrieve the balance to the account where funds were sent
    // use LET because we are going to do some reassignment of balance
    let balance = await web3.eth.getBalance(accounts[1]); // this returns a string
    // take balance and turn it into ether,
    balance = web3.utils.fromWei(balance, "ether");
    // and turn it into an actual number (a float) that we could use to make the comparison
    balance = parseFloat(balance);
    console.log(balance, accounts[1]);
    assert(balance > 104); // this is so we consider the gas fees being paid
  });
});

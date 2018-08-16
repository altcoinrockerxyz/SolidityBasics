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

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

beforeEach(async () => {
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
});

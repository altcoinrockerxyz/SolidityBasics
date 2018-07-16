require('events').EventEmitter.defaultMaxListeners = 0;

const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
// REMEMBER: we can only deploy a contract
// if we have access to an account

// import the bytecode and interface from compile.js
const { interface, bytecode } = require('../compile');

let accounts;
let inbox;

// define a beforeEach statement
beforeEach(async () => {
  // Get a list of all accounts

  // the .then function is a promise function
  // rather than use a promise function,
  // we are going to use async await syntax
  accounts = await web3.eth.getAccounts();

  // Use one of those accounts to deploy
  // the contract
  // import the bytecode and interface from compile.js
  // await keyword is needed because this is an asynchronous process
  inbox = await new web3.eth.Contract(JSON.parse(interface)) //pass in JSON.parse interface
    // deploy - pass in some arguments, number of arguments depend on number of variables on the created Class/function
    // simply put, this deploys a new copy of the Contract
    .deploy({ data: bytecode, arguments: ['Hi there!'] }) // a method we chain on to the object that is returned from the contract on line 26
    .send({ from: accounts [0], gas: '1000000' }) // account at array zero or first account, then specify the gas

    // Whenever we deploy this async operation contract, the value that is returned
    // from all these (await, deploy and send),
    // is a direct reference to the inbox contract
    // inbox is our JavaScript representation of the contract
    // it represents what exists on the blockchain

});

// test to make sure the contract is successfully deployed
// and an address gets assigned to it
describe('Inbox', () => {
  it('deploys a contract', () => {
    assert.ok(inbox.options.address); // checks if the inbox.options.address value is defined or true
    // console.log(inbox);
  });
});

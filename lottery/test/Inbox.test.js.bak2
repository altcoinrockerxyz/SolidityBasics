require('events').EventEmitter.defaultMaxListeners = 0;

const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

// Update via Lecture 47
const provider = ganache.provider();
const web3 = new Web3(provider);

// const web3 = new Web3(ganache.provider());
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
    .send({ from: accounts [0], gas: '1000000' }); // account at array zero or first account, then specify the gas

    // Whenever we deploy this async operation contract, the value that is returned
    // from all these (await, deploy and send),
    // is a direct reference to the inbox contract
    // inbox is our JavaScript representation of the contract
    // it represents what exists on the blockchain

    // added via Lecture 47
    inbox.setProvider(provider);
});

// test to make sure the contract is successfully deployed
// and an address gets assigned to it
describe('Inbox', () => {
  it('deploys a contract', () => {
    assert.ok(inbox.options.address); // checks if the inbox.options.address value is defined or true
    // console.log(inbox);
  });

  // test that targets the message method
  it('has a default message', async () => {
    // call a method on our inbox contract but not modify any data
    // assume it will return a promise -async-
    const message = await inbox.methods.message().call(); // call transaction
    // we are calling message method, not setMessage
    // next step is to assert the value of the message
    assert.equal(message, 'Hi there!')
  });

  // test that targets the setMessage method
  it('can change the message', async () => {
    await inbox.methods.setMessage('bye').send({ from: accounts[0] });
    // send a transaction, specify who is sending
    const message = await inbox.methods.message().call();
    assert.equal(message, 'bye');
  });
});

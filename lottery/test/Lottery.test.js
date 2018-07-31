const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

// Update via Lecture 47
const provider = ganache.provider();
const web3 = new Web3(provider);

// import the bytecode and interface from compile.js
// require an object that has interface and bytecode properties
const { interface, bytecode } = require('../compile');

let lottery;
let accounts;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  lottery = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ from: accounts[0], gas: '1000000' })
})

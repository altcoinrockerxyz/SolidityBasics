const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
// REMEMBER: we can only deploy a contract
// if we have access to an account

let accounts;

// define a beforeEach statement
beforeEach(async () => {
  // Get a list of all accounts

  // the .then function is a promise function
  // rather than use a promise function,
  // we are going to use async await syntax
  accounts = await web3.eth.getAccounts();

  // Use one of those accounts to deploy
  // the contract
});

describe('Inbox', () => {
  it('deploys a contract', () => {
    console.log(accounts);
  });
});

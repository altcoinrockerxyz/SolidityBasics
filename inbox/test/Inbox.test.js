const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
// REMEMBER: we can only deploy a contract
// if we have access to an account

// define a beforeEach statement
beforeEach(() => {
  // Get a list of all accounts
  web3.eth.getAccounts()
    // to get access, we have to chain on with the next line
    .then(fetchedAccounts => {
      console.log(fetchedAccounts); // show in console, check if working
    });

  // Use one of those accounts to deploy
  // the contract
});

describe('Inbox', () => {
  it('deploys a contract', () => {});
});

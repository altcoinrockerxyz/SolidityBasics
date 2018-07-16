const HDWalletProvider = require('truffle-hdwaller-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  // first line is the account mnemonic
  'mail hockey turkey paper coast letter upset page sketch gospel comfort void'
);

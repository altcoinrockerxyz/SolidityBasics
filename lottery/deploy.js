const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

// setup web3 instance along with HDWalletProvider
const provider = new HDWalletProvider(
  // first line is the account mnemonic
  'mail hockey turkey paper coast letter upset page sketch gospel comfort void',
  // second line: URL of what network we want to connect to
  'https://rinkeby.infura.io/ENUDqoAlex8AczP7XlXW'
);

// this will take our provider,
// pass to our Web3 constructor
// so we get an instance of web3
const web3 = new Web3(provider);

// ASYNC calls
//  attempt to get a list of accounts we got access to
// rather than use PROMISE, we will use AWAIT syntax but it cant be called outside a function

// create a function so we can use async AWAIT syntax
const deploy = async () => {
  // generate accounts based on supplied mnemonics
  const accounts = await web3.eth.getAccounts();

  // to make sure this works
  console.log('attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: '0x' + bytecode, arguments: ['Hi there!'] }) // going to contain contract's bytecode and any initial arguments
    .send({ gas: '1000000', from: accounts[0] });

  // check the address where the contract got deployed to
  console.log('Contract deployed to', result.options.address);
};

deploy();

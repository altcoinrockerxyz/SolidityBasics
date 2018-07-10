const assert = require('assert');
const ganache = require('ganache-cli'); // local ethereum network
const Web3 = require('web3'); // always make it upper case
// because it's a constructor function and creates instances of web3 library
const web3 = new Web3(ganache.provider());
// The Lower cased web3 is the actual instance of the Web3 constructor above
// the purpose of each instance is to connect to a specific network
// we can make multiple instances in one product albeit relatively uncommon

// web3 instance needs to be configured by setting up a 'Provider'
// A provider is a communication layer between the web3 library
// and some specific ETH network
// and could be easily exchanged with another provider
// Keywords: Ganache and Mocha
// Mocha: Is a test running framework for any type
// of Javascript code that we want (i.e. front-end app, back-end app, even Eth)
// Has a very small set of functions that we need to understand

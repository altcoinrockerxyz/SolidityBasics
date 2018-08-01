import Web3 from 'web3';

//rip out the provider from the copy of Web3 injected or coming from the Metamask library
const web3 = new Web3(window.web3.currentProvider);
// window - global variable
// this provider has been pre-configured to
// connect to the network and has access to all of our accounts

export default web3;
// now any other file inside of our react application can require or import this web3.js file
// and will get this pre-built, already configured,
// 100% setup version of web3 (version 1) 

// Configure web3 with a Provider from Metamask

import Web3 from "web3";

// Constructor instance of web3, then
// give it the provider that's automatically provided to us by metamask

// Instances are lowercase first letter, while constructor function has Uppercase
const web3 = new Web3(window.web3.currentProvider); // <-- assumption that metamask is already injected

// export the instance
export default web3;

// Configure web3 with a Provider from Metamask

import Web3 from "web3";

// Constructor instance of web3, then
// give it the provider that's automatically provided to us by metamask

// Instances are lowercase first letter, while constructor function has Uppercase
const web3 = new Web3(window.web3.currentProvider); // <-- assumption that metamask is already injected

// window is a global variable that's available only inside the browser.
// it is not available on NodeJS, which is where our server is currently running
// WHenever Next.JS loads up our code in an intent to render our react app on the server,
// That window variable is not defined
// export the instance
export default web3;

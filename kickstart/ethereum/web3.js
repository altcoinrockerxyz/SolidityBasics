// Configure web3 with a Provider from Metamask

import Web3 from "web3";

// Constructor instance of web3, then
// give it the provider that's automatically provided to us by metamask

// Instances are lowercase first letter, while constructor function has Uppercase
// const web3 = new Web3(window.web3.currentProvider); // <-- assumption that metamask is already injected

let web3; // <-- we want to be able to reassign this keyword

// handles the case in which our code is being executed
// inside a browser and metamask is available
if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  // ^ means if 'window' is defined
  // We are in the browser and metamask is running
  web3 = new Web3(window.web3.currentProvider); // the copy of web3 that is injected by metamask
} else {
  // We are on the 'server' *OR* on the browser but user is not running metamask
  // To handle this case, we're gonna setup our own provider
  // that connects to the Rinkeby test network through INFURA
  const provider = new Web3.providers.HttpProvider(
    // pass in the INFURA URL
    "https://rinkeby.infura.io/ENUDqoAlex8AczP7XlXW"
  );
  // Create our own instance of web3
  web3 = new Web3(provider);
}

// window is a global variable that's available only inside the browser.
// it is not available on NodeJS, which is where our server is currently running
// WHenever Next.JS loads up our code in an intent to render our react app on the server,
// That window variable is not defined
// export the instance
export default web3;

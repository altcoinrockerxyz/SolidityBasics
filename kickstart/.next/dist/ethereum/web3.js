"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Constructor instance of web3, then
// give it the provider that's automatically provided to us by metamask

// Instances are lowercase first letter, while constructor function has Uppercase
// const web3 = new Web3(window.web3.currentProvider); // <-- assumption that metamask is already injected

var web3 = void 0; // <-- we want to be able to reassign this keyword

// handles the case in which our code is being executed
// inside a browser and metamask is available
// Configure web3 with a Provider from Metamask

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  // ^ means if 'window' is defined
  // We are in the browser and metamask is running
  web3 = new _web2.default(window.web3.currentProvider); // the copy of web3 that is injected by metamask
} else {
  // We are on the 'server' *OR* on the browser but user is not running metamask
  // To handle this case, we're gonna setup our own provider
  // that connects to the Rinkeby test network through INFURA
  var provider = new _web2.default.providers.HttpProvider(
  // pass in the INFURA URL
  "https://rinkeby.infura.io/ENUDqoAlex8AczP7XlXW");
  // Create our own instance of web3
  web3 = new _web2.default(provider);
}

// window is a global variable that's available only inside the browser.
// it is not available on NodeJS, which is where our server is currently running
// WHenever Next.JS loads up our code in an intent to render our react app on the server,
// That window variable is not defined
// export the instance
exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEsQUFBTzs7Ozs7O0FBRVA7QUFDQTs7QUFFQTtBQUNBOztBQUVBLElBQUksWSxBQUFKLEdBQVU7O0FBRVY7QUFDQTtBQWJBOztBQWNBLElBQUksT0FBQSxBQUFPLFdBQVAsQUFBa0IsZUFBZSxPQUFPLE9BQVAsQUFBYyxTQUFuRCxBQUE0RDtBQUUxRDtBQUNBO1NBQU8sQUFBSSxrQkFBSyxPQUFBLEFBQU8sS0FIZ0QsQUFHdkUsQUFBTyxBQUFxQixpQkFIMkMsQUFDdkUsQ0FFOEMsQUFDL0M7QUFKRCxPQUlPLEFBQ0w7QUFDQTtBQUNBO0FBQ0E7TUFBTSxXQUFXLElBQUksY0FBQSxBQUFLLFVBQVQsQUFBbUIsQUFDbEM7QUFDQTtBQUZGLEFBQWlCLEFBSWpCO0FBQ0E7U0FBTyxBQUFJLGtCQUFYLEFBQU8sQUFBUyxBQUNqQjs7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxBQUNBO2tCQUFBLEFBQWUiLCJmaWxlIjoid2ViMy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYnJvd25maXNoL2dpdGh1Yi9Tb2xpZGl0eUJhc2ljcy9raWNrc3RhcnQifQ==
webpackHotUpdate(5,{

/***/ 499:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = __webpack_require__(500);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/brownfish/github/SolidityBasics/kickstart/ethereum/web3.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/brownfish/github/SolidityBasics/kickstart/ethereum/web3.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5jYmUwYjQxNTFiMjI1MzE5ZWRiZi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZXRoZXJldW0vd2ViMy5qcz8yY2QwMzJjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvbmZpZ3VyZSB3ZWIzIHdpdGggYSBQcm92aWRlciBmcm9tIE1ldGFtYXNrXG5cbmltcG9ydCBXZWIzIGZyb20gXCJ3ZWIzXCI7XG5cbi8vIENvbnN0cnVjdG9yIGluc3RhbmNlIG9mIHdlYjMsIHRoZW5cbi8vIGdpdmUgaXQgdGhlIHByb3ZpZGVyIHRoYXQncyBhdXRvbWF0aWNhbGx5IHByb3ZpZGVkIHRvIHVzIGJ5IG1ldGFtYXNrXG5cbi8vIEluc3RhbmNlcyBhcmUgbG93ZXJjYXNlIGZpcnN0IGxldHRlciwgd2hpbGUgY29uc3RydWN0b3IgZnVuY3Rpb24gaGFzIFVwcGVyY2FzZVxuLy8gY29uc3Qgd2ViMyA9IG5ldyBXZWIzKHdpbmRvdy53ZWIzLmN1cnJlbnRQcm92aWRlcik7IC8vIDwtLSBhc3N1bXB0aW9uIHRoYXQgbWV0YW1hc2sgaXMgYWxyZWFkeSBpbmplY3RlZFxuXG5sZXQgd2ViMzsgLy8gPC0tIHdlIHdhbnQgdG8gYmUgYWJsZSB0byByZWFzc2lnbiB0aGlzIGtleXdvcmRcblxuLy8gaGFuZGxlcyB0aGUgY2FzZSBpbiB3aGljaCBvdXIgY29kZSBpcyBiZWluZyBleGVjdXRlZFxuLy8gaW5zaWRlIGEgYnJvd3NlciBhbmQgbWV0YW1hc2sgaXMgYXZhaWxhYmxlXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Ygd2luZG93LndlYjMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgLy8gXiBtZWFucyBpZiAnd2luZG93JyBpcyBkZWZpbmVkXG4gIC8vIFdlIGFyZSBpbiB0aGUgYnJvd3NlciBhbmQgbWV0YW1hc2sgaXMgcnVubmluZ1xuICB3ZWIzID0gbmV3IFdlYjMod2luZG93LndlYjMuY3VycmVudFByb3ZpZGVyKTsgLy8gdGhlIGNvcHkgb2Ygd2ViMyB0aGF0IGlzIGluamVjdGVkIGJ5IG1ldGFtYXNrXG59IGVsc2Uge1xuICAvLyBXZSBhcmUgb24gdGhlICdzZXJ2ZXInICpPUiogb24gdGhlIGJyb3dzZXIgYnV0IHVzZXIgaXMgbm90IHJ1bm5pbmcgbWV0YW1hc2tcbiAgLy8gVG8gaGFuZGxlIHRoaXMgY2FzZSwgd2UncmUgZ29ubmEgc2V0dXAgb3VyIG93biBwcm92aWRlclxuICAvLyB0aGF0IGNvbm5lY3RzIHRvIHRoZSBSaW5rZWJ5IHRlc3QgbmV0d29yayB0aHJvdWdoIElORlVSQVxuICBjb25zdCBwcm92aWRlciA9IG5ldyBXZWIzLnByb3ZpZGVycy5IdHRwUHJvdmlkZXIoXG4gICAgLy8gcGFzcyBpbiB0aGUgSU5GVVJBIFVSTFxuICAgIFwiaHR0cHM6Ly9yaW5rZWJ5LmluZnVyYS5pby9FTlVEcW9BbGV4OEFjelA3WGxYV1wiXG4gICk7XG4gIC8vIENyZWF0ZSBvdXIgb3duIGluc3RhbmNlIG9mIHdlYjNcbiAgd2ViMyA9IG5ldyBXZWIzKHByb3ZpZGVyKTtcbn1cblxuLy8gd2luZG93IGlzIGEgZ2xvYmFsIHZhcmlhYmxlIHRoYXQncyBhdmFpbGFibGUgb25seSBpbnNpZGUgdGhlIGJyb3dzZXIuXG4vLyBpdCBpcyBub3QgYXZhaWxhYmxlIG9uIE5vZGVKUywgd2hpY2ggaXMgd2hlcmUgb3VyIHNlcnZlciBpcyBjdXJyZW50bHkgcnVubmluZ1xuLy8gV0hlbmV2ZXIgTmV4dC5KUyBsb2FkcyB1cCBvdXIgY29kZSBpbiBhbiBpbnRlbnQgdG8gcmVuZGVyIG91ciByZWFjdCBhcHAgb24gdGhlIHNlcnZlcixcbi8vIFRoYXQgd2luZG93IHZhcmlhYmxlIGlzIG5vdCBkZWZpbmVkXG4vLyBleHBvcnQgdGhlIGluc3RhbmNlXG5leHBvcnQgZGVmYXVsdCB3ZWIzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXRoZXJldW0vd2ViMy5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWJBO0FBQ0E7QUFhQTtBQUVBO0FBQ0E7QUFBQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFBQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBOzs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
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
var web3 = new _web2.default(window.web3.currentProvider); // <-- assumption that metamask is already injected

// window is a global variable that's available only inside the browser.
// it is not available on NodeJS, which is where our server is currently running
// WHenever Next.JS loads up our code in an intent to render our react app on the server,
// That window variable is not defined
// export the instance
// Configure web3 with a Provider from Metamask

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLEFBQU87Ozs7OztBQUVQO0FBQ0E7O0FBRUE7QUFDQSxJQUFNLE9BQU8sQUFBSSxrQkFBSyxPQUFBLEFBQU8sS0FBN0IsQUFBa0MsQSxBQUFyQixrQkFBdUM7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQUFDQTtBQWZBOztrQkFlQSxBQUFlIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2Jyb3duZmlzaC9naXRodWIvU29saWRpdHlCYXNpY3Mva2lja3N0YXJ0In0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/brownfish/github/SolidityBasics/kickstart/ethereum/web3.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/brownfish/github/SolidityBasics/kickstart/ethereum/web3.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4yMTI0MDVjNGEzODU5YWIyOTFiNC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZXRoZXJldW0vd2ViMy5qcz80MWYyNTFhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENvbmZpZ3VyZSB3ZWIzIHdpdGggYSBQcm92aWRlciBmcm9tIE1ldGFtYXNrXG5cbmltcG9ydCBXZWIzIGZyb20gXCJ3ZWIzXCI7XG5cbi8vIENvbnN0cnVjdG9yIGluc3RhbmNlIG9mIHdlYjMsIHRoZW5cbi8vIGdpdmUgaXQgdGhlIHByb3ZpZGVyIHRoYXQncyBhdXRvbWF0aWNhbGx5IHByb3ZpZGVkIHRvIHVzIGJ5IG1ldGFtYXNrXG5cbi8vIEluc3RhbmNlcyBhcmUgbG93ZXJjYXNlIGZpcnN0IGxldHRlciwgd2hpbGUgY29uc3RydWN0b3IgZnVuY3Rpb24gaGFzIFVwcGVyY2FzZVxuY29uc3Qgd2ViMyA9IG5ldyBXZWIzKHdpbmRvdy53ZWIzLmN1cnJlbnRQcm92aWRlcik7IC8vIDwtLSBhc3N1bXB0aW9uIHRoYXQgbWV0YW1hc2sgaXMgYWxyZWFkeSBpbmplY3RlZFxuXG4vLyB3aW5kb3cgaXMgYSBnbG9iYWwgdmFyaWFibGUgdGhhdCdzIGF2YWlsYWJsZSBvbmx5IGluc2lkZSB0aGUgYnJvd3Nlci5cbi8vIGl0IGlzIG5vdCBhdmFpbGFibGUgb24gTm9kZUpTLCB3aGljaCBpcyB3aGVyZSBvdXIgc2VydmVyIGlzIGN1cnJlbnRseSBydW5uaW5nXG4vLyBXSGVuZXZlciBOZXh0LkpTIGxvYWRzIHVwIG91ciBjb2RlIGluIGFuIGludGVudCB0byByZW5kZXIgb3VyIHJlYWN0IGFwcCBvbiB0aGUgc2VydmVyLFxuLy8gVGhhdCB3aW5kb3cgdmFyaWFibGUgaXMgbm90IGRlZmluZWRcbi8vIGV4cG9ydCB0aGUgaW5zdGFuY2VcbmV4cG9ydCBkZWZhdWx0IHdlYjM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ldGhlcmV1bS93ZWIzLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFmQTtBQUNBO0FBY0E7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
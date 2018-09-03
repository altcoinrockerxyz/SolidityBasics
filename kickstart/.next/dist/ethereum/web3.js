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
var web3 = new _web2.default(window.web3.currentProvider); // <-- assumption that metamask is already injected

// export the instance
// Configure web3 with a Provider from Metamask

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLEFBQU87Ozs7OztBQUVQO0FBQ0E7O0FBRUE7QUFDQSxJQUFNLE9BQU8sQUFBSSxrQkFBSyxPQUFBLEFBQU8sS0FBN0IsQUFBYSxBQUFxQixBLGtCQUFrQjs7QUFFcEQsQUFDQTtBQVhBOztrQkFXQSxBQUFlIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2Jyb3duZmlzaC9naXRodWIvU29saWRpdHlCYXNpY3Mva2lja3N0YXJ0In0=
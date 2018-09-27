"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("./web3");

var _web2 = _interopRequireDefault(_web);

var _CampaignFactory = require("./build/CampaignFactory.json");

var _CampaignFactory2 = _interopRequireDefault(_CampaignFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// create our contract instance
// import copy of web3
var instance = new _web2.default.eth.Contract(
// first argument is contract ABI
JSON.parse(_CampaignFactory2.default.interface),

// second argument is the address
"0x5a3F507b01c3604B56f08472bF4fC520dCEfcc53"); // get the instance we just created

// import the compiled contract (ABI) placed within the build directory
exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2ZhY3RvcnkuanMiXSwibmFtZXMiOlsid2ViMyIsIkNhbXBhaWduRmFjdG9yeSIsImluc3RhbmNlIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLEFBQWlCLEEsQUFBakIsQUFBTzs7OztBQUdQLEFBQU8sQUFBcUI7Ozs7OztBQUU1QjtBQU5BO0FBT0EsSUFBTSxXQUFXLElBQUksY0FBQSxBQUFLLElBQVQsQUFBYTtBQUM1QjtBQUNBLEtBQUEsQUFBSyxNQUFNLDBCQUZJLEFBRWYsQUFBMkI7O0FBRTNCO0FBSkYsQUFBaUIsQUFLZixBQUdGLCtDQWQyQjs7QUFFM0I7a0JBWUEsQUFBZSIsImZpbGUiOiJmYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9icm93bmZpc2gvZ2l0aHViL1NvbGlkaXR5QmFzaWNzL2tpY2tzdGFydCJ9
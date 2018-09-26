"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("./web3");

var _web2 = _interopRequireDefault(_web);

var _Campaign = require("./build/Campaign.json");

var _Campaign2 = _interopRequireDefault(_Campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
  // create an instance of the campaign
  return new _web2.default.eth.Contract(JSON.parse(_Campaign2.default.interface), address // address that gets passed into this function
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2NhbXBhaWduLmpzIl0sIm5hbWVzIjpbIndlYjMiLCJDYW1wYWlnbiIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIiwiYWRkcmVzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBYyxBQUVyQjs7Ozs7O2tCQUFlLG1CQUFXLEFBQ3hCO0FBQ0E7YUFBVyxjQUFBLEFBQUssSUFBVCxBQUFhLFNBQ2xCLEtBQUEsQUFBSyxNQUFNLG1CQUROLEFBQ0wsQUFBb0IsWUFEZixBQUVMLFFBRkYsQUFBTyxBQUVHLEFBRVg7QUFKUTtBQUZUIiwiZmlsZSI6ImNhbXBhaWduLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9icm93bmZpc2gvZ2l0aHViL1NvbGlkaXR5QmFzaWNzL2tpY2tzdGFydCJ9
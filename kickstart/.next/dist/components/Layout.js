"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/brownfish/github/SolidityBasics/kickstart/components/Layout.js";
/**

This will house all reusable components

How will this component be used?
1. Place the whole list component within the layout
  -- Campaign List should be a 'child' of Layout

**/

// Boilerplate (default) component stuff

exports.default = function (props) {
  // place props or (props) to reference props.children
  return (
    // a little bit of JSX for quick demo
    _react2.default.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      }
    }, _react2.default.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      }
    }, "Im a header"), props.children, _react2.default.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      }
    }, "Im a footer"))
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwicHJvcHMiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBV0EsQUFBTyxBQUVQOzs7Ozs7O0FBYkE7Ozs7Ozs7Ozs7QUFVQTs7a0JBR2UsaUJBQVMsQUFDdEI7QUFDQTtBQUNFO0FBQ0E7b0JBQUEsY0FBQTs7a0JBQUE7b0JBQUEsQUFDRTtBQURGO0FBQUEsdUJBQ0UsY0FBQTs7a0JBQUE7b0JBQUE7QUFBQTtBQUFBLE9BREYsQUFDRSxBQUNDLHNCQUZILEFBRVMsQUFDUCwwQkFBQSxjQUFBOztrQkFBQTtvQkFBQTtBQUFBO0FBQUEsT0FMSixBQUVFLEFBR0UsQUFHTDs7QUFWRCIsImZpbGUiOiJMYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2Jyb3duZmlzaC9naXRodWIvU29saWRpdHlCYXNpY3Mva2lja3N0YXJ0In0=
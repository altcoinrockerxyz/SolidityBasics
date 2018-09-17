"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _Header = require("./Header");

var _Header2 = _interopRequireDefault(_Header);

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
    _react2.default.createElement(_semanticUiReact.Container, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    }, _react2.default.createElement(_Header2.default, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      }
    }), props.children)
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29udGFpbmVyIiwiSGVhZGVyIiwicHJvcHMiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBV0EsQUFBTzs7OztBQUNQLEFBQVM7O0FBQ1QsQUFBTyxBQUFZLEFBRW5COzs7Ozs7O0FBZkE7Ozs7Ozs7Ozs7QUFVQTs7a0JBS2UsaUJBQVMsQUFDdEI7QUFDQTtBQUNFO0FBQ0E7b0JBQUEsQUFBQzs7a0JBQUQ7b0JBQUEsQUFDRTtBQURGO0FBQUEsdUJBQ0UsQUFBQzs7a0JBQUQ7b0JBREYsQUFDRSxBQUNDO0FBREQ7QUFBQSxjQUhKLEFBRUUsQUFFUyxBQUdaOztBQVREIiwiZmlsZSI6IkxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYnJvd25maXNoL2dpdGh1Yi9Tb2xpZGl0eUJhc2ljcy9raWNrc3RhcnQifQ==
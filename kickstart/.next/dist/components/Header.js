"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _routes = require("../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/brownfish/github/SolidityBasics/kickstart/components/Header.js";
// import the link helper from the routes file inside the root project directory

// whenever we are using a JSX and want to pass in an object literal,
// we have to place two (2) sets of curly braces
// The first set is a declaration that we are about to write a JavaScript expression
// Second set is the actual object literal

// delete Menu.Item and replace with Link tags because
// styling of the two conflict with each other
exports.default = function () {
  return _react2.default.createElement(_semanticUiReact.Menu, { style: { marginTop: "10px" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement(_routes.Link, { route: "/", __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement("a", { className: "item", __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, "CrowdCoin")), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: "right", __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, _react2.default.createElement(_routes.Link, { route: "/", __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, _react2.default.createElement("a", { className: "item", __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "Campaigns")), _react2.default.createElement(_routes.Link, { route: "/campaigns/new", __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, _react2.default.createElement("a", { className: "item", __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, "+"))));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTWVudSIsIkxpbmsiLCJtYXJnaW5Ub3AiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTOztBQUVULEFBQVMsQUFBWTs7Ozs7QUFEckI7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxBQUNBO2tCQUFlLFlBQU0sQUFDbkI7eUJBQ0UsQUFBQyx1Q0FBSyxPQUFPLEVBQUUsV0FBZixBQUFhLEFBQWE7Z0JBQTFCO2tCQUFBLEFBQ0U7QUFERjtHQUFBLGtCQUNFLEFBQUMsOEJBQUssT0FBTixBQUFZO2dCQUFaO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLE9BQUcsV0FBSCxBQUFhO2dCQUFiO2tCQUFBO0FBQUE7S0FGSixBQUNFLEFBQ0UsQUFFRiwrQkFBQyxjQUFELHNCQUFBLEFBQU0sUUFBSyxVQUFYLEFBQW9CO2dCQUFwQjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsQUFBQyw4QkFBSyxPQUFOLEFBQVk7Z0JBQVo7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsT0FBRyxXQUFILEFBQWE7Z0JBQWI7a0JBQUE7QUFBQTtLQUZKLEFBQ0UsQUFDRSxBQUVGLCtCQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZO2dCQUFaO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLE9BQUcsV0FBSCxBQUFhO2dCQUFiO2tCQUFBO0FBQUE7S0FWUixBQUNFLEFBSUUsQUFJRSxBQUNFLEFBS1Q7QUFoQkQiLCJmaWxlIjoiSGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9icm93bmZpc2gvZ2l0aHViL1NvbGlkaXR5QmFzaWNzL2tpY2tzdGFydCJ9
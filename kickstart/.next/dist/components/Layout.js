"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _head = require("next/dist/lib/head.js");

var _head2 = _interopRequireDefault(_head);

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
    // move the link tag into the head tag by adding a helper via import
    // placing any other tags inside the <Head> component,
    // everything will automatically be moved up to the head tag of the page's html
    _react2.default.createElement(_semanticUiReact.Container, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      }
    }, _react2.default.createElement(_head2.default, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      }
    }, _react2.default.createElement("link", {
      rel: "stylesheet",
      href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      }
    })), _react2.default.createElement(_Header2.default, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      }
    }), props.children)
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29udGFpbmVyIiwiSGVhZCIsIkhlYWRlciIsInByb3BzIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQVdBLEFBQU87Ozs7QUFDUCxBQUFTOztBQUNULEFBQU87Ozs7QUFDUCxBQUFPLEFBQVksQUFFbkI7Ozs7Ozs7QUFoQkE7Ozs7Ozs7Ozs7QUFVQTs7a0JBTWUsaUJBQVMsQUFDdEI7QUFDQTtBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7b0JBQUEsQUFBQzs7a0JBQUQ7b0JBQUEsQUFDRTtBQURGO0FBQUEsdUJBQ0UsQUFBQzs7a0JBQUQ7b0JBQUEsQUFDRTtBQURGO0FBQUE7V0FDRSxBQUNNLEFBQ0o7WUFGRixBQUVPOztrQkFGUDtvQkFGSixBQUNFLEFBQ0UsQUFLRjtBQUxFO0FBQ0UseUJBSUosQUFBQzs7a0JBQUQ7b0JBUEYsQUFPRSxBQUNDO0FBREQ7QUFBQSxjQVpKLEFBS0UsQUFRUyxBQUdaOztBQWxCRCIsImZpbGUiOiJMYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2Jyb3duZmlzaC9naXRodWIvU29saWRpdHlCYXNpY3Mva2lja3N0YXJ0In0=
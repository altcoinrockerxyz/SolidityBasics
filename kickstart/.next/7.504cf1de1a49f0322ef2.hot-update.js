webpackHotUpdate(7,{

/***/ 1182:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(70);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _Layout = __webpack_require__(1159);

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = __webpack_require__(482);

var _routes = __webpack_require__(726);

var _campaign = __webpack_require__(1176);

var _campaign2 = _interopRequireDefault(_campaign);

var _RequestRow = __webpack_require__(1185);

var _RequestRow2 = _interopRequireDefault(_RequestRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/brownfish/github/SolidityBasics/kickstart/pages/campaigns/requests/index.js?entry"; // Lecture 195
// Lecture 195, 203
// Link helper via Lecture 195


// List Requests

var RequestIndex = function (_Component) {
  (0, _inherits3.default)(RequestIndex, _Component);

  function RequestIndex() {
    (0, _classCallCheck3.default)(this, RequestIndex);

    return (0, _possibleConstructorReturn3.default)(this, (RequestIndex.__proto__ || (0, _getPrototypeOf2.default)(RequestIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(RequestIndex, [{
    key: "renderRows",

    // L204: create a helper method to iterate over our list of requests, and for each, return a request row.
    value: function renderRows() {
      var _this2 = this;

      return this.props.requests.map(function (request, index) {
        return _react2.default.createElement(_RequestRow2.default, {
          key: index // NOTE: part of React, pass a key whenever we are rendering a list of components
          , request: request,
          address: _this2.props.address,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        }); // return one new requestRow with a couple of properties (props)
      });
    }
  }, {
    key: "render",
    value: function render() {
      // L203: use ES2015 destructuring to shorten the process of creating table tags
      var Header = _semanticUiReact.Table.Header,
          Row = _semanticUiReact.Table.Row,
          HeaderCell = _semanticUiReact.Table.HeaderCell,
          Body = _semanticUiReact.Table.Body;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, "Requests List"), _react2.default.createElement(_routes.Link, { route: "/campaigns/" + this.props.address + "/requests/new", __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, "Add Requests"))), _react2.default.createElement(_semanticUiReact.Table, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement(Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, "ID"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, "Description"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, "Amount"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, "Recipient"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, "Approval Count"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, "Approve"), _react2.default.createElement(HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, "Finalize"))), _react2.default.createElement(Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, this.renderRows())));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var address, campaign, requestCount, requests;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                address = props.query.address;

                // Lecture 201: Get hold of campaign contract, then total number of requests then loop
                // Step 1: Import from our eth campaign js

                campaign = (0, _campaign2.default)(address);

                // Step 2: Issue a call to getRequestsCount

                _context.next = 4;
                return campaign.methods.getRequestsCount().call();

              case 4:
                requestCount = _context.sent;
                _context.next = 7;
                return _promise2.default.all(Array(parseInt(requestCount)) // L202 parseInt is needed to convert String to Number
                .fill().map(function (element, index) {
                  return campaign.methods.requests(index).call();
                }));

              case 7:
                requests = _context.sent;

                console.log(requests);

                return _context.abrupt("return", { address: address, requests: requests, requestCount: requestCount });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return RequestIndex;
}(_react.Component);

exports.default = RequestIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkJ1dHRvbiIsIlRhYmxlIiwiTGluayIsIkNhbXBhaWduIiwiUmVxdWVzdFJvdyIsIlJlcXVlc3RJbmRleCIsInByb3BzIiwicmVxdWVzdHMiLCJtYXAiLCJyZXF1ZXN0IiwiaW5kZXgiLCJhZGRyZXNzIiwiSGVhZGVyIiwiUm93IiwiSGVhZGVyQ2VsbCIsIkJvZHkiLCJyZW5kZXJSb3dzIiwicXVlcnkiLCJjYW1wYWlnbiIsIm1ldGhvZHMiLCJnZXRSZXF1ZXN0c0NvdW50IiwiY2FsbCIsInJlcXVlc3RDb3VudCIsImFsbCIsIkFycmF5IiwicGFyc2VJbnQiLCJmaWxsIiwiZWxlbWVudCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEEsQUFBQSxBQUFPLEFBQVk7Ozs7QUFDbkIsQSxBQUFBLEFBQVMsQUFBUTs7QUFDakIsQUFBcUIsQSxBQUFyQixBQUFTOztBQUNULEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQWdCOzs7Ozs7K0dBSjBCO0FBQ0U7QUFDWDs7O0FBSXhDOztJLEFBQ007Ozs7Ozs7Ozs7U0ErQko7OztpQ0FDYTttQkFDWDs7a0JBQU8sQUFBSyxNQUFMLEFBQVcsU0FBWCxBQUFvQixJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVU7K0JBRXJDLEFBQUM7ZUFBRCxBQUNPLE1BRFAsQUFDYztBQUFaLFlBQ0EsU0FGRixBQUVXLEFBQ1Q7bUJBQVMsT0FBQSxBQUFLLE1BSGhCLEFBR3NCOztzQkFIdEI7d0JBRitDLEFBQ2pELEFBQ0U7QUFBQTtTQUFBLEVBRitDLEFBQ2pELENBTUcsQUFDSjtBQVJELEFBQU8sQUFTUixPQVRROzs7OzZCQVVBLEFBQ1A7QUFETztVQUFBLEFBRUMsU0FGRCxBQUVtQyx1QkFGbkMsQUFFQztVQUZELEFBRVMsTUFGVCxBQUVtQyx1QkFGbkMsQUFFUztVQUZULEFBRWMsYUFGZCxBQUVtQyx1QkFGbkMsQUFFYztVQUZkLEFBRTBCLE9BRjFCLEFBRW1DLHVCQUZuQyxBQUUwQixBQUVqQzs7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0Esa0NBQUEsQUFBQyw4QkFBSyx1QkFBcUIsS0FBQSxBQUFLLE1BQTFCLEFBQWdDLFVBQXRDO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLHlDQUFPLFNBQVI7b0JBQUE7c0JBQUE7QUFBQTtTQUpOLEFBRUUsQUFDRSxBQUNFLEFBR0osbUNBQUEsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRDs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRDs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLHVCQUFDLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUZGLEFBRUUsQUFDQSxnQ0FBQyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FIRixBQUdFLEFBQ0EsMkJBQUMsY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBSkYsQUFJRSxBQUNBLDhCQUFDLGNBQUQ7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUxGLEFBS0UsQUFDQSxtQ0FBQyxjQUFEOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FORixBQU1FLEFBQ0EsNEJBQUMsY0FBRDs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBVE4sQUFDRSxBQUNFLEFBT0UsQUFHSiwrQkFBQyxjQUFEOztvQkFBQTtzQkFBQSxBQUFPO0FBQVA7QUFBQSxjQXBCTixBQUNFLEFBT0UsQUFZRSxBQUFPLEFBQUssQUFJbkI7Ozs7OzJHLEFBdEU0Qjs7Ozs7bUJBQ25CO0EsMEJBQVksTUFBTSxBLE1BQWxCLEEsQUFFUjs7QUFDQTtBQUNNOztBLDJCQUFXLHdCQUFBLEFBQVMsQSxBQUUxQjs7Ozs7dUJBQzJCLFNBQUEsQUFBUyxRQUFULEFBQWlCLG1CQUFqQixBQUFvQyxBOzttQkFBekQ7QTs7eUNBU2lCLEFBQVEsVUFDdkIsU0FBTixBQUFNLEFBQVMsZUFBZixBQUE4QjtBQUE5QixpQkFBQSxBQUNHLE9BREgsQUFFRyxJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBVSxBQUN2Qjt5QkFBTyxTQUFBLEFBQVMsUUFBVCxBQUFpQixTQUFqQixBQUEwQixPQUFqQyxBQUFPLEFBQWlDLEFBQ3pDO0FBTGtCLEFBQ3JCLEEsa0JBRHFCOzttQkFBakI7QSxvQ0FRTjs7d0JBQUEsQUFBUSxJQUFSLEFBQVk7O2lEQUVMLEVBQUUsU0FBRixTQUFXLFVBQVgsVUFBcUIsY0FBckIsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTVCZ0IsQSxBQTBFM0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2Jyb3duZmlzaC9naXRodWIvU29saWRpdHlCYXNpY3Mva2lja3N0YXJ0In0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/brownfish/github/SolidityBasics/kickstart/pages/campaigns/requests/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/brownfish/github/SolidityBasics/kickstart/pages/campaigns/requests/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns/requests")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy41MDRjZjFkZTFhNDlmMDMyMmVmMi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzP2I2YjgxNDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjsgLy8gTGVjdHVyZSAxOTVcbmltcG9ydCB7IEJ1dHRvbiwgVGFibGUgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjsgLy8gTGVjdHVyZSAxOTUsIDIwM1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCIuLi8uLi8uLi9yb3V0ZXNcIjsgLy8gTGluayBoZWxwZXIgdmlhIExlY3R1cmUgMTk1XG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSBcIi4uLy4uLy4uL2V0aGVyZXVtL2NhbXBhaWduXCI7XG5pbXBvcnQgUmVxdWVzdFJvdyBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9SZXF1ZXN0Um93XCI7XG5cbi8vIExpc3QgUmVxdWVzdHNcbmNsYXNzIFJlcXVlc3RJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpIHtcbiAgICBjb25zdCB7IGFkZHJlc3MgfSA9IHByb3BzLnF1ZXJ5O1xuXG4gICAgLy8gTGVjdHVyZSAyMDE6IEdldCBob2xkIG9mIGNhbXBhaWduIGNvbnRyYWN0LCB0aGVuIHRvdGFsIG51bWJlciBvZiByZXF1ZXN0cyB0aGVuIGxvb3BcbiAgICAvLyBTdGVwIDE6IEltcG9ydCBmcm9tIG91ciBldGggY2FtcGFpZ24ganNcbiAgICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKGFkZHJlc3MpO1xuXG4gICAgLy8gU3RlcCAyOiBJc3N1ZSBhIGNhbGwgdG8gZ2V0UmVxdWVzdHNDb3VudFxuICAgIGNvbnN0IHJlcXVlc3RDb3VudCA9IGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuZ2V0UmVxdWVzdHNDb3VudCgpLmNhbGwoKTtcblxuICAgIC8vIE5PVEU6IEwyMDI6IFBhc3NlZCB2YWx1ZSB0byByZXF1ZXN0Q291bnQgZW5kcyB1cCBhcyBhIFN0cmluZ1xuICAgIC8vIHNvIGl0IG5lZWRzIGEgcGFyc2VJbnQoKSB0byB3b3JrXG5cbiAgICAvLyBTdGVwIDM6IFJhdGhlciB0aGFuIGxvb3BpbmcgdGhyb3VnaCBldmVyeSBpbmRpdmlkdWFsIHJlcXVlc3RcbiAgICAvLyBXZSB3aWxsIGlzc3VlIGFsbCB0aGUgY2FsbHMgaW4gb25lIGdvIGFuZCB3YWl0IGZvciB0aGVtIGFsbCB0byBiZSByZXNvbHZlZFxuICAgIC8vIEJ5IHVzaW5nIFByb21pc2UuYWxsIGhlbHBlciAoUmVxdWlyZXMgc29tZSBmYW5jeSBKUylcblxuICAgIGNvbnN0IHJlcXVlc3RzID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICBBcnJheShwYXJzZUludChyZXF1ZXN0Q291bnQpKSAvLyBMMjAyIHBhcnNlSW50IGlzIG5lZWRlZCB0byBjb252ZXJ0IFN0cmluZyB0byBOdW1iZXJcbiAgICAgICAgLmZpbGwoKVxuICAgICAgICAubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiBjYW1wYWlnbi5tZXRob2RzLnJlcXVlc3RzKGluZGV4KS5jYWxsKCk7XG4gICAgICAgIH0pXG4gICAgKTtcblxuICAgIGNvbnNvbGUubG9nKHJlcXVlc3RzKTtcblxuICAgIHJldHVybiB7IGFkZHJlc3MsIHJlcXVlc3RzLCByZXF1ZXN0Q291bnQgfTsgLy8gRVMyMDE1IHN5bnRheCBmb3IgYWRkcmVzczphZGRyZXNzXG4gIH1cblxuICAvLyBMMjA0OiBjcmVhdGUgYSBoZWxwZXIgbWV0aG9kIHRvIGl0ZXJhdGUgb3ZlciBvdXIgbGlzdCBvZiByZXF1ZXN0cywgYW5kIGZvciBlYWNoLCByZXR1cm4gYSByZXF1ZXN0IHJvdy5cbiAgcmVuZGVyUm93cygpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5yZXF1ZXN0cy5tYXAoKHJlcXVlc3QsIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8UmVxdWVzdFJvd1xuICAgICAgICAgIGtleT17aW5kZXh9IC8vIE5PVEU6IHBhcnQgb2YgUmVhY3QsIHBhc3MgYSBrZXkgd2hlbmV2ZXIgd2UgYXJlIHJlbmRlcmluZyBhIGxpc3Qgb2YgY29tcG9uZW50c1xuICAgICAgICAgIHJlcXVlc3Q9e3JlcXVlc3R9XG4gICAgICAgICAgYWRkcmVzcz17dGhpcy5wcm9wcy5hZGRyZXNzfVxuICAgICAgICAvPlxuICAgICAgKTsgLy8gcmV0dXJuIG9uZSBuZXcgcmVxdWVzdFJvdyB3aXRoIGEgY291cGxlIG9mIHByb3BlcnRpZXMgKHByb3BzKVxuICAgIH0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICAvLyBMMjAzOiB1c2UgRVMyMDE1IGRlc3RydWN0dXJpbmcgdG8gc2hvcnRlbiB0aGUgcHJvY2VzcyBvZiBjcmVhdGluZyB0YWJsZSB0YWdzXG4gICAgY29uc3QgeyBIZWFkZXIsIFJvdywgSGVhZGVyQ2VsbCwgQm9keSB9ID0gVGFibGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPGgzPlJlcXVlc3RzIExpc3Q8L2gzPlxuICAgICAgICA8TGluayByb3V0ZT17YC9jYW1wYWlnbnMvJHt0aGlzLnByb3BzLmFkZHJlc3N9L3JlcXVlc3RzL25ld2B9PlxuICAgICAgICAgIDxhPlxuICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5PkFkZCBSZXF1ZXN0czwvQnV0dG9uPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8VGFibGU+XG4gICAgICAgICAgPEhlYWRlcj5cbiAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgIDxIZWFkZXJDZWxsPklEPC9IZWFkZXJDZWxsPlxuICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD5EZXNjcmlwdGlvbjwvSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgPEhlYWRlckNlbGw+QW1vdW50PC9IZWFkZXJDZWxsPlxuICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD5SZWNpcGllbnQ8L0hlYWRlckNlbGw+XG4gICAgICAgICAgICAgIDxIZWFkZXJDZWxsPkFwcHJvdmFsIENvdW50PC9IZWFkZXJDZWxsPlxuICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD5BcHByb3ZlPC9IZWFkZXJDZWxsPlxuICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD5GaW5hbGl6ZTwvSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgIDwvSGVhZGVyPlxuICAgICAgICAgIDxCb2R5Pnt0aGlzLnJlbmRlclJvd3MoKX08L0JvZHk+XG4gICAgICAgIDwvVGFibGU+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RJbmRleDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUdBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FBK0JBO0FBQ0E7O0FBQUE7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQUE7QUFFQTs7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQU9BOzs7O0FBRUE7QUFEQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBR0E7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFqRUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7OztBQUVBO0FBQ0E7QUFEQTs7O0FBU0E7QUFDQTtBQUdBO0FBSkE7QUFDQTtBQURBO0FBUUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
webpackHotUpdate(8,{

/***/ 1184:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

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

var _semanticUiReact = __webpack_require__(482);

var _campaign = __webpack_require__(1176);

var _campaign2 = _interopRequireDefault(_campaign);

var _web = __webpack_require__(992);

var _web2 = _interopRequireDefault(_web);

var _routes = __webpack_require__(726);

var _Layout = __webpack_require__(1159);

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/brownfish/github/SolidityBasics/kickstart/pages/campaigns/requests/new.js?entry"; // Lecture 195
// Lecture 196
// L196
// L196
// L196


// Add Request form

var RequestNew = function (_Component) {
  (0, _inherits3.default)(RequestNew, _Component);

  function RequestNew() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RequestNew);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestNew.__proto__ || (0, _getPrototypeOf2.default)(RequestNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: "",
      description: "",
      recipient: "",
      loading: false,
      errorMessage: ""
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var campaign, _this$state, description, value, recipient, accounts;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                // 1. Get a reference to our campaign instacne by using our address
                campaign = (0, _campaign2.default)(_this.props.address);
                _this$state = _this.state, description = _this$state.description, value = _this$state.value, recipient = _this$state.recipient;

                _this.setState({ loading: true, errorMessage: "" }); // Lecture 198
                // 2. Setup a Try-Catch
                _context.prev = 4;
                _context.next = 7;
                return _web2.default.eth.getAccounts();

              case 7:
                accounts = _context.sent;
                _context.next = 10;
                return campaign.methods.createRequest(description, _web2.default.utils.toWei(value, "ether"), recipient).send({ from: accounts[0] });

              case 10:

                // L198: send back to list of requests
                _routes.Router.pushRoute("/campaigns/" + _this.props.address + "/requests");
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](4);

                _this.setState({ errorMessage: _context.t0.message.split("\n")[0] }); // L198

              case 16:

                _this.setState({ loading: false });
              // 3. Call a function on the campaign

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2, [[4, 13]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }
  // initialize our state objects


  (0, _createClass3.default)(RequestNew, [{
    key: "render",

    // three separate form fields
    // define onSubmit handler
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement(_routes.Link, { route: "/campaigns/" + this.props.address + "/requests", __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, "Back")), _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, "Create a Request"), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, "Description"), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.description,
        onChange: function onChange(event) {
          return _this3.setState({ description: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, "Value in Ether"), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.value,
        onChange: function onChange(event) {
          return _this3.setState({ value: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, "Recipient"), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.recipient,
        onChange: function onChange(event) {
          return _this3.setState({ recipient: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: "Oops!", content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, "Create!")));
    }
  }], [{
    key: "getInitialProps",

    // get access to the address the user is currently looking at inside the URL
    // by defining getInitialProps
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
        var address;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                address = props.query.address;
                return _context2.abrupt("return", { address: address });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps(_x2) {
        return _ref3.apply(this, arguments);
      }

      return getInitialProps;
    }()

    // Lecture 197: Wire Up onSubmit function to the corresponding form via render()

  }]);

  return RequestNew;
}(_react.Component);

exports.default = RequestNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiQnV0dG9uIiwiTWVzc2FnZSIsIklucHV0IiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiTGluayIsIlJvdXRlciIsIkxheW91dCIsIlJlcXVlc3ROZXciLCJzdGF0ZSIsInZhbHVlIiwiZGVzY3JpcHRpb24iLCJyZWNpcGllbnQiLCJsb2FkaW5nIiwiZXJyb3JNZXNzYWdlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY2FtcGFpZ24iLCJwcm9wcyIsImFkZHJlc3MiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY3JlYXRlUmVxdWVzdCIsInV0aWxzIiwidG9XZWkiLCJzZW5kIiwiZnJvbSIsInB1c2hSb3V0ZSIsIm1lc3NhZ2UiLCJzcGxpdCIsInRhcmdldCIsInF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQSxBQUFPLEFBQVM7Ozs7QSxBQUNoQixBQUFTLEFBQU0sQUFBUSxBQUFTOztBQUNoQyxBLEFBQU8sQUFBYzs7OztBQUNyQixBLEFBQUEsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBTSxBLEFBQWYsQUFBNkI7O0FBQzdCLEFBQU8sQUFBWTs7Ozs7OzZHQUx1QjtBQUN3QjtBQUNmO0FBQ1I7QUFDSzs7O0FBR2hEOztJQUNNLEE7Ozs7Ozs7Ozs7Ozs7OztvTkFFSixBO2FBQVEsQUFDQyxBQUNQO21CQUZNLEFBRU8sQUFDYjtpQkFITSxBQUdLLEFBQ1g7ZUFKTSxBQUlHLEFBQ1Q7b0JBQWMsQSxBQUxSO0FBQUEsQUFDTixhLEFBZ0JGOzJGQUFXLGlCQUFBLEFBQU0sT0FBTjtrRUFBQTs7c0VBQUE7b0JBQUE7NkNBQUE7bUJBQ1Q7c0JBQUEsQUFBTSxBQUVOOztBQUNNO0FBSkcsMkJBSVEsd0JBQVMs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QjtBQUg1Qzs7b0JBQUE7c0JBbkJKLEFBaUJFLEFBRUUsQUFRRjtBQVJFO0FBQ0UsMkJBT0osQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUFzQixTQUFRLFNBQVMsS0FBQSxBQUFLLE1BQTVDLEFBQWtEO29CQUFsRDtzQkEzQkYsQUEyQkUsQUFDQTtBQURBOzBCQUNBLEFBQUMseUNBQU8sU0FBUixNQUFnQixTQUFTLEtBQUEsQUFBSyxNQUE5QixBQUFvQztvQkFBcEM7c0JBQUE7QUFBQTtTQWxDTixBQUNFLEFBS0UsQUE0QkUsQUFNUDs7O1NBL0VEOztBQUNBOzs7NkdBQzZCLEE7Ozs7O21CQUNuQjtBLDBCQUFZLE0sQUFBTSxNQUFsQixBO2tEQUVELEVBQUUsUyxBQUFGOzs7Ozs7Ozs7Ozs7Ozs7QUFHVDs7Ozs7OztBQWxCdUIsQSxBQTRGekI7O2tCQUFBLEFBQWUiLCJmaWxlIjoibmV3LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9icm93bmZpc2gvZ2l0aHViL1NvbGlkaXR5QmFzaWNzL2tpY2tzdGFydCJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/brownfish/github/SolidityBasics/kickstart/pages/campaigns/requests/new.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/brownfish/github/SolidityBasics/kickstart/pages/campaigns/requests/new.js"); } } })();
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns/requests/new")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5hMGIwMDFjNDBjNzk2YTYwMGQyMy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzL25ldy5qcz8yOTJmZTIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjsgLy8gTGVjdHVyZSAxOTVcbmltcG9ydCB7IEZvcm0sIEJ1dHRvbiwgTWVzc2FnZSwgSW5wdXQgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjsgLy8gTGVjdHVyZSAxOTZcbmltcG9ydCBDYW1wYWlnbiBmcm9tIFwiLi4vLi4vLi4vZXRoZXJldW0vY2FtcGFpZ25cIjsgLy8gTDE5NlxuaW1wb3J0IHdlYjMgZnJvbSBcIi4uLy4uLy4uL2V0aGVyZXVtL3dlYjNcIjsgLy8gTDE5NlxuaW1wb3J0IHsgTGluaywgUm91dGVyIH0gZnJvbSBcIi4uLy4uLy4uL3JvdXRlc1wiOyAvLyBMMTk2XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuXG4vLyBBZGQgUmVxdWVzdCBmb3JtXG5jbGFzcyBSZXF1ZXN0TmV3IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgLy8gaW5pdGlhbGl6ZSBvdXIgc3RhdGUgb2JqZWN0c1xuICBzdGF0ZSA9IHtcbiAgICB2YWx1ZTogXCJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICByZWNpcGllbnQ6IFwiXCIsXG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgZXJyb3JNZXNzYWdlOiBcIlwiXG4gIH07XG5cbiAgLy8gZ2V0IGFjY2VzcyB0byB0aGUgYWRkcmVzcyB0aGUgdXNlciBpcyBjdXJyZW50bHkgbG9va2luZyBhdCBpbnNpZGUgdGhlIFVSTFxuICAvLyBieSBkZWZpbmluZyBnZXRJbml0aWFsUHJvcHNcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcykge1xuICAgIGNvbnN0IHsgYWRkcmVzcyB9ID0gcHJvcHMucXVlcnk7XG5cbiAgICByZXR1cm4geyBhZGRyZXNzIH07XG4gIH1cblxuICAvLyBMZWN0dXJlIDE5NzogV2lyZSBVcCBvblN1Ym1pdCBmdW5jdGlvbiB0byB0aGUgY29ycmVzcG9uZGluZyBmb3JtIHZpYSByZW5kZXIoKVxuICBvblN1Ym1pdCA9IGFzeW5jIGV2ZW50ID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgLy8gMS4gR2V0IGEgcmVmZXJlbmNlIHRvIG91ciBjYW1wYWlnbiBpbnN0YWNuZSBieSB1c2luZyBvdXIgYWRkcmVzc1xuICAgIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24odGhpcy5wcm9wcy5hZGRyZXNzKTtcbiAgICBjb25zdCB7IGRlc2NyaXB0aW9uLCB2YWx1ZSwgcmVjaXBpZW50IH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUsIGVycm9yTWVzc2FnZTogXCJcIiB9KTsgLy8gTGVjdHVyZSAxOThcbiAgICAvLyAyLiBTZXR1cCBhIFRyeS1DYXRjaFxuICAgIHRyeSB7XG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG5cbiAgICAgIC8vIG1ha2Ugc3VyZSB0aGUgcGFzc2VkIGluIHZhbHVlIGlzIGluIHdlaVxuICAgICAgYXdhaXQgY2FtcGFpZ24ubWV0aG9kc1xuICAgICAgICAuY3JlYXRlUmVxdWVzdChkZXNjcmlwdGlvbiwgd2ViMy51dGlscy50b1dlaSh2YWx1ZSwgXCJldGhlclwiKSwgcmVjaXBpZW50KVxuICAgICAgICAuc2VuZCh7IGZyb206IGFjY291bnRzWzBdIH0pO1xuXG4gICAgICAvLyBMMTk4OiBzZW5kIGJhY2sgdG8gbGlzdCBvZiByZXF1ZXN0c1xuICAgICAgUm91dGVyLnB1c2hSb3V0ZShgL2NhbXBhaWducy8ke3RoaXMucHJvcHMuYWRkcmVzc30vcmVxdWVzdHNgKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6IGVyci5tZXNzYWdlLnNwbGl0KFwiXFxuXCIpWzBdIH0pOyAvLyBMMTk4XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pO1xuICAgIC8vIDMuIENhbGwgYSBmdW5jdGlvbiBvbiB0aGUgY2FtcGFpZ25cbiAgfTtcblxuICAvLyB0aHJlZSBzZXBhcmF0ZSBmb3JtIGZpZWxkc1xuICAvLyBkZWZpbmUgb25TdWJtaXQgaGFuZGxlclxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxMaW5rIHJvdXRlPXtgL2NhbXBhaWducy8ke3RoaXMucHJvcHMuYWRkcmVzc30vcmVxdWVzdHNgfT5cbiAgICAgICAgICA8YT5CYWNrPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxoMz5DcmVhdGUgYSBSZXF1ZXN0PC9oMz5cbiAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9IGVycm9yPXshIXRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfT5cbiAgICAgICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgICAgIDxsYWJlbD5EZXNjcmlwdGlvbjwvbGFiZWw+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PlxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkZXNjcmlwdGlvbjogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgICAgPGxhYmVsPlZhbHVlIGluIEV0aGVyPC9sYWJlbD5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgICAgPEZvcm0uRmllbGQ+XG4gICAgICAgICAgICA8bGFiZWw+UmVjaXBpZW50PC9sYWJlbD5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5yZWNpcGllbnR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PlxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZWNpcGllbnQ6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRm9ybS5GaWVsZD5cblxuICAgICAgICAgIDxNZXNzYWdlIGVycm9yIGhlYWRlcj1cIk9vcHMhXCIgY29udGVudD17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9IC8+XG4gICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30+XG4gICAgICAgICAgICBDcmVhdGUhXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdE5ldztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9uZXcuanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0E7QUFDQTs7Ozs7QUFOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBSkE7QUFnQkE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFKQTtBQUtBO0FBQ0E7QUFDQTtBQVBBO0FBQUE7QUFBQTtBQVVBO0FBQ0E7QUFEQTtBQVZBO0FBQUE7QUFhQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFsQkE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQW9CQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQXZCQTtBQUNBO0FBREE7QUFBQTtBQUFBOztBQUFBO0FBQUE7Ozs7Ozs7QUFsQkE7Ozs7O0FBNkNBO0FBQ0E7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTs7QUFBQTtBQU9BO0FBUEE7QUFDQTs7QUFNQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUZBOztBQUFBO0FBS0E7QUFMQTtBQUNBOztBQUlBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSEE7O0FBQUE7QUFRQTtBQVJBO0FBQ0E7QUFPQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQU1BOzs7QUEvRUE7QUFDQTtBQUFBOzs7Ozs7OztBQUVBO0FBQUE7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7Ozs7Ozs7O0FBeUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
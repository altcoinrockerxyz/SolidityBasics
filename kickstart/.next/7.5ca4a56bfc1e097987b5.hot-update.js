webpackHotUpdate(7,{

/***/ 1182:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var _campaign = __webpack_require__(1180);

var _campaign2 = _interopRequireDefault(_campaign);

var _web = __webpack_require__(992);

var _web2 = _interopRequireDefault(_web);

var _routes = __webpack_require__(726);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/brownfish/github/SolidityBasics/kickstart/components/ContributeForm.js"; // boilerplate components


var ContributeForm = function (_Component) {
  (0, _inherits3.default)(ContributeForm, _Component);

  function ContributeForm() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ContributeForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContributeForm.__proto__ || (0, _getPrototypeOf2.default)(ContributeForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: ""
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var campaign, accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault(); // keep the form from attempting to submit itself

                // Lecture 189
                // all the same exact logic we did on the last form
                // loading spinner
                // take campaign contract and attempt to send money to it.

                // campaign is Campaign with passed in address
                campaign = (0, _campaign2.default)(_this.props.address);
                _context.prev = 2;
                _context.next = 5;
                return _web2.default.eth.getAccounts();

              case 5:
                accounts = _context.sent;
                _context.next = 8;
                return campaign.methods.contribute().send({
                  // call the contribute function
                  from: accounts[0],
                  value: _web2.default.utils.toWei(_this.state.value, "ether") // value will be entered in ether but we have to convert to wei
                });

              case 8:

                // Lecture 191: Refresh Pages, Use ES2015 template string (back ticks),
                // Pass in the URL of the current page we are looking at
                _routes.Router.replaceRoute("/campaigns/" + _this.props.address);
                _context.next = 13;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](2);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2, [[2, 11]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  // make the onSubmit function


  (0, _createClass3.default)(ContributeForm, [{
    key: "render",

    // no () at onSubmit within the Form tag, we dont wanna call it at render time
    // but a reference to the function so we can call it sometime in the future
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, "Amount to Contribute"), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.value,
        onChange: function onChange(event) {
          return _this3.setState({ value: event.target.value });
        },
        label: "ether",
        labelPosition: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      })), _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, "Contribute!"));
    }
  }]);

  return ContributeForm;
}(_react.Component);

exports.default = ContributeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ29udHJpYnV0ZUZvcm0uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwiQnV0dG9uIiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiUm91dGVyIiwiQ29udHJpYnV0ZUZvcm0iLCJzdGF0ZSIsInZhbHVlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY2FtcGFpZ24iLCJwcm9wcyIsImFkZHJlc3MiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNvbnRyaWJ1dGUiLCJzZW5kIiwiZnJvbSIsInV0aWxzIiwidG9XZWkiLCJyZXBsYWNlUm91dGUiLCJzZXRTdGF0ZSIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEEsQUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQU8sQUFBUzs7QUFDL0IsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQWM7Ozs7b0dBSm1COzs7SUFNcEMsQTs7Ozs7Ozs7Ozs7Ozs7OzROLEFBQ0o7YUFBUSxBQUNDLEE7QUFERCxBQUNOLGEsQUFJRjsyRkFBVyxpQkFBQSxBQUFNLE9BQU47c0JBQUE7c0VBQUE7b0JBQUE7NkNBQUE7bUJBQ1Q7c0JBRFMsQUFDVCxBQUFNLGtCQUFrQixBQUV4Qjs7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDTTtBQVRHLDJCQVNRLHdCQUFTLE1BQUEsQUFBSyxNQVR0QixBQVNRLEFBQW9CO2dDQVQ1QjtnQ0FBQTt1QkFZZ0IsY0FBQSxBQUFLLElBWnJCLEFBWWdCLEFBQVM7O21CQUExQjtBQVpDLG9DQUFBO2dDQUFBO2dDQWFELEFBQVMsUUFBVCxBQUFpQixhQUFqQixBQUE4QjtBQUVsQzt3QkFBTSxTQUZpQyxBQUVqQyxBQUFTLEFBQ2Y7eUJBQU8sY0FBQSxBQUFLLE1BQUwsQUFBVyxNQUFNLE1BQUEsQUFBSyxNQUF0QixBQUE0QixPQUhJLEFBR2hDLEFBQW1DLFNBaEJyQyxBQWFELEFBQW1DLEFBR1k7QUFIWixBQUN2QyxpQkFESTs7bUJBTU47O0FBQ0E7QUFDQTsrQkFBQSxBQUFPLDZCQUEyQixNQUFBLEFBQUssTUFyQmhDLEFBcUJQLEFBQTZDO2dDQXJCdEM7QUFBQTs7bUJBQUE7Z0NBQUE7Z0RBQUE7O21CQUFBO21CQUFBO2dDQUFBOztBQUFBO2lDQUFBO0E7Ozs7OztBQURYOzs7Ozs7U0EwQkE7O0FBQ0E7OzZCQUNTO21CQUNQOzs2QkFDRSxBQUFDLHVDQUFLLFVBQVUsS0FBaEIsQUFBcUI7b0JBQXJCO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNHLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLHlDQUFBLEFBQUM7ZUFDUSxLQUFBLEFBQUssTUFEZCxBQUNvQixBQUNsQjtrQkFBVSx5QkFBQTtpQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFFLE9BQU8sTUFBQSxBQUFNLE9BQXRDLEFBQVMsQUFBYyxBQUFzQjtBQUZ6RCxBQUdFO2VBSEYsQUFHUSxBQUNOO3VCQUpGLEFBSWdCOztvQkFKaEI7c0JBSEosQUFDRSxBQUVFLEFBT0Y7QUFQRTtBQUNFLDJCQU1KLEFBQUMseUNBQU8sU0FBUjtvQkFBQTtzQkFBQTtBQUFBO1NBWEosQUFDRSxBQVVFLEFBR0w7Ozs7O0FBaEQwQixBLEFBbUQ3Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJDb250cmlidXRlRm9ybS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYnJvd25maXNoL2dpdGh1Yi9Tb2xpZGl0eUJhc2ljcy9raWNrc3RhcnQifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/brownfish/github/SolidityBasics/kickstart/components/ContributeForm.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/brownfish/github/SolidityBasics/kickstart/components/ContributeForm.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy41Y2E0YTU2YmZjMWUwOTc5ODdiNS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db250cmlidXRlRm9ybS5qcz81ZDY4NzUzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjsgLy8gYm9pbGVycGxhdGUgY29tcG9uZW50c1xuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIE1lc3NhZ2UsIEJ1dHRvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IENhbXBhaWduIGZyb20gXCIuLi9ldGhlcmV1bS9jYW1wYWlnblwiO1xuaW1wb3J0IHdlYjMgZnJvbSBcIi4uL2V0aGVyZXVtL3dlYjNcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCIuLi9yb3V0ZXNcIjtcblxuY2xhc3MgQ29udHJpYnV0ZUZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICB2YWx1ZTogXCJcIlxuICB9O1xuXG4gIC8vIG1ha2UgdGhlIG9uU3VibWl0IGZ1bmN0aW9uXG4gIG9uU3VibWl0ID0gYXN5bmMgZXZlbnQgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIGtlZXAgdGhlIGZvcm0gZnJvbSBhdHRlbXB0aW5nIHRvIHN1Ym1pdCBpdHNlbGZcblxuICAgIC8vIExlY3R1cmUgMTg5XG4gICAgLy8gYWxsIHRoZSBzYW1lIGV4YWN0IGxvZ2ljIHdlIGRpZCBvbiB0aGUgbGFzdCBmb3JtXG4gICAgLy8gbG9hZGluZyBzcGlubmVyXG4gICAgLy8gdGFrZSBjYW1wYWlnbiBjb250cmFjdCBhbmQgYXR0ZW1wdCB0byBzZW5kIG1vbmV5IHRvIGl0LlxuXG4gICAgLy8gY2FtcGFpZ24gaXMgQ2FtcGFpZ24gd2l0aCBwYXNzZWQgaW4gYWRkcmVzc1xuICAgIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24odGhpcy5wcm9wcy5hZGRyZXNzKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7IC8vIHBsYWNlIGFzeW5jIGF0IGV2ZW50IG9uIG9uU3VibWl0XG4gICAgICBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmNvbnRyaWJ1dGUoKS5zZW5kKHtcbiAgICAgICAgLy8gY2FsbCB0aGUgY29udHJpYnV0ZSBmdW5jdGlvblxuICAgICAgICBmcm9tOiBhY2NvdW50c1swXSxcbiAgICAgICAgdmFsdWU6IHdlYjMudXRpbHMudG9XZWkodGhpcy5zdGF0ZS52YWx1ZSwgXCJldGhlclwiKSAvLyB2YWx1ZSB3aWxsIGJlIGVudGVyZWQgaW4gZXRoZXIgYnV0IHdlIGhhdmUgdG8gY29udmVydCB0byB3ZWlcbiAgICAgIH0pO1xuXG4gICAgICAvLyBMZWN0dXJlIDE5MTogUmVmcmVzaCBQYWdlcywgVXNlIEVTMjAxNSB0ZW1wbGF0ZSBzdHJpbmcgKGJhY2sgdGlja3MpLFxuICAgICAgLy8gUGFzcyBpbiB0aGUgVVJMIG9mIHRoZSBjdXJyZW50IHBhZ2Ugd2UgYXJlIGxvb2tpbmcgYXRcbiAgICAgIFJvdXRlci5yZXBsYWNlUm91dGUoYC9jYW1wYWlnbnMvJHt0aGlzLnByb3BzLmFkZHJlc3N9YCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7fVxuICB9O1xuXG4gIC8vIG5vICgpIGF0IG9uU3VibWl0IHdpdGhpbiB0aGUgRm9ybSB0YWcsIHdlIGRvbnQgd2FubmEgY2FsbCBpdCBhdCByZW5kZXIgdGltZVxuICAvLyBidXQgYSByZWZlcmVuY2UgdG8gdGhlIGZ1bmN0aW9uIHNvIHdlIGNhbiBjYWxsIGl0IHNvbWV0aW1lIGluIHRoZSBmdXR1cmVcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0+XG4gICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgIDxsYWJlbD5BbW91bnQgdG8gQ29udHJpYnV0ZTwvbGFiZWw+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgIGxhYmVsPVwiZXRoZXJcIlxuICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgIDxCdXR0b24gcHJpbWFyeT5Db250cmlidXRlITwvQnV0dG9uPlxuICAgICAgPC9Gb3JtPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udHJpYnV0ZUZvcm07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0NvbnRyaWJ1dGVGb3JtLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFMQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1BO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQVRBO0FBQUE7QUFBQTtBQVlBO0FBQ0E7QUFEQTtBQVpBO0FBQUE7QUFhQTtBQUVBO0FBQUE7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBckJBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBOztBQUFBO0FBQUE7Ozs7Ozs7QUFEQTtBQUNBOzs7OztBQXlCQTtBQUNBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTs7QUFKQTtBQU9BO0FBUEE7QUFDQTtBQU1BO0FBQUE7QUFBQTtBQUdBOzs7Ozs7O0FBR0E7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
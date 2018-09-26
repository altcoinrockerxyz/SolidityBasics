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
      value: "",
      // Lecture 192: Add two additional values
      errorMessage: "",
      loading: false
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

                _this.setState({ loading: true, errorMessage: "" }); // Lecture 192

                _context.prev = 3;
                _context.next = 6;
                return _web2.default.eth.getAccounts();

              case 6:
                accounts = _context.sent;
                _context.next = 9;
                return campaign.methods.contribute().send({
                  // call the contribute function
                  from: accounts[0],
                  value: _web2.default.utils.toWei(_this.state.value, "ether") // value will be entered in ether but we have to convert to wei
                });

              case 9:

                // Lecture 191: Refresh Pages, Use ES2015 template string (back ticks),
                // Pass in the URL of the current page we are looking at
                _routes.Router.replaceRoute("/campaigns/" + _this.props.address);
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](3);

                _this.setState({ errorMessage: _context.t0.message.split("\n")[0] });

              case 15:

                // after everything occurs, turn our loading flag off no matter what
                // reset the value of the contribution amount at the same time
                _this.setState({ loading: false, value: "" });

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2, [[3, 12]]);
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
    // Lecture 192: pass in the loading flag, for error message, we
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
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
          lineNumber: 57
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: "Ooops!", content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, "Contribute!"));
    }
  }]);

  return ContributeForm;
}(_react.Component);

exports.default = ContributeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ29udHJpYnV0ZUZvcm0uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwiQnV0dG9uIiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiUm91dGVyIiwiQ29udHJpYnV0ZUZvcm0iLCJzdGF0ZSIsInZhbHVlIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNvbnRyaWJ1dGUiLCJzZW5kIiwiZnJvbSIsInV0aWxzIiwidG9XZWkiLCJyZXBsYWNlUm91dGUiLCJtZXNzYWdlIiwic3BsaXQiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBLEFBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTSxBQUFPLEFBQVM7O0FBQy9CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFjOzs7O29HQUptQjs7O0ksQUFNcEM7Ozs7Ozs7Ozs7Ozs7Ozs0TkFDSixBO2FBQVEsQUFDQyxBQUNQO0FBQ0E7b0JBSE0sQUFHUSxBQUNkO2VBSk0sQSxBQUlHO0FBSkgsQUFDTixhQU9GLEE7MkZBQVcsaUJBQUEsQUFBTSxPQUFOO3NCQUFBO3NFQUFBO29CQUFBOzZDQUFBO21CQUNUO3NCQURTLEFBQ1QsQUFBTSxrQkFBa0IsQUFFeEI7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ007QUFURywyQkFTUSx3QkFBUyxNQUFBLEFBQUssTUFUdEIsQUFTUSxBQUFvQixBQUVyQzs7c0JBQUEsQUFBSyxTQUFTLEVBQUUsU0FBRixBQUFXLE1BQU0sY0FYdEIsQUFXVCxBQUFjLEFBQStCLE9BWHBDLEFBVzJDOztnQ0FYM0M7Z0NBQUE7dUJBY2dCLGNBQUEsQUFBSyxJQWRyQixBQWNnQixBQUFTOzttQkFBMUI7QUFkQyxvQ0FBQTtnQ0FBQTtnQ0FlRCxBQUFTLFFBQVQsQUFBaUIsYUFBakIsQUFBOEI7QUFFbEM7d0JBQU0sU0FGaUMsQUFFakMsQUFBUyxBQUNmO3lCQUFPLGNBQUEsQUFBSyxNQUFMLEFBQVcsTUFBTSxNQUFBLEFBQUssTUFBdEIsQUFBNEIsT0FISSxBQUdoQyxBQUFtQyxTQWxCckMsQUFlRCxBQUFtQyxBQUdZO0FBSFosQUFDdkMsaUJBREk7O21CQU1OOztBQUNBO0FBQ0E7K0JBQUEsQUFBTyw2QkFBMkIsTUFBQSxBQUFLLE1BdkJoQyxBQXVCUCxBQUE2QztnQ0F2QnRDO0FBQUE7O21CQUFBO2dDQUFBO2dEQXlCUDs7c0JBQUEsQUFBSyxTQUFTLEVBQUUsY0FBYyxZQUFBLEFBQUksUUFBSixBQUFZLE1BQVosQUFBa0IsTUF6QnpDLEFBeUJQLEFBQWMsQUFBZ0IsQUFBd0I7O21CQUd4RDs7QUFDQTtBQUNBO3NCQUFBLEFBQUssU0FBUyxFQUFFLFNBQUYsQUFBVyxPQUFPLE9BOUJ2QixBQThCVCxBQUFjLEFBQXlCOzttQkE5QjlCO21CQUFBO2dDQUFBOztBQUFBO2lDQUFBO0E7Ozs7OztBQURYOzs7Ozs7U0FrQ0E7O0FBQ0E7QUFDQTs7NkJBQ1M7bUJBQ1A7OzZCQUNFLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDtvQkFBbkQ7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0csY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EseUNBQUEsQUFBQztlQUNRLEtBQUEsQUFBSyxNQURkLEFBQ29CLEFBQ2xCO2tCQUFVLHlCQUFBO2lCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUUsT0FBTyxNQUFBLEFBQU0sT0FBdEMsQUFBUyxBQUFjLEFBQXNCO0FBRnpELEFBR0U7ZUFIRixBQUdRLEFBQ047dUJBSkYsQUFJZ0I7O29CQUpoQjtzQkFISixBQUNFLEFBRUUsQUFRRjtBQVJFO0FBQ0UsMkJBT0osQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUFzQixVQUFTLFNBQVMsS0FBQSxBQUFLLE1BQTdDLEFBQW1EO29CQUFuRDtzQkFYRixBQVdFLEFBQ0E7QUFEQTswQkFDQSxBQUFDLHlDQUFPLFNBQVIsTUFBZ0IsU0FBUyxLQUFBLEFBQUssTUFBOUIsQUFBb0M7b0JBQXBDO3NCQUFBO0FBQUE7U0FiSixBQUNFLEFBWUUsQUFLTDs7Ozs7QUFoRTBCLEEsQUFtRTdCOztrQkFBQSxBQUFlIiwiZmlsZSI6IkNvbnRyaWJ1dGVGb3JtLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9icm93bmZpc2gvZ2l0aHViL1NvbGlkaXR5QmFzaWNzL2tpY2tzdGFydCJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/brownfish/github/SolidityBasics/kickstart/components/ContributeForm.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/brownfish/github/SolidityBasics/kickstart/components/ContributeForm.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy45NWYxYWNiNmY3ZGNjZDEyMjg4ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db250cmlidXRlRm9ybS5qcz8wNjA5YWQyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjsgLy8gYm9pbGVycGxhdGUgY29tcG9uZW50c1xuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIE1lc3NhZ2UsIEJ1dHRvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IENhbXBhaWduIGZyb20gXCIuLi9ldGhlcmV1bS9jYW1wYWlnblwiO1xuaW1wb3J0IHdlYjMgZnJvbSBcIi4uL2V0aGVyZXVtL3dlYjNcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCIuLi9yb3V0ZXNcIjtcblxuY2xhc3MgQ29udHJpYnV0ZUZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICB2YWx1ZTogXCJcIixcbiAgICAvLyBMZWN0dXJlIDE5MjogQWRkIHR3byBhZGRpdGlvbmFsIHZhbHVlc1xuICAgIGVycm9yTWVzc2FnZTogXCJcIixcbiAgICBsb2FkaW5nOiBmYWxzZVxuICB9O1xuXG4gIC8vIG1ha2UgdGhlIG9uU3VibWl0IGZ1bmN0aW9uXG4gIG9uU3VibWl0ID0gYXN5bmMgZXZlbnQgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIGtlZXAgdGhlIGZvcm0gZnJvbSBhdHRlbXB0aW5nIHRvIHN1Ym1pdCBpdHNlbGZcblxuICAgIC8vIExlY3R1cmUgMTg5XG4gICAgLy8gYWxsIHRoZSBzYW1lIGV4YWN0IGxvZ2ljIHdlIGRpZCBvbiB0aGUgbGFzdCBmb3JtXG4gICAgLy8gbG9hZGluZyBzcGlubmVyXG4gICAgLy8gdGFrZSBjYW1wYWlnbiBjb250cmFjdCBhbmQgYXR0ZW1wdCB0byBzZW5kIG1vbmV5IHRvIGl0LlxuXG4gICAgLy8gY2FtcGFpZ24gaXMgQ2FtcGFpZ24gd2l0aCBwYXNzZWQgaW4gYWRkcmVzc1xuICAgIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24odGhpcy5wcm9wcy5hZGRyZXNzKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlLCBlcnJvck1lc3NhZ2U6IFwiXCIgfSk7IC8vIExlY3R1cmUgMTkyXG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpOyAvLyBwbGFjZSBhc3luYyBhdCBldmVudCBvbiBvblN1Ym1pdFxuICAgICAgYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5jb250cmlidXRlKCkuc2VuZCh7XG4gICAgICAgIC8vIGNhbGwgdGhlIGNvbnRyaWJ1dGUgZnVuY3Rpb25cbiAgICAgICAgZnJvbTogYWNjb3VudHNbMF0sXG4gICAgICAgIHZhbHVlOiB3ZWIzLnV0aWxzLnRvV2VpKHRoaXMuc3RhdGUudmFsdWUsIFwiZXRoZXJcIikgLy8gdmFsdWUgd2lsbCBiZSBlbnRlcmVkIGluIGV0aGVyIGJ1dCB3ZSBoYXZlIHRvIGNvbnZlcnQgdG8gd2VpXG4gICAgICB9KTtcblxuICAgICAgLy8gTGVjdHVyZSAxOTE6IFJlZnJlc2ggUGFnZXMsIFVzZSBFUzIwMTUgdGVtcGxhdGUgc3RyaW5nIChiYWNrIHRpY2tzKSxcbiAgICAgIC8vIFBhc3MgaW4gdGhlIFVSTCBvZiB0aGUgY3VycmVudCBwYWdlIHdlIGFyZSBsb29raW5nIGF0XG4gICAgICBSb3V0ZXIucmVwbGFjZVJvdXRlKGAvY2FtcGFpZ25zLyR7dGhpcy5wcm9wcy5hZGRyZXNzfWApO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZTogZXJyLm1lc3NhZ2Uuc3BsaXQoXCJcXG5cIilbMF0gfSk7XG4gICAgfVxuXG4gICAgLy8gYWZ0ZXIgZXZlcnl0aGluZyBvY2N1cnMsIHR1cm4gb3VyIGxvYWRpbmcgZmxhZyBvZmYgbm8gbWF0dGVyIHdoYXRcbiAgICAvLyByZXNldCB0aGUgdmFsdWUgb2YgdGhlIGNvbnRyaWJ1dGlvbiBhbW91bnQgYXQgdGhlIHNhbWUgdGltZVxuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSwgdmFsdWU6IFwiXCIgfSk7XG4gIH07XG5cbiAgLy8gbm8gKCkgYXQgb25TdWJtaXQgd2l0aGluIHRoZSBGb3JtIHRhZywgd2UgZG9udCB3YW5uYSBjYWxsIGl0IGF0IHJlbmRlciB0aW1lXG4gIC8vIGJ1dCBhIHJlZmVyZW5jZSB0byB0aGUgZnVuY3Rpb24gc28gd2UgY2FuIGNhbGwgaXQgc29tZXRpbWUgaW4gdGhlIGZ1dHVyZVxuICAvLyBMZWN0dXJlIDE5MjogcGFzcyBpbiB0aGUgbG9hZGluZyBmbGFnLCBmb3IgZXJyb3IgbWVzc2FnZSwgd2VcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0gZXJyb3I9eyEhdGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9PlxuICAgICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgICA8bGFiZWw+QW1vdW50IHRvIENvbnRyaWJ1dGU8L2xhYmVsPlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBldmVudC50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICBsYWJlbD1cImV0aGVyXCJcbiAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Gb3JtLkZpZWxkPlxuXG4gICAgICAgIDxNZXNzYWdlIGVycm9yIGhlYWRlcj1cIk9vb3BzIVwiIGNvbnRlbnQ9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfSAvPlxuICAgICAgICA8QnV0dG9uIHByaW1hcnkgbG9hZGluZz17dGhpcy5zdGF0ZS5sb2FkaW5nfT5cbiAgICAgICAgICBDb250cmlidXRlIVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvRm9ybT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyaWJ1dGVGb3JtO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Db250cmlidXRlRm9ybS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBTEE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQU9BO0FBQ0E7QUFDQTs7QUFIQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFUQTtBQUNBO0FBVUE7QUFDQTtBQVpBO0FBQUE7QUFjQTtBQUNBO0FBREE7QUFkQTtBQUFBO0FBZUE7QUFFQTtBQUFBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQXZCQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBeUJBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBL0JBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7Ozs7O0FBREE7QUFDQTs7Ozs7QUFpQ0E7QUFDQTtBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTs7QUFKQTtBQVFBO0FBUkE7QUFDQTtBQU9BO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBS0E7Ozs7Ozs7QUFHQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
webpackHotUpdate(6,{

/***/ 1156:
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

var _semanticUiReact = __webpack_require__(727);

var _Layout = __webpack_require__(1153);

var _Layout2 = _interopRequireDefault(_Layout);

var _factory = __webpack_require__(985);

var _factory2 = _interopRequireDefault(_factory);

var _web = __webpack_require__(986);

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/brownfish/github/SolidityBasics/kickstart/pages/campaigns/new.js?entry";
// boilerplate initialization


var CampaignNew = function (_Component) {
  (0, _inherits3.default)(CampaignNew, _Component);

  function CampaignNew() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CampaignNew);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignNew.__proto__ || (0, _getPrototypeOf2.default)(CampaignNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      minimumContribution: "",
      errorMessage: "",
      loading: false //
    }, _this.onSubmit = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var accounts;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // pass this in to the Form tag
              event.preventDefault(); // keeps the browser from attempting to submit the form

              // run the loading spinner before running the try {} function
              _this.setState({ loading: true, errorMessage: "" });

              _context.prev = 2;
              _context.next = 5;
              return _web2.default.eth.getAccounts();

            case 5:
              accounts = _context.sent;
              _context.next = 8;
              return _factory2.default.methods.createCampaign(_this.state.minimumContribution).send({
                // metamask will attempt to automatically calculate
                // the amount of gas needed to run this function
                from: accounts[0] // this assumes metamask is turned on
                // and there's at least one active account
              });

            case 8:
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](2);

              // err is a thrown variable
              _this.setState({ errorMessage: _context.t0.message.split("\n")[0] });

            case 13:

              _this.setState({ loading: false });

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this2, [[2, 10]]);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  // event handler


  (0, _createClass3.default)(CampaignNew, [{
    key: "render",

    // make sure there's no parentheses after this.onSubmit
    // a condition to select when to show error message
    // Two-exclamation points - first one takes the value
    // and flip it into its opposite value into Boolean form
    // the second flips it into its opposite value (making it true)
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, "Create A Campaign"), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
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
      }, "Minimum Contribution"), _react2.default.createElement(_semanticUiReact.Input, {
        label: "wei",
        labelPosition: "right",
        value: this.state.minimumContribution,
        onChange: function onChange(event) {
          return _this3.setState({ minimumContribution: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: "Ooops!", content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, "Create!")));
    }
  }]);

  return CampaignNew;
}(_react.Component);

exports.default = CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiQnV0dG9uIiwiSW5wdXQiLCJNZXNzYWdlIiwiTGF5b3V0IiwiZmFjdG9yeSIsIndlYjMiLCJDYW1wYWlnbk5ldyIsInN0YXRlIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY3JlYXRlQ2FtcGFpZ24iLCJzZW5kIiwiZnJvbSIsIm1lc3NhZ2UiLCJzcGxpdCIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTSxBQUFRLEFBQU87O0FBQzlCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFVOzs7Ozs7O0FBTGpCOzs7SSxBQU9NOzs7Ozs7Ozs7Ozs7Ozs7c05BQ0osQTsyQkFBUSxBQUNlLEFBQ3JCO29CQUZNLEFBRVEsQUFDZDtlQUhNLEFBR0csTUFISCxBQUdTLEE7QUFIVCxBQUNOLGEsQUFNRixvRkFBVyxtQkFBQTtVQUFBO29FQUFBO2tCQUFBOzJDQUFBO2lCQUNUO0FBQ0E7b0JBRlMsQUFFVCxBQUFNLGtCQUFrQixBQUV4Qjs7QUFDQTtvQkFBQSxBQUFLLFNBQVMsRUFBRSxTQUFGLEFBQVcsTUFBTSxjQUx0QixBQUtULEFBQWMsQUFBK0I7OzhCQUxwQzs4QkFBQTtxQkFTZ0IsY0FBQSxBQUFLLElBVHJCLEFBU2dCLEFBQVM7O2lCQUExQjtBQVRDLGtDQUFBOzhCQUFBO3VDQVlELEFBQVEsUUFBUixBQUNILGVBQWUsTUFBQSxBQUFLLE1BRGpCLEFBQ3VCLHFCQUR2QixBQUVIO0FBRUM7QUFDQTtzQkFBTSxTQUhGLEFBR0UsQUFBUyxHQUFHLEFBQ2xCO0FBbEJHLEFBWUQsQUFFRTtBQUFBLEFBQ0osZUFIRTs7aUJBWkM7OEJBQUE7QUFBQTs7aUJBQUE7OEJBQUE7OENBcUJQOztBQUNBO29CQUFBLEFBQUssU0FBUyxFQUFFLGNBQWMsWUFBQSxBQUFJLFFBQUosQUFBWSxNQUFaLEFBQWtCLE1BdEJ6QyxBQXNCUCxBQUFjLEFBQWdCLEFBQXdCOztpQkFHeEQ7O29CQUFBLEFBQUssU0FBUyxFQUFFLFNBekJQLEFBeUJULEFBQWMsQUFBVzs7aUJBekJoQjtpQkFBQTs4QkFBQTs7QUFBQTsrQkFBQTtBO0FBRFg7Ozs7OztTQTZCQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7NkJBQ1M7bUJBQ1A7OzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUVBLHNDQUFBLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDtvQkFBbkQ7c0JBQUEsQUFDRTtBQURGO3lCQUNHLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLHlDQUFBLEFBQUM7ZUFBRCxBQUNRLEFBQ047dUJBRkYsQUFFZ0IsQUFDZDtlQUFPLEtBQUEsQUFBSyxNQUhkLEFBR29CLEFBQ2xCO2tCQUFVLHlCQUFBO2lCQUNSLE9BQUEsQUFBSyxTQUFTLEVBQUUscUJBQXFCLE1BQUEsQUFBTSxPQURuQyxBQUNSLEFBQWMsQUFBb0M7QUFMdEQ7O29CQUFBO3NCQUhKLEFBQ0UsQUFFRSxBQVVGO0FBVkU7QUFDRSwyQkFTSixBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLFVBQVMsU0FBUyxLQUFBLEFBQUssTUFBN0MsQUFBbUQ7b0JBQW5EO3NCQWJGLEFBYUUsQUFDQTtBQURBOzBCQUNBLEFBQUMseUNBQU8sU0FBUyxLQUFBLEFBQUssTUFBdEIsQUFBNEIsU0FBUyxTQUFyQztvQkFBQTtzQkFBQTtBQUFBO1NBbEJOLEFBQ0UsQUFHRSxBQWNFLEFBTVA7Ozs7O0FBbEV1QixBLEFBcUUxQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2Jyb3duZmlzaC9naXRodWIvU29saWRpdHlCYXNpY3Mva2lja3N0YXJ0In0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/brownfish/github/SolidityBasics/kickstart/pages/campaigns/new.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/brownfish/github/SolidityBasics/kickstart/pages/campaigns/new.js"); } } })();
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns/new")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi40MmM0NmIwYzQ5OTI1ZDEwMGE4ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FtcGFpZ25zL25ldy5qcz80NWRkMWVjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGJvaWxlcnBsYXRlIGluaXRpYWxpemF0aW9uXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb3JtLCBCdXR0b24sIElucHV0LCBNZXNzYWdlIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IGZhY3RvcnkgZnJvbSBcIi4uLy4uL2V0aGVyZXVtL2ZhY3RvcnlcIjtcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi8uLi9ldGhlcmV1bS93ZWIzXCI7XG5cbmNsYXNzIENhbXBhaWduTmV3IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgbWluaW11bUNvbnRyaWJ1dGlvbjogXCJcIixcbiAgICBlcnJvck1lc3NhZ2U6IFwiXCIsXG4gICAgbG9hZGluZzogZmFsc2UgLy9cbiAgfTtcblxuICAvLyBldmVudCBoYW5kbGVyXG4gIG9uU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xuICAgIC8vIHBhc3MgdGhpcyBpbiB0byB0aGUgRm9ybSB0YWdcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBrZWVwcyB0aGUgYnJvd3NlciBmcm9tIGF0dGVtcHRpbmcgdG8gc3VibWl0IHRoZSBmb3JtXG5cbiAgICAvLyBydW4gdGhlIGxvYWRpbmcgc3Bpbm5lciBiZWZvcmUgcnVubmluZyB0aGUgdHJ5IHt9IGZ1bmN0aW9uXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUsIGVycm9yTWVzc2FnZTogXCJcIiB9KTtcblxuICAgIHRyeSB7XG4gICAgICAvLyBnZXQgYSBsaXN0IG9mIGF2YWlsYWJsZSBhY2NvdW50c1xuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuXG4gICAgICAvLyBUaGlzIGlzIHdoZXJlIHdlIGFjdHVhbGx5IGNyZWF0ZSBhIGNhbXBhaWduIGRvbmUgYnkgaW1wb3J0aW5nIHRoZSBmYWN0b3J5IGluc3RhbmNlXG4gICAgICBhd2FpdCBmYWN0b3J5Lm1ldGhvZHNcbiAgICAgICAgLmNyZWF0ZUNhbXBhaWduKHRoaXMuc3RhdGUubWluaW11bUNvbnRyaWJ1dGlvbilcbiAgICAgICAgLnNlbmQoe1xuICAgICAgICAgIC8vIG1ldGFtYXNrIHdpbGwgYXR0ZW1wdCB0byBhdXRvbWF0aWNhbGx5IGNhbGN1bGF0ZVxuICAgICAgICAgIC8vIHRoZSBhbW91bnQgb2YgZ2FzIG5lZWRlZCB0byBydW4gdGhpcyBmdW5jdGlvblxuICAgICAgICAgIGZyb206IGFjY291bnRzWzBdIC8vIHRoaXMgYXNzdW1lcyBtZXRhbWFzayBpcyB0dXJuZWQgb25cbiAgICAgICAgICAvLyBhbmQgdGhlcmUncyBhdCBsZWFzdCBvbmUgYWN0aXZlIGFjY291bnRcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBlcnIgaXMgYSB0aHJvd24gdmFyaWFibGVcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6IGVyci5tZXNzYWdlLnNwbGl0KFwiXFxuXCIpWzBdIH0pO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KTtcbiAgfTtcblxuICAvLyBtYWtlIHN1cmUgdGhlcmUncyBubyBwYXJlbnRoZXNlcyBhZnRlciB0aGlzLm9uU3VibWl0XG4gIC8vIGEgY29uZGl0aW9uIHRvIHNlbGVjdCB3aGVuIHRvIHNob3cgZXJyb3IgbWVzc2FnZVxuICAvLyBUd28tZXhjbGFtYXRpb24gcG9pbnRzIC0gZmlyc3Qgb25lIHRha2VzIHRoZSB2YWx1ZVxuICAvLyBhbmQgZmxpcCBpdCBpbnRvIGl0cyBvcHBvc2l0ZSB2YWx1ZSBpbnRvIEJvb2xlYW4gZm9ybVxuICAvLyB0aGUgc2Vjb25kIGZsaXBzIGl0IGludG8gaXRzIG9wcG9zaXRlIHZhbHVlIChtYWtpbmcgaXQgdHJ1ZSlcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8aDM+Q3JlYXRlIEEgQ2FtcGFpZ248L2gzPlxuXG4gICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fSBlcnJvcj17ISF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0+XG4gICAgICAgICAgPEZvcm0uRmllbGQ+XG4gICAgICAgICAgICA8bGFiZWw+TWluaW11bSBDb250cmlidXRpb248L2xhYmVsPlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIGxhYmVsPVwid2VpXCJcbiAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubWluaW11bUNvbnRyaWJ1dGlvbn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1pbmltdW1Db250cmlidXRpb246IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRm9ybS5GaWVsZD5cblxuICAgICAgICAgIDxNZXNzYWdlIGVycm9yIGhlYWRlcj1cIk9vb3BzIVwiIGNvbnRlbnQ9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfSAvPlxuICAgICAgICAgIDxCdXR0b24gbG9hZGluZz17dGhpcy5zdGF0ZS5sb2FkaW5nfSBwcmltYXJ5PlxuICAgICAgICAgICAgQ3JlYXRlIVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0Zvcm0+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhbXBhaWduTmV3O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvY2FtcGFpZ25zL25ldy5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7QUFOQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUUE7QUFDQTtBQUFBO0FBRkE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBTkE7QUFBQTtBQVNBO0FBQ0E7QUFEQTtBQVRBO0FBQUE7QUFZQTtBQUlBO0FBQ0E7QUFBQTtBQUhBO0FBQ0E7QUFDQTtBQWhCQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFxQkE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBMUJBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQURBO0FBQ0E7Ozs7O0FBNEJBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUxBOztBQUFBO0FBVUE7QUFWQTtBQUNBO0FBU0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFNQTs7Ozs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
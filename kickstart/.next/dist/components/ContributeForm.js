"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _campaign = require("../ethereum/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require("../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _routes = require("../routes");

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
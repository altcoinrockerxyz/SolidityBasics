"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _campaign = require("../../ethereum/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/brownfish/github/SolidityBasics/kickstart/components/ContributeForm.js"; // boilerplate components


var ContributeForm = function (_Component) {
  (0, _inherits3.default)(ContributeForm, _Component);

  function ContributeForm() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ContributeForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContributeForm.__proto__ || (0, _getPrototypeOf2.default)(ContributeForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: ""
    }, _this.onSubmit = function (event) {
      event.preventDefault(); // keep the form from attempting to submit itself

      // Lecture 189
      // all the same exact logic we did on the last form
      // loading spinner
      // take campaign contract and attempt to send money to it.

      // campaign is Campaign with passed in address
      var campaign = (0, _campaign2.default)(_this.props.address);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  // make the onSubmit function


  (0, _createClass3.default)(ContributeForm, [{
    key: "render",

    // no () at onSubmit within the Form tag, we dont wanna call it at render time
    // but a reference to the function so we can call it sometime in the future
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, "Amount to Contribute"), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.value,
        onChange: function onChange(event) {
          return _this2.setState({ value: event.target.value });
        },
        label: "ether",
        labelPosition: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      })), _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, "Contribute!"));
    }
  }]);

  return ContributeForm;
}(_react.Component);

exports.default = ContributeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ29udHJpYnV0ZUZvcm0uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwiQnV0dG9uIiwiQ2FtcGFpZ24iLCJDb250cmlidXRlRm9ybSIsInN0YXRlIiwidmFsdWUiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsInNldFN0YXRlIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTSxBQUFPLEFBQVM7O0FBQy9CLEFBQU8sQUFBYzs7Ozs7O29HQUZxQjs7O0lBSXBDLEE7Ozs7Ozs7Ozs7Ozs7OzROQUNKLEE7YUFDUyxBLEFBREQ7QUFBQSxBQUNOLGFBSUYsQSxXQUFXO1lBQVMsQUFDbEIsQUFBTSxpQkFEWSxBQUNsQixDQUF3QixBQUV4Qjs7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtVQUFNLFdBQVcsd0JBQVMsTUFBQSxBQUFLLE1BQS9CLEFBQWlCLEFBQW9CLEFBQ3RDO0E7QUFYRDs7Ozs7O1NBYUE7O0FBQ0E7OzZCQUNTO21CQUNQOzs2QkFDRSxBQUFDLHVDQUFLLFVBQVUsS0FBaEIsQUFBcUI7b0JBQXJCO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNHLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLHlDQUFBLEFBQUM7ZUFDUSxLQUFBLEFBQUssTUFEZCxBQUNvQixBQUNsQjtrQkFBVSx5QkFBQTtpQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFFLE9BQU8sTUFBQSxBQUFNLE9BQXRDLEFBQVMsQUFBYyxBQUFzQjtBQUZ6RCxBQUdFO2VBSEYsQUFHUSxBQUNOO3VCQUpGLEFBSWdCOztvQkFKaEI7c0JBSEosQUFDRSxBQUVFLEFBT0Y7QUFQRTtBQUNFLDJCQU1KLEFBQUMseUNBQU8sU0FBUjtvQkFBQTtzQkFBQTtBQUFBO1NBWEosQUFDRSxBQVVFLEFBR0w7Ozs7O0FBbkMwQixBLEFBc0M3Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJDb250cmlidXRlRm9ybS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYnJvd25maXNoL2dpdGh1Yi9Tb2xpZGl0eUJhc2ljcy9raWNrc3RhcnQifQ==
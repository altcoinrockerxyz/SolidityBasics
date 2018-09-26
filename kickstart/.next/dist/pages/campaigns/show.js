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

var _Layout = require("../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require("../../ethereum/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require("../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _ContributeForm = require("../../components/ContributeForm");

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/brownfish/github/SolidityBasics/kickstart/pages/campaigns/show.js?entry"; // Lecture 185
// Lecture 186

var CampaignShow = function (_Component) {
  (0, _inherits3.default)(CampaignShow, _Component);

  function CampaignShow() {
    (0, _classCallCheck3.default)(this, CampaignShow);

    return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
  }

  (0, _createClass3.default)(CampaignShow, [{
    key: "renderCards",
    value: function renderCards() {
      // destructure
      var _props = this.props,
          balance = _props.balance,
          manager = _props.manager,
          minimumContribution = _props.minimumContribution,
          requestsCount = _props.requestsCount,
          approversCount = _props.approversCount;

      var items = [{
        // card for manager address
        header: manager,
        meta: "Address of Manager",
        description: "The manager created this campaign and can create requests to withdraw funds.",
        style: { overflowWrap: "break-word" // constrains the width for each value
        } }, {
        // card for minimum contribution
        header: minimumContribution,
        meta: "Minimum Contribution (wei)",
        description: "You must contribute at least this much wei to become an approver"
      }, {
        // card for requestsCount
        header: requestsCount,
        meta: "Number of Requests",
        description: "A request tries to withdraw funds from the contract. Requests must be approved by the approvers."
      }, {
        // card for approversCount
        header: approversCount,
        meta: "Number of Approvers",
        description: "Number of people who have already donated to this campaign."
      }, {
        // card for current balance (donations)
        header: _web2.default.utils.fromWei(balance, "ether"), // convert balance into ether
        meta: "Campaign Balance (ether)",
        description: "The Balance shows how much money this campaign has left to spend."
      }];

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      });
    }

    // Lecture184: Make sure to call the renderCards function from within the render method.

  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, "Campaign Details"), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react2.default.createElement(_ContributeForm2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }))));
    }
  }], [{
    key: "getInitialProps",

    // NOTE: we are concerned about one VERY PARTICULAR campaign
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var campaign, summary;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // a separate props object of its own
                // console.log(props.query.address); // this is the token we have on the URL
                // call to the Campaign function
                campaign = (0, _campaign2.default)(props.query.address);
                _context.next = 3;
                return campaign.methods.getSummary().call();

              case 3:
                summary = _context.sent;

                console.log(summary);

                return _context.abrupt("return", {
                  balance: summary[0],
                  minimumContribution: summary[1],
                  requestsCount: summary[2],
                  approversCount: summary[3],
                  manager: summary[4]
                });

              case 6:
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

  return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkdyaWQiLCJMYXlvdXQiLCJDYW1wYWlnbiIsIndlYjMiLCJDb250cmlidXRlRm9ybSIsIkNhbXBhaWduU2hvdyIsInByb3BzIiwiYmFsYW5jZSIsIm1hbmFnZXIiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwicmVxdWVzdHNDb3VudCIsImFwcHJvdmVyc0NvdW50IiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsInV0aWxzIiwiZnJvbVdlaSIsInJlbmRlckNhcmRzIiwiY2FtcGFpZ24iLCJxdWVyeSIsImFkZHJlc3MiLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJzdW1tYXJ5IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU07O0FBQ2YsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVUsQTs7OztBQUNqQixBLEFBQUEsQUFBTyxBQUFvQjs7Ozs7O3FHQURhO0FBQ3NCOztJQUV4RCxBOzs7Ozs7Ozs7OztrQ0FxQlUsQUFDWjtBQURZO21CQVFSLEtBUlEsQUFRSDtVQVJHLEFBR1YsaUJBSFUsQUFHVjtVQUhVLEFBSVYsaUJBSlUsQUFJVjtVQUpVLEFBS1YsNkJBTFUsQUFLVjtVQUxVLEFBTVYsdUJBTlUsQUFNVjtVQU5VLEFBT1Ysd0JBUFUsQUFPVixBQUdGOztVQUFNO0FBR0Y7Z0JBRkYsQUFFVSxBQUNSO2NBSEYsQUFHUSxBQUNOO3FCQUpGLEFBS0ksQUFDRjtpQkFBUyxjQUFGLEFBQWdCLGFBUGIsQUFDWixBQU1TLEFBQStCO0FBQS9CLFNBTlQsQUFDRTtBQVNBO2dCQUZGLEFBRVUsQUFDUjtjQUhGLEFBR1EsQUFDTjtxQkFiVSxBQVNaLEFBS0k7QUFMSixBQUNFLE9BVlU7QUFrQlY7Z0JBRkYsQUFFVSxBQUNSO2NBSEYsQUFHUSxBQUNOO3FCQXBCVSxBQWdCWixBQUtJO0FBTEosQUFDRTtBQVFBO2dCQUZGLEFBRVUsQUFDUjtjQUhGLEFBR1EsQUFDTjtxQkEzQlUsQUF1QlosQUFLSTtBQUxKLEFBQ0U7QUFRQTtnQkFBUSxjQUFBLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsU0FGN0IsQUFFVSxBQUE0QixVQUFVLEFBQzlDO2NBSEYsQUFHUSxBQUNOO3FCQWxDSixBQUFjLEFBOEJaLEFBS0ksQUFJTjtBQVRFLEFBQ0U7OzJDQVFHLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7b0JBQW5CO3NCQUFQLEFBQU8sQUFDUjtBQURRO09BQUE7QUFHVDs7Ozs7OzZCQUNTLEFBQ1A7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EscUNBQUEsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjtvQkFBcEI7c0JBQUEsQUFBeUI7QUFBekI7Y0FERixBQUNFLEFBQXlCLEFBQUssQUFFOUIsZ0NBQUMsY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjtvQkFBcEI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUM7O29CQUFEO3NCQVBSLEFBQ0UsQUFFRSxBQUdFLEFBQ0UsQUFLVDtBQUxTO0FBQUE7OztTQWpGVjs7OzsyR0FDNkIsQTs7Ozs7bUJBQzNCO0FBQ0E7QUFDQTtBQUNNO0EsMkJBQVcsd0JBQVMsTUFBQSxBQUFNLE1BQWYsQUFBcUIsQTs7dUJBRWhCLFNBQUEsQUFBUyxRQUFULEFBQWlCLGFBQWpCLEFBQThCLEE7O21CQUE5QztBLG1DQUVOOzt3QkFBQSxBQUFRLElBQVIsQUFBWTs7OzJCQUdELFFBREosQUFDSSxBQUFRLEFBQ2pCO3VDQUFxQixRQUZoQixBQUVnQixBQUFRLEFBQzdCO2lDQUFlLFFBSFYsQUFHVSxBQUFRLEFBQ3ZCO2tDQUFnQixRQUpYLEFBSVcsQUFBUSxBQUN4QjsyQkFBUyxRQUxKLEFBS0ksQUFBUSxBO0FBTFosQUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWJxQixBLEFBMEYzQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9icm93bmZpc2gvZ2l0aHViL1NvbGlkaXR5QmFzaWNzL2tpY2tzdGFydCJ9
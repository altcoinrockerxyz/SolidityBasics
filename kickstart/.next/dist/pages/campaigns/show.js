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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/brownfish/github/SolidityBasics/kickstart/pages/campaigns/show.js?entry";
// Lecture 185

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
          lineNumber: 77
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
          lineNumber: 83
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, "Campaign Show"), this.renderCards());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkxheW91dCIsIkNhbXBhaWduIiwid2ViMyIsIkNhbXBhaWduU2hvdyIsInByb3BzIiwiYmFsYW5jZSIsIm1hbmFnZXIiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwicmVxdWVzdHNDb3VudCIsImFwcHJvdmVyc0NvdW50IiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsInV0aWxzIiwiZnJvbVdlaSIsInJlbmRlckNhcmRzIiwiY2FtcGFpZ24iLCJxdWVyeSIsImFkZHJlc3MiLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJzdW1tYXJ5IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTOztBQUNULEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWM7Ozs7QSxBQUNyQixBQUFPLEFBQVU7Ozs7Ozs7QUFBdUI7O0ksQUFFbEM7Ozs7Ozs7Ozs7O2tDQXFCVSxBQUNaO0FBRFk7bUJBUVIsS0FSUSxBQVFIO1VBUkcsQUFHVixpQkFIVSxBQUdWO1VBSFUsQUFJVixpQkFKVSxBQUlWO1VBSlUsQUFLViw2QkFMVSxBQUtWO1VBTFUsQUFNVix1QkFOVSxBQU1WO1VBTlUsQUFPVix3QkFQVSxBQU9WLEFBR0Y7O1VBQU07QUFHRjtnQkFGRixBQUVVLEFBQ1I7Y0FIRixBQUdRLEFBQ047cUJBSkYsQUFLSSxBQUNGO2lCQUFTLGNBQUYsQUFBZ0IsYUFQYixBQUNaLEFBTVMsQUFBK0I7QUFBL0IsU0FOVCxBQUNFO0FBU0E7Z0JBRkYsQUFFVSxBQUNSO2NBSEYsQUFHUSxBQUNOO3FCQWJVLEFBU1osQUFLSTtBQUxKLEFBQ0UsT0FWVTtBQWtCVjtnQkFGRixBQUVVLEFBQ1I7Y0FIRixBQUdRLEFBQ047cUJBcEJVLEFBZ0JaLEFBS0k7QUFMSixBQUNFO0FBUUE7Z0JBRkYsQUFFVSxBQUNSO2NBSEYsQUFHUSxBQUNOO3FCQTNCVSxBQXVCWixBQUtJO0FBTEosQUFDRTtBQVFBO2dCQUFRLGNBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixTQUY3QixBQUVVLEFBQTRCLFVBQVUsQUFDOUM7Y0FIRixBQUdRLEFBQ047cUJBbENKLEFBQWMsQUE4QlosQUFLSSxBQUlOO0FBVEUsQUFDRTs7MkNBUUcsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjtvQkFBbkI7c0JBQVAsQUFBTyxBQUNSO0FBRFE7T0FBQTtBQUdUOzs7Ozs7NkJBQ1MsQUFDUDs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQyx1QkFITCxBQUNFLEFBRUcsQUFBSyxBQUdYOzs7U0FoRkQ7Ozs7MkdBQzZCLEE7Ozs7O21CQUMzQjtBQUNBO0FBQ0E7QUFDTTtBLDJCQUFXLHdCQUFTLE1BQUEsQUFBTSxNQUFmLEEsQUFBcUI7O3VCQUVoQixTQUFBLEFBQVMsUUFBVCxBQUFpQixhQUFqQixBLEFBQThCOzttQkFBOUM7QSxtQ0FFTjs7d0JBQUEsQUFBUSxJQUFSLEFBQVk7OzsyQkFHRCxRQURKLEFBQ0ksQUFBUSxBQUNqQjt1Q0FBcUIsUUFGaEIsQUFFZ0IsQUFBUSxBQUM3QjtpQ0FBZSxRQUhWLEFBR1UsQUFBUSxBQUN2QjtrQ0FBZ0IsUUFKWCxBQUlXLEFBQVEsQUFDeEI7MkJBQVMsUUFMSixBQUtJLEFBQVEsQTtBQUxaLEFBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFicUIsQSxBQW9GM0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoic2hvdy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYnJvd25maXNoL2dpdGh1Yi9Tb2xpZGl0eUJhc2ljcy9raWNrc3RhcnQifQ==
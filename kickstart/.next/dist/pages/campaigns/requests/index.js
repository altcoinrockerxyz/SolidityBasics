"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

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

var _Layout = require("../../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require("semantic-ui-react");

var _routes = require("../../../routes");

var _campaign = require("../../../ethereum/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/brownfish/github/SolidityBasics/kickstart/pages/campaigns/requests/index.js?entry"; // Lecture 195
// Lecture 195
// Link helper via Lecture 195


// List Requests

var RequestIndex = function (_Component) {
  (0, _inherits3.default)(RequestIndex, _Component);

  function RequestIndex() {
    (0, _classCallCheck3.default)(this, RequestIndex);

    return (0, _possibleConstructorReturn3.default)(this, (RequestIndex.__proto__ || (0, _getPrototypeOf2.default)(RequestIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(RequestIndex, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, "Requests List"), _react2.default.createElement(_routes.Link, { route: "/campaigns/" + this.props.address + "/requests/new", __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, "Add Requests"))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkJ1dHRvbiIsIkxpbmsiLCJDYW1wYWlnbiIsIlJlcXVlc3RJbmRleCIsInByb3BzIiwiYWRkcmVzcyIsInF1ZXJ5IiwiY2FtcGFpZ24iLCJtZXRob2RzIiwiZ2V0UmVxdWVzdHNDb3VudCIsImNhbGwiLCJyZXF1ZXN0Q291bnQiLCJhbGwiLCJBcnJheSIsInBhcnNlSW50IiwiZmlsbCIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsInJlcXVlc3RzIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDRyxBLEFBQW5CLEFBQU87Ozs7QUFDUCxBQUFTLEE7O0FBQ1QsQUFBcUIsQSxBQUFaOztBQUNULEFBQU8sQUFBYzs7Ozs7OytHQUg0QjtBQUNMO0FBQ0o7OztBQUd4Qzs7SUFDTSxBOzs7Ozs7Ozs7Ozs2QkE4QkssQUFDUDs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSxrQ0FBQSxBQUFDLDhCQUFLLHVCQUFxQixLQUFBLEFBQUssTUFBMUIsQUFBZ0MsVUFBdEM7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMseUNBQU8sU0FBUjtvQkFBQTtzQkFBQTtBQUFBO1NBTFIsQUFDRSxBQUVFLEFBQ0UsQUFDRSxBQUtUOzs7OzsyR0F4QzRCLEE7Ozs7O21CQUNuQjtBLDBCQUFZLE0sQUFBTSxNQUFsQixBLEFBRVI7O0FBQ0E7QUFDTTs7QSwyQkFBVyx3QkFBQSxBQUFTLEEsQUFFMUI7Ozs7O3VCQUMyQixTQUFBLEFBQVMsUUFBVCxBQUFpQixtQkFBakIsQUFBb0MsQTs7bUJBQXpEO0E7O3lDQVNpQixBQUFRLFVBQ3ZCLFNBQU4sQUFBTSxBQUFTLGVBQWYsQUFBOEI7QUFBOUIsaUJBQUEsQUFDRyxPQURILEFBRUcsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLE9BQVUsQUFDdkI7eUJBQU8sU0FBQSxBQUFTLFFBQVQsQUFBaUIsU0FBakIsQUFBMEIsT0FBakMsQUFBTyxBQUFpQyxBQUN6QztBLEFBTGtCLEFBQ3JCLGtCQURxQjs7bUJBQWpCO0Esb0NBUU47O3dCQUFBLEFBQVEsSUFBUixBQUFZOztpREFFTCxFQUFFLFNBQUYsU0FBVyxVQUFYLFVBQXFCLGNBQXJCLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE1QmdCLEEsQUE0QzNCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9icm93bmZpc2gvZ2l0aHViL1NvbGlkaXR5QmFzaWNzL2tpY2tzdGFydCJ9
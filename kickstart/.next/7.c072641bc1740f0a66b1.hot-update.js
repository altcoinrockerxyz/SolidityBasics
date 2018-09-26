webpackHotUpdate(7,{

/***/ 1179:
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

var _Layout = __webpack_require__(1159);

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = __webpack_require__(1180);

var _campaign2 = _interopRequireDefault(_campaign);

var _web = __webpack_require__(992);

var _web2 = _interopRequireDefault(_web);

var _ContributeForm = __webpack_require__(1182);

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
          lineNumber: 82
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
          lineNumber: 88
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, "Campaign Details"), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 94
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
                campaign = (0, _campaign2.default)(props.query.address); // Lecture 189: Take this address
                // and add it to the Object that gets returned (line 21) from getInitialProps
                // code goes to line 23, then
                // tell the contributeForm the active address (line 94).

                _context.next = 3;
                return campaign.methods.getSummary().call();

              case 3:
                summary = _context.sent;

                console.log(summary);

                return _context.abrupt("return", {
                  address: props.query.address,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkdyaWQiLCJMYXlvdXQiLCJDYW1wYWlnbiIsIndlYjMiLCJDb250cmlidXRlRm9ybSIsIkNhbXBhaWduU2hvdyIsInByb3BzIiwiYmFsYW5jZSIsIm1hbmFnZXIiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwicmVxdWVzdHNDb3VudCIsImFwcHJvdmVyc0NvdW50IiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsInV0aWxzIiwiZnJvbVdlaSIsInJlbmRlckNhcmRzIiwiYWRkcmVzcyIsImNhbXBhaWduIiwicXVlcnkiLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJzdW1tYXJ5IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU07O0FBQ2YsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYzs7OztBLEFBQ3JCLEFBQU8sQUFBVTs7OztBQUNqQixBQUEyQixBLEFBQXBCOzs7Ozs7cUdBRGlDO0FBQ3NCOztJLEFBRXhEOzs7Ozs7Ozs7OztrQ0F5QlUsQUFDWjtBQURZO21CQVFSLEtBUlEsQUFRSDtVQVJHLEFBR1YsaUJBSFUsQUFHVjtVQUhVLEFBSVYsaUJBSlUsQUFJVjtVQUpVLEFBS1YsNkJBTFUsQUFLVjtVQUxVLEFBTVYsdUJBTlUsQUFNVjtVQU5VLEFBT1Ysd0JBUFUsQUFPVixBQUdGOztVQUFNO0FBR0Y7Z0JBRkYsQUFFVSxBQUNSO2NBSEYsQUFHUSxBQUNOO3FCQUpGLEFBS0ksQUFDRjtpQkFBUyxjQUFGLEFBQWdCLGFBUGIsQUFDWixBQU1TLEFBQStCO0FBQS9CLFNBTlQsQUFDRTtBQVNBO2dCQUZGLEFBRVUsQUFDUjtjQUhGLEFBR1EsQUFDTjtxQkFiVSxBQVNaLEFBS0k7QUFMSixBQUNFLE9BVlU7QUFrQlY7Z0JBRkYsQUFFVSxBQUNSO2NBSEYsQUFHUSxBQUNOO3FCQXBCVSxBQWdCWixBQUtJO0FBTEosQUFDRTtBQVFBO2dCQUZGLEFBRVUsQUFDUjtjQUhGLEFBR1EsQUFDTjtxQkEzQlUsQUF1QlosQUFLSTtBQUxKLEFBQ0U7QUFRQTtnQkFBUSxjQUFBLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsU0FGN0IsQUFFVSxBQUE0QixVQUFVLEFBQzlDO2NBSEYsQUFHUSxBQUNOO3FCQWxDSixBQUFjLEFBOEJaLEFBS0ksQUFJTjtBQVRFLEFBQ0U7OzJDQVFHLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7b0JBQW5CO3NCQUFQLEFBQU8sQUFDUjtBQURRO09BQUE7QUFHVDs7Ozs7OzZCQUNTLEFBQ1A7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EscUNBQUEsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjtvQkFBcEI7c0JBQUEsQUFBeUI7QUFBekI7Y0FERixBQUNFLEFBQXlCLEFBQUssQUFFOUIsZ0NBQUMsY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjtvQkFBcEI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMsMENBQWUsU0FBUyxLQUFBLEFBQUssTUFBOUIsQUFBb0M7b0JBQXBDO3NCQVBSLEFBQ0UsQUFFRSxBQUdFLEFBQ0UsQUFLVDtBQUxTOzs7O1NBckZWOzs7OzJHLEFBQzZCOzs7OzttQkFDM0I7QUFDQTtBQUNBO0FBQ007QSwyQkFBVyx3QkFBUyxNQUFBLEFBQU0sTSxBQUFmLEFBQXFCLFVBQVUsQUFDaEQ7QUFDQTtBQUNBOzs7O3VCQUVzQixTQUFBLEFBQVMsUUFBVCxBQUFpQixhQUFqQixBLEFBQThCOzttQkFBOUM7QSxtQ0FFTjs7d0JBQUEsQUFBUSxJQUFSLEFBQVk7OzsyQkFHRCxNQUFBLEFBQU0sTUFEVixBQUNnQixBQUNyQjsyQkFBUyxRQUZKLEFBRUksQUFBUSxBQUNqQjt1Q0FBcUIsUUFIaEIsQUFHZ0IsQUFBUSxBQUM3QjtpQ0FBZSxRQUpWLEFBSVUsQUFBUSxBQUN2QjtrQ0FBZ0IsUUFMWCxBQUtXLEFBQVEsQUFDeEI7MkJBQVMsUUFBQSxBQUFRLEEsQUFOWjtBQUFBLEFBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFoQnFCLEEsQUE4RjNCOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2Jyb3duZmlzaC9naXRodWIvU29saWRpdHlCYXNpY3Mva2lja3N0YXJ0In0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/brownfish/github/SolidityBasics/kickstart/pages/campaigns/show.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/brownfish/github/SolidityBasics/kickstart/pages/campaigns/show.js"); } } })();
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns/show")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5jMDcyNjQxYmMxNzQwZjBhNjZiMS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FtcGFpZ25zL3Nob3cuanM/NmY1ZTI4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDYXJkLCBHcmlkIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IENhbXBhaWduIGZyb20gXCIuLi8uLi9ldGhlcmV1bS9jYW1wYWlnblwiO1xuaW1wb3J0IHdlYjMgZnJvbSBcIi4uLy4uL2V0aGVyZXVtL3dlYjNcIjsgLy8gTGVjdHVyZSAxODVcbmltcG9ydCBDb250cmlidXRlRm9ybSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Db250cmlidXRlRm9ybVwiOyAvLyBMZWN0dXJlIDE4NlxuXG5jbGFzcyBDYW1wYWlnblNob3cgZXh0ZW5kcyBDb21wb25lbnQge1xuICAvLyBOT1RFOiB3ZSBhcmUgY29uY2VybmVkIGFib3V0IG9uZSBWRVJZIFBBUlRJQ1VMQVIgY2FtcGFpZ25cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcykge1xuICAgIC8vIGEgc2VwYXJhdGUgcHJvcHMgb2JqZWN0IG9mIGl0cyBvd25cbiAgICAvLyBjb25zb2xlLmxvZyhwcm9wcy5xdWVyeS5hZGRyZXNzKTsgLy8gdGhpcyBpcyB0aGUgdG9rZW4gd2UgaGF2ZSBvbiB0aGUgVVJMXG4gICAgLy8gY2FsbCB0byB0aGUgQ2FtcGFpZ24gZnVuY3Rpb25cbiAgICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKHByb3BzLnF1ZXJ5LmFkZHJlc3MpOyAvLyBMZWN0dXJlIDE4OTogVGFrZSB0aGlzIGFkZHJlc3NcbiAgICAvLyBhbmQgYWRkIGl0IHRvIHRoZSBPYmplY3QgdGhhdCBnZXRzIHJldHVybmVkIChsaW5lIDIxKSBmcm9tIGdldEluaXRpYWxQcm9wc1xuICAgIC8vIGNvZGUgZ29lcyB0byBsaW5lIDIzLCB0aGVuXG4gICAgLy8gdGVsbCB0aGUgY29udHJpYnV0ZUZvcm0gdGhlIGFjdGl2ZSBhZGRyZXNzIChsaW5lIDk0KS5cblxuICAgIGNvbnN0IHN1bW1hcnkgPSBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmdldFN1bW1hcnkoKS5jYWxsKCk7XG5cbiAgICBjb25zb2xlLmxvZyhzdW1tYXJ5KTtcblxuICAgIHJldHVybiB7XG4gICAgICBhZGRyZXNzOiBwcm9wcy5xdWVyeS5hZGRyZXNzLFxuICAgICAgYmFsYW5jZTogc3VtbWFyeVswXSxcbiAgICAgIG1pbmltdW1Db250cmlidXRpb246IHN1bW1hcnlbMV0sXG4gICAgICByZXF1ZXN0c0NvdW50OiBzdW1tYXJ5WzJdLFxuICAgICAgYXBwcm92ZXJzQ291bnQ6IHN1bW1hcnlbM10sXG4gICAgICBtYW5hZ2VyOiBzdW1tYXJ5WzRdXG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlckNhcmRzKCkge1xuICAgIC8vIGRlc3RydWN0dXJlXG4gICAgY29uc3Qge1xuICAgICAgYmFsYW5jZSxcbiAgICAgIG1hbmFnZXIsXG4gICAgICBtaW5pbXVtQ29udHJpYnV0aW9uLFxuICAgICAgcmVxdWVzdHNDb3VudCxcbiAgICAgIGFwcHJvdmVyc0NvdW50XG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBpdGVtcyA9IFtcbiAgICAgIHtcbiAgICAgICAgLy8gY2FyZCBmb3IgbWFuYWdlciBhZGRyZXNzXG4gICAgICAgIGhlYWRlcjogbWFuYWdlcixcbiAgICAgICAgbWV0YTogXCJBZGRyZXNzIG9mIE1hbmFnZXJcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJUaGUgbWFuYWdlciBjcmVhdGVkIHRoaXMgY2FtcGFpZ24gYW5kIGNhbiBjcmVhdGUgcmVxdWVzdHMgdG8gd2l0aGRyYXcgZnVuZHMuXCIsXG4gICAgICAgIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogXCJicmVhay13b3JkXCIgfSAvLyBjb25zdHJhaW5zIHRoZSB3aWR0aCBmb3IgZWFjaCB2YWx1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgLy8gY2FyZCBmb3IgbWluaW11bSBjb250cmlidXRpb25cbiAgICAgICAgaGVhZGVyOiBtaW5pbXVtQ29udHJpYnV0aW9uLFxuICAgICAgICBtZXRhOiBcIk1pbmltdW0gQ29udHJpYnV0aW9uICh3ZWkpXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiWW91IG11c3QgY29udHJpYnV0ZSBhdCBsZWFzdCB0aGlzIG11Y2ggd2VpIHRvIGJlY29tZSBhbiBhcHByb3ZlclwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBjYXJkIGZvciByZXF1ZXN0c0NvdW50XG4gICAgICAgIGhlYWRlcjogcmVxdWVzdHNDb3VudCxcbiAgICAgICAgbWV0YTogXCJOdW1iZXIgb2YgUmVxdWVzdHNcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgXCJBIHJlcXVlc3QgdHJpZXMgdG8gd2l0aGRyYXcgZnVuZHMgZnJvbSB0aGUgY29udHJhY3QuIFJlcXVlc3RzIG11c3QgYmUgYXBwcm92ZWQgYnkgdGhlIGFwcHJvdmVycy5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgLy8gY2FyZCBmb3IgYXBwcm92ZXJzQ291bnRcbiAgICAgICAgaGVhZGVyOiBhcHByb3ZlcnNDb3VudCxcbiAgICAgICAgbWV0YTogXCJOdW1iZXIgb2YgQXBwcm92ZXJzXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiTnVtYmVyIG9mIHBlb3BsZSB3aG8gaGF2ZSBhbHJlYWR5IGRvbmF0ZWQgdG8gdGhpcyBjYW1wYWlnbi5cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgLy8gY2FyZCBmb3IgY3VycmVudCBiYWxhbmNlIChkb25hdGlvbnMpXG4gICAgICAgIGhlYWRlcjogd2ViMy51dGlscy5mcm9tV2VpKGJhbGFuY2UsIFwiZXRoZXJcIiksIC8vIGNvbnZlcnQgYmFsYW5jZSBpbnRvIGV0aGVyXG4gICAgICAgIG1ldGE6IFwiQ2FtcGFpZ24gQmFsYW5jZSAoZXRoZXIpXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgIFwiVGhlIEJhbGFuY2Ugc2hvd3MgaG93IG11Y2ggbW9uZXkgdGhpcyBjYW1wYWlnbiBoYXMgbGVmdCB0byBzcGVuZC5cIlxuICAgICAgfVxuICAgIF07XG5cbiAgICByZXR1cm4gPENhcmQuR3JvdXAgaXRlbXM9e2l0ZW1zfSAvPjtcbiAgfVxuXG4gIC8vIExlY3R1cmUxODQ6IE1ha2Ugc3VyZSB0byBjYWxsIHRoZSByZW5kZXJDYXJkcyBmdW5jdGlvbiBmcm9tIHdpdGhpbiB0aGUgcmVuZGVyIG1ldGhvZC5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8aDM+Q2FtcGFpZ24gRGV0YWlsczwvaDM+XG4gICAgICAgIDxHcmlkPlxuICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17MTB9Pnt0aGlzLnJlbmRlckNhcmRzKCl9PC9HcmlkLkNvbHVtbj5cblxuICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17Nn0+XG4gICAgICAgICAgICA8Q29udHJpYnV0ZUZvcm0gYWRkcmVzcz17dGhpcy5wcm9wcy5hZGRyZXNzfSAvPlxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ25TaG93O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvY2FtcGFpZ25zL3Nob3cuanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FBMkJBO0FBREE7QUFRQTtBQUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUUE7QUFBQTtBQUVBO0FBS0E7QUFSQTtBQUNBO0FBT0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUtBO0FBTEE7Ozs7QUFyRkE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFEQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
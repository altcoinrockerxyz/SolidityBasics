webpackHotUpdate(5,{

/***/ 726:
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

var _factory = __webpack_require__(985);

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/brownfish/github/SolidityBasics/kickstart/pages/index.js?entry";


// we need some location to fetch the data -- call our method getDeployedCampaigns
// to do that, redefine this from a functional component to a class-based component
/**
export default () => {
  return <h1>This is the campaign list page!!!</h1>;
};
**/

// use Component base class from the react library so make sure it is imported from react at the top

var CampaignIndex = function (_Component) {
  (0, _inherits3.default)(CampaignIndex, _Component);

  function CampaignIndex() {
    (0, _classCallCheck3.default)(this, CampaignIndex);

    return (0, _possibleConstructorReturn3.default)(this, (CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(CampaignIndex, [{
    key: "renderCampaigns",

    /** define component did mount method, mark as async
    async componentDidMount() {
      const campaigns = await factory.methods.getDeployedCampaigns().call(); // <-- call the function
       // add a console log to check if it works as expected
      console.log(campaigns);
    } **/

    value: function renderCampaigns() {
      // iterate
      var items = this.props.campaigns.map(function (address) {
        // array function that one individual object for each card
        return {
          header: address,
          description: _react2.default.createElement("a", { href: ".", __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            }
          }, "View Campaign"),
          fluid: true
        };
      });

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      });
    }

    /**
    Initial output
    Campaigns Index! Here is a list of campaigns: {this.props.campaigns[0]}
    Lecture 157: Paste the link tag for semantic-UI CSS
    **/

  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement("link", {
        rel: "stylesheet",
        href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }), "Campaigns Index! Here is a list of campaigns: ", this.renderCampaigns(), _react2.default.createElement(_semanticUiReact.Button, { content: "Create Campaign", icon: "add circle", primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }));
    }
  }], [{
    key: "getInitialProps",

    // define the getInitialProps function
    // static keyword allows it to be called without the need to create an instance
    // [i.e. const campaignIndex = new CampaignIndex()]
    // we skip rendering to avoid costly additional processing
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var campaigns;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _factory2.default.methods.getDeployedCampaigns().call();

              case 2:
                campaigns = _context.sent;
                return _context.abrupt("return", { campaigns: campaigns });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignIndex;
}(_react.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkJ1dHRvbiIsImZhY3RvcnkiLCJDYW1wYWlnbkluZGV4IiwiaXRlbXMiLCJwcm9wcyIsImNhbXBhaWducyIsIm1hcCIsImhlYWRlciIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsImZsdWlkIiwicmVuZGVyQ2FtcGFpZ25zIiwibWV0aG9kcyIsImdldERlcGxveWVkQ2FtcGFpZ25zIiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU07O0FBQ2YsQUFBTyxBQUFhOzs7Ozs7Ozs7QUFFcEI7QUFDQTtBQUNBOzs7Ozs7QUFNQTs7SUFDTSxBOzs7Ozs7Ozs7O1NBWUo7Ozs7Ozs7OztzQ0FRa0IsQUFDaEI7QUFDQTtVQUFNLGFBQVEsQUFBSyxNQUFMLEFBQVcsVUFBWCxBQUFxQixJQUFJLG1CQUFXLEFBQ2hEO0FBQ0E7O2tCQUFPLEFBQ0csQUFDUjt1Q0FBYSxjQUFBLE9BQUcsTUFBSCxBQUFRO3dCQUFSOzBCQUFBO0FBQUE7V0FBQSxFQUZSLEFBRVEsQUFDYjtpQkFIRixBQUFPLEFBR0UsQUFFVjtBQUxRLEFBQ0w7QUFISixBQUFjLEFBU2QsT0FUYzs7MkNBU1AsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjtvQkFBbkI7c0JBQVAsQUFBTyxBQUNSO0FBRFE7T0FBQTtBQUdUOzs7Ozs7Ozs7OzZCQU1TLEFBQ1A7NkJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQTthQUNFLEFBQ00sQUFDSjtjQUZGLEFBRU87O29CQUZQO3NCQURGLEFBQ0U7QUFBQTtBQUNFLFVBRzZDLHVEQUxqRCxBQUtpRCxBQUFLLEFBQ3BELG1DQUFBLEFBQUMseUNBQU8sU0FBUixBQUFnQixtQkFBa0IsTUFBbEMsQUFBdUMsY0FBYSxTQUFwRDtvQkFBQTtzQkFQSixBQUNFLEFBTUUsQUFHTDtBQUhLOzs7O1NBL0NOOztBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozt1QkFFMEIsa0JBQUEsQUFBUSxRQUFSLEFBQWdCLHVCQUFoQixBQUF1QyxBOzttQkFBekQ7QTtpREFJQyxFQUFFLFdBQUYsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVZpQixBLEFBc0Q1Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYnJvd25maXNoL2dpdGh1Yi9Tb2xpZGl0eUJhc2ljcy9raWNrc3RhcnQifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/brownfish/github/SolidityBasics/kickstart/pages/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/brownfish/github/SolidityBasics/kickstart/pages/index.js"); } } })();
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS40Y2IxYTNlYjliYWJmNTUzY2NlOS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/NDc2MmZkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDYXJkLCBCdXR0b24gfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBmYWN0b3J5IGZyb20gXCIuLi9ldGhlcmV1bS9mYWN0b3J5XCI7XG5cbi8vIHdlIG5lZWQgc29tZSBsb2NhdGlvbiB0byBmZXRjaCB0aGUgZGF0YSAtLSBjYWxsIG91ciBtZXRob2QgZ2V0RGVwbG95ZWRDYW1wYWlnbnNcbi8vIHRvIGRvIHRoYXQsIHJlZGVmaW5lIHRoaXMgZnJvbSBhIGZ1bmN0aW9uYWwgY29tcG9uZW50IHRvIGEgY2xhc3MtYmFzZWQgY29tcG9uZW50XG4vKipcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgcmV0dXJuIDxoMT5UaGlzIGlzIHRoZSBjYW1wYWlnbiBsaXN0IHBhZ2UhISE8L2gxPjtcbn07XG4qKi9cblxuLy8gdXNlIENvbXBvbmVudCBiYXNlIGNsYXNzIGZyb20gdGhlIHJlYWN0IGxpYnJhcnkgc28gbWFrZSBzdXJlIGl0IGlzIGltcG9ydGVkIGZyb20gcmVhY3QgYXQgdGhlIHRvcFxuY2xhc3MgQ2FtcGFpZ25JbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG4gIC8vIGRlZmluZSB0aGUgZ2V0SW5pdGlhbFByb3BzIGZ1bmN0aW9uXG4gIC8vIHN0YXRpYyBrZXl3b3JkIGFsbG93cyBpdCB0byBiZSBjYWxsZWQgd2l0aG91dCB0aGUgbmVlZCB0byBjcmVhdGUgYW4gaW5zdGFuY2VcbiAgLy8gW2kuZS4gY29uc3QgY2FtcGFpZ25JbmRleCA9IG5ldyBDYW1wYWlnbkluZGV4KCldXG4gIC8vIHdlIHNraXAgcmVuZGVyaW5nIHRvIGF2b2lkIGNvc3RseSBhZGRpdGlvbmFsIHByb2Nlc3NpbmdcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgICBjb25zdCBjYW1wYWlnbnMgPSBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMuZ2V0RGVwbG95ZWRDYW1wYWlnbnMoKS5jYWxsKCk7IC8vIDwtLSBjYWxsIHRoZSBmdW5jdGlvblxuXG4gICAgLy8gcmV0dXJuIHsgY2FtcGFpZ25zOiBjYW1wYWlnbnMgfTtcbiAgICAvLyBFUzIwMTUgY29kZSwgd2UgY2FuIGZ1cnRoZXIgY29uZGVuc2VcbiAgICByZXR1cm4geyBjYW1wYWlnbnMgfTtcbiAgfVxuICAvKiogZGVmaW5lIGNvbXBvbmVudCBkaWQgbW91bnQgbWV0aG9kLCBtYXJrIGFzIGFzeW5jXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IGNhbXBhaWducyA9IGF3YWl0IGZhY3RvcnkubWV0aG9kcy5nZXREZXBsb3llZENhbXBhaWducygpLmNhbGwoKTsgLy8gPC0tIGNhbGwgdGhlIGZ1bmN0aW9uXG5cbiAgICAvLyBhZGQgYSBjb25zb2xlIGxvZyB0byBjaGVjayBpZiBpdCB3b3JrcyBhcyBleHBlY3RlZFxuICAgIGNvbnNvbGUubG9nKGNhbXBhaWducyk7XG4gIH0gKiovXG5cbiAgcmVuZGVyQ2FtcGFpZ25zKCkge1xuICAgIC8vIGl0ZXJhdGVcbiAgICBjb25zdCBpdGVtcyA9IHRoaXMucHJvcHMuY2FtcGFpZ25zLm1hcChhZGRyZXNzID0+IHtcbiAgICAgIC8vIGFycmF5IGZ1bmN0aW9uIHRoYXQgb25lIGluZGl2aWR1YWwgb2JqZWN0IGZvciBlYWNoIGNhcmRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhlYWRlcjogYWRkcmVzcyxcbiAgICAgICAgZGVzY3JpcHRpb246IDxhIGhyZWY9XCIuXCI+VmlldyBDYW1wYWlnbjwvYT4sXG4gICAgICAgIGZsdWlkOiB0cnVlXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz47XG4gIH1cblxuICAvKipcbkluaXRpYWwgb3V0cHV0XG5DYW1wYWlnbnMgSW5kZXghIEhlcmUgaXMgYSBsaXN0IG9mIGNhbXBhaWduczoge3RoaXMucHJvcHMuY2FtcGFpZ25zWzBdfVxuXG5MZWN0dXJlIDE1NzogUGFzdGUgdGhlIGxpbmsgdGFnIGZvciBzZW1hbnRpYy1VSSBDU1NcbioqL1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj1cIi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL3NlbWFudGljLXVpLzIuMy4zL3NlbWFudGljLm1pbi5jc3NcIlxuICAgICAgICAvPlxuICAgICAgICBDYW1wYWlnbnMgSW5kZXghIEhlcmUgaXMgYSBsaXN0IG9mIGNhbXBhaWduczoge3RoaXMucmVuZGVyQ2FtcGFpZ25zKCl9XG4gICAgICAgIDxCdXR0b24gY29udGVudD1cIkNyZWF0ZSBDYW1wYWlnblwiIGljb249XCJhZGQgY2lyY2xlXCIgcHJpbWFyeSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYW1wYWlnbkluZGV4O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7Ozs7Ozs7Ozs7O0FBWUE7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQUE7QUFFQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUpBO0FBTUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUNBOzs7Ozs7Ozs7QUFNQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTs7QUFGQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBR0E7QUFIQTs7OztBQS9DQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FBRUE7QUFDQTtBQURBOztBQUlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
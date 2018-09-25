webpackHotUpdate(5,{

/***/ 732:
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

var _factory = __webpack_require__(990);

var _factory2 = _interopRequireDefault(_factory);

var _Layout = __webpack_require__(1158);

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = __webpack_require__(1160);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/brownfish/github/SolidityBasics/kickstart/pages/index.js?entry";
// import the Link helper from Routes.js file


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
        // wrap the anchor tag with a link tag
        // Use ES6 template string, back ticks NOT apostrophe
        return {
          header: address,
          description: _react2.default.createElement(_routes.Link, { route: "/campaigns/" + address, __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            }
          }, _react2.default.createElement("a", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            }
          }, "View Campaign")),
          fluid: true
        };
      });

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      });
    }

    /**
    Initial output
    Campaigns Index! Here is a list of campaigns: {this.props.campaigns[0]}
    Lecture 157: Paste the link tag for semantic-UI CSS
    **/

    /** Lecture 160
    All JSX (i.e. html contents) inside the <Layout></Layout> component
    will get passed to the Layout component as a Property called _children_
    thus it becomes _props.children_
    This means that in all the pages we make (i.e. index.js or show.js),
    we will always place the <Layout> component.
    NOTE: To place Button to right side, we add one property to it (floated="right")
    **/

  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, "Open Campaigns"), _react2.default.createElement(_routes.Link, { route: "/campaigns/new", __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        floated: "right",
        content: "Create Campaign",
        icon: "add circle",
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }))), this.renderCampaigns()));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkJ1dHRvbiIsImZhY3RvcnkiLCJMYXlvdXQiLCJMaW5rIiwiQ2FtcGFpZ25JbmRleCIsIml0ZW1zIiwicHJvcHMiLCJjYW1wYWlnbnMiLCJtYXAiLCJoZWFkZXIiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJmbHVpZCIsInJlbmRlckNhbXBhaWducyIsIm1ldGhvZHMiLCJnZXREZXBsb3llZENhbXBhaWducyIsImNhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNOztBQUNmLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVk7Ozs7QUFFbkIsQUFBUyxBQUFZOzs7OztBQURyQjs7O0FBR0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTs7SSxBQUNNOzs7Ozs7Ozs7O1NBWUo7Ozs7Ozs7OztzQ0FRa0IsQUFDaEI7QUFDQTtVQUFNLGFBQVEsQUFBSyxNQUFMLEFBQVcsVUFBWCxBQUFxQixJQUFJLG1CQUFXLEFBQ2hEO0FBQ0E7QUFDQTtBQUNBOztrQkFBTyxBQUNHLEFBQ1I7dUNBQ0UsQUFBQyw4QkFBSyx1QkFBTixBQUEyQjt3QkFBM0I7MEJBQUEsQUFDRTtBQURGO1dBQUEsa0JBQ0UsY0FBQTs7d0JBQUE7MEJBQUE7QUFBQTtBQUFBLGFBSkMsQUFHSCxBQUNFLEFBR0o7aUJBUEYsQUFBTyxBQU9FLEFBRVY7QUFUUSxBQUNMO0FBTEosQUFBYyxBQWVkLE9BZmM7OzJDQWVQLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7b0JBQW5CO3NCQUFQLEFBQU8sQUFDUjtBQURRO09BQUE7QUFHVDs7QUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBWVMsQUFDUDs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSxtQ0FBQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtvQkFBWjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQztpQkFBRCxBQUNVLEFBQ1I7aUJBRkYsQUFFVSxBQUNSO2NBSEYsQUFHTyxBQUNMO2lCQUpGOztvQkFBQTtzQkFKTixBQUVFLEFBQ0UsQUFDRSxBQVFIO0FBUkc7QUFDRSxpQkFQWixBQUNFLEFBQ0UsQUFZRyxBQUFLLEFBSWI7OztTQTdFRDs7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7dUJBRTBCLGtCQUFBLEFBQVEsUUFBUixBQUFnQix1QkFBaEIsQSxBQUF1Qzs7bUJBQXpEO0E7aURBSUMsRUFBRSxXQUFGLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFWaUIsQSxBQWlGNUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2Jyb3duZmlzaC9naXRodWIvU29saWRpdHlCYXNpY3Mva2lja3N0YXJ0In0=

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS45M2E2NzgwZTdhYzIxY2ZiNmNlYi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/NDIzNjg2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDYXJkLCBCdXR0b24gfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBmYWN0b3J5IGZyb20gXCIuLi9ldGhlcmV1bS9mYWN0b3J5XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuLy8gaW1wb3J0IHRoZSBMaW5rIGhlbHBlciBmcm9tIFJvdXRlcy5qcyBmaWxlXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcIi4uL3JvdXRlc1wiO1xuXG4vLyB3ZSBuZWVkIHNvbWUgbG9jYXRpb24gdG8gZmV0Y2ggdGhlIGRhdGEgLS0gY2FsbCBvdXIgbWV0aG9kIGdldERlcGxveWVkQ2FtcGFpZ25zXG4vLyB0byBkbyB0aGF0LCByZWRlZmluZSB0aGlzIGZyb20gYSBmdW5jdGlvbmFsIGNvbXBvbmVudCB0byBhIGNsYXNzLWJhc2VkIGNvbXBvbmVudFxuLyoqXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIHJldHVybiA8aDE+VGhpcyBpcyB0aGUgY2FtcGFpZ24gbGlzdCBwYWdlISEhPC9oMT47XG59O1xuKiovXG5cbi8vIHVzZSBDb21wb25lbnQgYmFzZSBjbGFzcyBmcm9tIHRoZSByZWFjdCBsaWJyYXJ5IHNvIG1ha2Ugc3VyZSBpdCBpcyBpbXBvcnRlZCBmcm9tIHJlYWN0IGF0IHRoZSB0b3BcbmNsYXNzIENhbXBhaWduSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuICAvLyBkZWZpbmUgdGhlIGdldEluaXRpYWxQcm9wcyBmdW5jdGlvblxuICAvLyBzdGF0aWMga2V5d29yZCBhbGxvd3MgaXQgdG8gYmUgY2FsbGVkIHdpdGhvdXQgdGhlIG5lZWQgdG8gY3JlYXRlIGFuIGluc3RhbmNlXG4gIC8vIFtpLmUuIGNvbnN0IGNhbXBhaWduSW5kZXggPSBuZXcgQ2FtcGFpZ25JbmRleCgpXVxuICAvLyB3ZSBza2lwIHJlbmRlcmluZyB0byBhdm9pZCBjb3N0bHkgYWRkaXRpb25hbCBwcm9jZXNzaW5nXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XG4gICAgY29uc3QgY2FtcGFpZ25zID0gYXdhaXQgZmFjdG9yeS5tZXRob2RzLmdldERlcGxveWVkQ2FtcGFpZ25zKCkuY2FsbCgpOyAvLyA8LS0gY2FsbCB0aGUgZnVuY3Rpb25cblxuICAgIC8vIHJldHVybiB7IGNhbXBhaWduczogY2FtcGFpZ25zIH07XG4gICAgLy8gRVMyMDE1IGNvZGUsIHdlIGNhbiBmdXJ0aGVyIGNvbmRlbnNlXG4gICAgcmV0dXJuIHsgY2FtcGFpZ25zIH07XG4gIH1cbiAgLyoqIGRlZmluZSBjb21wb25lbnQgZGlkIG1vdW50IG1ldGhvZCwgbWFyayBhcyBhc3luY1xuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBjYW1wYWlnbnMgPSBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMuZ2V0RGVwbG95ZWRDYW1wYWlnbnMoKS5jYWxsKCk7IC8vIDwtLSBjYWxsIHRoZSBmdW5jdGlvblxuXG4gICAgLy8gYWRkIGEgY29uc29sZSBsb2cgdG8gY2hlY2sgaWYgaXQgd29ya3MgYXMgZXhwZWN0ZWRcbiAgICBjb25zb2xlLmxvZyhjYW1wYWlnbnMpO1xuICB9ICoqL1xuXG4gIHJlbmRlckNhbXBhaWducygpIHtcbiAgICAvLyBpdGVyYXRlXG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLnByb3BzLmNhbXBhaWducy5tYXAoYWRkcmVzcyA9PiB7XG4gICAgICAvLyBhcnJheSBmdW5jdGlvbiB0aGF0IG9uZSBpbmRpdmlkdWFsIG9iamVjdCBmb3IgZWFjaCBjYXJkXG4gICAgICAvLyB3cmFwIHRoZSBhbmNob3IgdGFnIHdpdGggYSBsaW5rIHRhZ1xuICAgICAgLy8gVXNlIEVTNiB0ZW1wbGF0ZSBzdHJpbmcsIGJhY2sgdGlja3MgTk9UIGFwb3N0cm9waGVcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhlYWRlcjogYWRkcmVzcyxcbiAgICAgICAgZGVzY3JpcHRpb246IChcbiAgICAgICAgICA8TGluayByb3V0ZT17YC9jYW1wYWlnbnMvJHthZGRyZXNzfWB9PlxuICAgICAgICAgICAgPGE+VmlldyBDYW1wYWlnbjwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICksXG4gICAgICAgIGZsdWlkOiB0cnVlXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz47XG4gIH1cblxuICAvKipcbkluaXRpYWwgb3V0cHV0XG5DYW1wYWlnbnMgSW5kZXghIEhlcmUgaXMgYSBsaXN0IG9mIGNhbXBhaWduczoge3RoaXMucHJvcHMuY2FtcGFpZ25zWzBdfVxuXG5MZWN0dXJlIDE1NzogUGFzdGUgdGhlIGxpbmsgdGFnIGZvciBzZW1hbnRpYy1VSSBDU1NcbioqL1xuXG4gIC8qKiBMZWN0dXJlIDE2MFxuXG5BbGwgSlNYIChpLmUuIGh0bWwgY29udGVudHMpIGluc2lkZSB0aGUgPExheW91dD48L0xheW91dD4gY29tcG9uZW50XG53aWxsIGdldCBwYXNzZWQgdG8gdGhlIExheW91dCBjb21wb25lbnQgYXMgYSBQcm9wZXJ0eSBjYWxsZWQgX2NoaWxkcmVuX1xudGh1cyBpdCBiZWNvbWVzIF9wcm9wcy5jaGlsZHJlbl9cblxuVGhpcyBtZWFucyB0aGF0IGluIGFsbCB0aGUgcGFnZXMgd2UgbWFrZSAoaS5lLiBpbmRleC5qcyBvciBzaG93LmpzKSxcbndlIHdpbGwgYWx3YXlzIHBsYWNlIHRoZSA8TGF5b3V0PiBjb21wb25lbnQuXG5cbk5PVEU6IFRvIHBsYWNlIEJ1dHRvbiB0byByaWdodCBzaWRlLCB3ZSBhZGQgb25lIHByb3BlcnR5IHRvIGl0IChmbG9hdGVkPVwicmlnaHRcIilcblxuKiovXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDM+T3BlbiBDYW1wYWlnbnM8L2gzPlxuICAgICAgICAgIDxMaW5rIHJvdXRlPVwiL2NhbXBhaWducy9uZXdcIj5cbiAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgZmxvYXRlZD1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgICBjb250ZW50PVwiQ3JlYXRlIENhbXBhaWduXCJcbiAgICAgICAgICAgICAgICBpY29uPVwiYWRkIGNpcmNsZVwiXG4gICAgICAgICAgICAgICAgcHJpbWFyeVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJDYW1wYWlnbnMoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhbXBhaWduSW5kZXg7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7O0FBRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBOzs7Ozs7Ozs7OztBQVlBO0FBQ0E7Ozs7Ozs7O0FBUUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBUkE7QUFVQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQ0E7QUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFKQTs7QUFBQTtBQVFBO0FBUkE7QUFDQTs7O0FBbEVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBREE7O0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
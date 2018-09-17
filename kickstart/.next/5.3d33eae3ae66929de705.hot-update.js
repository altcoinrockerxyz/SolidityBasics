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

var _Layout = __webpack_require__(1153);

var _Layout2 = _interopRequireDefault(_Layout);

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
              lineNumber: 41
            }
          }, "View Campaign"),
          fluid: true
        };
      });

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 46
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
    **/

  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement("link", {
        rel: "stylesheet",
        href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }), _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, "Open Campaigns"), "Campaigns Index! Here is a list of campaigns: ", this.renderCampaigns(), _react2.default.createElement(_semanticUiReact.Button, { content: "Create Campaign", icon: "add circle", primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkJ1dHRvbiIsImZhY3RvcnkiLCJMYXlvdXQiLCJDYW1wYWlnbkluZGV4IiwiaXRlbXMiLCJwcm9wcyIsImNhbXBhaWducyIsIm1hcCIsImhlYWRlciIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsImZsdWlkIiwicmVuZGVyQ2FtcGFpZ25zIiwibWV0aG9kcyIsImdldERlcGxveWVkQ2FtcGFpZ25zIiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU07O0FBQ2YsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBWTs7Ozs7Ozs7O0FBRW5CO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7O0ksQUFDTTs7Ozs7Ozs7OztTQVlKOzs7Ozs7Ozs7c0NBUWtCLEFBQ2hCO0FBQ0E7VUFBTSxhQUFRLEFBQUssTUFBTCxBQUFXLFVBQVgsQUFBcUIsSUFBSSxtQkFBVyxBQUNoRDtBQUNBOztrQkFBTyxBQUNHLEFBQ1I7dUNBQWEsY0FBQSxPQUFHLE1BQUgsQUFBUTt3QkFBUjswQkFBQTtBQUFBO1dBQUEsRUFGUixBQUVRLEFBQ2I7aUJBSEYsQUFBTyxBQUdFLEFBRVY7QUFMUSxBQUNMO0FBSEosQUFBYyxBQVNkLE9BVGM7OzJDQVNQLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7b0JBQW5CO3NCQUFQLEFBQU8sQUFDUjtBQURRO09BQUE7QUFHVDs7QUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFVUyxBQUNQOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUE7YUFDRSxBQUNNLEFBQ0o7Y0FGRixBQUVPOztvQkFGUDtzQkFERixBQUNFLEFBSUE7QUFKQTtBQUNFLDBCQUdGLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUxGLEFBS0UsbUJBQytDLHVEQU5qRCxBQU1pRCxBQUFLLEFBQ3BELG1DQUFBLEFBQUMseUNBQU8sU0FBUixBQUFnQixtQkFBa0IsTUFBbEMsQUFBdUMsY0FBYSxTQUFwRDtvQkFBQTtzQkFUTixBQUNFLEFBQ0UsQUFPRSxBQUlQO0FBSk87Ozs7U0E1RFI7O0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O3VCQUUwQixrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsdUJBQWhCLEFBQXVDLEE7O21CQUF6RDtBO2lEQUlDLEVBQUUsV0FBRixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVmlCLEEsQUFvRTVCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9icm93bmZpc2gvZ2l0aHViL1NvbGlkaXR5QmFzaWNzL2tpY2tzdGFydCJ9

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4zZDMzZWFlM2FlNjY5MjlkZTcwNS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/ODhkYzc3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDYXJkLCBCdXR0b24gfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBmYWN0b3J5IGZyb20gXCIuLi9ldGhlcmV1bS9mYWN0b3J5XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuXG4vLyB3ZSBuZWVkIHNvbWUgbG9jYXRpb24gdG8gZmV0Y2ggdGhlIGRhdGEgLS0gY2FsbCBvdXIgbWV0aG9kIGdldERlcGxveWVkQ2FtcGFpZ25zXG4vLyB0byBkbyB0aGF0LCByZWRlZmluZSB0aGlzIGZyb20gYSBmdW5jdGlvbmFsIGNvbXBvbmVudCB0byBhIGNsYXNzLWJhc2VkIGNvbXBvbmVudFxuLyoqXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIHJldHVybiA8aDE+VGhpcyBpcyB0aGUgY2FtcGFpZ24gbGlzdCBwYWdlISEhPC9oMT47XG59O1xuKiovXG5cbi8vIHVzZSBDb21wb25lbnQgYmFzZSBjbGFzcyBmcm9tIHRoZSByZWFjdCBsaWJyYXJ5IHNvIG1ha2Ugc3VyZSBpdCBpcyBpbXBvcnRlZCBmcm9tIHJlYWN0IGF0IHRoZSB0b3BcbmNsYXNzIENhbXBhaWduSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuICAvLyBkZWZpbmUgdGhlIGdldEluaXRpYWxQcm9wcyBmdW5jdGlvblxuICAvLyBzdGF0aWMga2V5d29yZCBhbGxvd3MgaXQgdG8gYmUgY2FsbGVkIHdpdGhvdXQgdGhlIG5lZWQgdG8gY3JlYXRlIGFuIGluc3RhbmNlXG4gIC8vIFtpLmUuIGNvbnN0IGNhbXBhaWduSW5kZXggPSBuZXcgQ2FtcGFpZ25JbmRleCgpXVxuICAvLyB3ZSBza2lwIHJlbmRlcmluZyB0byBhdm9pZCBjb3N0bHkgYWRkaXRpb25hbCBwcm9jZXNzaW5nXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XG4gICAgY29uc3QgY2FtcGFpZ25zID0gYXdhaXQgZmFjdG9yeS5tZXRob2RzLmdldERlcGxveWVkQ2FtcGFpZ25zKCkuY2FsbCgpOyAvLyA8LS0gY2FsbCB0aGUgZnVuY3Rpb25cblxuICAgIC8vIHJldHVybiB7IGNhbXBhaWduczogY2FtcGFpZ25zIH07XG4gICAgLy8gRVMyMDE1IGNvZGUsIHdlIGNhbiBmdXJ0aGVyIGNvbmRlbnNlXG4gICAgcmV0dXJuIHsgY2FtcGFpZ25zIH07XG4gIH1cbiAgLyoqIGRlZmluZSBjb21wb25lbnQgZGlkIG1vdW50IG1ldGhvZCwgbWFyayBhcyBhc3luY1xuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBjYW1wYWlnbnMgPSBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMuZ2V0RGVwbG95ZWRDYW1wYWlnbnMoKS5jYWxsKCk7IC8vIDwtLSBjYWxsIHRoZSBmdW5jdGlvblxuXG4gICAgLy8gYWRkIGEgY29uc29sZSBsb2cgdG8gY2hlY2sgaWYgaXQgd29ya3MgYXMgZXhwZWN0ZWRcbiAgICBjb25zb2xlLmxvZyhjYW1wYWlnbnMpO1xuICB9ICoqL1xuXG4gIHJlbmRlckNhbXBhaWducygpIHtcbiAgICAvLyBpdGVyYXRlXG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLnByb3BzLmNhbXBhaWducy5tYXAoYWRkcmVzcyA9PiB7XG4gICAgICAvLyBhcnJheSBmdW5jdGlvbiB0aGF0IG9uZSBpbmRpdmlkdWFsIG9iamVjdCBmb3IgZWFjaCBjYXJkXG4gICAgICByZXR1cm4ge1xuICAgICAgICBoZWFkZXI6IGFkZHJlc3MsXG4gICAgICAgIGRlc2NyaXB0aW9uOiA8YSBocmVmPVwiLlwiPlZpZXcgQ2FtcGFpZ248L2E+LFxuICAgICAgICBmbHVpZDogdHJ1ZVxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIHJldHVybiA8Q2FyZC5Hcm91cCBpdGVtcz17aXRlbXN9IC8+O1xuICB9XG5cbiAgLyoqXG5Jbml0aWFsIG91dHB1dFxuQ2FtcGFpZ25zIEluZGV4ISBIZXJlIGlzIGEgbGlzdCBvZiBjYW1wYWlnbnM6IHt0aGlzLnByb3BzLmNhbXBhaWduc1swXX1cblxuTGVjdHVyZSAxNTc6IFBhc3RlIHRoZSBsaW5rIHRhZyBmb3Igc2VtYW50aWMtVUkgQ1NTXG4qKi9cblxuICAvKiogTGVjdHVyZSAxNjBcblxuQWxsIEpTWCAoaS5lLiBodG1sIGNvbnRlbnRzKSBpbnNpZGUgdGhlIDxMYXlvdXQ+PC9MYXlvdXQ+IGNvbXBvbmVudFxud2lsbCBnZXQgcGFzc2VkIHRvIHRoZSBMYXlvdXQgY29tcG9uZW50IGFzIGEgUHJvcGVydHkgY2FsbGVkIF9jaGlsZHJlbl9cbnRodXMgaXQgYmVjb21lcyBfcHJvcHMuY2hpbGRyZW5fXG5cblRoaXMgbWVhbnMgdGhhdCBpbiBhbGwgdGhlIHBhZ2VzIHdlIG1ha2UgKGkuZS4gaW5kZXguanMgb3Igc2hvdy5qcyksXG53ZSB3aWxsIGFsd2F5cyBwbGFjZSB0aGUgPExheW91dD4gY29tcG9uZW50LlxuXG4qKi9cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAgIGhyZWY9XCIvL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zZW1hbnRpYy11aS8yLjMuMy9zZW1hbnRpYy5taW4uY3NzXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxoMz5PcGVuIENhbXBhaWduczwvaDM+XG4gICAgICAgICAgQ2FtcGFpZ25zIEluZGV4ISBIZXJlIGlzIGEgbGlzdCBvZiBjYW1wYWlnbnM6IHt0aGlzLnJlbmRlckNhbXBhaWducygpfVxuICAgICAgICAgIDxCdXR0b24gY29udGVudD1cIkNyZWF0ZSBDYW1wYWlnblwiIGljb249XCJhZGQgY2lyY2xlXCIgcHJpbWFyeSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ25JbmRleDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBOzs7Ozs7Ozs7OztBQVlBO0FBQ0E7Ozs7Ozs7O0FBUUE7QUFDQTtBQUFBO0FBRUE7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFKQTtBQU1BO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFDQTtBQU1BOzs7Ozs7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQUE7O0FBRkE7QUFJQTtBQUpBO0FBQ0E7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUlBO0FBSkE7Ozs7QUE1REE7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFEQTs7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
webpackHotUpdate(5,{

/***/ 391:
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

var _factory = __webpack_require__(498);

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
    key: "render",

    /** define component did mount method, mark as async
    async componentDidMount() {
      const campaigns = await factory.methods.getDeployedCampaigns().call(); // <-- call the function
       // add a console log to check if it works as expected
      console.log(campaigns);
    } **/

    value: function render() {
      return _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, "Campaigns Index! Here is a list of campaigns: ", this.props.campaigns[0]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZmFjdG9yeSIsIkNhbXBhaWduSW5kZXgiLCJwcm9wcyIsImNhbXBhaWducyIsIm1ldGhvZHMiLCJnZXREZXBsb3llZENhbXBhaWducyIsImNhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFhOzs7Ozs7Ozs7QUFFcEI7QUFDQTtBQUNBOzs7Ozs7QUFNQTs7SUFDTSxBOzs7Ozs7Ozs7O1NBWUo7Ozs7Ozs7Ozs2QkFRUyxBQUNQOzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxPQUFBLEVBQ2lELHVEQUFBLEFBQUssTUFBTCxBQUFXLFVBRjlELEFBQ0UsQUFDaUQsQUFBcUIsQUFHekU7OztTQXpCRDs7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7dUJBRTBCLGtCQUFBLEFBQVEsUUFBUixBQUFnQix1QkFBdUIsQSxBQUF2Qzs7bUJBQWxCO0E7aURBSUMsRUFBRSxXLEFBQUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFWaUIsQSxBQTZCNUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2Jyb3duZmlzaC9naXRodWIvU29saWRpdHlCYXNpY3Mva2lja3N0YXJ0In0=

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4zYjhlNTA5NzkyNDI3NmFhZjA5My5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/MWI5N2U5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZmFjdG9yeSBmcm9tIFwiLi4vZXRoZXJldW0vZmFjdG9yeVwiO1xuXG4vLyB3ZSBuZWVkIHNvbWUgbG9jYXRpb24gdG8gZmV0Y2ggdGhlIGRhdGEgLS0gY2FsbCBvdXIgbWV0aG9kIGdldERlcGxveWVkQ2FtcGFpZ25zXG4vLyB0byBkbyB0aGF0LCByZWRlZmluZSB0aGlzIGZyb20gYSBmdW5jdGlvbmFsIGNvbXBvbmVudCB0byBhIGNsYXNzLWJhc2VkIGNvbXBvbmVudFxuLyoqXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIHJldHVybiA8aDE+VGhpcyBpcyB0aGUgY2FtcGFpZ24gbGlzdCBwYWdlISEhPC9oMT47XG59O1xuKiovXG5cbi8vIHVzZSBDb21wb25lbnQgYmFzZSBjbGFzcyBmcm9tIHRoZSByZWFjdCBsaWJyYXJ5IHNvIG1ha2Ugc3VyZSBpdCBpcyBpbXBvcnRlZCBmcm9tIHJlYWN0IGF0IHRoZSB0b3BcbmNsYXNzIENhbXBhaWduSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuICAvLyBkZWZpbmUgdGhlIGdldEluaXRpYWxQcm9wcyBmdW5jdGlvblxuICAvLyBzdGF0aWMga2V5d29yZCBhbGxvd3MgaXQgdG8gYmUgY2FsbGVkIHdpdGhvdXQgdGhlIG5lZWQgdG8gY3JlYXRlIGFuIGluc3RhbmNlXG4gIC8vIFtpLmUuIGNvbnN0IGNhbXBhaWduSW5kZXggPSBuZXcgQ2FtcGFpZ25JbmRleCgpXVxuICAvLyB3ZSBza2lwIHJlbmRlcmluZyB0byBhdm9pZCBjb3N0bHkgYWRkaXRpb25hbCBwcm9jZXNzaW5nXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XG4gICAgY29uc3QgY2FtcGFpZ25zID0gYXdhaXQgZmFjdG9yeS5tZXRob2RzLmdldERlcGxveWVkQ2FtcGFpZ25zKCkuY2FsbCgpOyAvLyA8LS0gY2FsbCB0aGUgZnVuY3Rpb25cblxuICAgIC8vIHJldHVybiB7IGNhbXBhaWduczogY2FtcGFpZ25zIH07XG4gICAgLy8gRVMyMDE1IGNvZGUsIHdlIGNhbiBmdXJ0aGVyIGNvbmRlbnNlXG4gICAgcmV0dXJuIHsgY2FtcGFpZ25zIH07XG4gIH1cbiAgLyoqIGRlZmluZSBjb21wb25lbnQgZGlkIG1vdW50IG1ldGhvZCwgbWFyayBhcyBhc3luY1xuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBjYW1wYWlnbnMgPSBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMuZ2V0RGVwbG95ZWRDYW1wYWlnbnMoKS5jYWxsKCk7IC8vIDwtLSBjYWxsIHRoZSBmdW5jdGlvblxuXG4gICAgLy8gYWRkIGEgY29uc29sZSBsb2cgdG8gY2hlY2sgaWYgaXQgd29ya3MgYXMgZXhwZWN0ZWRcbiAgICBjb25zb2xlLmxvZyhjYW1wYWlnbnMpO1xuICB9ICoqL1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgQ2FtcGFpZ25zIEluZGV4ISBIZXJlIGlzIGEgbGlzdCBvZiBjYW1wYWlnbnM6IHt0aGlzLnByb3BzLmNhbXBhaWduc1swXX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ25JbmRleDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7Ozs7Ozs7Ozs7O0FBWUE7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFyQkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFEQTs7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
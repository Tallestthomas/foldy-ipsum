webpackHotUpdate(4,{

/***/ "./index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var TerryIpsum = new GenerateNewText();

function GenerateNewText() {
  this.single = ['flap', 'fold', 'hold', 'folds', 'holds', 'flaps'];
  this.words = ['foldy', 'holdy', 'flappy'];
  this.beginning = ['Grab my', 'Touch my', 'Hold my'];
}

GenerateNewText.prototype.getNewSentence = function () {
  var beginning = this.beginning[Math.floor(Math.random() * this.beginning.length)];
  var sentenceLength = Math.floor(Math.random() * Math.floor(3)) + 1;
  var sentence = [beginning];

  if (Math.round(Math.random()) === 1 || sentenceLength === 1) {
    sentence.push('terry');
  }

  if (sentenceLength > 1) {
    for (var i = 0; i < sentenceLength; i++) {
      var word = this.words[Math.floor(Math.random() * this.words.length)];

      if (sentence.includes(word)) {
        break;
      }

      sentence.push(word);
    }
  }

  sentence.push(this.single[Math.floor(Math.random() * this.single.length)]);
  var newSentence = sentence.join(' ');
  return newSentence + '.';
};

GenerateNewText.prototype.getParagraph = function () {
  var sentences = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
  var paragraph = [];

  for (var i = 0; i < sentences; i++) {
    paragraph.push(this.getNewSentence());
  }

  return paragraph.join(' ');
};

GenerateNewText.prototype.getAllParagraphs = function () {
  var paragraphs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
};

/* unused harmony default export */ var _unused_webpack_default_export = (TerryIpsum);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__("./index.js");
var _jsxFileName = "/Users/trasmussen/dev/terry-ipsum/pages/index.js";



var App = function App() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, "App");
};

/* harmony default export */ __webpack_exports__["default"] = (App);
    (function (Component, route) {
      if(!Component) return
      if (false) return
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
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.4798bab0038d3f3dad64.hot-update.js.map
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

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

/* harmony default export */ __webpack_exports__["a"] = (TerryIpsum);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__("./index.js");
var _jsxFileName = "/Users/trasmussen/dev/terry-ipsum/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));
    Object.defineProperty(_assertThisInitialized(_this), "sentenceClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        event.preventDefault();

        _this.setState({
          text: __WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */].getNewSentence()
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "paragraphClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        event.preventDefault();

        _this.setState({
          text: __WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */].getParagraph(_this.state.numberOfSentences)
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handleInputChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        var numberOfSentences = event.target.validity.valid ? event.target.value : _this.state.numberOfSentences;

        _this.setState({
          numberOfSentences: numberOfSentences
        });
      }
    });
    _this.state = {
      text: '',
      numberOfSentences: 5,
      numberOfParagraphs: 2
    };
    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        onClick: this.sentenceClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, "Generate New Sentence"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
        onClick: this.paragraphClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, "Get paragraphs"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
        name: "numberOfSentences",
        type: "text",
        pattern: "[0-9]*",
        onChange: this.handleInputChange,
        placeholder: "Number of Sentences (default 5)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, this.state.text));
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
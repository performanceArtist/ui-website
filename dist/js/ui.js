/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"ui": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/views/ui/ui.js","commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/static/images/animal.jpg":
/*!**************************************!*\
  !*** ./src/static/images/animal.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/animal.jpg";

/***/ }),

/***/ "./src/static/images/bear.jpg":
/*!************************************!*\
  !*** ./src/static/images/bear.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/bear.jpg";

/***/ }),

/***/ "./src/static/images/orang.jpg":
/*!*************************************!*\
  !*** ./src/static/images/orang.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/orang.jpg";

/***/ }),

/***/ "./src/static/images/ricardo.jpg":
/*!***************************************!*\
  !*** ./src/static/images/ricardo.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/ricardo.jpg";

/***/ }),

/***/ "./src/static/videos/bunny.mp4":
/*!*************************************!*\
  !*** ./src/static/videos/bunny.mp4 ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "videos/bunny.mp4";

/***/ }),

/***/ "./src/views/ui/ui.js":
/*!****************************!*\
  !*** ./src/views/ui/ui.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles */ "./src/styles.js");
/* harmony import */ var _ui_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui.scss */ "./src/views/ui/ui.scss");
/* harmony import */ var _ui_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ui_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_images_ricardo_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static/images/ricardo.jpg */ "./src/static/images/ricardo.jpg");
/* harmony import */ var _static_images_ricardo_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_images_ricardo_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_images_animal_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static/images/animal.jpg */ "./src/static/images/animal.jpg");
/* harmony import */ var _static_images_animal_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_images_animal_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_images_bear_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../static/images/bear.jpg */ "./src/static/images/bear.jpg");
/* harmony import */ var _static_images_bear_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_images_bear_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _static_images_orang_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../static/images/orang.jpg */ "./src/static/images/orang.jpg");
/* harmony import */ var _static_images_orang_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_static_images_orang_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _static_videos_bunny_mp4__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../static/videos/bunny.mp4 */ "./src/static/videos/bunny.mp4");
/* harmony import */ var _static_videos_bunny_mp4__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_static_videos_bunny_mp4__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _scripts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../scripts */ "./src/scripts.js");









window.onload = function init() {
  // automatically adds ripple to the elements with custom 'ripple' attribute
  _scripts__WEBPACK_IMPORTED_MODULE_7__["ripple"](); // defaults

  _scripts__WEBPACK_IMPORTED_MODULE_7__["chart"].percent('.circle');
  _scripts__WEBPACK_IMPORTED_MODULE_7__["chart"].pie('.pie'); // override defaults
  // same principle applies to some other modules, such as 'slider'

  /*
    chart.percent('.circle', {fill: 'red'});
    chart.pie('.pie', {fill: {
        sectors: [
            ['red', 0.3],
            ['blue', 0.5],
            ['black', 0.8],
            ['white', 1.0]
            ]
        }
    });
    */

  _scripts__WEBPACK_IMPORTED_MODULE_7__["slider"].slider1('.slider-1');
  _scripts__WEBPACK_IMPORTED_MODULE_7__["slider"].slider2('.slider-2');
  $.switcher('.toggle-switch');
  _scripts__WEBPACK_IMPORTED_MODULE_7__["messageForm"]('.message-form');
  _scripts__WEBPACK_IMPORTED_MODULE_7__["datepicker"]('.calendar');
  $('#stage-test').progressbar({
    // ~: failed
    // @: current
    steps: ['Step 1', 'Step 2', '@Step 3 (Current)', 'Step 4', 'Step 5']
  });
  _scripts__WEBPACK_IMPORTED_MODULE_7__["myMap"]('map');
  _scripts__WEBPACK_IMPORTED_MODULE_7__["video"]();
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/views/ui/ui.scss":
/*!******************************!*\
  !*** ./src/views/ui/ui.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=ui.js.map
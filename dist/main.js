/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Chakra Petch", sans-serif;
}

:root {
}

body {
  min-height: 100vh;
  background-color: navy;
}

#root {
  min-height: inherit;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 0.5fr 5fr 0.5fr;
  gap: 1rem;
}

header,
footer {
  background-color: #d0ccd0;
  grid-column: 1/3;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

header {
  grid-row: 1/2;
}

header h1 {
  font-size: 4rem;
  letter-spacing: 0.3rem;
}

#controls {
  grid-column: 1/3;
  grid-row: 2/3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #d0ccd0;
  gap: 1rem;
}

content {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  grid-row: 3/4;
  grid-column: 1/3;
}

footer {
  grid-row: 4/5;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;EACV,uCAAuC;AACzC;;AAEA;AACA;;AAEA;EACE,iBAAiB;EACjB,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,8BAA8B;EAC9B,uCAAuC;EACvC,SAAS;AACX;;AAEA;;EAEE,yBAAyB;EACzB,gBAAgB;EAChB,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,cAAc;EACd,SAAS;AACX;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,uBAAuB;EACvB,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf","sourcesContent":["* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: \"Chakra Petch\", sans-serif;\n}\n\n:root {\n}\n\nbody {\n  min-height: 100vh;\n  background-color: navy;\n}\n\n#root {\n  min-height: inherit;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 0.5fr 5fr 0.5fr;\n  gap: 1rem;\n}\n\nheader,\nfooter {\n  background-color: #d0ccd0;\n  grid-column: 1/3;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nheader {\n  grid-row: 1/2;\n}\n\nheader h1 {\n  font-size: 4rem;\n  letter-spacing: 0.3rem;\n}\n\n#controls {\n  grid-column: 1/3;\n  grid-row: 2/3;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  color: #d0ccd0;\n  gap: 1rem;\n}\n\ncontent {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  grid-row: 3/4;\n  grid-column: 1/3;\n}\n\nfooter {\n  grid-row: 4/5;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/ui/attackScreen.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/ui/attackScreen.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.grid-gap {
  gap: 2rem;
}

.directions-container {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  background-color: rgb(87, 96, 99);
  padding: 1rem;
  border-radius: 1rem;
  min-width: 60%;
  border: 2px solid #d0ccd0;
}

.player-grid,
.computer-grid {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1rem;
  color: #d0ccd0;
  font-size: 1.25rem;
}

.computer-grid > .grid-container > .grid-col > .grid-square:hover {
  cursor: crosshair;
}
.computer-grid > .grid-container > .grid-col > .flex-centered:hover {
  cursor: not-allowed;
}

.ship {
  background-color: aqua;
}
.flex-centered {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hit-circle,
.miss-circle {
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
}

.hit-circle {
  background-color: red;
}

.typing-effect {
  overflow: hidden;
  border-right: 0.15em solid orange;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.1em;
  animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: rgb(87, 96, 99);
  }
}
`, "",{"version":3,"sources":["webpack://./src/ui/attackScreen.css"],"names":[],"mappings":"AAAA;EACE,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,iBAAiB;EACjB,iCAAiC;EACjC,aAAa;EACb,mBAAmB;EACnB,cAAc;EACd,yBAAyB;AAC3B;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,SAAS;EACT,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;AACnB;AACA;EACE,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;;EAEE,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;EAChB,iCAAiC;EACjC,mBAAmB;EACnB,cAAc;EACd,qBAAqB;EACrB,0EAA0E;AAC5E;;AAEA;EACE;IACE,QAAQ;EACV;EACA;IACE,WAAW;EACb;AACF;;AAEA;EACE;;IAEE,yBAAyB;EAC3B;EACA;IACE,6BAA6B;EAC/B;AACF","sourcesContent":[".grid-gap {\n  gap: 2rem;\n}\n\n.directions-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.8rem;\n  background-color: rgb(87, 96, 99);\n  padding: 1rem;\n  border-radius: 1rem;\n  min-width: 60%;\n  border: 2px solid #d0ccd0;\n}\n\n.player-grid,\n.computer-grid {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  gap: 1rem;\n  color: #d0ccd0;\n  font-size: 1.25rem;\n}\n\n.computer-grid > .grid-container > .grid-col > .grid-square:hover {\n  cursor: crosshair;\n}\n.computer-grid > .grid-container > .grid-col > .flex-centered:hover {\n  cursor: not-allowed;\n}\n\n.ship {\n  background-color: aqua;\n}\n.flex-centered {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.hit-circle,\n.miss-circle {\n  width: 20px;\n  height: 20px;\n  background-color: white;\n  border-radius: 50%;\n}\n\n.hit-circle {\n  background-color: red;\n}\n\n.typing-effect {\n  overflow: hidden;\n  border-right: 0.15em solid orange;\n  white-space: nowrap;\n  margin: 0 auto;\n  letter-spacing: 0.1em;\n  animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;\n}\n\n@keyframes typing {\n  from {\n    width: 0;\n  }\n  to {\n    width: 100%;\n  }\n}\n\n@keyframes blink-caret {\n  from,\n  to {\n    border-color: transparent;\n  }\n  50% {\n    border-color: rgb(87, 96, 99);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/ui/placeShipScreen.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/ui/placeShipScreen.css ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.grid-container {
  display: flex;
  gap: 0.2rem;
}

.grid-col {
  flex-direction: column;
}

.grid-square {
  height: 45px;
  width: 45px;
  border: 1px solid white;
  margin-bottom: 0.2rem;
}

.ship-highlight {
  background-color: lightblue;
}

.ship-placed {
  background-color: lightblue;
}

.ship-highlight-error {
  background-color: red;
  cursor: not-allowed;
}

.change-direction-btn {
  width: 15%;
  height: 30px;
}

.align-items-center {
  align-items: center;
}

#directionText {
  font-size: 1.7rem;
}
`, "",{"version":3,"sources":["webpack://./src/ui/placeShipScreen.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,WAAW;AACb;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,uBAAuB;EACvB,qBAAqB;AACvB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,YAAY;AACd;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB","sourcesContent":[".grid-container {\n  display: flex;\n  gap: 0.2rem;\n}\n\n.grid-col {\n  flex-direction: column;\n}\n\n.grid-square {\n  height: 45px;\n  width: 45px;\n  border: 1px solid white;\n  margin-bottom: 0.2rem;\n}\n\n.ship-highlight {\n  background-color: lightblue;\n}\n\n.ship-placed {\n  background-color: lightblue;\n}\n\n.ship-highlight-error {\n  background-color: red;\n  cursor: not-allowed;\n}\n\n.change-direction-btn {\n  width: 15%;\n  height: 30px;\n}\n\n.align-items-center {\n  align-items: center;\n}\n\n#directionText {\n  font-size: 1.7rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/ui/startScreen.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/ui/startScreen.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.start-screen-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 20%;
  color: #d0ccd0;
  text-align: center;
}

.start-screen-container label {
  font-size: 1.5rem;
}

.start-screen-container input {
  height: 40px;
  width: 100%;
  padding-left: 5px;
  background-color: #d0ccd0;
}

.start-screen-container button {
  width: 100%;
  height: 25px;
  background-color: #d0ccd0;
}

.error-msg {
  color: red;
}

.error {
  border: 1px solid red;
  outline: 1px solid red;
}
`, "",{"version":3,"sources":["webpack://./src/ui/startScreen.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,UAAU;EACV,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,iBAAiB;EACjB,yBAAyB;AAC3B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,qBAAqB;EACrB,sBAAsB;AACxB","sourcesContent":[".start-screen-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  width: 20%;\n  color: #d0ccd0;\n  text-align: center;\n}\n\n.start-screen-container label {\n  font-size: 1.5rem;\n}\n\n.start-screen-container input {\n  height: 40px;\n  width: 100%;\n  padding-left: 5px;\n  background-color: #d0ccd0;\n}\n\n.start-screen-container button {\n  width: 100%;\n  height: 25px;\n  background-color: #d0ccd0;\n}\n\n.error-msg {\n  color: red;\n}\n\n.error {\n  border: 1px solid red;\n  outline: 1px solid red;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/ui/attackScreen.css":
/*!*********************************!*\
  !*** ./src/ui/attackScreen.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_attackScreen_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./attackScreen.css */ "./node_modules/css-loader/dist/cjs.js!./src/ui/attackScreen.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_attackScreen_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_attackScreen_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_attackScreen_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_attackScreen_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/ui/placeShipScreen.css":
/*!************************************!*\
  !*** ./src/ui/placeShipScreen.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_placeShipScreen_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./placeShipScreen.css */ "./node_modules/css-loader/dist/cjs.js!./src/ui/placeShipScreen.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_placeShipScreen_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_placeShipScreen_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_placeShipScreen_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_placeShipScreen_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/ui/startScreen.css":
/*!********************************!*\
  !*** ./src/ui/startScreen.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_startScreen_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./startScreen.css */ "./node_modules/css-loader/dist/cjs.js!./src/ui/startScreen.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_startScreen_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_startScreen_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_startScreen_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_startScreen_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/game logic/gameboard.js":
/*!*************************************!*\
  !*** ./src/game logic/gameboard.js ***!
  \*************************************/
/***/ ((module) => {

class GameBoard {
  #board = this.#createBoard();
  #shipsOnBoard = [];

  constructor() {}

  get board() {
    return this.#board;
  }

  get shipsOnBoard() {
    return this.#shipsOnBoard;
  }

  #createBoard() {
    let board = [];
    for (let i = 0; i < 10; i++) {
      board.push([]);
      for (let j = 0; j < 10; j++) {
        board[i][j] = "";
      }
    }
    return board;
  }

  placeShip(ship) {
    if (this.#incorrectAllignmentSpecified(ship)) {
      return "Incorrect alignment";
    }

    if (this.#shipWillOverflowBoard(ship)) {
      return "Ship will overflow board";
    }

    if (this.#positionFilledWithShip(ship)) {
      return "ships are overlapping";
    }

    if (ship.alignment === "vertical") {
      for (let i = 0; i < ship.totalLength; i++) {
        this.#board[ship.location[1]][ship.location[0]] = ship.shipName;
        ship.location[1]++;
      }
    } else if (ship.alignment === "horizontal") {
      for (let i = 0; i < ship.totalLength; i++) {
        this.#board[ship.location[1]][ship.location[0]] = ship.shipName;
        ship.location[0]++;
      }
    }
    this.#shipsOnBoard.push(ship);
    return "Ship placed";
  }

  receiveAttack(y, x) {
    if (x > 10 || y > 10) return "invalid coordinates";

    if (this.#board[y][x] === "") {
      this.#board[y][x] = "m";
      return "miss";
    }

    for (let i = 0; i < this.#shipsOnBoard.length; i++) {
      if (this.#board[y][x] === this.#shipsOnBoard[i].shipName) {
        this.#shipsOnBoard[i].hit();
        this.#board[y][x] = "h";
        return "hit";
      }
    }

    return "cant attack here";
  }

  allShipsSunk() {
    for (let i = 0; i < this.#shipsOnBoard.length; i++) {
      if (!this.#shipsOnBoard[i].isSunk()) {
        return false;
      }
    }
    return true;
  }

  #positionFilledWithShip(ship) {
    let yval = Number(ship.location[1]);
    let xval = Number(ship.location[0]);

    if (ship.alignment === "vertical") {
      for (let i = 0; i < ship.totalLength; i++) {
        if (this.#board[yval][xval] !== "") return true;
        yval++;
      }
    } else {
      for (let i = 0; i < ship.totalLength; i++) {
        if (this.#board[yval][xval] !== "") return true;
        xval++;
      }
    }
    return false;
  }

  #incorrectAllignmentSpecified(ship) {
    switch (ship.alignment) {
      case "vertical":
        return false;
      case "horizontal":
        return false;
      default:
        return true;
    }
  }

  #shipWillOverflowBoard(ship) {
    let yval = ship.location[1];
    let xval = ship.location[0];
    let shiplen = ship.totalLength;
    if (ship.alignment === "vertical") {
      if (Number(yval) + shiplen > 10) return true;
    } else {
      if (Number(xval) + shiplen > 10) return true;
    }
    return false;
  }
}
module.exports = GameBoard;


/***/ }),

/***/ "./src/game logic/player.js":
/*!**********************************!*\
  !*** ./src/game logic/player.js ***!
  \**********************************/
/***/ ((module) => {

class Player {
  #isTurn;
  #name;
  #attack;
  #nextMoves = [];
  constructor(name, isTurn) {
    this.#isTurn = isTurn;
    this.#name = name;
    this.#attack;
  }

  set attack(coordinateArray) {
    if (coordinateArray[0] > 9 || coordinateArray[1] > 9) {
      throw new Error("Incorrect attack coordinates");
    }
    this.#attack = coordinateArray;
  }

  get attack() {
    return this.#attack;
  }

  get isTurn() {
    return this.#isTurn;
  }

  get displayName() {
    return this.#name;
  }

  changeTurn() {
    this.#isTurn ? (this.#isTurn = false) : (this.#isTurn = true);
  }

  smartMove(gameboard) {
    if (this.#attack !== undefined) {
      const prevY = this.#attack[0];
      const prevX = this.attack[1];

      if (gameboard[prevY][prevX] === "h") {
        if (
          prevY + 1 <= 9 &&
          gameboard[prevY + 1][prevX] !== "h" &&
          gameboard[prevY + 1][prevX] !== "m" &&
          gameboard[prevY + 1][prevX] !== ""
        )
          this.#nextMoves.push([prevY + 1, prevX]);
        if (
          prevY - 1 >= 0 &&
          gameboard[prevY - 1][prevX] !== "h" &&
          gameboard[prevY - 1][prevX] !== "m" &&
          gameboard[prevY - 1][prevX] !== ""
        )
          this.#nextMoves.push([prevY - 1, prevX]);
        if (
          prevX + 1 <= 9 &&
          gameboard[prevY][prevX + 1] !== "h" &&
          gameboard[prevY][prevX + 1] !== "m" &&
          gameboard[prevY][prevX + 1] !== ""
        )
          this.#nextMoves.push([prevY, prevX + 1]);
        if (
          prevX - 1 >= 0 &&
          gameboard[prevY][prevX - 1] !== "h" &&
          gameboard[prevY][prevX - 1] !== "m" &&
          gameboard[prevY][prevX - 1] !== ""
        )
          this.#nextMoves.push([prevY, prevX - 1]);

        if (this.#nextMoves.length !== 0) {
          const aimedAttack = this.#nextMoves.pop();

          if (
            gameboard[aimedAttack[0]][aimedAttack[1]] !== "h" &&
            gameboard[aimedAttack[0]][aimedAttack[1]] !== "m"
          ) {
            this.#attack = aimedAttack;
            return;
          }
        }
      }

      if (gameboard[prevY][prevX] === "m" && this.#nextMoves.length !== 0) {
        const aimedAttack = this.#nextMoves.pop();

        if (
          gameboard[aimedAttack[0]][aimedAttack[1]] !== "h" &&
          gameboard[aimedAttack[0]][aimedAttack[1]] !== "m"
        ) {
          this.#attack = aimedAttack;
          return;
        }
      }
    }

    while (true) {
      const yval = Math.floor(Math.random() * 10);
      const xval = Math.floor(Math.random() * 10);

      if (yval > 9 || xval > 9) {
        throw new Error("Computer choice was greater than 9");
      }

      if (gameboard[yval][xval] !== "m" && gameboard[yval][xval] !== "h") {
        this.#attack = [yval, xval];
        break;
      }
    }
  }
}

module.exports = Player;
// if (
//   prevY + 1 <= 9 &&
//   gameboard[prevY + 1][prevX] !== "h" &&
//   gameboard[prevY + 1][prevX] !== "m"
// ) {
//   this.#attack = [prevY + 1, prevX];
//   return;
// }
// if (
//   prevX + 1 <= 9 &&
//   gameboard[prevY][prevX + 1] !== "h" &&
//   gameboard[prevY][prevX + 1] !== "m"
// ) {
//   this.#attack = [prevY, prevX + 1];
//   return;
// }
// if (
//   prevY - 1 >= 0 &&
//   gameboard[prevY - 1][prevX] !== "h" &&
//   gameboard[prevY - 1][prevX] !== "m"
// ) {
//   this.#attack = [prevY - 1, prevX];
//   return;
// }
// if (
//   prevX - 1 >= 0 &&
//   gameboard[prevY][prevX - 1] !== "h" &&
//   gameboard[prevY][prevX - 1] !== "m"
// ) {
//   this.#attack = [prevY, prevX - 1];
//   return;
// }


/***/ }),

/***/ "./src/game logic/ship.js":
/*!********************************!*\
  !*** ./src/game logic/ship.js ***!
  \********************************/
/***/ ((module) => {

class Ship {
  #shipLength;
  #name;
  #location;
  #alignment;

  constructor(shipLen, location, name, alignment) {
    this.#shipLength = shipLen;
    this.#location = location;
    this.#name = name;
    this.#alignment = alignment;
  }

  get totalLength() {
    return this.#shipLength;
  }

  get shipName() {
    return this.#name;
  }

  // ['x', y]
  get location() {
    return this.#location;
  }

  get alignment() {
    return this.#alignment;
  }

  set alignment(alignment) {
    this.#alignment = alignment;
  }

  set location(location) {
    this.#location = location;
  }

  hit() {
    if (this.#shipLength === 0) {
      return;
    }
    this.#shipLength--;
  }

  isSunk() {
    return this.#shipLength === 0 ? true : false;
  }
}

module.exports = Ship;


/***/ }),

/***/ "./src/ui/attackScreen.js":
/*!********************************!*\
  !*** ./src/ui/attackScreen.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addDirectionMsg: () => (/* binding */ addDirectionMsg),
/* harmony export */   attackScreen: () => (/* binding */ attackScreen),
/* harmony export */   clearDirectionMsg: () => (/* binding */ clearDirectionMsg),
/* harmony export */   playersAtkChoice: () => (/* binding */ playersAtkChoice),
/* harmony export */   renderComputersAttack: () => (/* binding */ renderComputersAttack)
/* harmony export */ });
/* harmony import */ var _placeShipScreen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./placeShipScreen */ "./src/ui/placeShipScreen.js");
/* harmony import */ var _attackScreen_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attackScreen.css */ "./src/ui/attackScreen.css");



const attackScreen = async (playerGameBoard, computerGameBoard) => {
  const content = document.querySelector("content");

  content.classList.add("grid-gap");
  //   content.classList.remove("align-items-center");

  const { playerGridContainer, computerGridContainer } =
    setupGrids(playerGameBoard);

  content.appendChild(playerGridContainer);
  content.appendChild(computerGridContainer);
};

const setupGrids = (playerGameBoard) => {
  const playersGrid = (0,_placeShipScreen__WEBPACK_IMPORTED_MODULE_0__.drawGrid)();
  const computersGrid = (0,_placeShipScreen__WEBPACK_IMPORTED_MODULE_0__.drawGrid)();

  const playerCols = playersGrid.childNodes;
  playerCols.forEach((col, i) => {
    col.childNodes.forEach((gridSquare, j) => {
      if (playerGameBoard.board[j][i] !== "") {
        gridSquare.classList.add("ship");
      }
    });
  });

  const playerGridContainer = document.createElement("div");
  playerGridContainer.classList.add("player-grid");
  const playerWaters = document.createElement("h2");
  playerWaters.textContent = "Player Waters";
  playerGridContainer.appendChild(playerWaters);
  playerGridContainer.appendChild(playersGrid);

  const computerGridContainer = document.createElement("div");
  computerGridContainer.classList.add("computer-grid");
  const computerWaters = document.createElement("h2");
  computerWaters.textContent = "Enemy Waters";
  computerGridContainer.appendChild(computerWaters);
  computerGridContainer.appendChild(computersGrid);

  return { playerGridContainer, computerGridContainer };
};

const playersAtkChoice = (computerGameBoard) => {
  return new Promise((resolve, reject) => {
    const computerCols = document.querySelector(
      ".computer-grid > .grid-container"
    ).childNodes;

    const clickHandler = (e) => {
      const attackPlaced = handlePlayerAttack(e, computerGameBoard);
      computerCols.forEach((col) => {
        col.childNodes.forEach((gridSquare) => {
          gridSquare.removeEventListener("click", clickHandler);
        });
      });
      if (!attackPlaced) reject("incorrect Location");
      else resolve([e.target.id[0], e.target.id[2]]);
    };

    computerCols.forEach((col) => {
      col.childNodes.forEach((gridSquare) => {
        gridSquare.addEventListener("click", clickHandler);
      });
    });
  });
};

const handlePlayerAttack = (e, computerGameBoard) => {
  if (e.target.classList.contains("hit-circle")) return false;
  else if (e.target.classList.contains("miss-circle")) return false;
  else if (e.target.classList.contains("flex-centered")) return false;

  const xval = e.target.id[2];
  const yval = e.target.id[0];

  const circle = document.createElement("div");
  e.target.classList.add("flex-centered");

  if (
    computerGameBoard[yval][xval] === "" ||
    computerGameBoard[yval][xval] === "m"
  ) {
    circle.classList.add("miss-circle");
    e.target.appendChild(circle);
    return true;
  } else {
    circle.classList.add("hit-circle");
    e.target.appendChild(circle);
    return true;
  }
};

const addDirectionMsg = (msg, time) => {
  const controls = document.getElementById("controls");

  const directionContainer = document.createElement("div");
  directionContainer.classList.add("directions-container");

  const directions = document.createElement("h1");
  directions.textContent = msg;
  directions.classList.add("typing-effect");
  directionContainer.appendChild(directions);

  controls.appendChild(directionContainer);
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

const clearDirectionMsg = () => {
  document.getElementById("controls").innerHTML = "";
};

const renderComputersAttack = (yval, xval) => {
  const playerGridSquares = document.querySelectorAll(
    ".player-grid > .grid-container > .grid-col > .grid-square"
  );
  const circle = document.createElement("div");

  playerGridSquares.forEach((gridSquare) => {
    if (
      Number(gridSquare.id[0]) === yval &&
      Number(gridSquare.id[2]) === xval
    ) {
      if (gridSquare.classList.contains("ship")) {
        gridSquare.classList.add("flex-centered");
        circle.classList.add("hit-circle");
        gridSquare.appendChild(circle);
      } else {
        gridSquare.classList.add("flex-centered");
        circle.classList.add("miss-circle");
        gridSquare.appendChild(circle);
      }
    }
  });
};




/***/ }),

/***/ "./src/ui/placeShipScreen.js":
/*!***********************************!*\
  !*** ./src/ui/placeShipScreen.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   drawGrid: () => (/* binding */ drawGrid),
/* harmony export */   placeShipScreen: () => (/* binding */ placeShipScreen)
/* harmony export */ });
/* harmony import */ var _placeShipScreen_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./placeShipScreen.css */ "./src/ui/placeShipScreen.css");
/* harmony import */ var _game_logic_ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game logic/ship */ "./src/game logic/ship.js");
/* harmony import */ var _game_logic_ship__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_game_logic_ship__WEBPACK_IMPORTED_MODULE_1__);



const placeShipScreen = async () => {
  const content = document.querySelector("content");
  content.appendChild(drawGrid());
  content.classList.add("align-items-center");
  addControlsOnScreen();

  //initializing ships here with undefined for:
  //location - user needs to select where each ship will go
  //alignment - user will select either horizontal or vertical via a button
  const ships = [
    new (_game_logic_ship__WEBPACK_IMPORTED_MODULE_1___default())(5, undefined, "Carrier", undefined),
    new (_game_logic_ship__WEBPACK_IMPORTED_MODULE_1___default())(4, undefined, "Battleship", undefined),
    new (_game_logic_ship__WEBPACK_IMPORTED_MODULE_1___default())(3, undefined, "Destroyer", undefined),
    new (_game_logic_ship__WEBPACK_IMPORTED_MODULE_1___default())(3, undefined, "Submarine", undefined),
    new (_game_logic_ship__WEBPACK_IMPORTED_MODULE_1___default())(2, undefined, "Patrol Boat", undefined),
  ];

  await placeShipsSequentially(ships);

  return ships;
};

const drawGrid = () => {
  const container = document.createElement("div");

  for (let i = 0; i < 10; i++) {
    const col = document.createElement("div");
    col.classList.add("grid-col");
    for (let j = 0; j < 10; j++) {
      const gridSquare = document.createElement("div");
      gridSquare.classList.add("grid-square");
      gridSquare.id = `${[j, i]}`;
      col.appendChild(gridSquare);
    }
    container.appendChild(col);
  }

  container.classList.add("grid-container");
  return container;
};

const addControlsOnScreen = () => {
  const controls = document.getElementById("controls");
  const changeDirectionBtn = document.createElement("button");
  const h1 = document.createElement("h1");

  h1.id = "directionText";

  changeDirectionBtn.textContent = "Horizontal";
  changeDirectionBtn.classList.add("change-direction-btn");
  changeDirectionBtn.addEventListener("click", () => {
    changeDirectionBtn.textContent === "Horizontal"
      ? (changeDirectionBtn.textContent = "Vertical")
      : (changeDirectionBtn.textContent = "Horizontal");
  });

  controls.appendChild(h1);
  controls.appendChild(changeDirectionBtn);
};

const addHoverEffect = (shipLength) => {
  const squares = document.querySelectorAll(".grid-square");
  const hoverHandler = (e) => {
    addHoverEffectHelper(e, shipLength);
  };

  squares.forEach((gridSquare) => {
    gridSquare.addEventListener("mouseover", hoverHandler);
    gridSquare.addEventListener("mouseleave", hoverHandler);
  });
  return hoverHandler;
};

const addHoverEffectHelper = (event, shipLength) => {
  const oppositeAlignment = document.querySelector(
    ".change-direction-btn"
  ).textContent;
  const xval = event.target.id[2];
  const yval = event.target.id[0];
  resetUnwantedStyling();
  //highlight the squares vertically
  if (oppositeAlignment === "Horizontal") {
    for (let i = 0; i < shipLength; i++) {
      const startOfHighlight = i + Number(yval);
      if (!isValidSquare(event, shipLength, oppositeAlignment)) {
        event.target.classList.toggle("ship-highlight-error");
        return;
      }
      document
        .getElementById(`${[startOfHighlight, xval]}`)
        .classList.toggle("ship-highlight");
    }
    return;
  }
  //highlight the squares horizontally
  for (let i = 0; i < shipLength; i++) {
    const startOfHighlight = i + Number(xval);
    if (!isValidSquare(event, shipLength, oppositeAlignment)) {
      event.target.classList.toggle("ship-highlight-error");
      return;
    }
    document
      .getElementById(`${[yval, startOfHighlight]}`)
      .classList.toggle("ship-highlight");
  }
};

const removeHoverEffect = (hoverHandler) => {
  const squares = document.querySelectorAll(".grid-square");

  squares.forEach((gridSquare) => {
    gridSquare.removeEventListener("mouseover", hoverHandler);
    gridSquare.removeEventListener("mouseleave", hoverHandler);
  });
};

//this function calls placeShipOnClickHelper
//which will modify the ship objects fields
const placeShipOnClick = (ship) => {
  return new Promise((resolve, reject) => {
    const squares = document.querySelectorAll(".grid-square");

    const clickHandler = (e) => {
      let shipPlaced = placeShipOnClickHelper(e, ship);
      if (!shipPlaced) {
        reject();
      }
      squares.forEach((gridSquare) => {
        gridSquare.removeEventListener("click", clickHandler);
      });
      resolve();
    };

    squares.forEach((gridSquare) => {
      gridSquare.addEventListener("click", clickHandler);
    });
  });
};

//this function will modifiy the passed in ships fields
const placeShipOnClickHelper = (e, ship) => {
  const oppositeAlignment = document.querySelector(
    ".change-direction-btn"
  ).textContent;

  if (!isValidSquare(e, ship.totalLength, oppositeAlignment)) return false;

  const xval = e.target.id[2];
  const yval = e.target.id[0];
  ship.location = [xval, yval];

  if (oppositeAlignment === "Horizontal") {
    ship.alignment = "vertical";
    for (let i = 0; i < ship.totalLength; i++) {
      const startOfHighlight = i + Number(yval);
      document
        .getElementById(`${[startOfHighlight, xval]}`)
        .classList.add("ship-placed");
    }
    return true;
  }

  ship.alignment = "horizontal";
  for (let i = 0; i < ship.totalLength; i++) {
    const startOfHighlight = i + Number(xval);
    document
      .getElementById(`${[yval, startOfHighlight]}`)
      .classList.add("ship-placed");
  }
  return true;
};

const isValidSquare = (e, shipLength, oppositeAlignment) => {
  const xval = e.target.id[2];
  const yval = e.target.id[0];

  if (oppositeAlignment === "Horizontal") {
    for (let i = 0; i < shipLength; i++) {
      const startOfHighlight = i + Number(yval);
      const square = document.getElementById(`${[startOfHighlight, xval]}`);
      if (startOfHighlight > 9 || square.classList.contains("ship-placed"))
        return false;
    }
    return true;
  }

  for (let i = 0; i < shipLength; i++) {
    const startOfHighlight = i + Number(xval);
    const square = document.getElementById(`${[yval, startOfHighlight]}`);
    if (startOfHighlight > 9 || square.classList.contains("ship-placed"))
      return false;
  }
  return true;
};

const resetUnwantedStyling = () => {
  const squares = document.querySelectorAll(".grid-square");

  squares.forEach((gridSquare) => {
    gridSquare.classList.remove("ship-highlight-error");
    gridSquare.classList.remove("ship-highlight");
  });
};

const placeShipsSequentially = async (shipArray) => {
  let i = 0;
  let allShipsPlaced = false;

  while (!allShipsPlaced) {
    const hoverEventRef = addHoverEffect(shipArray[i].totalLength);
    try {
      //placeShipOnClick will modify the current ships alignment and location fields
      document.getElementById(
        "directionText"
      ).textContent = `Place Down Your ${shipArray[i].shipName}!`;
      await placeShipOnClick(shipArray[i]);
      i++;
      if (i === 5) {
        allShipsPlaced = true;
      }
    } catch (error) {
      console.log("rejected trying again...");
    } finally {
      removeHoverEffect(hoverEventRef);
    }
  }
};




/***/ }),

/***/ "./src/ui/startScreen.js":
/*!*******************************!*\
  !*** ./src/ui/startScreen.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _startScreen_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startScreen.css */ "./src/ui/startScreen.css");
/* harmony import */ var _game_logic_player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game logic/player.js */ "./src/game logic/player.js");
/* harmony import */ var _game_logic_player_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_game_logic_player_js__WEBPACK_IMPORTED_MODULE_1__);



const startScreen = () => {
  const content = document.querySelector("content");
  const startScreenContainer = document.createElement("div");
  const label = document.createElement("label");
  const textInput = document.createElement("input");
  const startGameBtn = document.createElement("button");
  const errorMsg = document.createElement("p");

  label.htmlFor = "playerName";
  label.textContent = "Enter Player Name:";

  textInput.id = "playerName";
  textInput.type = "text";
  textInput.placeholder = "Name";
  textInput.required = true;
  textInput.type = "text";

  startGameBtn.textContent = "Start Game";

  const createPlayerPromise = new Promise((resolve) => {
    startGameBtn.addEventListener("click", () => {
      if (!textInput.checkValidity()) {
        textInput.classList.add("error");
        errorMsg.textContent = textInput.validationMessage;
        return;
      }
      resolve(new (_game_logic_player_js__WEBPACK_IMPORTED_MODULE_1___default())(textInput.value, true));
    });
  });

  errorMsg.classList.add("error-msg");
  startScreenContainer.classList.add("start-screen-container");
  startScreenContainer.appendChild(label);
  startScreenContainer.appendChild(errorMsg);
  startScreenContainer.appendChild(textInput);
  startScreenContainer.appendChild(startGameBtn);
  content.appendChild(startScreenContainer);
  return createPlayerPromise;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startScreen);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _ui_startScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/startScreen */ "./src/ui/startScreen.js");
/* harmony import */ var _game_logic_player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game logic/player.js */ "./src/game logic/player.js");
/* harmony import */ var _game_logic_player_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_game_logic_player_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ui_placeShipScreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/placeShipScreen */ "./src/ui/placeShipScreen.js");
/* harmony import */ var _game_logic_gameboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game logic/gameboard */ "./src/game logic/gameboard.js");
/* harmony import */ var _game_logic_gameboard__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_game_logic_gameboard__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _game_logic_ship__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game logic/ship */ "./src/game logic/ship.js");
/* harmony import */ var _game_logic_ship__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_game_logic_ship__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ui_attackScreen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/attackScreen */ "./src/ui/attackScreen.js");








const gameLoop = async () => {
  //shows start screen and initilizes players
  const { player, computer } = await initPlayers();

  clearGameScreen();

  //shows place ship screen and initilizes the player
  //and computer gameboards with ships
  const { playerGameBoard, computerGameBoard } = await initGameBoards();

  clearGameScreen();
  (0,_ui_attackScreen__WEBPACK_IMPORTED_MODULE_6__.clearDirectionMsg)();

  (0,_ui_attackScreen__WEBPACK_IMPORTED_MODULE_6__.attackScreen)(playerGameBoard, computerGameBoard);
  // await addDirectionMsg(
  //   `Welcome to the battlefield, Captain ${player.displayName}.`,
  //   3500
  // );

  //while the computer and player both have ships still
  while (!playerGameBoard.allShipsSunk() && !computerGameBoard.allShipsSunk()) {
    try {
      //player attacks
      // clearDirectionMsg();
      // await addDirectionMsg(
      //   `Waiting on your target, Captain ${player.displayName}! `,
      //   2000
      // );
      const playersAtk = await (0,_ui_attackScreen__WEBPACK_IMPORTED_MODULE_6__.playersAtkChoice)(computerGameBoard.board);
      const pHitOrMiss = computerGameBoard.receiveAttack(
        playersAtk[0],
        playersAtk[1]
      );
      // clearDirectionMsg();
      // await addDirectionMsg(
      //   `You fire a shot into enemy waters and its a ${pHitOrMiss}.`,
      //   3600
      // );

      //computer attacks

      computer.smartMove(playerGameBoard.board);
      const cHitOrMiss = playerGameBoard.receiveAttack(
        computer.attack[0],
        computer.attack[1]
      );

      // clearDirectionMsg();
      // await addDirectionMsg(
      //   `The enemy fires a shot back and its a ${cHitOrMiss}.`,
      //   3600
      // );
      (0,_ui_attackScreen__WEBPACK_IMPORTED_MODULE_6__.renderComputersAttack)(computer.attack[0], computer.attack[1]);
    } catch (error) {
      console.error(error);
    }
  }
  console.log("game ended");
};

const initPlayers = async () => {
  const playerPromise = (0,_ui_startScreen__WEBPACK_IMPORTED_MODULE_1__["default"])();

  const player = await playerPromise;
  const computer = new (_game_logic_player_js__WEBPACK_IMPORTED_MODULE_2___default())("Computer", false);

  return { player, computer };
};

const initGameBoards = async () => {
  const playerGameBoard = new (_game_logic_gameboard__WEBPACK_IMPORTED_MODULE_4___default())();
  const computerGameBoard = new (_game_logic_gameboard__WEBPACK_IMPORTED_MODULE_4___default())();

  await setPlayerShipsOnGameboard(playerGameBoard);
  setComputerShipsOnGameboard(computerGameBoard);
  return { playerGameBoard, computerGameBoard };
};

const setPlayerShipsOnGameboard = async (playerGameBoard) => {
  const shipArray = await (0,_ui_placeShipScreen__WEBPACK_IMPORTED_MODULE_3__.placeShipScreen)();
  for (let ship of shipArray) {
    console.log(playerGameBoard.placeShip(ship));
  }
};

const setComputerShipsOnGameboard = (computerGameBoard) => {
  const shipArray = [
    new (_game_logic_ship__WEBPACK_IMPORTED_MODULE_5___default())(5, [0, 0], "Carrier", "vertical"),
    new (_game_logic_ship__WEBPACK_IMPORTED_MODULE_5___default())(4, [1, 0], "Battleship", "vertical"),
    new (_game_logic_ship__WEBPACK_IMPORTED_MODULE_5___default())(3, [2, 0], "Destroyer", "vertical"),
    new (_game_logic_ship__WEBPACK_IMPORTED_MODULE_5___default())(3, [3, 0], "Submarine", "vertical"),
    new (_game_logic_ship__WEBPACK_IMPORTED_MODULE_5___default())(2, [4, 0], "Patrol Boat", "vertical"),
  ];

  for (let ship of shipArray) {
    computerGameBoard.placeShip(ship);
  }
};

const clearGameScreen = () => {
  document.querySelector("content").innerHTML = "";
};
gameLoop();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiwrQkFBK0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsK0JBQStCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0Isc0JBQXNCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixzQkFBc0Isc0JBQXNCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzFIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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OERBQU07O0FBRTdCLFdBQVc7QUFDWDs7QUFFQTtBQUNBLDhCQUE4Qiw4REFBUztBQUN2QyxnQ0FBZ0MsOERBQVM7O0FBRXpDO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQSwwQkFBMEIsb0VBQWU7QUFDekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVEseURBQUk7QUFDWixRQUFRLHlEQUFJO0FBQ1osUUFBUSx5REFBSTtBQUNaLFFBQVEseURBQUk7QUFDWixRQUFRLHlEQUFJO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3VpL2F0dGFja1NjcmVlbi5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy91aS9wbGFjZVNoaXBTY3JlZW4uY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdWkvc3RhcnRTY3JlZW4uY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdWkvYXR0YWNrU2NyZWVuLmNzcz85ZmFmIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdWkvcGxhY2VTaGlwU2NyZWVuLmNzcz83OTc0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdWkvc3RhcnRTY3JlZW4uY3NzPzMwYzQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUgbG9naWMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZSBsb2dpYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lIGxvZ2ljL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy91aS9hdHRhY2tTY3JlZW4uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy91aS9wbGFjZVNoaXBTY3JlZW4uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy91aS9zdGFydFNjcmVlbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LWZhbWlseTogXCJDaGFrcmEgUGV0Y2hcIiwgc2Fucy1zZXJpZjtcbn1cblxuOnJvb3Qge1xufVxuXG5ib2R5IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IG5hdnk7XG59XG5cbiNyb290IHtcbiAgbWluLWhlaWdodDogaW5oZXJpdDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAwLjVmciA1ZnIgMC41ZnI7XG4gIGdhcDogMXJlbTtcbn1cblxuaGVhZGVyLFxuZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QwY2NkMDtcbiAgZ3JpZC1jb2x1bW46IDEvMztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaGVhZGVyIHtcbiAgZ3JpZC1yb3c6IDEvMjtcbn1cblxuaGVhZGVyIGgxIHtcbiAgZm9udC1zaXplOiA0cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcmVtO1xufVxuXG4jY29udHJvbHMge1xuICBncmlkLWNvbHVtbjogMS8zO1xuICBncmlkLXJvdzogMi8zO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2QwY2NkMDtcbiAgZ2FwOiAxcmVtO1xufVxuXG5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBncmlkLXJvdzogMy80O1xuICBncmlkLWNvbHVtbjogMS8zO1xufVxuXG5mb290ZXIge1xuICBncmlkLXJvdzogNC81O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsdUNBQXVDO0FBQ3pDOztBQUVBO0FBQ0E7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsdUNBQXVDO0VBQ3ZDLFNBQVM7QUFDWDs7QUFFQTs7RUFFRSx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ2hha3JhIFBldGNoXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuOnJvb3Qge1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbmF2eTtcXG59XFxuXFxuI3Jvb3Qge1xcbiAgbWluLWhlaWdodDogaW5oZXJpdDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAwLjVmciA1ZnIgMC41ZnI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbmhlYWRlcixcXG5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QwY2NkMDtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG59XFxuXFxuaGVhZGVyIGgxIHtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjNyZW07XFxufVxcblxcbiNjb250cm9scyB7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAgZ3JpZC1yb3c6IDIvMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICNkMGNjZDA7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBncmlkLXJvdzogMy80O1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGdyaWQtcm93OiA0LzU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmdyaWQtZ2FwIHtcbiAgZ2FwOiAycmVtO1xufVxuXG4uZGlyZWN0aW9ucy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig4NywgOTYsIDk5KTtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgbWluLXdpZHRoOiA2MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNkMGNjZDA7XG59XG5cbi5wbGF5ZXItZ3JpZCxcbi5jb21wdXRlci1ncmlkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xuICBjb2xvcjogI2QwY2NkMDtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xufVxuXG4uY29tcHV0ZXItZ3JpZCA+IC5ncmlkLWNvbnRhaW5lciA+IC5ncmlkLWNvbCA+IC5ncmlkLXNxdWFyZTpob3ZlciB7XG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xufVxuLmNvbXB1dGVyLWdyaWQgPiAuZ3JpZC1jb250YWluZXIgPiAuZ3JpZC1jb2wgPiAuZmxleC1jZW50ZXJlZDpob3ZlciB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5zaGlwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbn1cbi5mbGV4LWNlbnRlcmVkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5oaXQtY2lyY2xlLFxuLm1pc3MtY2lyY2xlIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmhpdC1jaXJjbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi50eXBpbmctZWZmZWN0IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJpZ2h0OiAwLjE1ZW0gc29saWQgb3JhbmdlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICBhbmltYXRpb246IHR5cGluZyAzLjVzIHN0ZXBzKDQwLCBlbmQpLCBibGluay1jYXJldCAwLjc1cyBzdGVwLWVuZCBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyB0eXBpbmcge1xuICBmcm9tIHtcbiAgICB3aWR0aDogMDtcbiAgfVxuICB0byB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBibGluay1jYXJldCB7XG4gIGZyb20sXG4gIHRvIHtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG4gIDUwJSB7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoODcsIDk2LCA5OSk7XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3VpL2F0dGFja1NjcmVlbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsaUNBQWlDO0VBQ2pDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQ0FBaUM7RUFDakMsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsMEVBQTBFO0FBQzVFOztBQUVBO0VBQ0U7SUFDRSxRQUFRO0VBQ1Y7RUFDQTtJQUNFLFdBQVc7RUFDYjtBQUNGOztBQUVBO0VBQ0U7O0lBRUUseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSw2QkFBNkI7RUFDL0I7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZ3JpZC1nYXAge1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG4uZGlyZWN0aW9ucy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg3LCA5NiwgOTkpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBtaW4td2lkdGg6IDYwJTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNkMGNjZDA7XFxufVxcblxcbi5wbGF5ZXItZ3JpZCxcXG4uY29tcHV0ZXItZ3JpZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIGNvbG9yOiAjZDBjY2QwO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG5cXG4uY29tcHV0ZXItZ3JpZCA+IC5ncmlkLWNvbnRhaW5lciA+IC5ncmlkLWNvbCA+IC5ncmlkLXNxdWFyZTpob3ZlciB7XFxuICBjdXJzb3I6IGNyb3NzaGFpcjtcXG59XFxuLmNvbXB1dGVyLWdyaWQgPiAuZ3JpZC1jb250YWluZXIgPiAuZ3JpZC1jb2wgPiAuZmxleC1jZW50ZXJlZDpob3ZlciB7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG5cXG4uc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbn1cXG4uZmxleC1jZW50ZXJlZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGl0LWNpcmNsZSxcXG4ubWlzcy1jaXJjbGUge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLmhpdC1jaXJjbGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4udHlwaW5nLWVmZmVjdCB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyLXJpZ2h0OiAwLjE1ZW0gc29saWQgb3JhbmdlO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xcbiAgYW5pbWF0aW9uOiB0eXBpbmcgMy41cyBzdGVwcyg0MCwgZW5kKSwgYmxpbmstY2FyZXQgMC43NXMgc3RlcC1lbmQgaW5maW5pdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgdHlwaW5nIHtcXG4gIGZyb20ge1xcbiAgICB3aWR0aDogMDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgYmxpbmstY2FyZXQge1xcbiAgZnJvbSxcXG4gIHRvIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiKDg3LCA5NiwgOTkpO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5ncmlkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMC4ycmVtO1xufVxuXG4uZ3JpZC1jb2wge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZ3JpZC1zcXVhcmUge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHdpZHRoOiA0NXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xufVxuXG4uc2hpcC1oaWdobGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XG59XG5cbi5zaGlwLXBsYWNlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcbn1cblxuLnNoaXAtaGlnaGxpZ2h0LWVycm9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4uY2hhbmdlLWRpcmVjdGlvbi1idG4ge1xuICB3aWR0aDogMTUlO1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5hbGlnbi1pdGVtcy1jZW50ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jZGlyZWN0aW9uVGV4dCB7XG4gIGZvbnQtc2l6ZTogMS43cmVtO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdWkvcGxhY2VTaGlwU2NyZWVuLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHVCQUF1QjtFQUN2QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZ3JpZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC4ycmVtO1xcbn1cXG5cXG4uZ3JpZC1jb2wge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmdyaWQtc3F1YXJlIHtcXG4gIGhlaWdodDogNDVweDtcXG4gIHdpZHRoOiA0NXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XFxufVxcblxcbi5zaGlwLWhpZ2hsaWdodCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxufVxcblxcbi5zaGlwLXBsYWNlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxufVxcblxcbi5zaGlwLWhpZ2hsaWdodC1lcnJvciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG5cXG4uY2hhbmdlLWRpcmVjdGlvbi1idG4ge1xcbiAgd2lkdGg6IDE1JTtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuLmFsaWduLWl0ZW1zLWNlbnRlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jZGlyZWN0aW9uVGV4dCB7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc3RhcnQtc2NyZWVuLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDFyZW07XG4gIHdpZHRoOiAyMCU7XG4gIGNvbG9yOiAjZDBjY2QwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zdGFydC1zY3JlZW4tY29udGFpbmVyIGxhYmVsIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5zdGFydC1zY3JlZW4tY29udGFpbmVyIGlucHV0IHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMGNjZDA7XG59XG5cbi5zdGFydC1zY3JlZW4tY29udGFpbmVyIGJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMGNjZDA7XG59XG5cbi5lcnJvci1tc2cge1xuICBjb2xvcjogcmVkO1xufVxuXG4uZXJyb3Ige1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gIG91dGxpbmU6IDFweCBzb2xpZCByZWQ7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy91aS9zdGFydFNjcmVlbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULFVBQVU7RUFDVixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsc0JBQXNCO0FBQ3hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zdGFydC1zY3JlZW4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgd2lkdGg6IDIwJTtcXG4gIGNvbG9yOiAjZDBjY2QwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc3RhcnQtc2NyZWVuLWNvbnRhaW5lciBsYWJlbCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnN0YXJ0LXNjcmVlbi1jb250YWluZXIgaW5wdXQge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMGNjZDA7XFxufVxcblxcbi5zdGFydC1zY3JlZW4tY29udGFpbmVyIGJ1dHRvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMjVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMGNjZDA7XFxufVxcblxcbi5lcnJvci1tc2cge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLmVycm9yIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCByZWQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2F0dGFja1NjcmVlbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2F0dGFja1NjcmVlbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcGxhY2VTaGlwU2NyZWVuLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcGxhY2VTaGlwU2NyZWVuLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdGFydFNjcmVlbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0YXJ0U2NyZWVuLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY2xhc3MgR2FtZUJvYXJkIHtcbiAgI2JvYXJkID0gdGhpcy4jY3JlYXRlQm9hcmQoKTtcbiAgI3NoaXBzT25Cb2FyZCA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBnZXQgYm9hcmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2JvYXJkO1xuICB9XG5cbiAgZ2V0IHNoaXBzT25Cb2FyZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jc2hpcHNPbkJvYXJkO1xuICB9XG5cbiAgI2NyZWF0ZUJvYXJkKCkge1xuICAgIGxldCBib2FyZCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgYm9hcmQucHVzaChbXSk7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgYm9hcmRbaV1bal0gPSBcIlwiO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYm9hcmQ7XG4gIH1cblxuICBwbGFjZVNoaXAoc2hpcCkge1xuICAgIGlmICh0aGlzLiNpbmNvcnJlY3RBbGxpZ25tZW50U3BlY2lmaWVkKHNoaXApKSB7XG4gICAgICByZXR1cm4gXCJJbmNvcnJlY3QgYWxpZ25tZW50XCI7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuI3NoaXBXaWxsT3ZlcmZsb3dCb2FyZChzaGlwKSkge1xuICAgICAgcmV0dXJuIFwiU2hpcCB3aWxsIG92ZXJmbG93IGJvYXJkXCI7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuI3Bvc2l0aW9uRmlsbGVkV2l0aFNoaXAoc2hpcCkpIHtcbiAgICAgIHJldHVybiBcInNoaXBzIGFyZSBvdmVybGFwcGluZ1wiO1xuICAgIH1cblxuICAgIGlmIChzaGlwLmFsaWdubWVudCA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAudG90YWxMZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLiNib2FyZFtzaGlwLmxvY2F0aW9uWzFdXVtzaGlwLmxvY2F0aW9uWzBdXSA9IHNoaXAuc2hpcE5hbWU7XG4gICAgICAgIHNoaXAubG9jYXRpb25bMV0rKztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNoaXAuYWxpZ25tZW50ID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLnRvdGFsTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy4jYm9hcmRbc2hpcC5sb2NhdGlvblsxXV1bc2hpcC5sb2NhdGlvblswXV0gPSBzaGlwLnNoaXBOYW1lO1xuICAgICAgICBzaGlwLmxvY2F0aW9uWzBdKys7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuI3NoaXBzT25Cb2FyZC5wdXNoKHNoaXApO1xuICAgIHJldHVybiBcIlNoaXAgcGxhY2VkXCI7XG4gIH1cblxuICByZWNlaXZlQXR0YWNrKHksIHgpIHtcbiAgICBpZiAoeCA+IDEwIHx8IHkgPiAxMCkgcmV0dXJuIFwiaW52YWxpZCBjb29yZGluYXRlc1wiO1xuXG4gICAgaWYgKHRoaXMuI2JvYXJkW3ldW3hdID09PSBcIlwiKSB7XG4gICAgICB0aGlzLiNib2FyZFt5XVt4XSA9IFwibVwiO1xuICAgICAgcmV0dXJuIFwibWlzc1wiO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy4jc2hpcHNPbkJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy4jYm9hcmRbeV1beF0gPT09IHRoaXMuI3NoaXBzT25Cb2FyZFtpXS5zaGlwTmFtZSkge1xuICAgICAgICB0aGlzLiNzaGlwc09uQm9hcmRbaV0uaGl0KCk7XG4gICAgICAgIHRoaXMuI2JvYXJkW3ldW3hdID0gXCJoXCI7XG4gICAgICAgIHJldHVybiBcImhpdFwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBcImNhbnQgYXR0YWNrIGhlcmVcIjtcbiAgfVxuXG4gIGFsbFNoaXBzU3VuaygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuI3NoaXBzT25Cb2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCF0aGlzLiNzaGlwc09uQm9hcmRbaV0uaXNTdW5rKCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gICNwb3NpdGlvbkZpbGxlZFdpdGhTaGlwKHNoaXApIHtcbiAgICBsZXQgeXZhbCA9IE51bWJlcihzaGlwLmxvY2F0aW9uWzFdKTtcbiAgICBsZXQgeHZhbCA9IE51bWJlcihzaGlwLmxvY2F0aW9uWzBdKTtcblxuICAgIGlmIChzaGlwLmFsaWdubWVudCA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAudG90YWxMZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy4jYm9hcmRbeXZhbF1beHZhbF0gIT09IFwiXCIpIHJldHVybiB0cnVlO1xuICAgICAgICB5dmFsKys7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC50b3RhbExlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLiNib2FyZFt5dmFsXVt4dmFsXSAhPT0gXCJcIikgcmV0dXJuIHRydWU7XG4gICAgICAgIHh2YWwrKztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgI2luY29ycmVjdEFsbGlnbm1lbnRTcGVjaWZpZWQoc2hpcCkge1xuICAgIHN3aXRjaCAoc2hpcC5hbGlnbm1lbnQpIHtcbiAgICAgIGNhc2UgXCJ2ZXJ0aWNhbFwiOlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICBjYXNlIFwiaG9yaXpvbnRhbFwiOlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICAjc2hpcFdpbGxPdmVyZmxvd0JvYXJkKHNoaXApIHtcbiAgICBsZXQgeXZhbCA9IHNoaXAubG9jYXRpb25bMV07XG4gICAgbGV0IHh2YWwgPSBzaGlwLmxvY2F0aW9uWzBdO1xuICAgIGxldCBzaGlwbGVuID0gc2hpcC50b3RhbExlbmd0aDtcbiAgICBpZiAoc2hpcC5hbGlnbm1lbnQgPT09IFwidmVydGljYWxcIikge1xuICAgICAgaWYgKE51bWJlcih5dmFsKSArIHNoaXBsZW4gPiAxMCkgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChOdW1iZXIoeHZhbCkgKyBzaGlwbGVuID4gMTApIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gR2FtZUJvYXJkO1xuIiwiY2xhc3MgUGxheWVyIHtcbiAgI2lzVHVybjtcbiAgI25hbWU7XG4gICNhdHRhY2s7XG4gICNuZXh0TW92ZXMgPSBbXTtcbiAgY29uc3RydWN0b3IobmFtZSwgaXNUdXJuKSB7XG4gICAgdGhpcy4jaXNUdXJuID0gaXNUdXJuO1xuICAgIHRoaXMuI25hbWUgPSBuYW1lO1xuICAgIHRoaXMuI2F0dGFjaztcbiAgfVxuXG4gIHNldCBhdHRhY2soY29vcmRpbmF0ZUFycmF5KSB7XG4gICAgaWYgKGNvb3JkaW5hdGVBcnJheVswXSA+IDkgfHwgY29vcmRpbmF0ZUFycmF5WzFdID4gOSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW5jb3JyZWN0IGF0dGFjayBjb29yZGluYXRlc1wiKTtcbiAgICB9XG4gICAgdGhpcy4jYXR0YWNrID0gY29vcmRpbmF0ZUFycmF5O1xuICB9XG5cbiAgZ2V0IGF0dGFjaygpIHtcbiAgICByZXR1cm4gdGhpcy4jYXR0YWNrO1xuICB9XG5cbiAgZ2V0IGlzVHVybigpIHtcbiAgICByZXR1cm4gdGhpcy4jaXNUdXJuO1xuICB9XG5cbiAgZ2V0IGRpc3BsYXlOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLiNuYW1lO1xuICB9XG5cbiAgY2hhbmdlVHVybigpIHtcbiAgICB0aGlzLiNpc1R1cm4gPyAodGhpcy4jaXNUdXJuID0gZmFsc2UpIDogKHRoaXMuI2lzVHVybiA9IHRydWUpO1xuICB9XG5cbiAgc21hcnRNb3ZlKGdhbWVib2FyZCkge1xuICAgIGlmICh0aGlzLiNhdHRhY2sgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgcHJldlkgPSB0aGlzLiNhdHRhY2tbMF07XG4gICAgICBjb25zdCBwcmV2WCA9IHRoaXMuYXR0YWNrWzFdO1xuXG4gICAgICBpZiAoZ2FtZWJvYXJkW3ByZXZZXVtwcmV2WF0gPT09IFwiaFwiKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcmV2WSArIDEgPD0gOSAmJlxuICAgICAgICAgIGdhbWVib2FyZFtwcmV2WSArIDFdW3ByZXZYXSAhPT0gXCJoXCIgJiZcbiAgICAgICAgICBnYW1lYm9hcmRbcHJldlkgKyAxXVtwcmV2WF0gIT09IFwibVwiICYmXG4gICAgICAgICAgZ2FtZWJvYXJkW3ByZXZZICsgMV1bcHJldlhdICE9PSBcIlwiXG4gICAgICAgIClcbiAgICAgICAgICB0aGlzLiNuZXh0TW92ZXMucHVzaChbcHJldlkgKyAxLCBwcmV2WF0pO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJldlkgLSAxID49IDAgJiZcbiAgICAgICAgICBnYW1lYm9hcmRbcHJldlkgLSAxXVtwcmV2WF0gIT09IFwiaFwiICYmXG4gICAgICAgICAgZ2FtZWJvYXJkW3ByZXZZIC0gMV1bcHJldlhdICE9PSBcIm1cIiAmJlxuICAgICAgICAgIGdhbWVib2FyZFtwcmV2WSAtIDFdW3ByZXZYXSAhPT0gXCJcIlxuICAgICAgICApXG4gICAgICAgICAgdGhpcy4jbmV4dE1vdmVzLnB1c2goW3ByZXZZIC0gMSwgcHJldlhdKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByZXZYICsgMSA8PSA5ICYmXG4gICAgICAgICAgZ2FtZWJvYXJkW3ByZXZZXVtwcmV2WCArIDFdICE9PSBcImhcIiAmJlxuICAgICAgICAgIGdhbWVib2FyZFtwcmV2WV1bcHJldlggKyAxXSAhPT0gXCJtXCIgJiZcbiAgICAgICAgICBnYW1lYm9hcmRbcHJldlldW3ByZXZYICsgMV0gIT09IFwiXCJcbiAgICAgICAgKVxuICAgICAgICAgIHRoaXMuI25leHRNb3Zlcy5wdXNoKFtwcmV2WSwgcHJldlggKyAxXSk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcmV2WCAtIDEgPj0gMCAmJlxuICAgICAgICAgIGdhbWVib2FyZFtwcmV2WV1bcHJldlggLSAxXSAhPT0gXCJoXCIgJiZcbiAgICAgICAgICBnYW1lYm9hcmRbcHJldlldW3ByZXZYIC0gMV0gIT09IFwibVwiICYmXG4gICAgICAgICAgZ2FtZWJvYXJkW3ByZXZZXVtwcmV2WCAtIDFdICE9PSBcIlwiXG4gICAgICAgIClcbiAgICAgICAgICB0aGlzLiNuZXh0TW92ZXMucHVzaChbcHJldlksIHByZXZYIC0gMV0pO1xuXG4gICAgICAgIGlmICh0aGlzLiNuZXh0TW92ZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgY29uc3QgYWltZWRBdHRhY2sgPSB0aGlzLiNuZXh0TW92ZXMucG9wKCk7XG5cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBnYW1lYm9hcmRbYWltZWRBdHRhY2tbMF1dW2FpbWVkQXR0YWNrWzFdXSAhPT0gXCJoXCIgJiZcbiAgICAgICAgICAgIGdhbWVib2FyZFthaW1lZEF0dGFja1swXV1bYWltZWRBdHRhY2tbMV1dICE9PSBcIm1cIlxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy4jYXR0YWNrID0gYWltZWRBdHRhY2s7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChnYW1lYm9hcmRbcHJldlldW3ByZXZYXSA9PT0gXCJtXCIgJiYgdGhpcy4jbmV4dE1vdmVzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBjb25zdCBhaW1lZEF0dGFjayA9IHRoaXMuI25leHRNb3Zlcy5wb3AoKTtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgZ2FtZWJvYXJkW2FpbWVkQXR0YWNrWzBdXVthaW1lZEF0dGFja1sxXV0gIT09IFwiaFwiICYmXG4gICAgICAgICAgZ2FtZWJvYXJkW2FpbWVkQXR0YWNrWzBdXVthaW1lZEF0dGFja1sxXV0gIT09IFwibVwiXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMuI2F0dGFjayA9IGFpbWVkQXR0YWNrO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBjb25zdCB5dmFsID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgY29uc3QgeHZhbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcblxuICAgICAgaWYgKHl2YWwgPiA5IHx8IHh2YWwgPiA5KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvbXB1dGVyIGNob2ljZSB3YXMgZ3JlYXRlciB0aGFuIDlcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChnYW1lYm9hcmRbeXZhbF1beHZhbF0gIT09IFwibVwiICYmIGdhbWVib2FyZFt5dmFsXVt4dmFsXSAhPT0gXCJoXCIpIHtcbiAgICAgICAgdGhpcy4jYXR0YWNrID0gW3l2YWwsIHh2YWxdO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQbGF5ZXI7XG4vLyBpZiAoXG4vLyAgIHByZXZZICsgMSA8PSA5ICYmXG4vLyAgIGdhbWVib2FyZFtwcmV2WSArIDFdW3ByZXZYXSAhPT0gXCJoXCIgJiZcbi8vICAgZ2FtZWJvYXJkW3ByZXZZICsgMV1bcHJldlhdICE9PSBcIm1cIlxuLy8gKSB7XG4vLyAgIHRoaXMuI2F0dGFjayA9IFtwcmV2WSArIDEsIHByZXZYXTtcbi8vICAgcmV0dXJuO1xuLy8gfVxuLy8gaWYgKFxuLy8gICBwcmV2WCArIDEgPD0gOSAmJlxuLy8gICBnYW1lYm9hcmRbcHJldlldW3ByZXZYICsgMV0gIT09IFwiaFwiICYmXG4vLyAgIGdhbWVib2FyZFtwcmV2WV1bcHJldlggKyAxXSAhPT0gXCJtXCJcbi8vICkge1xuLy8gICB0aGlzLiNhdHRhY2sgPSBbcHJldlksIHByZXZYICsgMV07XG4vLyAgIHJldHVybjtcbi8vIH1cbi8vIGlmIChcbi8vICAgcHJldlkgLSAxID49IDAgJiZcbi8vICAgZ2FtZWJvYXJkW3ByZXZZIC0gMV1bcHJldlhdICE9PSBcImhcIiAmJlxuLy8gICBnYW1lYm9hcmRbcHJldlkgLSAxXVtwcmV2WF0gIT09IFwibVwiXG4vLyApIHtcbi8vICAgdGhpcy4jYXR0YWNrID0gW3ByZXZZIC0gMSwgcHJldlhdO1xuLy8gICByZXR1cm47XG4vLyB9XG4vLyBpZiAoXG4vLyAgIHByZXZYIC0gMSA+PSAwICYmXG4vLyAgIGdhbWVib2FyZFtwcmV2WV1bcHJldlggLSAxXSAhPT0gXCJoXCIgJiZcbi8vICAgZ2FtZWJvYXJkW3ByZXZZXVtwcmV2WCAtIDFdICE9PSBcIm1cIlxuLy8gKSB7XG4vLyAgIHRoaXMuI2F0dGFjayA9IFtwcmV2WSwgcHJldlggLSAxXTtcbi8vICAgcmV0dXJuO1xuLy8gfVxuIiwiY2xhc3MgU2hpcCB7XG4gICNzaGlwTGVuZ3RoO1xuICAjbmFtZTtcbiAgI2xvY2F0aW9uO1xuICAjYWxpZ25tZW50O1xuXG4gIGNvbnN0cnVjdG9yKHNoaXBMZW4sIGxvY2F0aW9uLCBuYW1lLCBhbGlnbm1lbnQpIHtcbiAgICB0aGlzLiNzaGlwTGVuZ3RoID0gc2hpcExlbjtcbiAgICB0aGlzLiNsb2NhdGlvbiA9IGxvY2F0aW9uO1xuICAgIHRoaXMuI25hbWUgPSBuYW1lO1xuICAgIHRoaXMuI2FsaWdubWVudCA9IGFsaWdubWVudDtcbiAgfVxuXG4gIGdldCB0b3RhbExlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy4jc2hpcExlbmd0aDtcbiAgfVxuXG4gIGdldCBzaGlwTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jbmFtZTtcbiAgfVxuXG4gIC8vIFsneCcsIHldXG4gIGdldCBsb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4jbG9jYXRpb247XG4gIH1cblxuICBnZXQgYWxpZ25tZW50KCkge1xuICAgIHJldHVybiB0aGlzLiNhbGlnbm1lbnQ7XG4gIH1cblxuICBzZXQgYWxpZ25tZW50KGFsaWdubWVudCkge1xuICAgIHRoaXMuI2FsaWdubWVudCA9IGFsaWdubWVudDtcbiAgfVxuXG4gIHNldCBsb2NhdGlvbihsb2NhdGlvbikge1xuICAgIHRoaXMuI2xvY2F0aW9uID0gbG9jYXRpb247XG4gIH1cblxuICBoaXQoKSB7XG4gICAgaWYgKHRoaXMuI3NoaXBMZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy4jc2hpcExlbmd0aC0tO1xuICB9XG5cbiAgaXNTdW5rKCkge1xuICAgIHJldHVybiB0aGlzLiNzaGlwTGVuZ3RoID09PSAwID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2hpcDtcbiIsImltcG9ydCB7IGRyYXdHcmlkIH0gZnJvbSBcIi4vcGxhY2VTaGlwU2NyZWVuXCI7XG5pbXBvcnQgXCIuL2F0dGFja1NjcmVlbi5jc3NcIjtcblxuY29uc3QgYXR0YWNrU2NyZWVuID0gYXN5bmMgKHBsYXllckdhbWVCb2FyZCwgY29tcHV0ZXJHYW1lQm9hcmQpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJjb250ZW50XCIpO1xuXG4gIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImdyaWQtZ2FwXCIpO1xuICAvLyAgIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZShcImFsaWduLWl0ZW1zLWNlbnRlclwiKTtcblxuICBjb25zdCB7IHBsYXllckdyaWRDb250YWluZXIsIGNvbXB1dGVyR3JpZENvbnRhaW5lciB9ID1cbiAgICBzZXR1cEdyaWRzKHBsYXllckdhbWVCb2FyZCk7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChwbGF5ZXJHcmlkQ29udGFpbmVyKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjb21wdXRlckdyaWRDb250YWluZXIpO1xufTtcblxuY29uc3Qgc2V0dXBHcmlkcyA9IChwbGF5ZXJHYW1lQm9hcmQpID0+IHtcbiAgY29uc3QgcGxheWVyc0dyaWQgPSBkcmF3R3JpZCgpO1xuICBjb25zdCBjb21wdXRlcnNHcmlkID0gZHJhd0dyaWQoKTtcblxuICBjb25zdCBwbGF5ZXJDb2xzID0gcGxheWVyc0dyaWQuY2hpbGROb2RlcztcbiAgcGxheWVyQ29scy5mb3JFYWNoKChjb2wsIGkpID0+IHtcbiAgICBjb2wuY2hpbGROb2Rlcy5mb3JFYWNoKChncmlkU3F1YXJlLCBqKSA9PiB7XG4gICAgICBpZiAocGxheWVyR2FtZUJvYXJkLmJvYXJkW2pdW2ldICE9PSBcIlwiKSB7XG4gICAgICAgIGdyaWRTcXVhcmUuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIGNvbnN0IHBsYXllckdyaWRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwbGF5ZXJHcmlkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItZ3JpZFwiKTtcbiAgY29uc3QgcGxheWVyV2F0ZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBwbGF5ZXJXYXRlcnMudGV4dENvbnRlbnQgPSBcIlBsYXllciBXYXRlcnNcIjtcbiAgcGxheWVyR3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJXYXRlcnMpO1xuICBwbGF5ZXJHcmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllcnNHcmlkKTtcblxuICBjb25zdCBjb21wdXRlckdyaWRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb21wdXRlckdyaWRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbXB1dGVyLWdyaWRcIik7XG4gIGNvbnN0IGNvbXB1dGVyV2F0ZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBjb21wdXRlcldhdGVycy50ZXh0Q29udGVudCA9IFwiRW5lbXkgV2F0ZXJzXCI7XG4gIGNvbXB1dGVyR3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wdXRlcldhdGVycyk7XG4gIGNvbXB1dGVyR3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wdXRlcnNHcmlkKTtcblxuICByZXR1cm4geyBwbGF5ZXJHcmlkQ29udGFpbmVyLCBjb21wdXRlckdyaWRDb250YWluZXIgfTtcbn07XG5cbmNvbnN0IHBsYXllcnNBdGtDaG9pY2UgPSAoY29tcHV0ZXJHYW1lQm9hcmQpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCBjb21wdXRlckNvbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIuY29tcHV0ZXItZ3JpZCA+IC5ncmlkLWNvbnRhaW5lclwiXG4gICAgKS5jaGlsZE5vZGVzO1xuXG4gICAgY29uc3QgY2xpY2tIYW5kbGVyID0gKGUpID0+IHtcbiAgICAgIGNvbnN0IGF0dGFja1BsYWNlZCA9IGhhbmRsZVBsYXllckF0dGFjayhlLCBjb21wdXRlckdhbWVCb2FyZCk7XG4gICAgICBjb21wdXRlckNvbHMuZm9yRWFjaCgoY29sKSA9PiB7XG4gICAgICAgIGNvbC5jaGlsZE5vZGVzLmZvckVhY2goKGdyaWRTcXVhcmUpID0+IHtcbiAgICAgICAgICBncmlkU3F1YXJlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0hhbmRsZXIpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgaWYgKCFhdHRhY2tQbGFjZWQpIHJlamVjdChcImluY29ycmVjdCBMb2NhdGlvblwiKTtcbiAgICAgIGVsc2UgcmVzb2x2ZShbZS50YXJnZXQuaWRbMF0sIGUudGFyZ2V0LmlkWzJdXSk7XG4gICAgfTtcblxuICAgIGNvbXB1dGVyQ29scy5mb3JFYWNoKChjb2wpID0+IHtcbiAgICAgIGNvbC5jaGlsZE5vZGVzLmZvckVhY2goKGdyaWRTcXVhcmUpID0+IHtcbiAgICAgICAgZ3JpZFNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IGhhbmRsZVBsYXllckF0dGFjayA9IChlLCBjb21wdXRlckdhbWVCb2FyZCkgPT4ge1xuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGl0LWNpcmNsZVwiKSkgcmV0dXJuIGZhbHNlO1xuICBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJtaXNzLWNpcmNsZVwiKSkgcmV0dXJuIGZhbHNlO1xuICBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJmbGV4LWNlbnRlcmVkXCIpKSByZXR1cm4gZmFsc2U7XG5cbiAgY29uc3QgeHZhbCA9IGUudGFyZ2V0LmlkWzJdO1xuICBjb25zdCB5dmFsID0gZS50YXJnZXQuaWRbMF07XG5cbiAgY29uc3QgY2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImZsZXgtY2VudGVyZWRcIik7XG5cbiAgaWYgKFxuICAgIGNvbXB1dGVyR2FtZUJvYXJkW3l2YWxdW3h2YWxdID09PSBcIlwiIHx8XG4gICAgY29tcHV0ZXJHYW1lQm9hcmRbeXZhbF1beHZhbF0gPT09IFwibVwiXG4gICkge1xuICAgIGNpcmNsZS5jbGFzc0xpc3QuYWRkKFwibWlzcy1jaXJjbGVcIik7XG4gICAgZS50YXJnZXQuYXBwZW5kQ2hpbGQoY2lyY2xlKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBjaXJjbGUuY2xhc3NMaXN0LmFkZChcImhpdC1jaXJjbGVcIik7XG4gICAgZS50YXJnZXQuYXBwZW5kQ2hpbGQoY2lyY2xlKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuY29uc3QgYWRkRGlyZWN0aW9uTXNnID0gKG1zZywgdGltZSkgPT4ge1xuICBjb25zdCBjb250cm9scyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udHJvbHNcIik7XG5cbiAgY29uc3QgZGlyZWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGlyZWN0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkaXJlY3Rpb25zLWNvbnRhaW5lclwiKTtcblxuICBjb25zdCBkaXJlY3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBkaXJlY3Rpb25zLnRleHRDb250ZW50ID0gbXNnO1xuICBkaXJlY3Rpb25zLmNsYXNzTGlzdC5hZGQoXCJ0eXBpbmctZWZmZWN0XCIpO1xuICBkaXJlY3Rpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGlyZWN0aW9ucyk7XG5cbiAgY29udHJvbHMuYXBwZW5kQ2hpbGQoZGlyZWN0aW9uQ29udGFpbmVyKTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgc2V0VGltZW91dChyZXNvbHZlLCB0aW1lKTtcbiAgfSk7XG59O1xuXG5jb25zdCBjbGVhckRpcmVjdGlvbk1zZyA9ICgpID0+IHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250cm9sc1wiKS5pbm5lckhUTUwgPSBcIlwiO1xufTtcblxuY29uc3QgcmVuZGVyQ29tcHV0ZXJzQXR0YWNrID0gKHl2YWwsIHh2YWwpID0+IHtcbiAgY29uc3QgcGxheWVyR3JpZFNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgIFwiLnBsYXllci1ncmlkID4gLmdyaWQtY29udGFpbmVyID4gLmdyaWQtY29sID4gLmdyaWQtc3F1YXJlXCJcbiAgKTtcbiAgY29uc3QgY2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBwbGF5ZXJHcmlkU3F1YXJlcy5mb3JFYWNoKChncmlkU3F1YXJlKSA9PiB7XG4gICAgaWYgKFxuICAgICAgTnVtYmVyKGdyaWRTcXVhcmUuaWRbMF0pID09PSB5dmFsICYmXG4gICAgICBOdW1iZXIoZ3JpZFNxdWFyZS5pZFsyXSkgPT09IHh2YWxcbiAgICApIHtcbiAgICAgIGlmIChncmlkU3F1YXJlLmNsYXNzTGlzdC5jb250YWlucyhcInNoaXBcIikpIHtcbiAgICAgICAgZ3JpZFNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiZmxleC1jZW50ZXJlZFwiKTtcbiAgICAgICAgY2lyY2xlLmNsYXNzTGlzdC5hZGQoXCJoaXQtY2lyY2xlXCIpO1xuICAgICAgICBncmlkU3F1YXJlLmFwcGVuZENoaWxkKGNpcmNsZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBncmlkU3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJmbGV4LWNlbnRlcmVkXCIpO1xuICAgICAgICBjaXJjbGUuY2xhc3NMaXN0LmFkZChcIm1pc3MtY2lyY2xlXCIpO1xuICAgICAgICBncmlkU3F1YXJlLmFwcGVuZENoaWxkKGNpcmNsZSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCB7XG4gIGF0dGFja1NjcmVlbixcbiAgcGxheWVyc0F0a0Nob2ljZSxcbiAgcmVuZGVyQ29tcHV0ZXJzQXR0YWNrLFxuICBhZGREaXJlY3Rpb25Nc2csXG4gIGNsZWFyRGlyZWN0aW9uTXNnLFxufTtcbiIsImltcG9ydCBcIi4vcGxhY2VTaGlwU2NyZWVuLmNzc1wiO1xuaW1wb3J0IFNoaXAgZnJvbSBcIi4uL2dhbWUgbG9naWMvc2hpcFwiO1xuXG5jb25zdCBwbGFjZVNoaXBTY3JlZW4gPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiY29udGVudFwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChkcmF3R3JpZCgpKTtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiYWxpZ24taXRlbXMtY2VudGVyXCIpO1xuICBhZGRDb250cm9sc09uU2NyZWVuKCk7XG5cbiAgLy9pbml0aWFsaXppbmcgc2hpcHMgaGVyZSB3aXRoIHVuZGVmaW5lZCBmb3I6XG4gIC8vbG9jYXRpb24gLSB1c2VyIG5lZWRzIHRvIHNlbGVjdCB3aGVyZSBlYWNoIHNoaXAgd2lsbCBnb1xuICAvL2FsaWdubWVudCAtIHVzZXIgd2lsbCBzZWxlY3QgZWl0aGVyIGhvcml6b250YWwgb3IgdmVydGljYWwgdmlhIGEgYnV0dG9uXG4gIGNvbnN0IHNoaXBzID0gW1xuICAgIG5ldyBTaGlwKDUsIHVuZGVmaW5lZCwgXCJDYXJyaWVyXCIsIHVuZGVmaW5lZCksXG4gICAgbmV3IFNoaXAoNCwgdW5kZWZpbmVkLCBcIkJhdHRsZXNoaXBcIiwgdW5kZWZpbmVkKSxcbiAgICBuZXcgU2hpcCgzLCB1bmRlZmluZWQsIFwiRGVzdHJveWVyXCIsIHVuZGVmaW5lZCksXG4gICAgbmV3IFNoaXAoMywgdW5kZWZpbmVkLCBcIlN1Ym1hcmluZVwiLCB1bmRlZmluZWQpLFxuICAgIG5ldyBTaGlwKDIsIHVuZGVmaW5lZCwgXCJQYXRyb2wgQm9hdFwiLCB1bmRlZmluZWQpLFxuICBdO1xuXG4gIGF3YWl0IHBsYWNlU2hpcHNTZXF1ZW50aWFsbHkoc2hpcHMpO1xuXG4gIHJldHVybiBzaGlwcztcbn07XG5cbmNvbnN0IGRyYXdHcmlkID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgIGNvbnN0IGNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29sLmNsYXNzTGlzdC5hZGQoXCJncmlkLWNvbFwiKTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgIGNvbnN0IGdyaWRTcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZ3JpZFNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiZ3JpZC1zcXVhcmVcIik7XG4gICAgICBncmlkU3F1YXJlLmlkID0gYCR7W2osIGldfWA7XG4gICAgICBjb2wuYXBwZW5kQ2hpbGQoZ3JpZFNxdWFyZSk7XG4gICAgfVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb2wpO1xuICB9XG5cbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJncmlkLWNvbnRhaW5lclwiKTtcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmNvbnN0IGFkZENvbnRyb2xzT25TY3JlZW4gPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRyb2xzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250cm9sc1wiKTtcbiAgY29uc3QgY2hhbmdlRGlyZWN0aW9uQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5cbiAgaDEuaWQgPSBcImRpcmVjdGlvblRleHRcIjtcblxuICBjaGFuZ2VEaXJlY3Rpb25CdG4udGV4dENvbnRlbnQgPSBcIkhvcml6b250YWxcIjtcbiAgY2hhbmdlRGlyZWN0aW9uQnRuLmNsYXNzTGlzdC5hZGQoXCJjaGFuZ2UtZGlyZWN0aW9uLWJ0blwiKTtcbiAgY2hhbmdlRGlyZWN0aW9uQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2hhbmdlRGlyZWN0aW9uQnRuLnRleHRDb250ZW50ID09PSBcIkhvcml6b250YWxcIlxuICAgICAgPyAoY2hhbmdlRGlyZWN0aW9uQnRuLnRleHRDb250ZW50ID0gXCJWZXJ0aWNhbFwiKVxuICAgICAgOiAoY2hhbmdlRGlyZWN0aW9uQnRuLnRleHRDb250ZW50ID0gXCJIb3Jpem9udGFsXCIpO1xuICB9KTtcblxuICBjb250cm9scy5hcHBlbmRDaGlsZChoMSk7XG4gIGNvbnRyb2xzLmFwcGVuZENoaWxkKGNoYW5nZURpcmVjdGlvbkJ0bik7XG59O1xuXG5jb25zdCBhZGRIb3ZlckVmZmVjdCA9IChzaGlwTGVuZ3RoKSA9PiB7XG4gIGNvbnN0IHNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdyaWQtc3F1YXJlXCIpO1xuICBjb25zdCBob3ZlckhhbmRsZXIgPSAoZSkgPT4ge1xuICAgIGFkZEhvdmVyRWZmZWN0SGVscGVyKGUsIHNoaXBMZW5ndGgpO1xuICB9O1xuXG4gIHNxdWFyZXMuZm9yRWFjaCgoZ3JpZFNxdWFyZSkgPT4ge1xuICAgIGdyaWRTcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBob3ZlckhhbmRsZXIpO1xuICAgIGdyaWRTcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgaG92ZXJIYW5kbGVyKTtcbiAgfSk7XG4gIHJldHVybiBob3ZlckhhbmRsZXI7XG59O1xuXG5jb25zdCBhZGRIb3ZlckVmZmVjdEhlbHBlciA9IChldmVudCwgc2hpcExlbmd0aCkgPT4ge1xuICBjb25zdCBvcHBvc2l0ZUFsaWdubWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIuY2hhbmdlLWRpcmVjdGlvbi1idG5cIlxuICApLnRleHRDb250ZW50O1xuICBjb25zdCB4dmFsID0gZXZlbnQudGFyZ2V0LmlkWzJdO1xuICBjb25zdCB5dmFsID0gZXZlbnQudGFyZ2V0LmlkWzBdO1xuICByZXNldFVud2FudGVkU3R5bGluZygpO1xuICAvL2hpZ2hsaWdodCB0aGUgc3F1YXJlcyB2ZXJ0aWNhbGx5XG4gIGlmIChvcHBvc2l0ZUFsaWdubWVudCA9PT0gXCJIb3Jpem9udGFsXCIpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgc3RhcnRPZkhpZ2hsaWdodCA9IGkgKyBOdW1iZXIoeXZhbCk7XG4gICAgICBpZiAoIWlzVmFsaWRTcXVhcmUoZXZlbnQsIHNoaXBMZW5ndGgsIG9wcG9zaXRlQWxpZ25tZW50KSkge1xuICAgICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZShcInNoaXAtaGlnaGxpZ2h0LWVycm9yXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBkb2N1bWVudFxuICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoYCR7W3N0YXJ0T2ZIaWdobGlnaHQsIHh2YWxdfWApXG4gICAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwic2hpcC1oaWdobGlnaHRcIik7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuICAvL2hpZ2hsaWdodCB0aGUgc3F1YXJlcyBob3Jpem9udGFsbHlcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBzdGFydE9mSGlnaGxpZ2h0ID0gaSArIE51bWJlcih4dmFsKTtcbiAgICBpZiAoIWlzVmFsaWRTcXVhcmUoZXZlbnQsIHNoaXBMZW5ndGgsIG9wcG9zaXRlQWxpZ25tZW50KSkge1xuICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoXCJzaGlwLWhpZ2hsaWdodC1lcnJvclwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZG9jdW1lbnRcbiAgICAgIC5nZXRFbGVtZW50QnlJZChgJHtbeXZhbCwgc3RhcnRPZkhpZ2hsaWdodF19YClcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwic2hpcC1oaWdobGlnaHRcIik7XG4gIH1cbn07XG5cbmNvbnN0IHJlbW92ZUhvdmVyRWZmZWN0ID0gKGhvdmVySGFuZGxlcikgPT4ge1xuICBjb25zdCBzcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ncmlkLXNxdWFyZVwiKTtcblxuICBzcXVhcmVzLmZvckVhY2goKGdyaWRTcXVhcmUpID0+IHtcbiAgICBncmlkU3F1YXJlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgaG92ZXJIYW5kbGVyKTtcbiAgICBncmlkU3F1YXJlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGhvdmVySGFuZGxlcik7XG4gIH0pO1xufTtcblxuLy90aGlzIGZ1bmN0aW9uIGNhbGxzIHBsYWNlU2hpcE9uQ2xpY2tIZWxwZXJcbi8vd2hpY2ggd2lsbCBtb2RpZnkgdGhlIHNoaXAgb2JqZWN0cyBmaWVsZHNcbmNvbnN0IHBsYWNlU2hpcE9uQ2xpY2sgPSAoc2hpcCkgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdyaWQtc3F1YXJlXCIpO1xuXG4gICAgY29uc3QgY2xpY2tIYW5kbGVyID0gKGUpID0+IHtcbiAgICAgIGxldCBzaGlwUGxhY2VkID0gcGxhY2VTaGlwT25DbGlja0hlbHBlcihlLCBzaGlwKTtcbiAgICAgIGlmICghc2hpcFBsYWNlZCkge1xuICAgICAgICByZWplY3QoKTtcbiAgICAgIH1cbiAgICAgIHNxdWFyZXMuZm9yRWFjaCgoZ3JpZFNxdWFyZSkgPT4ge1xuICAgICAgICBncmlkU3F1YXJlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0hhbmRsZXIpO1xuICAgICAgfSk7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfTtcblxuICAgIHNxdWFyZXMuZm9yRWFjaCgoZ3JpZFNxdWFyZSkgPT4ge1xuICAgICAgZ3JpZFNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG4vL3RoaXMgZnVuY3Rpb24gd2lsbCBtb2RpZml5IHRoZSBwYXNzZWQgaW4gc2hpcHMgZmllbGRzXG5jb25zdCBwbGFjZVNoaXBPbkNsaWNrSGVscGVyID0gKGUsIHNoaXApID0+IHtcbiAgY29uc3Qgb3Bwb3NpdGVBbGlnbm1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLmNoYW5nZS1kaXJlY3Rpb24tYnRuXCJcbiAgKS50ZXh0Q29udGVudDtcblxuICBpZiAoIWlzVmFsaWRTcXVhcmUoZSwgc2hpcC50b3RhbExlbmd0aCwgb3Bwb3NpdGVBbGlnbm1lbnQpKSByZXR1cm4gZmFsc2U7XG5cbiAgY29uc3QgeHZhbCA9IGUudGFyZ2V0LmlkWzJdO1xuICBjb25zdCB5dmFsID0gZS50YXJnZXQuaWRbMF07XG4gIHNoaXAubG9jYXRpb24gPSBbeHZhbCwgeXZhbF07XG5cbiAgaWYgKG9wcG9zaXRlQWxpZ25tZW50ID09PSBcIkhvcml6b250YWxcIikge1xuICAgIHNoaXAuYWxpZ25tZW50ID0gXCJ2ZXJ0aWNhbFwiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC50b3RhbExlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBzdGFydE9mSGlnaGxpZ2h0ID0gaSArIE51bWJlcih5dmFsKTtcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5nZXRFbGVtZW50QnlJZChgJHtbc3RhcnRPZkhpZ2hsaWdodCwgeHZhbF19YClcbiAgICAgICAgLmNsYXNzTGlzdC5hZGQoXCJzaGlwLXBsYWNlZFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzaGlwLmFsaWdubWVudCA9IFwiaG9yaXpvbnRhbFwiO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAudG90YWxMZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHN0YXJ0T2ZIaWdobGlnaHQgPSBpICsgTnVtYmVyKHh2YWwpO1xuICAgIGRvY3VtZW50XG4gICAgICAuZ2V0RWxlbWVudEJ5SWQoYCR7W3l2YWwsIHN0YXJ0T2ZIaWdobGlnaHRdfWApXG4gICAgICAuY2xhc3NMaXN0LmFkZChcInNoaXAtcGxhY2VkXCIpO1xuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxuY29uc3QgaXNWYWxpZFNxdWFyZSA9IChlLCBzaGlwTGVuZ3RoLCBvcHBvc2l0ZUFsaWdubWVudCkgPT4ge1xuICBjb25zdCB4dmFsID0gZS50YXJnZXQuaWRbMl07XG4gIGNvbnN0IHl2YWwgPSBlLnRhcmdldC5pZFswXTtcblxuICBpZiAob3Bwb3NpdGVBbGlnbm1lbnQgPT09IFwiSG9yaXpvbnRhbFwiKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHN0YXJ0T2ZIaWdobGlnaHQgPSBpICsgTnVtYmVyKHl2YWwpO1xuICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7W3N0YXJ0T2ZIaWdobGlnaHQsIHh2YWxdfWApO1xuICAgICAgaWYgKHN0YXJ0T2ZIaWdobGlnaHQgPiA5IHx8IHNxdWFyZS5jbGFzc0xpc3QuY29udGFpbnMoXCJzaGlwLXBsYWNlZFwiKSlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgc3RhcnRPZkhpZ2hsaWdodCA9IGkgKyBOdW1iZXIoeHZhbCk7XG4gICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7W3l2YWwsIHN0YXJ0T2ZIaWdobGlnaHRdfWApO1xuICAgIGlmIChzdGFydE9mSGlnaGxpZ2h0ID4gOSB8fCBzcXVhcmUuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hpcC1wbGFjZWRcIikpXG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5jb25zdCByZXNldFVud2FudGVkU3R5bGluZyA9ICgpID0+IHtcbiAgY29uc3Qgc3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ3JpZC1zcXVhcmVcIik7XG5cbiAgc3F1YXJlcy5mb3JFYWNoKChncmlkU3F1YXJlKSA9PiB7XG4gICAgZ3JpZFNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKFwic2hpcC1oaWdobGlnaHQtZXJyb3JcIik7XG4gICAgZ3JpZFNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKFwic2hpcC1oaWdobGlnaHRcIik7XG4gIH0pO1xufTtcblxuY29uc3QgcGxhY2VTaGlwc1NlcXVlbnRpYWxseSA9IGFzeW5jIChzaGlwQXJyYXkpID0+IHtcbiAgbGV0IGkgPSAwO1xuICBsZXQgYWxsU2hpcHNQbGFjZWQgPSBmYWxzZTtcblxuICB3aGlsZSAoIWFsbFNoaXBzUGxhY2VkKSB7XG4gICAgY29uc3QgaG92ZXJFdmVudFJlZiA9IGFkZEhvdmVyRWZmZWN0KHNoaXBBcnJheVtpXS50b3RhbExlbmd0aCk7XG4gICAgdHJ5IHtcbiAgICAgIC8vcGxhY2VTaGlwT25DbGljayB3aWxsIG1vZGlmeSB0aGUgY3VycmVudCBzaGlwcyBhbGlnbm1lbnQgYW5kIGxvY2F0aW9uIGZpZWxkc1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgIFwiZGlyZWN0aW9uVGV4dFwiXG4gICAgICApLnRleHRDb250ZW50ID0gYFBsYWNlIERvd24gWW91ciAke3NoaXBBcnJheVtpXS5zaGlwTmFtZX0hYDtcbiAgICAgIGF3YWl0IHBsYWNlU2hpcE9uQ2xpY2soc2hpcEFycmF5W2ldKTtcbiAgICAgIGkrKztcbiAgICAgIGlmIChpID09PSA1KSB7XG4gICAgICAgIGFsbFNoaXBzUGxhY2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coXCJyZWplY3RlZCB0cnlpbmcgYWdhaW4uLi5cIik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHJlbW92ZUhvdmVyRWZmZWN0KGhvdmVyRXZlbnRSZWYpO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IHsgcGxhY2VTaGlwU2NyZWVuLCBkcmF3R3JpZCB9O1xuIiwiaW1wb3J0IFwiLi9zdGFydFNjcmVlbi5jc3NcIjtcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4uL2dhbWUgbG9naWMvcGxheWVyLmpzXCI7XG5cbmNvbnN0IHN0YXJ0U2NyZWVuID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImNvbnRlbnRcIik7XG4gIGNvbnN0IHN0YXJ0U2NyZWVuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IHRleHRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3Qgc3RhcnRHYW1lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgZXJyb3JNc2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICBsYWJlbC5odG1sRm9yID0gXCJwbGF5ZXJOYW1lXCI7XG4gIGxhYmVsLnRleHRDb250ZW50ID0gXCJFbnRlciBQbGF5ZXIgTmFtZTpcIjtcblxuICB0ZXh0SW5wdXQuaWQgPSBcInBsYXllck5hbWVcIjtcbiAgdGV4dElucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgdGV4dElucHV0LnBsYWNlaG9sZGVyID0gXCJOYW1lXCI7XG4gIHRleHRJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gIHRleHRJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG5cbiAgc3RhcnRHYW1lQnRuLnRleHRDb250ZW50ID0gXCJTdGFydCBHYW1lXCI7XG5cbiAgY29uc3QgY3JlYXRlUGxheWVyUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgc3RhcnRHYW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBpZiAoIXRleHRJbnB1dC5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgdGV4dElucHV0LmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKTtcbiAgICAgICAgZXJyb3JNc2cudGV4dENvbnRlbnQgPSB0ZXh0SW5wdXQudmFsaWRhdGlvbk1lc3NhZ2U7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHJlc29sdmUobmV3IFBsYXllcih0ZXh0SW5wdXQudmFsdWUsIHRydWUpKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZXJyb3JNc2cuY2xhc3NMaXN0LmFkZChcImVycm9yLW1zZ1wiKTtcbiAgc3RhcnRTY3JlZW5Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInN0YXJ0LXNjcmVlbi1jb250YWluZXJcIik7XG4gIHN0YXJ0U2NyZWVuQ29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgc3RhcnRTY3JlZW5Db250YWluZXIuYXBwZW5kQ2hpbGQoZXJyb3JNc2cpO1xuICBzdGFydFNjcmVlbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0SW5wdXQpO1xuICBzdGFydFNjcmVlbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzdGFydEdhbWVCdG4pO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHN0YXJ0U2NyZWVuQ29udGFpbmVyKTtcbiAgcmV0dXJuIGNyZWF0ZVBsYXllclByb21pc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdGFydFNjcmVlbjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgc3RhcnRTY3JlZW4gZnJvbSBcIi4vdWkvc3RhcnRTY3JlZW5cIjtcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vZ2FtZSBsb2dpYy9wbGF5ZXIuanNcIjtcbmltcG9ydCB7IHBsYWNlU2hpcFNjcmVlbiB9IGZyb20gXCIuL3VpL3BsYWNlU2hpcFNjcmVlblwiO1xuaW1wb3J0IEdhbWVCb2FyZCBmcm9tIFwiLi9nYW1lIGxvZ2ljL2dhbWVib2FyZFwiO1xuaW1wb3J0IFNoaXAgZnJvbSBcIi4vZ2FtZSBsb2dpYy9zaGlwXCI7XG5pbXBvcnQge1xuICBhdHRhY2tTY3JlZW4sXG4gIHBsYXllcnNBdGtDaG9pY2UsXG4gIHJlbmRlckNvbXB1dGVyc0F0dGFjayxcbiAgYWRkRGlyZWN0aW9uTXNnLFxuICBjbGVhckRpcmVjdGlvbk1zZyxcbn0gZnJvbSBcIi4vdWkvYXR0YWNrU2NyZWVuXCI7XG5cbmNvbnN0IGdhbWVMb29wID0gYXN5bmMgKCkgPT4ge1xuICAvL3Nob3dzIHN0YXJ0IHNjcmVlbiBhbmQgaW5pdGlsaXplcyBwbGF5ZXJzXG4gIGNvbnN0IHsgcGxheWVyLCBjb21wdXRlciB9ID0gYXdhaXQgaW5pdFBsYXllcnMoKTtcblxuICBjbGVhckdhbWVTY3JlZW4oKTtcblxuICAvL3Nob3dzIHBsYWNlIHNoaXAgc2NyZWVuIGFuZCBpbml0aWxpemVzIHRoZSBwbGF5ZXJcbiAgLy9hbmQgY29tcHV0ZXIgZ2FtZWJvYXJkcyB3aXRoIHNoaXBzXG4gIGNvbnN0IHsgcGxheWVyR2FtZUJvYXJkLCBjb21wdXRlckdhbWVCb2FyZCB9ID0gYXdhaXQgaW5pdEdhbWVCb2FyZHMoKTtcblxuICBjbGVhckdhbWVTY3JlZW4oKTtcbiAgY2xlYXJEaXJlY3Rpb25Nc2coKTtcblxuICBhdHRhY2tTY3JlZW4ocGxheWVyR2FtZUJvYXJkLCBjb21wdXRlckdhbWVCb2FyZCk7XG4gIC8vIGF3YWl0IGFkZERpcmVjdGlvbk1zZyhcbiAgLy8gICBgV2VsY29tZSB0byB0aGUgYmF0dGxlZmllbGQsIENhcHRhaW4gJHtwbGF5ZXIuZGlzcGxheU5hbWV9LmAsXG4gIC8vICAgMzUwMFxuICAvLyApO1xuXG4gIC8vd2hpbGUgdGhlIGNvbXB1dGVyIGFuZCBwbGF5ZXIgYm90aCBoYXZlIHNoaXBzIHN0aWxsXG4gIHdoaWxlICghcGxheWVyR2FtZUJvYXJkLmFsbFNoaXBzU3VuaygpICYmICFjb21wdXRlckdhbWVCb2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgIHRyeSB7XG4gICAgICAvL3BsYXllciBhdHRhY2tzXG4gICAgICAvLyBjbGVhckRpcmVjdGlvbk1zZygpO1xuICAgICAgLy8gYXdhaXQgYWRkRGlyZWN0aW9uTXNnKFxuICAgICAgLy8gICBgV2FpdGluZyBvbiB5b3VyIHRhcmdldCwgQ2FwdGFpbiAke3BsYXllci5kaXNwbGF5TmFtZX0hIGAsXG4gICAgICAvLyAgIDIwMDBcbiAgICAgIC8vICk7XG4gICAgICBjb25zdCBwbGF5ZXJzQXRrID0gYXdhaXQgcGxheWVyc0F0a0Nob2ljZShjb21wdXRlckdhbWVCb2FyZC5ib2FyZCk7XG4gICAgICBjb25zdCBwSGl0T3JNaXNzID0gY29tcHV0ZXJHYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhcbiAgICAgICAgcGxheWVyc0F0a1swXSxcbiAgICAgICAgcGxheWVyc0F0a1sxXVxuICAgICAgKTtcbiAgICAgIC8vIGNsZWFyRGlyZWN0aW9uTXNnKCk7XG4gICAgICAvLyBhd2FpdCBhZGREaXJlY3Rpb25Nc2coXG4gICAgICAvLyAgIGBZb3UgZmlyZSBhIHNob3QgaW50byBlbmVteSB3YXRlcnMgYW5kIGl0cyBhICR7cEhpdE9yTWlzc30uYCxcbiAgICAgIC8vICAgMzYwMFxuICAgICAgLy8gKTtcblxuICAgICAgLy9jb21wdXRlciBhdHRhY2tzXG5cbiAgICAgIGNvbXB1dGVyLnNtYXJ0TW92ZShwbGF5ZXJHYW1lQm9hcmQuYm9hcmQpO1xuICAgICAgY29uc3QgY0hpdE9yTWlzcyA9IHBsYXllckdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKFxuICAgICAgICBjb21wdXRlci5hdHRhY2tbMF0sXG4gICAgICAgIGNvbXB1dGVyLmF0dGFja1sxXVxuICAgICAgKTtcblxuICAgICAgLy8gY2xlYXJEaXJlY3Rpb25Nc2coKTtcbiAgICAgIC8vIGF3YWl0IGFkZERpcmVjdGlvbk1zZyhcbiAgICAgIC8vICAgYFRoZSBlbmVteSBmaXJlcyBhIHNob3QgYmFjayBhbmQgaXRzIGEgJHtjSGl0T3JNaXNzfS5gLFxuICAgICAgLy8gICAzNjAwXG4gICAgICAvLyApO1xuICAgICAgcmVuZGVyQ29tcHV0ZXJzQXR0YWNrKGNvbXB1dGVyLmF0dGFja1swXSwgY29tcHV0ZXIuYXR0YWNrWzFdKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG4gIGNvbnNvbGUubG9nKFwiZ2FtZSBlbmRlZFwiKTtcbn07XG5cbmNvbnN0IGluaXRQbGF5ZXJzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBwbGF5ZXJQcm9taXNlID0gc3RhcnRTY3JlZW4oKTtcblxuICBjb25zdCBwbGF5ZXIgPSBhd2FpdCBwbGF5ZXJQcm9taXNlO1xuICBjb25zdCBjb21wdXRlciA9IG5ldyBQbGF5ZXIoXCJDb21wdXRlclwiLCBmYWxzZSk7XG5cbiAgcmV0dXJuIHsgcGxheWVyLCBjb21wdXRlciB9O1xufTtcblxuY29uc3QgaW5pdEdhbWVCb2FyZHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHBsYXllckdhbWVCb2FyZCA9IG5ldyBHYW1lQm9hcmQoKTtcbiAgY29uc3QgY29tcHV0ZXJHYW1lQm9hcmQgPSBuZXcgR2FtZUJvYXJkKCk7XG5cbiAgYXdhaXQgc2V0UGxheWVyU2hpcHNPbkdhbWVib2FyZChwbGF5ZXJHYW1lQm9hcmQpO1xuICBzZXRDb21wdXRlclNoaXBzT25HYW1lYm9hcmQoY29tcHV0ZXJHYW1lQm9hcmQpO1xuICByZXR1cm4geyBwbGF5ZXJHYW1lQm9hcmQsIGNvbXB1dGVyR2FtZUJvYXJkIH07XG59O1xuXG5jb25zdCBzZXRQbGF5ZXJTaGlwc09uR2FtZWJvYXJkID0gYXN5bmMgKHBsYXllckdhbWVCb2FyZCkgPT4ge1xuICBjb25zdCBzaGlwQXJyYXkgPSBhd2FpdCBwbGFjZVNoaXBTY3JlZW4oKTtcbiAgZm9yIChsZXQgc2hpcCBvZiBzaGlwQXJyYXkpIHtcbiAgICBjb25zb2xlLmxvZyhwbGF5ZXJHYW1lQm9hcmQucGxhY2VTaGlwKHNoaXApKTtcbiAgfVxufTtcblxuY29uc3Qgc2V0Q29tcHV0ZXJTaGlwc09uR2FtZWJvYXJkID0gKGNvbXB1dGVyR2FtZUJvYXJkKSA9PiB7XG4gIGNvbnN0IHNoaXBBcnJheSA9IFtcbiAgICBuZXcgU2hpcCg1LCBbMCwgMF0sIFwiQ2FycmllclwiLCBcInZlcnRpY2FsXCIpLFxuICAgIG5ldyBTaGlwKDQsIFsxLCAwXSwgXCJCYXR0bGVzaGlwXCIsIFwidmVydGljYWxcIiksXG4gICAgbmV3IFNoaXAoMywgWzIsIDBdLCBcIkRlc3Ryb3llclwiLCBcInZlcnRpY2FsXCIpLFxuICAgIG5ldyBTaGlwKDMsIFszLCAwXSwgXCJTdWJtYXJpbmVcIiwgXCJ2ZXJ0aWNhbFwiKSxcbiAgICBuZXcgU2hpcCgyLCBbNCwgMF0sIFwiUGF0cm9sIEJvYXRcIiwgXCJ2ZXJ0aWNhbFwiKSxcbiAgXTtcblxuICBmb3IgKGxldCBzaGlwIG9mIHNoaXBBcnJheSkge1xuICAgIGNvbXB1dGVyR2FtZUJvYXJkLnBsYWNlU2hpcChzaGlwKTtcbiAgfVxufTtcblxuY29uc3QgY2xlYXJHYW1lU2NyZWVuID0gKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiY29udGVudFwiKS5pbm5lckhUTUwgPSBcIlwiO1xufTtcbmdhbWVMb29wKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
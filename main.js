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
button {
  cursor: pointer;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;EACV,uCAAuC;AACzC;;AAEA;AACA;;AAEA;EACE,iBAAiB;EACjB,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,8BAA8B;EAC9B,uCAAuC;EACvC,SAAS;AACX;;AAEA;;EAEE,yBAAyB;EACzB,gBAAgB;EAChB,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,cAAc;EACd,SAAS;AACX;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,uBAAuB;EACvB,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;AACA;EACE,eAAe;AACjB","sourcesContent":["* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: \"Chakra Petch\", sans-serif;\n}\n\n:root {\n}\n\nbody {\n  min-height: 100vh;\n  background-color: navy;\n}\n\n#root {\n  min-height: inherit;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 0.5fr 5fr 0.5fr;\n  gap: 1rem;\n}\n\nheader,\nfooter {\n  background-color: #d0ccd0;\n  grid-column: 1/3;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nheader {\n  grid-row: 1/2;\n}\n\nheader h1 {\n  font-size: 4rem;\n  letter-spacing: 0.3rem;\n}\n\n#controls {\n  grid-column: 1/3;\n  grid-row: 2/3;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  color: #d0ccd0;\n  gap: 1rem;\n}\n\ncontent {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  grid-row: 3/4;\n  grid-column: 1/3;\n}\n\nfooter {\n  grid-row: 4/5;\n}\nbutton {\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);
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
  gap: 5rem;
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
  animation: typing 1.5s steps(40, end), blink-caret 0.75s step-end infinite;
}

.ship-sunk {
  background-color: red;
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
`, "",{"version":3,"sources":["webpack://./src/ui/attackScreen.css"],"names":[],"mappings":"AAAA;EACE,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,iBAAiB;EACjB,iCAAiC;EACjC,aAAa;EACb,mBAAmB;EACnB,cAAc;EACd,yBAAyB;AAC3B;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,SAAS;EACT,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;AACnB;AACA;EACE,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;;EAEE,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;EAChB,iCAAiC;EACjC,mBAAmB;EACnB,cAAc;EACd,qBAAqB;EACrB,0EAA0E;AAC5E;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE;IACE,QAAQ;EACV;EACA;IACE,WAAW;EACb;AACF;;AAEA;EACE;;IAEE,yBAAyB;EAC3B;EACA;IACE,6BAA6B;EAC/B;AACF","sourcesContent":[".grid-gap {\n  gap: 5rem;\n}\n\n.directions-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.8rem;\n  background-color: rgb(87, 96, 99);\n  padding: 1rem;\n  border-radius: 1rem;\n  min-width: 60%;\n  border: 2px solid #d0ccd0;\n}\n\n.player-grid,\n.computer-grid {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  gap: 1rem;\n  color: #d0ccd0;\n  font-size: 1.25rem;\n}\n\n.computer-grid > .grid-container > .grid-col > .grid-square:hover {\n  cursor: crosshair;\n}\n.computer-grid > .grid-container > .grid-col > .flex-centered:hover {\n  cursor: not-allowed;\n}\n\n.ship {\n  background-color: aqua;\n}\n.flex-centered {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.hit-circle,\n.miss-circle {\n  width: 20px;\n  height: 20px;\n  background-color: white;\n  border-radius: 50%;\n}\n\n.hit-circle {\n  background-color: red;\n}\n\n.typing-effect {\n  overflow: hidden;\n  border-right: 0.15em solid orange;\n  white-space: nowrap;\n  margin: 0 auto;\n  letter-spacing: 0.1em;\n  animation: typing 1.5s steps(40, end), blink-caret 0.75s step-end infinite;\n}\n\n.ship-sunk {\n  background-color: red;\n}\n\n@keyframes typing {\n  from {\n    width: 0;\n  }\n  to {\n    width: 100%;\n  }\n}\n\n@keyframes blink-caret {\n  from,\n  to {\n    border-color: transparent;\n  }\n  50% {\n    border-color: rgb(87, 96, 99);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/ui/gameOverScreen.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/ui/gameOverScreen.css ***!
  \*************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  margin: auto;
  min-width: 25%;
  min-height: 25%;
  background-color: navy;
  color: #d0ccd0;
}

.modal[open]::backdrop {
  background-color: rgba(0, 0, 0, 0.7);
}

.play-again-btn {
  padding: 1rem;
}
`, "",{"version":3,"sources":["webpack://./src/ui/gameOverScreen.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,sBAAsB;EACtB,SAAS;EACT,aAAa;EACb,YAAY;EACZ,cAAc;EACd,eAAe;EACf,sBAAsB;EACtB,cAAc;AAChB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,aAAa;AACf","sourcesContent":[".modal {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 2rem;\n  margin: auto;\n  min-width: 25%;\n  min-height: 25%;\n  background-color: navy;\n  color: #d0ccd0;\n}\n\n.modal[open]::backdrop {\n  background-color: rgba(0, 0, 0, 0.7);\n}\n\n.play-again-btn {\n  padding: 1rem;\n}\n"],"sourceRoot":""}]);
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
  cursor: pointer;
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
`, "",{"version":3,"sources":["webpack://./src/ui/placeShipScreen.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,WAAW;AACb;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,uBAAuB;EACvB,qBAAqB;AACvB;;AAEA;EACE,2BAA2B;EAC3B,eAAe;AACjB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,YAAY;AACd;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB","sourcesContent":[".grid-container {\n  display: flex;\n  gap: 0.2rem;\n}\n\n.grid-col {\n  flex-direction: column;\n}\n\n.grid-square {\n  height: 45px;\n  width: 45px;\n  border: 1px solid white;\n  margin-bottom: 0.2rem;\n}\n\n.ship-highlight {\n  background-color: lightblue;\n  cursor: pointer;\n}\n\n.ship-placed {\n  background-color: lightblue;\n}\n\n.ship-highlight-error {\n  background-color: red;\n  cursor: not-allowed;\n}\n\n.change-direction-btn {\n  width: 15%;\n  height: 30px;\n}\n\n.align-items-center {\n  align-items: center;\n}\n\n#directionText {\n  font-size: 1.7rem;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/ui/gameOverScreen.css":
/*!***********************************!*\
  !*** ./src/ui/gameOverScreen.css ***!
  \***********************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_gameOverScreen_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./gameOverScreen.css */ "./node_modules/css-loader/dist/cjs.js!./src/ui/gameOverScreen.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_gameOverScreen_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_gameOverScreen_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_gameOverScreen_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_gameOverScreen_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/* harmony export */   highlightSunkShips: () => (/* binding */ highlightSunkShips),
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

const highlightSunkShips = async (shipsOnBoard) => {
  for (const ship of shipsOnBoard) {
    if (ship.totalLength === 0) {
      if (ship.shipName === "Carrier") {
        await highlightSunkShipsHelper(5, ship);
      } else if (ship.shipName === "Battleship") {
        await highlightSunkShipsHelper(4, ship);
      } else if (ship.shipName === "Destroyer") {
        await highlightSunkShipsHelper(3, ship);
      } else if (ship.shipName === "Submarine") {
        await highlightSunkShipsHelper(3, ship);
      } else if (ship.shipName === "Patrol Boat") {
        await highlightSunkShipsHelper(2, ship);
      }
    }
  }
};

const highlightSunkShipsHelper = async (length, ship) => {
  const shipLocation = ship.location;
  const y = shipLocation[1];
  const x = shipLocation[0];
  if (ship.alignment === "vertical") {
    const newLocation = [y - length, x];
    const selector = `.computer-grid > .grid-container > .grid-col .grid-square[id="${newLocation[0]},${newLocation[1]}"]`;
    if (document.querySelector(selector).classList.contains("ship-sunk")) {
      return;
    }
    clearDirectionMsg();
    await addDirectionMsg(`You have sunk the enemys ${ship.shipName}!!!`, 3000);
    for (let i = 0; i < length; i++) {
      const selector = `.computer-grid > .grid-container > .grid-col .grid-square[id="${
        newLocation[0] + i
      },${newLocation[1]}"]`;
      document.querySelector(selector).classList.add("ship-sunk");
    }
  } else {
    const newLocation = [y, x - length];
    const selector = `.computer-grid > .grid-container > .grid-col .grid-square[id="${newLocation[0]},${newLocation[1]}"]`;
    if (document.querySelector(selector).classList.contains("ship-sunk")) {
      return;
    }
    clearDirectionMsg();
    await addDirectionMsg(`You have sunk the enemys ${ship.shipName}!!!`, 3000);
    for (let i = 0; i < length; i++) {
      const selector = `.computer-grid > .grid-container > .grid-col .grid-square[id="${
        newLocation[0]
      },${newLocation[1] + i}"]`;
      document.querySelector(selector).classList.add("ship-sunk");
    }
  }
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

/***/ "./src/ui/gameOverScreen.js":
/*!**********************************!*\
  !*** ./src/ui/gameOverScreen.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameOverScreen_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameOverScreen.css */ "./src/ui/gameOverScreen.css");


const gameOverModal = (msg) => {
  const root = document.querySelector("#root");

  const dialog = document.createElement("dialog");
  dialog.classList.add("modal");
  dialog.id = "modal";

  const header = document.createElement("h2");
  header.textContent = msg;

  const playAgainBtn = document.createElement("button");
  playAgainBtn.textContent = "Play Again";
  playAgainBtn.classList.add("play-again-btn");
  playAgainBtn.id = "playAgain";
  playAgainBtn.addEventListener("click", () => {
    location.reload();
  });

  dialog.appendChild(header);
  dialog.appendChild(playAgainBtn);

  root.appendChild(dialog);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameOverModal);


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
/* harmony import */ var _ui_gameOverScreen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/gameOverScreen */ "./src/ui/gameOverScreen.js");
/* harmony import */ var _ui_attackScreen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/attackScreen */ "./src/ui/attackScreen.js");









const gameLoop = async () => {
  //shows start screen and initilizes players
  const { player, computer } = await initPlayers();

  clearGameScreen();

  //shows place ship screen and initilizes the player
  //and computer gameboards with ships
  const { playerGameBoard, computerGameBoard } = await initGameBoards();

  clearGameScreen();
  (0,_ui_attackScreen__WEBPACK_IMPORTED_MODULE_7__.clearDirectionMsg)();

  (0,_ui_attackScreen__WEBPACK_IMPORTED_MODULE_7__.attackScreen)(playerGameBoard, computerGameBoard);
  await (0,_ui_attackScreen__WEBPACK_IMPORTED_MODULE_7__.addDirectionMsg)(
    `Welcome to the battlefield, Captain ${player.displayName}.`,
    1500
  );

  //while the computer and player both have ships still
  while (!playerGameBoard.allShipsSunk() && !computerGameBoard.allShipsSunk()) {
    try {
      // player attacks
      (0,_ui_attackScreen__WEBPACK_IMPORTED_MODULE_7__.clearDirectionMsg)();
      await (0,_ui_attackScreen__WEBPACK_IMPORTED_MODULE_7__.addDirectionMsg)(
        `Waiting on your target, Captain ${player.displayName}! `,
        1000
      );
      const playersAtk = await (0,_ui_attackScreen__WEBPACK_IMPORTED_MODULE_7__.playersAtkChoice)(computerGameBoard.board);
      const pHitOrMiss = computerGameBoard.receiveAttack(
        playersAtk[0],
        playersAtk[1]
      );

      (0,_ui_attackScreen__WEBPACK_IMPORTED_MODULE_7__.clearDirectionMsg)();
      await (0,_ui_attackScreen__WEBPACK_IMPORTED_MODULE_7__.addDirectionMsg)(
        `You fire a shot into enemy waters and its a ${pHitOrMiss}.`,
        1600
      );
      await (0,_ui_attackScreen__WEBPACK_IMPORTED_MODULE_7__.highlightSunkShips)(computerGameBoard.shipsOnBoard);

      if (computerGameBoard.allShipsSunk()) break;
      //computer attacks

      computer.smartMove(playerGameBoard.board);
      const cHitOrMiss = playerGameBoard.receiveAttack(
        computer.attack[0],
        computer.attack[1]
      );

      (0,_ui_attackScreen__WEBPACK_IMPORTED_MODULE_7__.clearDirectionMsg)();
      await (0,_ui_attackScreen__WEBPACK_IMPORTED_MODULE_7__.addDirectionMsg)(
        `The enemy fires a shot back and its a ${cHitOrMiss}.`,
        1600
      );
      (0,_ui_attackScreen__WEBPACK_IMPORTED_MODULE_7__.renderComputersAttack)(computer.attack[0], computer.attack[1]);
    } catch (error) {
      console.error(error);
    }
  }
  const computerHasWon = playerGameBoard.allShipsSunk();

  let winningMsg = "";
  computerHasWon
    ? (winningMsg = "The computer kicked your butt. Better luck next time!")
    : (winningMsg = "You managed to beat the computer. Nicely done!");

  (0,_ui_gameOverScreen__WEBPACK_IMPORTED_MODULE_6__["default"])(winningMsg);
  document.querySelector("#modal").showModal();
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
    playerGameBoard.placeShip(ship);
  }
};

const setComputerShipsOnGameboard = (computerGameBoard) => {
  const shipArray = computerShipLocations();

  for (let ship of shipArray) {
    computerGameBoard.placeShip(ship);
  }
};
//static ship spawns for now
const computerShipLocations = () => {
  switch (Math.floor(Math.random() * 5)) {
    case 0:
      return [
        new (_game_logic_ship__WEBPACK_IMPORTED_MODULE_5___default())(5, [0, 0], "Carrier", "vertical"),
        new (_game_logic_ship__WEBPACK_IMPORTED_MODULE_5___default())(4, [6, 0], "Battleship", "vertical"),
        new (_game_logic_ship__WEBPACK_IMPORTED_MODULE_5___default())(3, [2, 5], "Destroyer", "horizontal"),
        new (_game_logic_ship__WEBPACK_IMPORTED_MODULE_5___default())(3, [1, 6], "Submarine", "vertical"),
        new (_game_logic_ship__WEBPACK_IMPORTED_MODULE_5___default())(2, [8, 8], "Patrol Boat", "horizontal"),
      ];
    case 1:
      return [
        new (_game_logic_ship__WEBPACK_IMPORTED_MODULE_5___default())(5, [2, 3], "Carrier", "vertical"),
        new (_game_logic_ship__WEBPACK_IMPORTED_MODULE_5___default())(4, [6, 0], "Battleship", "horizontal"),
        new (_game_logic_ship__WEBPACK_IMPORTED_MODULE_5___default())(3, [5, 6], "Destroyer", "horizontal"),
        new (_game_logic_ship__WEBPACK_IMPORTED_MODULE_5___default())(3, [8, 7], "Submarine", "vertical"),
        new (_game_logic_ship__WEBPACK_IMPORTED_MODULE_5___default())(2, [2, 8], "Patrol Boat", "vertical"),
      ];
    case 2:
      return [
        new (_game_logic_ship__WEBPACK_IMPORTED_MODULE_5___default())(5, [2, 7], "Carrier", "horizontal"),
        new (_game_logic_ship__WEBPACK_IMPORTED_MODULE_5___default())(4, [6, 2], "Battleship", "horizontal"),
        new (_game_logic_ship__WEBPACK_IMPORTED_MODULE_5___default())(3, [3, 2], "Destroyer", "vertical"),
        new (_game_logic_ship__WEBPACK_IMPORTED_MODULE_5___default())(3, [7, 9], "Submarine", "horizontal"),
        new (_game_logic_ship__WEBPACK_IMPORTED_MODULE_5___default())(2, [0, 4], "Patrol Boat", "vertical"),
      ];
    case 3:
      return [
        new (_game_logic_ship__WEBPACK_IMPORTED_MODULE_5___default())(5, [3, 4], "Carrier", "vertical"),
        new (_game_logic_ship__WEBPACK_IMPORTED_MODULE_5___default())(4, [7, 5], "Battleship", "vertical"),
        new (_game_logic_ship__WEBPACK_IMPORTED_MODULE_5___default())(3, [5, 1], "Destroyer", "horizontal"),
        new (_game_logic_ship__WEBPACK_IMPORTED_MODULE_5___default())(3, [0, 1], "Submarine", "horizontal"),
        new (_game_logic_ship__WEBPACK_IMPORTED_MODULE_5___default())(2, [0, 6], "Patrol Boat", "horizontal"),
      ];
    case 4:
      return [
        new (_game_logic_ship__WEBPACK_IMPORTED_MODULE_5___default())(5, [3, 5], "Carrier", "horizontal"),
        new (_game_logic_ship__WEBPACK_IMPORTED_MODULE_5___default())(4, [4, 0], "Battleship", "horizontal"),
        new (_game_logic_ship__WEBPACK_IMPORTED_MODULE_5___default())(3, [2, 1], "Destroyer", "vertical"),
        new (_game_logic_ship__WEBPACK_IMPORTED_MODULE_5___default())(3, [1, 7], "Submarine", "vertical"),
        new (_game_logic_ship__WEBPACK_IMPORTED_MODULE_5___default())(2, [8, 2], "Patrol Boat", "horizontal"),
      ];
  }
};

const clearGameScreen = () => {
  document.querySelector("content").innerHTML = "";
};
gameLoop();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsK0JBQStCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLCtCQUErQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLHNCQUFzQjtBQUM1QztBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sc0JBQXNCLHNCQUFzQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMxSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7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QUFJO0FBQ2hCLFlBQVkseURBQUk7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsWUFBWSx5REFBSTtBQUNoQixZQUFZLHlEQUFJO0FBQ2hCLFlBQVkseURBQUk7QUFDaEIsWUFBWSx5REFBSTtBQUNoQixZQUFZLHlEQUFJO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLFlBQVkseURBQUk7QUFDaEIsWUFBWSx5REFBSTtBQUNoQixZQUFZLHlEQUFJO0FBQ2hCLFlBQVkseURBQUk7QUFDaEIsWUFBWSx5REFBSTtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxZQUFZLHlEQUFJO0FBQ2hCLFlBQVkseURBQUk7QUFDaEIsWUFBWSx5REFBSTtBQUNoQixZQUFZLHlEQUFJO0FBQ2hCLFlBQVkseURBQUk7QUFDaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy91aS9hdHRhY2tTY3JlZW4uY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdWkvZ2FtZU92ZXJTY3JlZW4uY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdWkvcGxhY2VTaGlwU2NyZWVuLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3VpL3N0YXJ0U2NyZWVuLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3VpL2F0dGFja1NjcmVlbi5jc3M/OWZhZiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3VpL2dhbWVPdmVyU2NyZWVuLmNzcz9hZDhkIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdWkvcGxhY2VTaGlwU2NyZWVuLmNzcz83OTc0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdWkvc3RhcnRTY3JlZW4uY3NzPzMwYzQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUgbG9naWMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZSBsb2dpYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lIGxvZ2ljL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy91aS9hdHRhY2tTY3JlZW4uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy91aS9nYW1lT3ZlclNjcmVlbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3VpL3BsYWNlU2hpcFNjcmVlbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3VpL3N0YXJ0U2NyZWVuLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtZmFtaWx5OiBcIkNoYWtyYSBQZXRjaFwiLCBzYW5zLXNlcmlmO1xufVxuXG46cm9vdCB7XG59XG5cbmJvZHkge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbmF2eTtcbn1cblxuI3Jvb3Qge1xuICBtaW4taGVpZ2h0OiBpbmhlcml0O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDAuNWZyIDVmciAwLjVmcjtcbiAgZ2FwOiAxcmVtO1xufVxuXG5oZWFkZXIsXG5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDBjY2QwO1xuICBncmlkLWNvbHVtbjogMS8zO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5oZWFkZXIge1xuICBncmlkLXJvdzogMS8yO1xufVxuXG5oZWFkZXIgaDEge1xuICBmb250LXNpemU6IDRyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjNyZW07XG59XG5cbiNjb250cm9scyB7XG4gIGdyaWQtY29sdW1uOiAxLzM7XG4gIGdyaWQtcm93OiAyLzM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZDBjY2QwO1xuICBnYXA6IDFyZW07XG59XG5cbmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdyaWQtcm93OiAzLzQ7XG4gIGdyaWQtY29sdW1uOiAxLzM7XG59XG5cbmZvb3RlciB7XG4gIGdyaWQtcm93OiA0LzU7XG59XG5idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsU0FBUztFQUNULFVBQVU7RUFDVix1Q0FBdUM7QUFDekM7O0FBRUE7QUFDQTs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qix1Q0FBdUM7RUFDdkMsU0FBUztBQUNYOztBQUVBOztFQUVFLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJDaGFrcmEgUGV0Y2hcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG46cm9vdCB7XFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBuYXZ5O1xcbn1cXG5cXG4jcm9vdCB7XFxuICBtaW4taGVpZ2h0OiBpbmhlcml0O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDAuNWZyIDVmciAwLjVmcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuaGVhZGVyLFxcbmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDBjY2QwO1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmhlYWRlciB7XFxuICBncmlkLXJvdzogMS8yO1xcbn1cXG5cXG5oZWFkZXIgaDEge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3JlbTtcXG59XFxuXFxuI2NvbnRyb2xzIHtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxuICBncmlkLXJvdzogMi8zO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogI2QwY2NkMDtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdyaWQtcm93OiAzLzQ7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZ3JpZC1yb3c6IDQvNTtcXG59XFxuYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuZ3JpZC1nYXAge1xuICBnYXA6IDVyZW07XG59XG5cbi5kaXJlY3Rpb25zLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg3LCA5NiwgOTkpO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBtaW4td2lkdGg6IDYwJTtcbiAgYm9yZGVyOiAycHggc29saWQgI2QwY2NkMDtcbn1cblxuLnBsYXllci1ncmlkLFxuLmNvbXB1dGVyLWdyaWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBnYXA6IDFyZW07XG4gIGNvbG9yOiAjZDBjY2QwO1xuICBmb250LXNpemU6IDEuMjVyZW07XG59XG5cbi5jb21wdXRlci1ncmlkID4gLmdyaWQtY29udGFpbmVyID4gLmdyaWQtY29sID4gLmdyaWQtc3F1YXJlOmhvdmVyIHtcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XG59XG4uY29tcHV0ZXItZ3JpZCA+IC5ncmlkLWNvbnRhaW5lciA+IC5ncmlkLWNvbCA+IC5mbGV4LWNlbnRlcmVkOmhvdmVyIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLnNoaXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xufVxuLmZsZXgtY2VudGVyZWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmhpdC1jaXJjbGUsXG4ubWlzcy1jaXJjbGUge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uaGl0LWNpcmNsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLnR5cGluZy1lZmZlY3Qge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmlnaHQ6IDAuMTVlbSBzb2xpZCBvcmFuZ2U7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG4gIGFuaW1hdGlvbjogdHlwaW5nIDEuNXMgc3RlcHMoNDAsIGVuZCksIGJsaW5rLWNhcmV0IDAuNzVzIHN0ZXAtZW5kIGluZmluaXRlO1xufVxuXG4uc2hpcC1zdW5rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG5Aa2V5ZnJhbWVzIHR5cGluZyB7XG4gIGZyb20ge1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIHRvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGJsaW5rLWNhcmV0IHtcbiAgZnJvbSxcbiAgdG8ge1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgNTAlIHtcbiAgICBib3JkZXItY29sb3I6IHJnYig4NywgOTYsIDk5KTtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdWkvYXR0YWNrU2NyZWVuLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixpQ0FBaUM7RUFDakMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QseUJBQXlCO0FBQzNCOztBQUVBOztFQUVFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsU0FBUztFQUNULGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlDQUFpQztFQUNqQyxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQiwwRUFBMEU7QUFDNUU7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRTtJQUNFLFFBQVE7RUFDVjtFQUNBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRTs7SUFFRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLDZCQUE2QjtFQUMvQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5ncmlkLWdhcCB7XFxuICBnYXA6IDVyZW07XFxufVxcblxcbi5kaXJlY3Rpb25zLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODcsIDk2LCA5OSk7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIG1pbi13aWR0aDogNjAlO1xcbiAgYm9yZGVyOiAycHggc29saWQgI2QwY2NkMDtcXG59XFxuXFxuLnBsYXllci1ncmlkLFxcbi5jb21wdXRlci1ncmlkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgY29sb3I6ICNkMGNjZDA7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcblxcbi5jb21wdXRlci1ncmlkID4gLmdyaWQtY29udGFpbmVyID4gLmdyaWQtY29sID4gLmdyaWQtc3F1YXJlOmhvdmVyIHtcXG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xcbn1cXG4uY29tcHV0ZXItZ3JpZCA+IC5ncmlkLWNvbnRhaW5lciA+IC5ncmlkLWNvbCA+IC5mbGV4LWNlbnRlcmVkOmhvdmVyIHtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblxcbi5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxufVxcbi5mbGV4LWNlbnRlcmVkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oaXQtY2lyY2xlLFxcbi5taXNzLWNpcmNsZSB7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uaGl0LWNpcmNsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi50eXBpbmctZWZmZWN0IHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBib3JkZXItcmlnaHQ6IDAuMTVlbSBzb2xpZCBvcmFuZ2U7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XFxuICBhbmltYXRpb246IHR5cGluZyAxLjVzIHN0ZXBzKDQwLCBlbmQpLCBibGluay1jYXJldCAwLjc1cyBzdGVwLWVuZCBpbmZpbml0ZTtcXG59XFxuXFxuLnNoaXAtc3VuayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbkBrZXlmcmFtZXMgdHlwaW5nIHtcXG4gIGZyb20ge1xcbiAgICB3aWR0aDogMDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgYmxpbmstY2FyZXQge1xcbiAgZnJvbSxcXG4gIHRvIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiKDg3LCA5NiwgOTkpO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5tb2RhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDFyZW07XG4gIHBhZGRpbmc6IDJyZW07XG4gIG1hcmdpbjogYXV0bztcbiAgbWluLXdpZHRoOiAyNSU7XG4gIG1pbi1oZWlnaHQ6IDI1JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogbmF2eTtcbiAgY29sb3I6ICNkMGNjZDA7XG59XG5cbi5tb2RhbFtvcGVuXTo6YmFja2Ryb3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG59XG5cbi5wbGF5LWFnYWluLWJ0biB7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy91aS9nYW1lT3ZlclNjcmVlbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsU0FBUztFQUNULGFBQWE7RUFDYixZQUFZO0VBQ1osY0FBYztFQUNkLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubW9kYWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWluLXdpZHRoOiAyNSU7XFxuICBtaW4taGVpZ2h0OiAyNSU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBuYXZ5O1xcbiAgY29sb3I6ICNkMGNjZDA7XFxufVxcblxcbi5tb2RhbFtvcGVuXTo6YmFja2Ryb3Age1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbn1cXG5cXG4ucGxheS1hZ2Fpbi1idG4ge1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuZ3JpZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDAuMnJlbTtcbn1cblxuLmdyaWQtY29sIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmdyaWQtc3F1YXJlIHtcbiAgaGVpZ2h0OiA0NXB4O1xuICB3aWR0aDogNDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIG1hcmdpbi1ib3R0b206IDAuMnJlbTtcbn1cblxuLnNoaXAtaGlnaGxpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zaGlwLXBsYWNlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcbn1cblxuLnNoaXAtaGlnaGxpZ2h0LWVycm9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4uY2hhbmdlLWRpcmVjdGlvbi1idG4ge1xuICB3aWR0aDogMTUlO1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5hbGlnbi1pdGVtcy1jZW50ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jZGlyZWN0aW9uVGV4dCB7XG4gIGZvbnQtc2l6ZTogMS43cmVtO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdWkvcGxhY2VTaGlwU2NyZWVuLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHVCQUF1QjtFQUN2QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5ncmlkLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAwLjJyZW07XFxufVxcblxcbi5ncmlkLWNvbCB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZ3JpZC1zcXVhcmUge1xcbiAgaGVpZ2h0OiA0NXB4O1xcbiAgd2lkdGg6IDQ1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIG1hcmdpbi1ib3R0b206IDAuMnJlbTtcXG59XFxuXFxuLnNoaXAtaGlnaGxpZ2h0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNoaXAtcGxhY2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcXG59XFxuXFxuLnNoaXAtaGlnaGxpZ2h0LWVycm9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblxcbi5jaGFuZ2UtZGlyZWN0aW9uLWJ0biB7XFxuICB3aWR0aDogMTUlO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4uYWxpZ24taXRlbXMtY2VudGVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNkaXJlY3Rpb25UZXh0IHtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zdGFydC1zY3JlZW4tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbiAgd2lkdGg6IDIwJTtcbiAgY29sb3I6ICNkMGNjZDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnN0YXJ0LXNjcmVlbi1jb250YWluZXIgbGFiZWwge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLnN0YXJ0LXNjcmVlbi1jb250YWluZXIgaW5wdXQge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QwY2NkMDtcbn1cblxuLnN0YXJ0LXNjcmVlbi1jb250YWluZXIgYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QwY2NkMDtcbn1cblxuLmVycm9yLW1zZyB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5lcnJvciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgb3V0bGluZTogMXB4IHNvbGlkIHJlZDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3VpL3N0YXJ0U2NyZWVuLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsVUFBVTtFQUNWLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGlCQUFpQjtFQUNqQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixzQkFBc0I7QUFDeEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnN0YXJ0LXNjcmVlbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICB3aWR0aDogMjAlO1xcbiAgY29sb3I6ICNkMGNjZDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zdGFydC1zY3JlZW4tY29udGFpbmVyIGxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uc3RhcnQtc2NyZWVuLWNvbnRhaW5lciBpbnB1dCB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QwY2NkMDtcXG59XFxuXFxuLnN0YXJ0LXNjcmVlbi1jb250YWluZXIgYnV0dG9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QwY2NkMDtcXG59XFxuXFxuLmVycm9yLW1zZyB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4uZXJyb3Ige1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgb3V0bGluZTogMXB4IHNvbGlkIHJlZDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYXR0YWNrU2NyZWVuLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYXR0YWNrU2NyZWVuLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lT3ZlclNjcmVlbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhbWVPdmVyU2NyZWVuLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wbGFjZVNoaXBTY3JlZW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wbGFjZVNoaXBTY3JlZW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0YXJ0U2NyZWVuLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3RhcnRTY3JlZW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjbGFzcyBHYW1lQm9hcmQge1xuICAjYm9hcmQgPSB0aGlzLiNjcmVhdGVCb2FyZCgpO1xuICAjc2hpcHNPbkJvYXJkID0gW107XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGdldCBib2FyZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jYm9hcmQ7XG4gIH1cblxuICBnZXQgc2hpcHNPbkJvYXJkKCkge1xuICAgIHJldHVybiB0aGlzLiNzaGlwc09uQm9hcmQ7XG4gIH1cblxuICAjY3JlYXRlQm9hcmQoKSB7XG4gICAgbGV0IGJvYXJkID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBib2FyZC5wdXNoKFtdKTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICBib2FyZFtpXVtqXSA9IFwiXCI7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBib2FyZDtcbiAgfVxuXG4gIHBsYWNlU2hpcChzaGlwKSB7XG4gICAgaWYgKHRoaXMuI2luY29ycmVjdEFsbGlnbm1lbnRTcGVjaWZpZWQoc2hpcCkpIHtcbiAgICAgIHJldHVybiBcIkluY29ycmVjdCBhbGlnbm1lbnRcIjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy4jc2hpcFdpbGxPdmVyZmxvd0JvYXJkKHNoaXApKSB7XG4gICAgICByZXR1cm4gXCJTaGlwIHdpbGwgb3ZlcmZsb3cgYm9hcmRcIjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy4jcG9zaXRpb25GaWxsZWRXaXRoU2hpcChzaGlwKSkge1xuICAgICAgcmV0dXJuIFwic2hpcHMgYXJlIG92ZXJsYXBwaW5nXCI7XG4gICAgfVxuXG4gICAgaWYgKHNoaXAuYWxpZ25tZW50ID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC50b3RhbExlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMuI2JvYXJkW3NoaXAubG9jYXRpb25bMV1dW3NoaXAubG9jYXRpb25bMF1dID0gc2hpcC5zaGlwTmFtZTtcbiAgICAgICAgc2hpcC5sb2NhdGlvblsxXSsrO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc2hpcC5hbGlnbm1lbnQgPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAudG90YWxMZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLiNib2FyZFtzaGlwLmxvY2F0aW9uWzFdXVtzaGlwLmxvY2F0aW9uWzBdXSA9IHNoaXAuc2hpcE5hbWU7XG4gICAgICAgIHNoaXAubG9jYXRpb25bMF0rKztcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy4jc2hpcHNPbkJvYXJkLnB1c2goc2hpcCk7XG4gICAgcmV0dXJuIFwiU2hpcCBwbGFjZWRcIjtcbiAgfVxuXG4gIHJlY2VpdmVBdHRhY2soeSwgeCkge1xuICAgIGlmICh4ID4gMTAgfHwgeSA+IDEwKSByZXR1cm4gXCJpbnZhbGlkIGNvb3JkaW5hdGVzXCI7XG5cbiAgICBpZiAodGhpcy4jYm9hcmRbeV1beF0gPT09IFwiXCIpIHtcbiAgICAgIHRoaXMuI2JvYXJkW3ldW3hdID0gXCJtXCI7XG4gICAgICByZXR1cm4gXCJtaXNzXCI7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLiNzaGlwc09uQm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLiNib2FyZFt5XVt4XSA9PT0gdGhpcy4jc2hpcHNPbkJvYXJkW2ldLnNoaXBOYW1lKSB7XG4gICAgICAgIHRoaXMuI3NoaXBzT25Cb2FyZFtpXS5oaXQoKTtcbiAgICAgICAgdGhpcy4jYm9hcmRbeV1beF0gPSBcImhcIjtcbiAgICAgICAgcmV0dXJuIFwiaGl0XCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFwiY2FudCBhdHRhY2sgaGVyZVwiO1xuICB9XG5cbiAgYWxsU2hpcHNTdW5rKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy4jc2hpcHNPbkJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIXRoaXMuI3NoaXBzT25Cb2FyZFtpXS5pc1N1bmsoKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgI3Bvc2l0aW9uRmlsbGVkV2l0aFNoaXAoc2hpcCkge1xuICAgIGxldCB5dmFsID0gTnVtYmVyKHNoaXAubG9jYXRpb25bMV0pO1xuICAgIGxldCB4dmFsID0gTnVtYmVyKHNoaXAubG9jYXRpb25bMF0pO1xuXG4gICAgaWYgKHNoaXAuYWxpZ25tZW50ID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC50b3RhbExlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLiNib2FyZFt5dmFsXVt4dmFsXSAhPT0gXCJcIikgcmV0dXJuIHRydWU7XG4gICAgICAgIHl2YWwrKztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLnRvdGFsTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuI2JvYXJkW3l2YWxdW3h2YWxdICE9PSBcIlwiKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgeHZhbCsrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAjaW5jb3JyZWN0QWxsaWdubWVudFNwZWNpZmllZChzaGlwKSB7XG4gICAgc3dpdGNoIChzaGlwLmFsaWdubWVudCkge1xuICAgICAgY2FzZSBcInZlcnRpY2FsXCI6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIGNhc2UgXCJob3Jpem9udGFsXCI6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gICNzaGlwV2lsbE92ZXJmbG93Qm9hcmQoc2hpcCkge1xuICAgIGxldCB5dmFsID0gc2hpcC5sb2NhdGlvblsxXTtcbiAgICBsZXQgeHZhbCA9IHNoaXAubG9jYXRpb25bMF07XG4gICAgbGV0IHNoaXBsZW4gPSBzaGlwLnRvdGFsTGVuZ3RoO1xuICAgIGlmIChzaGlwLmFsaWdubWVudCA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBpZiAoTnVtYmVyKHl2YWwpICsgc2hpcGxlbiA+IDEwKSByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKE51bWJlcih4dmFsKSArIHNoaXBsZW4gPiAxMCkgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBHYW1lQm9hcmQ7XG4iLCJjbGFzcyBQbGF5ZXIge1xuICAjaXNUdXJuO1xuICAjbmFtZTtcbiAgI2F0dGFjaztcbiAgI25leHRNb3ZlcyA9IFtdO1xuICBjb25zdHJ1Y3RvcihuYW1lLCBpc1R1cm4pIHtcbiAgICB0aGlzLiNpc1R1cm4gPSBpc1R1cm47XG4gICAgdGhpcy4jbmFtZSA9IG5hbWU7XG4gICAgdGhpcy4jYXR0YWNrO1xuICB9XG5cbiAgc2V0IGF0dGFjayhjb29yZGluYXRlQXJyYXkpIHtcbiAgICBpZiAoY29vcmRpbmF0ZUFycmF5WzBdID4gOSB8fCBjb29yZGluYXRlQXJyYXlbMV0gPiA5KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbmNvcnJlY3QgYXR0YWNrIGNvb3JkaW5hdGVzXCIpO1xuICAgIH1cbiAgICB0aGlzLiNhdHRhY2sgPSBjb29yZGluYXRlQXJyYXk7XG4gIH1cblxuICBnZXQgYXR0YWNrKCkge1xuICAgIHJldHVybiB0aGlzLiNhdHRhY2s7XG4gIH1cblxuICBnZXQgaXNUdXJuKCkge1xuICAgIHJldHVybiB0aGlzLiNpc1R1cm47XG4gIH1cblxuICBnZXQgZGlzcGxheU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI25hbWU7XG4gIH1cblxuICBjaGFuZ2VUdXJuKCkge1xuICAgIHRoaXMuI2lzVHVybiA/ICh0aGlzLiNpc1R1cm4gPSBmYWxzZSkgOiAodGhpcy4jaXNUdXJuID0gdHJ1ZSk7XG4gIH1cblxuICBzbWFydE1vdmUoZ2FtZWJvYXJkKSB7XG4gICAgaWYgKHRoaXMuI2F0dGFjayAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBwcmV2WSA9IHRoaXMuI2F0dGFja1swXTtcbiAgICAgIGNvbnN0IHByZXZYID0gdGhpcy5hdHRhY2tbMV07XG5cbiAgICAgIGlmIChnYW1lYm9hcmRbcHJldlldW3ByZXZYXSA9PT0gXCJoXCIpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByZXZZICsgMSA8PSA5ICYmXG4gICAgICAgICAgZ2FtZWJvYXJkW3ByZXZZICsgMV1bcHJldlhdICE9PSBcImhcIiAmJlxuICAgICAgICAgIGdhbWVib2FyZFtwcmV2WSArIDFdW3ByZXZYXSAhPT0gXCJtXCIgJiZcbiAgICAgICAgICBnYW1lYm9hcmRbcHJldlkgKyAxXVtwcmV2WF0gIT09IFwiXCJcbiAgICAgICAgKVxuICAgICAgICAgIHRoaXMuI25leHRNb3Zlcy5wdXNoKFtwcmV2WSArIDEsIHByZXZYXSk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcmV2WSAtIDEgPj0gMCAmJlxuICAgICAgICAgIGdhbWVib2FyZFtwcmV2WSAtIDFdW3ByZXZYXSAhPT0gXCJoXCIgJiZcbiAgICAgICAgICBnYW1lYm9hcmRbcHJldlkgLSAxXVtwcmV2WF0gIT09IFwibVwiICYmXG4gICAgICAgICAgZ2FtZWJvYXJkW3ByZXZZIC0gMV1bcHJldlhdICE9PSBcIlwiXG4gICAgICAgIClcbiAgICAgICAgICB0aGlzLiNuZXh0TW92ZXMucHVzaChbcHJldlkgLSAxLCBwcmV2WF0pO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJldlggKyAxIDw9IDkgJiZcbiAgICAgICAgICBnYW1lYm9hcmRbcHJldlldW3ByZXZYICsgMV0gIT09IFwiaFwiICYmXG4gICAgICAgICAgZ2FtZWJvYXJkW3ByZXZZXVtwcmV2WCArIDFdICE9PSBcIm1cIiAmJlxuICAgICAgICAgIGdhbWVib2FyZFtwcmV2WV1bcHJldlggKyAxXSAhPT0gXCJcIlxuICAgICAgICApXG4gICAgICAgICAgdGhpcy4jbmV4dE1vdmVzLnB1c2goW3ByZXZZLCBwcmV2WCArIDFdKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByZXZYIC0gMSA+PSAwICYmXG4gICAgICAgICAgZ2FtZWJvYXJkW3ByZXZZXVtwcmV2WCAtIDFdICE9PSBcImhcIiAmJlxuICAgICAgICAgIGdhbWVib2FyZFtwcmV2WV1bcHJldlggLSAxXSAhPT0gXCJtXCIgJiZcbiAgICAgICAgICBnYW1lYm9hcmRbcHJldlldW3ByZXZYIC0gMV0gIT09IFwiXCJcbiAgICAgICAgKVxuICAgICAgICAgIHRoaXMuI25leHRNb3Zlcy5wdXNoKFtwcmV2WSwgcHJldlggLSAxXSk7XG5cbiAgICAgICAgaWYgKHRoaXMuI25leHRNb3Zlcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICBjb25zdCBhaW1lZEF0dGFjayA9IHRoaXMuI25leHRNb3Zlcy5wb3AoKTtcblxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGdhbWVib2FyZFthaW1lZEF0dGFja1swXV1bYWltZWRBdHRhY2tbMV1dICE9PSBcImhcIiAmJlxuICAgICAgICAgICAgZ2FtZWJvYXJkW2FpbWVkQXR0YWNrWzBdXVthaW1lZEF0dGFja1sxXV0gIT09IFwibVwiXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLiNhdHRhY2sgPSBhaW1lZEF0dGFjaztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGdhbWVib2FyZFtwcmV2WV1bcHJldlhdID09PSBcIm1cIiAmJiB0aGlzLiNuZXh0TW92ZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGNvbnN0IGFpbWVkQXR0YWNrID0gdGhpcy4jbmV4dE1vdmVzLnBvcCgpO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICBnYW1lYm9hcmRbYWltZWRBdHRhY2tbMF1dW2FpbWVkQXR0YWNrWzFdXSAhPT0gXCJoXCIgJiZcbiAgICAgICAgICBnYW1lYm9hcmRbYWltZWRBdHRhY2tbMF1dW2FpbWVkQXR0YWNrWzFdXSAhPT0gXCJtXCJcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy4jYXR0YWNrID0gYWltZWRBdHRhY2s7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGNvbnN0IHl2YWwgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICBjb25zdCB4dmFsID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXG4gICAgICBpZiAoeXZhbCA+IDkgfHwgeHZhbCA+IDkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ29tcHV0ZXIgY2hvaWNlIHdhcyBncmVhdGVyIHRoYW4gOVwiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGdhbWVib2FyZFt5dmFsXVt4dmFsXSAhPT0gXCJtXCIgJiYgZ2FtZWJvYXJkW3l2YWxdW3h2YWxdICE9PSBcImhcIikge1xuICAgICAgICB0aGlzLiNhdHRhY2sgPSBbeXZhbCwgeHZhbF07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBsYXllcjtcbiIsImNsYXNzIFNoaXAge1xuICAjc2hpcExlbmd0aDtcbiAgI25hbWU7XG4gICNsb2NhdGlvbjtcbiAgI2FsaWdubWVudDtcblxuICBjb25zdHJ1Y3RvcihzaGlwTGVuLCBsb2NhdGlvbiwgbmFtZSwgYWxpZ25tZW50KSB7XG4gICAgdGhpcy4jc2hpcExlbmd0aCA9IHNoaXBMZW47XG4gICAgdGhpcy4jbG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICB0aGlzLiNuYW1lID0gbmFtZTtcbiAgICB0aGlzLiNhbGlnbm1lbnQgPSBhbGlnbm1lbnQ7XG4gIH1cblxuICBnZXQgdG90YWxMZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3NoaXBMZW5ndGg7XG4gIH1cblxuICBnZXQgc2hpcE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI25hbWU7XG4gIH1cblxuICAvLyBbJ3gnLCB5XVxuICBnZXQgbG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuI2xvY2F0aW9uO1xuICB9XG5cbiAgZ2V0IGFsaWdubWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy4jYWxpZ25tZW50O1xuICB9XG5cbiAgc2V0IGFsaWdubWVudChhbGlnbm1lbnQpIHtcbiAgICB0aGlzLiNhbGlnbm1lbnQgPSBhbGlnbm1lbnQ7XG4gIH1cblxuICBzZXQgbG9jYXRpb24obG9jYXRpb24pIHtcbiAgICB0aGlzLiNsb2NhdGlvbiA9IGxvY2F0aW9uO1xuICB9XG5cbiAgaGl0KCkge1xuICAgIGlmICh0aGlzLiNzaGlwTGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuI3NoaXBMZW5ndGgtLTtcbiAgfVxuXG4gIGlzU3VuaygpIHtcbiAgICByZXR1cm4gdGhpcy4jc2hpcExlbmd0aCA9PT0gMCA/IHRydWUgOiBmYWxzZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNoaXA7XG4iLCJpbXBvcnQgeyBkcmF3R3JpZCB9IGZyb20gXCIuL3BsYWNlU2hpcFNjcmVlblwiO1xuaW1wb3J0IFwiLi9hdHRhY2tTY3JlZW4uY3NzXCI7XG5cbmNvbnN0IGF0dGFja1NjcmVlbiA9IGFzeW5jIChwbGF5ZXJHYW1lQm9hcmQsIGNvbXB1dGVyR2FtZUJvYXJkKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiY29udGVudFwiKTtcblxuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJncmlkLWdhcFwiKTtcbiAgLy8gICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJhbGlnbi1pdGVtcy1jZW50ZXJcIik7XG5cbiAgY29uc3QgeyBwbGF5ZXJHcmlkQ29udGFpbmVyLCBjb21wdXRlckdyaWRDb250YWluZXIgfSA9XG4gICAgc2V0dXBHcmlkcyhwbGF5ZXJHYW1lQm9hcmQpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGxheWVyR3JpZENvbnRhaW5lcik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29tcHV0ZXJHcmlkQ29udGFpbmVyKTtcbn07XG5cbmNvbnN0IHNldHVwR3JpZHMgPSAocGxheWVyR2FtZUJvYXJkKSA9PiB7XG4gIGNvbnN0IHBsYXllcnNHcmlkID0gZHJhd0dyaWQoKTtcbiAgY29uc3QgY29tcHV0ZXJzR3JpZCA9IGRyYXdHcmlkKCk7XG5cbiAgY29uc3QgcGxheWVyQ29scyA9IHBsYXllcnNHcmlkLmNoaWxkTm9kZXM7XG4gIHBsYXllckNvbHMuZm9yRWFjaCgoY29sLCBpKSA9PiB7XG4gICAgY29sLmNoaWxkTm9kZXMuZm9yRWFjaCgoZ3JpZFNxdWFyZSwgaikgPT4ge1xuICAgICAgaWYgKHBsYXllckdhbWVCb2FyZC5ib2FyZFtqXVtpXSAhPT0gXCJcIikge1xuICAgICAgICBncmlkU3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICBjb25zdCBwbGF5ZXJHcmlkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcGxheWVyR3JpZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicGxheWVyLWdyaWRcIik7XG4gIGNvbnN0IHBsYXllcldhdGVycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgcGxheWVyV2F0ZXJzLnRleHRDb250ZW50ID0gXCJQbGF5ZXIgV2F0ZXJzXCI7XG4gIHBsYXllckdyaWRDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyV2F0ZXJzKTtcbiAgcGxheWVyR3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJzR3JpZCk7XG5cbiAgY29uc3QgY29tcHV0ZXJHcmlkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29tcHV0ZXJHcmlkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb21wdXRlci1ncmlkXCIpO1xuICBjb25zdCBjb21wdXRlcldhdGVycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgY29tcHV0ZXJXYXRlcnMudGV4dENvbnRlbnQgPSBcIkVuZW15IFdhdGVyc1wiO1xuICBjb21wdXRlckdyaWRDb250YWluZXIuYXBwZW5kQ2hpbGQoY29tcHV0ZXJXYXRlcnMpO1xuICBjb21wdXRlckdyaWRDb250YWluZXIuYXBwZW5kQ2hpbGQoY29tcHV0ZXJzR3JpZCk7XG5cbiAgcmV0dXJuIHsgcGxheWVyR3JpZENvbnRhaW5lciwgY29tcHV0ZXJHcmlkQ29udGFpbmVyIH07XG59O1xuXG5jb25zdCBwbGF5ZXJzQXRrQ2hvaWNlID0gKGNvbXB1dGVyR2FtZUJvYXJkKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgY29tcHV0ZXJDb2xzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiLmNvbXB1dGVyLWdyaWQgPiAuZ3JpZC1jb250YWluZXJcIlxuICAgICkuY2hpbGROb2RlcztcblxuICAgIGNvbnN0IGNsaWNrSGFuZGxlciA9IChlKSA9PiB7XG4gICAgICBjb25zdCBhdHRhY2tQbGFjZWQgPSBoYW5kbGVQbGF5ZXJBdHRhY2soZSwgY29tcHV0ZXJHYW1lQm9hcmQpO1xuICAgICAgY29tcHV0ZXJDb2xzLmZvckVhY2goKGNvbCkgPT4ge1xuICAgICAgICBjb2wuY2hpbGROb2Rlcy5mb3JFYWNoKChncmlkU3F1YXJlKSA9PiB7XG4gICAgICAgICAgZ3JpZFNxdWFyZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIGlmICghYXR0YWNrUGxhY2VkKSByZWplY3QoXCJpbmNvcnJlY3QgTG9jYXRpb25cIik7XG4gICAgICBlbHNlIHJlc29sdmUoW2UudGFyZ2V0LmlkWzBdLCBlLnRhcmdldC5pZFsyXV0pO1xuICAgIH07XG5cbiAgICBjb21wdXRlckNvbHMuZm9yRWFjaCgoY29sKSA9PiB7XG4gICAgICBjb2wuY2hpbGROb2Rlcy5mb3JFYWNoKChncmlkU3F1YXJlKSA9PiB7XG4gICAgICAgIGdyaWRTcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrSGFuZGxlcik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBoaWdobGlnaHRTdW5rU2hpcHMgPSBhc3luYyAoc2hpcHNPbkJvYXJkKSA9PiB7XG4gIGZvciAoY29uc3Qgc2hpcCBvZiBzaGlwc09uQm9hcmQpIHtcbiAgICBpZiAoc2hpcC50b3RhbExlbmd0aCA9PT0gMCkge1xuICAgICAgaWYgKHNoaXAuc2hpcE5hbWUgPT09IFwiQ2FycmllclwiKSB7XG4gICAgICAgIGF3YWl0IGhpZ2hsaWdodFN1bmtTaGlwc0hlbHBlcig1LCBzaGlwKTtcbiAgICAgIH0gZWxzZSBpZiAoc2hpcC5zaGlwTmFtZSA9PT0gXCJCYXR0bGVzaGlwXCIpIHtcbiAgICAgICAgYXdhaXQgaGlnaGxpZ2h0U3Vua1NoaXBzSGVscGVyKDQsIHNoaXApO1xuICAgICAgfSBlbHNlIGlmIChzaGlwLnNoaXBOYW1lID09PSBcIkRlc3Ryb3llclwiKSB7XG4gICAgICAgIGF3YWl0IGhpZ2hsaWdodFN1bmtTaGlwc0hlbHBlcigzLCBzaGlwKTtcbiAgICAgIH0gZWxzZSBpZiAoc2hpcC5zaGlwTmFtZSA9PT0gXCJTdWJtYXJpbmVcIikge1xuICAgICAgICBhd2FpdCBoaWdobGlnaHRTdW5rU2hpcHNIZWxwZXIoMywgc2hpcCk7XG4gICAgICB9IGVsc2UgaWYgKHNoaXAuc2hpcE5hbWUgPT09IFwiUGF0cm9sIEJvYXRcIikge1xuICAgICAgICBhd2FpdCBoaWdobGlnaHRTdW5rU2hpcHNIZWxwZXIoMiwgc2hpcCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBoaWdobGlnaHRTdW5rU2hpcHNIZWxwZXIgPSBhc3luYyAobGVuZ3RoLCBzaGlwKSA9PiB7XG4gIGNvbnN0IHNoaXBMb2NhdGlvbiA9IHNoaXAubG9jYXRpb247XG4gIGNvbnN0IHkgPSBzaGlwTG9jYXRpb25bMV07XG4gIGNvbnN0IHggPSBzaGlwTG9jYXRpb25bMF07XG4gIGlmIChzaGlwLmFsaWdubWVudCA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgY29uc3QgbmV3TG9jYXRpb24gPSBbeSAtIGxlbmd0aCwgeF07XG4gICAgY29uc3Qgc2VsZWN0b3IgPSBgLmNvbXB1dGVyLWdyaWQgPiAuZ3JpZC1jb250YWluZXIgPiAuZ3JpZC1jb2wgLmdyaWQtc3F1YXJlW2lkPVwiJHtuZXdMb2NhdGlvblswXX0sJHtuZXdMb2NhdGlvblsxXX1cIl1gO1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKS5jbGFzc0xpc3QuY29udGFpbnMoXCJzaGlwLXN1bmtcIikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2xlYXJEaXJlY3Rpb25Nc2coKTtcbiAgICBhd2FpdCBhZGREaXJlY3Rpb25Nc2coYFlvdSBoYXZlIHN1bmsgdGhlIGVuZW15cyAke3NoaXAuc2hpcE5hbWV9ISEhYCwgMzAwMCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgc2VsZWN0b3IgPSBgLmNvbXB1dGVyLWdyaWQgPiAuZ3JpZC1jb250YWluZXIgPiAuZ3JpZC1jb2wgLmdyaWQtc3F1YXJlW2lkPVwiJHtcbiAgICAgICAgbmV3TG9jYXRpb25bMF0gKyBpXG4gICAgICB9LCR7bmV3TG9jYXRpb25bMV19XCJdYDtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpLmNsYXNzTGlzdC5hZGQoXCJzaGlwLXN1bmtcIik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IG5ld0xvY2F0aW9uID0gW3ksIHggLSBsZW5ndGhdO1xuICAgIGNvbnN0IHNlbGVjdG9yID0gYC5jb21wdXRlci1ncmlkID4gLmdyaWQtY29udGFpbmVyID4gLmdyaWQtY29sIC5ncmlkLXNxdWFyZVtpZD1cIiR7bmV3TG9jYXRpb25bMF19LCR7bmV3TG9jYXRpb25bMV19XCJdYDtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hpcC1zdW5rXCIpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNsZWFyRGlyZWN0aW9uTXNnKCk7XG4gICAgYXdhaXQgYWRkRGlyZWN0aW9uTXNnKGBZb3UgaGF2ZSBzdW5rIHRoZSBlbmVteXMgJHtzaGlwLnNoaXBOYW1lfSEhIWAsIDMwMDApO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHNlbGVjdG9yID0gYC5jb21wdXRlci1ncmlkID4gLmdyaWQtY29udGFpbmVyID4gLmdyaWQtY29sIC5ncmlkLXNxdWFyZVtpZD1cIiR7XG4gICAgICAgIG5ld0xvY2F0aW9uWzBdXG4gICAgICB9LCR7bmV3TG9jYXRpb25bMV0gKyBpfVwiXWA7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKS5jbGFzc0xpc3QuYWRkKFwic2hpcC1zdW5rXCIpO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgaGFuZGxlUGxheWVyQXR0YWNrID0gKGUsIGNvbXB1dGVyR2FtZUJvYXJkKSA9PiB7XG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaXQtY2lyY2xlXCIpKSByZXR1cm4gZmFsc2U7XG4gIGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm1pc3MtY2lyY2xlXCIpKSByZXR1cm4gZmFsc2U7XG4gIGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImZsZXgtY2VudGVyZWRcIikpIHJldHVybiBmYWxzZTtcblxuICBjb25zdCB4dmFsID0gZS50YXJnZXQuaWRbMl07XG4gIGNvbnN0IHl2YWwgPSBlLnRhcmdldC5pZFswXTtcblxuICBjb25zdCBjaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiZmxleC1jZW50ZXJlZFwiKTtcblxuICBpZiAoXG4gICAgY29tcHV0ZXJHYW1lQm9hcmRbeXZhbF1beHZhbF0gPT09IFwiXCIgfHxcbiAgICBjb21wdXRlckdhbWVCb2FyZFt5dmFsXVt4dmFsXSA9PT0gXCJtXCJcbiAgKSB7XG4gICAgY2lyY2xlLmNsYXNzTGlzdC5hZGQoXCJtaXNzLWNpcmNsZVwiKTtcbiAgICBlLnRhcmdldC5hcHBlbmRDaGlsZChjaXJjbGUpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGNpcmNsZS5jbGFzc0xpc3QuYWRkKFwiaGl0LWNpcmNsZVwiKTtcbiAgICBlLnRhcmdldC5hcHBlbmRDaGlsZChjaXJjbGUpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5jb25zdCBhZGREaXJlY3Rpb25Nc2cgPSAobXNnLCB0aW1lKSA9PiB7XG4gIGNvbnN0IGNvbnRyb2xzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250cm9sc1wiKTtcblxuICBjb25zdCBkaXJlY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXJlY3Rpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImRpcmVjdGlvbnMtY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IGRpcmVjdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGRpcmVjdGlvbnMudGV4dENvbnRlbnQgPSBtc2c7XG4gIGRpcmVjdGlvbnMuY2xhc3NMaXN0LmFkZChcInR5cGluZy1lZmZlY3RcIik7XG4gIGRpcmVjdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXJlY3Rpb25zKTtcblxuICBjb250cm9scy5hcHBlbmRDaGlsZChkaXJlY3Rpb25Db250YWluZXIpO1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWUpO1xuICB9KTtcbn07XG5cbmNvbnN0IGNsZWFyRGlyZWN0aW9uTXNnID0gKCkgPT4ge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRyb2xzXCIpLmlubmVySFRNTCA9IFwiXCI7XG59O1xuXG5jb25zdCByZW5kZXJDb21wdXRlcnNBdHRhY2sgPSAoeXZhbCwgeHZhbCkgPT4ge1xuICBjb25zdCBwbGF5ZXJHcmlkU3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgXCIucGxheWVyLWdyaWQgPiAuZ3JpZC1jb250YWluZXIgPiAuZ3JpZC1jb2wgPiAuZ3JpZC1zcXVhcmVcIlxuICApO1xuICBjb25zdCBjaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIHBsYXllckdyaWRTcXVhcmVzLmZvckVhY2goKGdyaWRTcXVhcmUpID0+IHtcbiAgICBpZiAoXG4gICAgICBOdW1iZXIoZ3JpZFNxdWFyZS5pZFswXSkgPT09IHl2YWwgJiZcbiAgICAgIE51bWJlcihncmlkU3F1YXJlLmlkWzJdKSA9PT0geHZhbFxuICAgICkge1xuICAgICAgaWYgKGdyaWRTcXVhcmUuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hpcFwiKSkge1xuICAgICAgICBncmlkU3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJmbGV4LWNlbnRlcmVkXCIpO1xuICAgICAgICBjaXJjbGUuY2xhc3NMaXN0LmFkZChcImhpdC1jaXJjbGVcIik7XG4gICAgICAgIGdyaWRTcXVhcmUuYXBwZW5kQ2hpbGQoY2lyY2xlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdyaWRTcXVhcmUuY2xhc3NMaXN0LmFkZChcImZsZXgtY2VudGVyZWRcIik7XG4gICAgICAgIGNpcmNsZS5jbGFzc0xpc3QuYWRkKFwibWlzcy1jaXJjbGVcIik7XG4gICAgICAgIGdyaWRTcXVhcmUuYXBwZW5kQ2hpbGQoY2lyY2xlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IHtcbiAgYXR0YWNrU2NyZWVuLFxuICBwbGF5ZXJzQXRrQ2hvaWNlLFxuICByZW5kZXJDb21wdXRlcnNBdHRhY2ssXG4gIGFkZERpcmVjdGlvbk1zZyxcbiAgY2xlYXJEaXJlY3Rpb25Nc2csXG4gIGhpZ2hsaWdodFN1bmtTaGlwcyxcbn07XG4iLCJpbXBvcnQgXCIuL2dhbWVPdmVyU2NyZWVuLmNzc1wiO1xuXG5jb25zdCBnYW1lT3Zlck1vZGFsID0gKG1zZykgPT4ge1xuICBjb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyb290XCIpO1xuXG4gIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XG4gIGRpYWxvZy5jbGFzc0xpc3QuYWRkKFwibW9kYWxcIik7XG4gIGRpYWxvZy5pZCA9IFwibW9kYWxcIjtcblxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGhlYWRlci50ZXh0Q29udGVudCA9IG1zZztcblxuICBjb25zdCBwbGF5QWdhaW5CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBwbGF5QWdhaW5CdG4udGV4dENvbnRlbnQgPSBcIlBsYXkgQWdhaW5cIjtcbiAgcGxheUFnYWluQnRuLmNsYXNzTGlzdC5hZGQoXCJwbGF5LWFnYWluLWJ0blwiKTtcbiAgcGxheUFnYWluQnRuLmlkID0gXCJwbGF5QWdhaW5cIjtcbiAgcGxheUFnYWluQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gIH0pO1xuXG4gIGRpYWxvZy5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBkaWFsb2cuYXBwZW5kQ2hpbGQocGxheUFnYWluQnRuKTtcblxuICByb290LmFwcGVuZENoaWxkKGRpYWxvZyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnYW1lT3Zlck1vZGFsO1xuIiwiaW1wb3J0IFwiLi9wbGFjZVNoaXBTY3JlZW4uY3NzXCI7XG5pbXBvcnQgU2hpcCBmcm9tIFwiLi4vZ2FtZSBsb2dpYy9zaGlwXCI7XG5cbmNvbnN0IHBsYWNlU2hpcFNjcmVlbiA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJjb250ZW50XCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGRyYXdHcmlkKCkpO1xuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJhbGlnbi1pdGVtcy1jZW50ZXJcIik7XG4gIGFkZENvbnRyb2xzT25TY3JlZW4oKTtcblxuICAvL2luaXRpYWxpemluZyBzaGlwcyBoZXJlIHdpdGggdW5kZWZpbmVkIGZvcjpcbiAgLy9sb2NhdGlvbiAtIHVzZXIgbmVlZHMgdG8gc2VsZWN0IHdoZXJlIGVhY2ggc2hpcCB3aWxsIGdvXG4gIC8vYWxpZ25tZW50IC0gdXNlciB3aWxsIHNlbGVjdCBlaXRoZXIgaG9yaXpvbnRhbCBvciB2ZXJ0aWNhbCB2aWEgYSBidXR0b25cbiAgY29uc3Qgc2hpcHMgPSBbXG4gICAgbmV3IFNoaXAoNSwgdW5kZWZpbmVkLCBcIkNhcnJpZXJcIiwgdW5kZWZpbmVkKSxcbiAgICBuZXcgU2hpcCg0LCB1bmRlZmluZWQsIFwiQmF0dGxlc2hpcFwiLCB1bmRlZmluZWQpLFxuICAgIG5ldyBTaGlwKDMsIHVuZGVmaW5lZCwgXCJEZXN0cm95ZXJcIiwgdW5kZWZpbmVkKSxcbiAgICBuZXcgU2hpcCgzLCB1bmRlZmluZWQsIFwiU3VibWFyaW5lXCIsIHVuZGVmaW5lZCksXG4gICAgbmV3IFNoaXAoMiwgdW5kZWZpbmVkLCBcIlBhdHJvbCBCb2F0XCIsIHVuZGVmaW5lZCksXG4gIF07XG5cbiAgYXdhaXQgcGxhY2VTaGlwc1NlcXVlbnRpYWxseShzaGlwcyk7XG5cbiAgcmV0dXJuIHNoaXBzO1xufTtcblxuY29uc3QgZHJhd0dyaWQgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgY29uc3QgY29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb2wuY2xhc3NMaXN0LmFkZChcImdyaWQtY29sXCIpO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgY29uc3QgZ3JpZFNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBncmlkU3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJncmlkLXNxdWFyZVwiKTtcbiAgICAgIGdyaWRTcXVhcmUuaWQgPSBgJHtbaiwgaV19YDtcbiAgICAgIGNvbC5hcHBlbmRDaGlsZChncmlkU3F1YXJlKTtcbiAgICB9XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbCk7XG4gIH1cblxuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImdyaWQtY29udGFpbmVyXCIpO1xuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuY29uc3QgYWRkQ29udHJvbHNPblNjcmVlbiA9ICgpID0+IHtcbiAgY29uc3QgY29udHJvbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRyb2xzXCIpO1xuICBjb25zdCBjaGFuZ2VEaXJlY3Rpb25CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcblxuICBoMS5pZCA9IFwiZGlyZWN0aW9uVGV4dFwiO1xuXG4gIGNoYW5nZURpcmVjdGlvbkJ0bi50ZXh0Q29udGVudCA9IFwiSG9yaXpvbnRhbFwiO1xuICBjaGFuZ2VEaXJlY3Rpb25CdG4uY2xhc3NMaXN0LmFkZChcImNoYW5nZS1kaXJlY3Rpb24tYnRuXCIpO1xuICBjaGFuZ2VEaXJlY3Rpb25CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjaGFuZ2VEaXJlY3Rpb25CdG4udGV4dENvbnRlbnQgPT09IFwiSG9yaXpvbnRhbFwiXG4gICAgICA/IChjaGFuZ2VEaXJlY3Rpb25CdG4udGV4dENvbnRlbnQgPSBcIlZlcnRpY2FsXCIpXG4gICAgICA6IChjaGFuZ2VEaXJlY3Rpb25CdG4udGV4dENvbnRlbnQgPSBcIkhvcml6b250YWxcIik7XG4gIH0pO1xuXG4gIGNvbnRyb2xzLmFwcGVuZENoaWxkKGgxKTtcbiAgY29udHJvbHMuYXBwZW5kQ2hpbGQoY2hhbmdlRGlyZWN0aW9uQnRuKTtcbn07XG5cbmNvbnN0IGFkZEhvdmVyRWZmZWN0ID0gKHNoaXBMZW5ndGgpID0+IHtcbiAgY29uc3Qgc3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ3JpZC1zcXVhcmVcIik7XG4gIGNvbnN0IGhvdmVySGFuZGxlciA9IChlKSA9PiB7XG4gICAgYWRkSG92ZXJFZmZlY3RIZWxwZXIoZSwgc2hpcExlbmd0aCk7XG4gIH07XG5cbiAgc3F1YXJlcy5mb3JFYWNoKChncmlkU3F1YXJlKSA9PiB7XG4gICAgZ3JpZFNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGhvdmVySGFuZGxlcik7XG4gICAgZ3JpZFNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBob3ZlckhhbmRsZXIpO1xuICB9KTtcbiAgcmV0dXJuIGhvdmVySGFuZGxlcjtcbn07XG5cbmNvbnN0IGFkZEhvdmVyRWZmZWN0SGVscGVyID0gKGV2ZW50LCBzaGlwTGVuZ3RoKSA9PiB7XG4gIGNvbnN0IG9wcG9zaXRlQWxpZ25tZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIi5jaGFuZ2UtZGlyZWN0aW9uLWJ0blwiXG4gICkudGV4dENvbnRlbnQ7XG4gIGNvbnN0IHh2YWwgPSBldmVudC50YXJnZXQuaWRbMl07XG4gIGNvbnN0IHl2YWwgPSBldmVudC50YXJnZXQuaWRbMF07XG4gIHJlc2V0VW53YW50ZWRTdHlsaW5nKCk7XG4gIC8vaGlnaGxpZ2h0IHRoZSBzcXVhcmVzIHZlcnRpY2FsbHlcbiAgaWYgKG9wcG9zaXRlQWxpZ25tZW50ID09PSBcIkhvcml6b250YWxcIikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBzdGFydE9mSGlnaGxpZ2h0ID0gaSArIE51bWJlcih5dmFsKTtcbiAgICAgIGlmICghaXNWYWxpZFNxdWFyZShldmVudCwgc2hpcExlbmd0aCwgb3Bwb3NpdGVBbGlnbm1lbnQpKSB7XG4gICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKFwic2hpcC1oaWdobGlnaHQtZXJyb3JcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5nZXRFbGVtZW50QnlJZChgJHtbc3RhcnRPZkhpZ2hsaWdodCwgeHZhbF19YClcbiAgICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJzaGlwLWhpZ2hsaWdodFwiKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vaGlnaGxpZ2h0IHRoZSBzcXVhcmVzIGhvcml6b250YWxseVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHN0YXJ0T2ZIaWdobGlnaHQgPSBpICsgTnVtYmVyKHh2YWwpO1xuICAgIGlmICghaXNWYWxpZFNxdWFyZShldmVudCwgc2hpcExlbmd0aCwgb3Bwb3NpdGVBbGlnbm1lbnQpKSB7XG4gICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZShcInNoaXAtaGlnaGxpZ2h0LWVycm9yXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkb2N1bWVudFxuICAgICAgLmdldEVsZW1lbnRCeUlkKGAke1t5dmFsLCBzdGFydE9mSGlnaGxpZ2h0XX1gKVxuICAgICAgLmNsYXNzTGlzdC50b2dnbGUoXCJzaGlwLWhpZ2hsaWdodFwiKTtcbiAgfVxufTtcblxuY29uc3QgcmVtb3ZlSG92ZXJFZmZlY3QgPSAoaG92ZXJIYW5kbGVyKSA9PiB7XG4gIGNvbnN0IHNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdyaWQtc3F1YXJlXCIpO1xuXG4gIHNxdWFyZXMuZm9yRWFjaCgoZ3JpZFNxdWFyZSkgPT4ge1xuICAgIGdyaWRTcXVhcmUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBob3ZlckhhbmRsZXIpO1xuICAgIGdyaWRTcXVhcmUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgaG92ZXJIYW5kbGVyKTtcbiAgfSk7XG59O1xuXG4vL3RoaXMgZnVuY3Rpb24gY2FsbHMgcGxhY2VTaGlwT25DbGlja0hlbHBlclxuLy93aGljaCB3aWxsIG1vZGlmeSB0aGUgc2hpcCBvYmplY3RzIGZpZWxkc1xuY29uc3QgcGxhY2VTaGlwT25DbGljayA9IChzaGlwKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3Qgc3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ3JpZC1zcXVhcmVcIik7XG5cbiAgICBjb25zdCBjbGlja0hhbmRsZXIgPSAoZSkgPT4ge1xuICAgICAgbGV0IHNoaXBQbGFjZWQgPSBwbGFjZVNoaXBPbkNsaWNrSGVscGVyKGUsIHNoaXApO1xuICAgICAgaWYgKCFzaGlwUGxhY2VkKSB7XG4gICAgICAgIHJlamVjdCgpO1xuICAgICAgfVxuICAgICAgc3F1YXJlcy5mb3JFYWNoKChncmlkU3F1YXJlKSA9PiB7XG4gICAgICAgIGdyaWRTcXVhcmUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrSGFuZGxlcik7XG4gICAgICB9KTtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9O1xuXG4gICAgc3F1YXJlcy5mb3JFYWNoKChncmlkU3F1YXJlKSA9PiB7XG4gICAgICBncmlkU3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0hhbmRsZXIpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbi8vdGhpcyBmdW5jdGlvbiB3aWxsIG1vZGlmaXkgdGhlIHBhc3NlZCBpbiBzaGlwcyBmaWVsZHNcbmNvbnN0IHBsYWNlU2hpcE9uQ2xpY2tIZWxwZXIgPSAoZSwgc2hpcCkgPT4ge1xuICBjb25zdCBvcHBvc2l0ZUFsaWdubWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIuY2hhbmdlLWRpcmVjdGlvbi1idG5cIlxuICApLnRleHRDb250ZW50O1xuXG4gIGlmICghaXNWYWxpZFNxdWFyZShlLCBzaGlwLnRvdGFsTGVuZ3RoLCBvcHBvc2l0ZUFsaWdubWVudCkpIHJldHVybiBmYWxzZTtcblxuICBjb25zdCB4dmFsID0gZS50YXJnZXQuaWRbMl07XG4gIGNvbnN0IHl2YWwgPSBlLnRhcmdldC5pZFswXTtcbiAgc2hpcC5sb2NhdGlvbiA9IFt4dmFsLCB5dmFsXTtcblxuICBpZiAob3Bwb3NpdGVBbGlnbm1lbnQgPT09IFwiSG9yaXpvbnRhbFwiKSB7XG4gICAgc2hpcC5hbGlnbm1lbnQgPSBcInZlcnRpY2FsXCI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLnRvdGFsTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHN0YXJ0T2ZIaWdobGlnaHQgPSBpICsgTnVtYmVyKHl2YWwpO1xuICAgICAgZG9jdW1lbnRcbiAgICAgICAgLmdldEVsZW1lbnRCeUlkKGAke1tzdGFydE9mSGlnaGxpZ2h0LCB4dmFsXX1gKVxuICAgICAgICAuY2xhc3NMaXN0LmFkZChcInNoaXAtcGxhY2VkXCIpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHNoaXAuYWxpZ25tZW50ID0gXCJob3Jpem9udGFsXCI7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC50b3RhbExlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgc3RhcnRPZkhpZ2hsaWdodCA9IGkgKyBOdW1iZXIoeHZhbCk7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5nZXRFbGVtZW50QnlJZChgJHtbeXZhbCwgc3RhcnRPZkhpZ2hsaWdodF19YClcbiAgICAgIC5jbGFzc0xpc3QuYWRkKFwic2hpcC1wbGFjZWRcIik7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5jb25zdCBpc1ZhbGlkU3F1YXJlID0gKGUsIHNoaXBMZW5ndGgsIG9wcG9zaXRlQWxpZ25tZW50KSA9PiB7XG4gIGNvbnN0IHh2YWwgPSBlLnRhcmdldC5pZFsyXTtcbiAgY29uc3QgeXZhbCA9IGUudGFyZ2V0LmlkWzBdO1xuXG4gIGlmIChvcHBvc2l0ZUFsaWdubWVudCA9PT0gXCJIb3Jpem9udGFsXCIpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgc3RhcnRPZkhpZ2hsaWdodCA9IGkgKyBOdW1iZXIoeXZhbCk7XG4gICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtbc3RhcnRPZkhpZ2hsaWdodCwgeHZhbF19YCk7XG4gICAgICBpZiAoc3RhcnRPZkhpZ2hsaWdodCA+IDkgfHwgc3F1YXJlLmNsYXNzTGlzdC5jb250YWlucyhcInNoaXAtcGxhY2VkXCIpKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBzdGFydE9mSGlnaGxpZ2h0ID0gaSArIE51bWJlcih4dmFsKTtcbiAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtbeXZhbCwgc3RhcnRPZkhpZ2hsaWdodF19YCk7XG4gICAgaWYgKHN0YXJ0T2ZIaWdobGlnaHQgPiA5IHx8IHNxdWFyZS5jbGFzc0xpc3QuY29udGFpbnMoXCJzaGlwLXBsYWNlZFwiKSlcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmNvbnN0IHJlc2V0VW53YW50ZWRTdHlsaW5nID0gKCkgPT4ge1xuICBjb25zdCBzcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ncmlkLXNxdWFyZVwiKTtcblxuICBzcXVhcmVzLmZvckVhY2goKGdyaWRTcXVhcmUpID0+IHtcbiAgICBncmlkU3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoXCJzaGlwLWhpZ2hsaWdodC1lcnJvclwiKTtcbiAgICBncmlkU3F1YXJlLmNsYXNzTGlzdC5yZW1vdmUoXCJzaGlwLWhpZ2hsaWdodFwiKTtcbiAgfSk7XG59O1xuXG5jb25zdCBwbGFjZVNoaXBzU2VxdWVudGlhbGx5ID0gYXN5bmMgKHNoaXBBcnJheSkgPT4ge1xuICBsZXQgaSA9IDA7XG4gIGxldCBhbGxTaGlwc1BsYWNlZCA9IGZhbHNlO1xuXG4gIHdoaWxlICghYWxsU2hpcHNQbGFjZWQpIHtcbiAgICBjb25zdCBob3ZlckV2ZW50UmVmID0gYWRkSG92ZXJFZmZlY3Qoc2hpcEFycmF5W2ldLnRvdGFsTGVuZ3RoKTtcbiAgICB0cnkge1xuICAgICAgLy9wbGFjZVNoaXBPbkNsaWNrIHdpbGwgbW9kaWZ5IHRoZSBjdXJyZW50IHNoaXBzIGFsaWdubWVudCBhbmQgbG9jYXRpb24gZmllbGRzXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgICAgXCJkaXJlY3Rpb25UZXh0XCJcbiAgICAgICkudGV4dENvbnRlbnQgPSBgUGxhY2UgRG93biBZb3VyICR7c2hpcEFycmF5W2ldLnNoaXBOYW1lfSFgO1xuICAgICAgYXdhaXQgcGxhY2VTaGlwT25DbGljayhzaGlwQXJyYXlbaV0pO1xuICAgICAgaSsrO1xuICAgICAgaWYgKGkgPT09IDUpIHtcbiAgICAgICAgYWxsU2hpcHNQbGFjZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhcInJlamVjdGVkIHRyeWluZyBhZ2Fpbi4uLlwiKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgcmVtb3ZlSG92ZXJFZmZlY3QoaG92ZXJFdmVudFJlZik7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgeyBwbGFjZVNoaXBTY3JlZW4sIGRyYXdHcmlkIH07XG4iLCJpbXBvcnQgXCIuL3N0YXJ0U2NyZWVuLmNzc1wiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi4vZ2FtZSBsb2dpYy9wbGF5ZXIuanNcIjtcblxuY29uc3Qgc3RhcnRTY3JlZW4gPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiY29udGVudFwiKTtcbiAgY29uc3Qgc3RhcnRTY3JlZW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3QgdGV4dElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjb25zdCBzdGFydEdhbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBlcnJvck1zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gIGxhYmVsLmh0bWxGb3IgPSBcInBsYXllck5hbWVcIjtcbiAgbGFiZWwudGV4dENvbnRlbnQgPSBcIkVudGVyIFBsYXllciBOYW1lOlwiO1xuXG4gIHRleHRJbnB1dC5pZCA9IFwicGxheWVyTmFtZVwiO1xuICB0ZXh0SW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICB0ZXh0SW5wdXQucGxhY2Vob2xkZXIgPSBcIk5hbWVcIjtcbiAgdGV4dElucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgdGV4dElucHV0LnR5cGUgPSBcInRleHRcIjtcblxuICBzdGFydEdhbWVCdG4udGV4dENvbnRlbnQgPSBcIlN0YXJ0IEdhbWVcIjtcblxuICBjb25zdCBjcmVhdGVQbGF5ZXJQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBzdGFydEdhbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGlmICghdGV4dElucHV0LmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgICB0ZXh0SW5wdXQuY2xhc3NMaXN0LmFkZChcImVycm9yXCIpO1xuICAgICAgICBlcnJvck1zZy50ZXh0Q29udGVudCA9IHRleHRJbnB1dC52YWxpZGF0aW9uTWVzc2FnZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcmVzb2x2ZShuZXcgUGxheWVyKHRleHRJbnB1dC52YWx1ZSwgdHJ1ZSkpO1xuICAgIH0pO1xuICB9KTtcblxuICBlcnJvck1zZy5jbGFzc0xpc3QuYWRkKFwiZXJyb3ItbXNnXCIpO1xuICBzdGFydFNjcmVlbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic3RhcnQtc2NyZWVuLWNvbnRhaW5lclwiKTtcbiAgc3RhcnRTY3JlZW5Db250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICBzdGFydFNjcmVlbkNvbnRhaW5lci5hcHBlbmRDaGlsZChlcnJvck1zZyk7XG4gIHN0YXJ0U2NyZWVuQ29udGFpbmVyLmFwcGVuZENoaWxkKHRleHRJbnB1dCk7XG4gIHN0YXJ0U2NyZWVuQ29udGFpbmVyLmFwcGVuZENoaWxkKHN0YXJ0R2FtZUJ0bik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc3RhcnRTY3JlZW5Db250YWluZXIpO1xuICByZXR1cm4gY3JlYXRlUGxheWVyUHJvbWlzZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN0YXJ0U2NyZWVuO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBzdGFydFNjcmVlbiBmcm9tIFwiLi91aS9zdGFydFNjcmVlblwiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9nYW1lIGxvZ2ljL3BsYXllci5qc1wiO1xuaW1wb3J0IHsgcGxhY2VTaGlwU2NyZWVuIH0gZnJvbSBcIi4vdWkvcGxhY2VTaGlwU2NyZWVuXCI7XG5pbXBvcnQgR2FtZUJvYXJkIGZyb20gXCIuL2dhbWUgbG9naWMvZ2FtZWJvYXJkXCI7XG5pbXBvcnQgU2hpcCBmcm9tIFwiLi9nYW1lIGxvZ2ljL3NoaXBcIjtcbmltcG9ydCBnYW1lT3Zlck1vZGFsIGZyb20gXCIuL3VpL2dhbWVPdmVyU2NyZWVuXCI7XG5pbXBvcnQge1xuICBhdHRhY2tTY3JlZW4sXG4gIHBsYXllcnNBdGtDaG9pY2UsXG4gIHJlbmRlckNvbXB1dGVyc0F0dGFjayxcbiAgYWRkRGlyZWN0aW9uTXNnLFxuICBjbGVhckRpcmVjdGlvbk1zZyxcbiAgaGlnaGxpZ2h0U3Vua1NoaXBzLFxufSBmcm9tIFwiLi91aS9hdHRhY2tTY3JlZW5cIjtcblxuY29uc3QgZ2FtZUxvb3AgPSBhc3luYyAoKSA9PiB7XG4gIC8vc2hvd3Mgc3RhcnQgc2NyZWVuIGFuZCBpbml0aWxpemVzIHBsYXllcnNcbiAgY29uc3QgeyBwbGF5ZXIsIGNvbXB1dGVyIH0gPSBhd2FpdCBpbml0UGxheWVycygpO1xuXG4gIGNsZWFyR2FtZVNjcmVlbigpO1xuXG4gIC8vc2hvd3MgcGxhY2Ugc2hpcCBzY3JlZW4gYW5kIGluaXRpbGl6ZXMgdGhlIHBsYXllclxuICAvL2FuZCBjb21wdXRlciBnYW1lYm9hcmRzIHdpdGggc2hpcHNcbiAgY29uc3QgeyBwbGF5ZXJHYW1lQm9hcmQsIGNvbXB1dGVyR2FtZUJvYXJkIH0gPSBhd2FpdCBpbml0R2FtZUJvYXJkcygpO1xuXG4gIGNsZWFyR2FtZVNjcmVlbigpO1xuICBjbGVhckRpcmVjdGlvbk1zZygpO1xuXG4gIGF0dGFja1NjcmVlbihwbGF5ZXJHYW1lQm9hcmQsIGNvbXB1dGVyR2FtZUJvYXJkKTtcbiAgYXdhaXQgYWRkRGlyZWN0aW9uTXNnKFxuICAgIGBXZWxjb21lIHRvIHRoZSBiYXR0bGVmaWVsZCwgQ2FwdGFpbiAke3BsYXllci5kaXNwbGF5TmFtZX0uYCxcbiAgICAxNTAwXG4gICk7XG5cbiAgLy93aGlsZSB0aGUgY29tcHV0ZXIgYW5kIHBsYXllciBib3RoIGhhdmUgc2hpcHMgc3RpbGxcbiAgd2hpbGUgKCFwbGF5ZXJHYW1lQm9hcmQuYWxsU2hpcHNTdW5rKCkgJiYgIWNvbXB1dGVyR2FtZUJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIHBsYXllciBhdHRhY2tzXG4gICAgICBjbGVhckRpcmVjdGlvbk1zZygpO1xuICAgICAgYXdhaXQgYWRkRGlyZWN0aW9uTXNnKFxuICAgICAgICBgV2FpdGluZyBvbiB5b3VyIHRhcmdldCwgQ2FwdGFpbiAke3BsYXllci5kaXNwbGF5TmFtZX0hIGAsXG4gICAgICAgIDEwMDBcbiAgICAgICk7XG4gICAgICBjb25zdCBwbGF5ZXJzQXRrID0gYXdhaXQgcGxheWVyc0F0a0Nob2ljZShjb21wdXRlckdhbWVCb2FyZC5ib2FyZCk7XG4gICAgICBjb25zdCBwSGl0T3JNaXNzID0gY29tcHV0ZXJHYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhcbiAgICAgICAgcGxheWVyc0F0a1swXSxcbiAgICAgICAgcGxheWVyc0F0a1sxXVxuICAgICAgKTtcblxuICAgICAgY2xlYXJEaXJlY3Rpb25Nc2coKTtcbiAgICAgIGF3YWl0IGFkZERpcmVjdGlvbk1zZyhcbiAgICAgICAgYFlvdSBmaXJlIGEgc2hvdCBpbnRvIGVuZW15IHdhdGVycyBhbmQgaXRzIGEgJHtwSGl0T3JNaXNzfS5gLFxuICAgICAgICAxNjAwXG4gICAgICApO1xuICAgICAgYXdhaXQgaGlnaGxpZ2h0U3Vua1NoaXBzKGNvbXB1dGVyR2FtZUJvYXJkLnNoaXBzT25Cb2FyZCk7XG5cbiAgICAgIGlmIChjb21wdXRlckdhbWVCb2FyZC5hbGxTaGlwc1N1bmsoKSkgYnJlYWs7XG4gICAgICAvL2NvbXB1dGVyIGF0dGFja3NcblxuICAgICAgY29tcHV0ZXIuc21hcnRNb3ZlKHBsYXllckdhbWVCb2FyZC5ib2FyZCk7XG4gICAgICBjb25zdCBjSGl0T3JNaXNzID0gcGxheWVyR2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soXG4gICAgICAgIGNvbXB1dGVyLmF0dGFja1swXSxcbiAgICAgICAgY29tcHV0ZXIuYXR0YWNrWzFdXG4gICAgICApO1xuXG4gICAgICBjbGVhckRpcmVjdGlvbk1zZygpO1xuICAgICAgYXdhaXQgYWRkRGlyZWN0aW9uTXNnKFxuICAgICAgICBgVGhlIGVuZW15IGZpcmVzIGEgc2hvdCBiYWNrIGFuZCBpdHMgYSAke2NIaXRPck1pc3N9LmAsXG4gICAgICAgIDE2MDBcbiAgICAgICk7XG4gICAgICByZW5kZXJDb21wdXRlcnNBdHRhY2soY29tcHV0ZXIuYXR0YWNrWzBdLCBjb21wdXRlci5hdHRhY2tbMV0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgY29tcHV0ZXJIYXNXb24gPSBwbGF5ZXJHYW1lQm9hcmQuYWxsU2hpcHNTdW5rKCk7XG5cbiAgbGV0IHdpbm5pbmdNc2cgPSBcIlwiO1xuICBjb21wdXRlckhhc1dvblxuICAgID8gKHdpbm5pbmdNc2cgPSBcIlRoZSBjb21wdXRlciBraWNrZWQgeW91ciBidXR0LiBCZXR0ZXIgbHVjayBuZXh0IHRpbWUhXCIpXG4gICAgOiAod2lubmluZ01zZyA9IFwiWW91IG1hbmFnZWQgdG8gYmVhdCB0aGUgY29tcHV0ZXIuIE5pY2VseSBkb25lIVwiKTtcblxuICBnYW1lT3Zlck1vZGFsKHdpbm5pbmdNc2cpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vZGFsXCIpLnNob3dNb2RhbCgpO1xufTtcblxuY29uc3QgaW5pdFBsYXllcnMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHBsYXllclByb21pc2UgPSBzdGFydFNjcmVlbigpO1xuXG4gIGNvbnN0IHBsYXllciA9IGF3YWl0IHBsYXllclByb21pc2U7XG4gIGNvbnN0IGNvbXB1dGVyID0gbmV3IFBsYXllcihcIkNvbXB1dGVyXCIsIGZhbHNlKTtcblxuICByZXR1cm4geyBwbGF5ZXIsIGNvbXB1dGVyIH07XG59O1xuXG5jb25zdCBpbml0R2FtZUJvYXJkcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcGxheWVyR2FtZUJvYXJkID0gbmV3IEdhbWVCb2FyZCgpO1xuICBjb25zdCBjb21wdXRlckdhbWVCb2FyZCA9IG5ldyBHYW1lQm9hcmQoKTtcblxuICBhd2FpdCBzZXRQbGF5ZXJTaGlwc09uR2FtZWJvYXJkKHBsYXllckdhbWVCb2FyZCk7XG4gIHNldENvbXB1dGVyU2hpcHNPbkdhbWVib2FyZChjb21wdXRlckdhbWVCb2FyZCk7XG4gIHJldHVybiB7IHBsYXllckdhbWVCb2FyZCwgY29tcHV0ZXJHYW1lQm9hcmQgfTtcbn07XG5cbmNvbnN0IHNldFBsYXllclNoaXBzT25HYW1lYm9hcmQgPSBhc3luYyAocGxheWVyR2FtZUJvYXJkKSA9PiB7XG4gIGNvbnN0IHNoaXBBcnJheSA9IGF3YWl0IHBsYWNlU2hpcFNjcmVlbigpO1xuICBmb3IgKGxldCBzaGlwIG9mIHNoaXBBcnJheSkge1xuICAgIHBsYXllckdhbWVCb2FyZC5wbGFjZVNoaXAoc2hpcCk7XG4gIH1cbn07XG5cbmNvbnN0IHNldENvbXB1dGVyU2hpcHNPbkdhbWVib2FyZCA9IChjb21wdXRlckdhbWVCb2FyZCkgPT4ge1xuICBjb25zdCBzaGlwQXJyYXkgPSBjb21wdXRlclNoaXBMb2NhdGlvbnMoKTtcblxuICBmb3IgKGxldCBzaGlwIG9mIHNoaXBBcnJheSkge1xuICAgIGNvbXB1dGVyR2FtZUJvYXJkLnBsYWNlU2hpcChzaGlwKTtcbiAgfVxufTtcbi8vc3RhdGljIHNoaXAgc3Bhd25zIGZvciBub3dcbmNvbnN0IGNvbXB1dGVyU2hpcExvY2F0aW9ucyA9ICgpID0+IHtcbiAgc3dpdGNoIChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1KSkge1xuICAgIGNhc2UgMDpcbiAgICAgIHJldHVybiBbXG4gICAgICAgIG5ldyBTaGlwKDUsIFswLCAwXSwgXCJDYXJyaWVyXCIsIFwidmVydGljYWxcIiksXG4gICAgICAgIG5ldyBTaGlwKDQsIFs2LCAwXSwgXCJCYXR0bGVzaGlwXCIsIFwidmVydGljYWxcIiksXG4gICAgICAgIG5ldyBTaGlwKDMsIFsyLCA1XSwgXCJEZXN0cm95ZXJcIiwgXCJob3Jpem9udGFsXCIpLFxuICAgICAgICBuZXcgU2hpcCgzLCBbMSwgNl0sIFwiU3VibWFyaW5lXCIsIFwidmVydGljYWxcIiksXG4gICAgICAgIG5ldyBTaGlwKDIsIFs4LCA4XSwgXCJQYXRyb2wgQm9hdFwiLCBcImhvcml6b250YWxcIiksXG4gICAgICBdO1xuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiBbXG4gICAgICAgIG5ldyBTaGlwKDUsIFsyLCAzXSwgXCJDYXJyaWVyXCIsIFwidmVydGljYWxcIiksXG4gICAgICAgIG5ldyBTaGlwKDQsIFs2LCAwXSwgXCJCYXR0bGVzaGlwXCIsIFwiaG9yaXpvbnRhbFwiKSxcbiAgICAgICAgbmV3IFNoaXAoMywgWzUsIDZdLCBcIkRlc3Ryb3llclwiLCBcImhvcml6b250YWxcIiksXG4gICAgICAgIG5ldyBTaGlwKDMsIFs4LCA3XSwgXCJTdWJtYXJpbmVcIiwgXCJ2ZXJ0aWNhbFwiKSxcbiAgICAgICAgbmV3IFNoaXAoMiwgWzIsIDhdLCBcIlBhdHJvbCBCb2F0XCIsIFwidmVydGljYWxcIiksXG4gICAgICBdO1xuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiBbXG4gICAgICAgIG5ldyBTaGlwKDUsIFsyLCA3XSwgXCJDYXJyaWVyXCIsIFwiaG9yaXpvbnRhbFwiKSxcbiAgICAgICAgbmV3IFNoaXAoNCwgWzYsIDJdLCBcIkJhdHRsZXNoaXBcIiwgXCJob3Jpem9udGFsXCIpLFxuICAgICAgICBuZXcgU2hpcCgzLCBbMywgMl0sIFwiRGVzdHJveWVyXCIsIFwidmVydGljYWxcIiksXG4gICAgICAgIG5ldyBTaGlwKDMsIFs3LCA5XSwgXCJTdWJtYXJpbmVcIiwgXCJob3Jpem9udGFsXCIpLFxuICAgICAgICBuZXcgU2hpcCgyLCBbMCwgNF0sIFwiUGF0cm9sIEJvYXRcIiwgXCJ2ZXJ0aWNhbFwiKSxcbiAgICAgIF07XG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIFtcbiAgICAgICAgbmV3IFNoaXAoNSwgWzMsIDRdLCBcIkNhcnJpZXJcIiwgXCJ2ZXJ0aWNhbFwiKSxcbiAgICAgICAgbmV3IFNoaXAoNCwgWzcsIDVdLCBcIkJhdHRsZXNoaXBcIiwgXCJ2ZXJ0aWNhbFwiKSxcbiAgICAgICAgbmV3IFNoaXAoMywgWzUsIDFdLCBcIkRlc3Ryb3llclwiLCBcImhvcml6b250YWxcIiksXG4gICAgICAgIG5ldyBTaGlwKDMsIFswLCAxXSwgXCJTdWJtYXJpbmVcIiwgXCJob3Jpem9udGFsXCIpLFxuICAgICAgICBuZXcgU2hpcCgyLCBbMCwgNl0sIFwiUGF0cm9sIEJvYXRcIiwgXCJob3Jpem9udGFsXCIpLFxuICAgICAgXTtcbiAgICBjYXNlIDQ6XG4gICAgICByZXR1cm4gW1xuICAgICAgICBuZXcgU2hpcCg1LCBbMywgNV0sIFwiQ2FycmllclwiLCBcImhvcml6b250YWxcIiksXG4gICAgICAgIG5ldyBTaGlwKDQsIFs0LCAwXSwgXCJCYXR0bGVzaGlwXCIsIFwiaG9yaXpvbnRhbFwiKSxcbiAgICAgICAgbmV3IFNoaXAoMywgWzIsIDFdLCBcIkRlc3Ryb3llclwiLCBcInZlcnRpY2FsXCIpLFxuICAgICAgICBuZXcgU2hpcCgzLCBbMSwgN10sIFwiU3VibWFyaW5lXCIsIFwidmVydGljYWxcIiksXG4gICAgICAgIG5ldyBTaGlwKDIsIFs4LCAyXSwgXCJQYXRyb2wgQm9hdFwiLCBcImhvcml6b250YWxcIiksXG4gICAgICBdO1xuICB9XG59O1xuXG5jb25zdCBjbGVhckdhbWVTY3JlZW4gPSAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJjb250ZW50XCIpLmlubmVySFRNTCA9IFwiXCI7XG59O1xuZ2FtZUxvb3AoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
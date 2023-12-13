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
  animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
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
`, "",{"version":3,"sources":["webpack://./src/ui/attackScreen.css"],"names":[],"mappings":"AAAA;EACE,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,iBAAiB;EACjB,iCAAiC;EACjC,aAAa;EACb,mBAAmB;EACnB,cAAc;EACd,yBAAyB;AAC3B;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,SAAS;EACT,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;AACnB;AACA;EACE,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;AACxB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;;EAEE,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;EAChB,iCAAiC;EACjC,mBAAmB;EACnB,cAAc;EACd,qBAAqB;EACrB,0EAA0E;AAC5E;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE;IACE,QAAQ;EACV;EACA;IACE,WAAW;EACb;AACF;;AAEA;EACE;;IAEE,yBAAyB;EAC3B;EACA;IACE,6BAA6B;EAC/B;AACF","sourcesContent":[".grid-gap {\n  gap: 5rem;\n}\n\n.directions-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.8rem;\n  background-color: rgb(87, 96, 99);\n  padding: 1rem;\n  border-radius: 1rem;\n  min-width: 60%;\n  border: 2px solid #d0ccd0;\n}\n\n.player-grid,\n.computer-grid {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  gap: 1rem;\n  color: #d0ccd0;\n  font-size: 1.25rem;\n}\n\n.computer-grid > .grid-container > .grid-col > .grid-square:hover {\n  cursor: crosshair;\n}\n.computer-grid > .grid-container > .grid-col > .flex-centered:hover {\n  cursor: not-allowed;\n}\n\n.ship {\n  background-color: aqua;\n}\n.flex-centered {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.hit-circle,\n.miss-circle {\n  width: 20px;\n  height: 20px;\n  background-color: white;\n  border-radius: 50%;\n}\n\n.hit-circle {\n  background-color: red;\n}\n\n.typing-effect {\n  overflow: hidden;\n  border-right: 0.15em solid orange;\n  white-space: nowrap;\n  margin: 0 auto;\n  letter-spacing: 0.1em;\n  animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;\n}\n\n.ship-sunk {\n  background-color: red;\n}\n\n@keyframes typing {\n  from {\n    width: 0;\n  }\n  to {\n    width: 100%;\n  }\n}\n\n@keyframes blink-caret {\n  from,\n  to {\n    border-color: transparent;\n  }\n  50% {\n    border-color: rgb(87, 96, 99);\n  }\n}\n"],"sourceRoot":""}]);
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

const highlightSunkShips = (shipsOnBoard) => {
  for (const ship of shipsOnBoard) {
    if (ship.totalLength === 0) {
      if (ship.shipName === "Carrier") {
        highlightSunkShipsHelper(5, ship);
      } else if (ship.shipName === "Battleship") {
        highlightSunkShipsHelper(4, ship);
      } else if (ship.shipName === "Destroyer") {
        highlightSunkShipsHelper(3, ship);
      } else if (ship.shipName === "Submarine") {
        highlightSunkShipsHelper(3, ship);
      } else if (ship.shipName === "Patrol Boat") {
        highlightSunkShipsHelper(2, ship);
      }
    }
  }
};

const highlightSunkShipsHelper = (length, ship) => {
  const shipLocation = ship.location;
  const y = shipLocation[1];
  const x = shipLocation[0];
  if (ship.alignment === "vertical") {
    const newLocation = [y - length, x];

    for (let i = 0; i < length; i++) {
      const selector = `.computer-grid > .grid-container > .grid-col .grid-square[id="${
        newLocation[0] + i
      },${newLocation[1]}"]`;
      document.querySelector(selector).classList.add("ship-sunk");
    }
  } else {
    const newLocation = [y, x - length];

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
    3500
  );

  //while the computer and player both have ships still
  while (!playerGameBoard.allShipsSunk() && !computerGameBoard.allShipsSunk()) {
    try {
      // player attacks
      (0,_ui_attackScreen__WEBPACK_IMPORTED_MODULE_7__.clearDirectionMsg)();
      await (0,_ui_attackScreen__WEBPACK_IMPORTED_MODULE_7__.addDirectionMsg)(
        `Waiting on your target, Captain ${player.displayName}! `,
        2000
      );
      const playersAtk = await (0,_ui_attackScreen__WEBPACK_IMPORTED_MODULE_7__.playersAtkChoice)(computerGameBoard.board);
      const pHitOrMiss = computerGameBoard.receiveAttack(
        playersAtk[0],
        playersAtk[1]
      );

      (0,_ui_attackScreen__WEBPACK_IMPORTED_MODULE_7__.highlightSunkShips)(computerGameBoard.shipsOnBoard);

      (0,_ui_attackScreen__WEBPACK_IMPORTED_MODULE_7__.clearDirectionMsg)();
      await (0,_ui_attackScreen__WEBPACK_IMPORTED_MODULE_7__.addDirectionMsg)(
        `You fire a shot into enemy waters and its a ${pHitOrMiss}.`,
        3600
      );

      //computer attacks

      computer.smartMove(playerGameBoard.board);
      const cHitOrMiss = playerGameBoard.receiveAttack(
        computer.attack[0],
        computer.attack[1]
      );

      (0,_ui_attackScreen__WEBPACK_IMPORTED_MODULE_7__.clearDirectionMsg)();
      await (0,_ui_attackScreen__WEBPACK_IMPORTED_MODULE_7__.addDirectionMsg)(
        `The enemy fires a shot back and its a ${cHitOrMiss}.`,
        3600
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsK0JBQStCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLCtCQUErQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLHNCQUFzQjtBQUM1QztBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sc0JBQXNCLHNCQUFzQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMxSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7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Q0E7QUFDQSxZQUFZLHlEQUFJO0FBQ2hCLFlBQVkseURBQUk7QUFDaEIsWUFBWSx5REFBSTtBQUNoQixZQUFZLHlEQUFJO0FBQ2hCLFlBQVkseURBQUk7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsWUFBWSx5REFBSTtBQUNoQixZQUFZLHlEQUFJO0FBQ2hCLFlBQVkseURBQUk7QUFDaEIsWUFBWSx5REFBSTtBQUNoQixZQUFZLHlEQUFJO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdWkvYXR0YWNrU2NyZWVuLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3VpL2dhbWVPdmVyU2NyZWVuLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3VpL3BsYWNlU2hpcFNjcmVlbi5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy91aS9zdGFydFNjcmVlbi5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy91aS9hdHRhY2tTY3JlZW4uY3NzPzlmYWYiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy91aS9nYW1lT3ZlclNjcmVlbi5jc3M/YWQ4ZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3VpL3BsYWNlU2hpcFNjcmVlbi5jc3M/Nzk3NCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3VpL3N0YXJ0U2NyZWVuLmNzcz8zMGM0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lIGxvZ2ljL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUgbG9naWMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZSBsb2dpYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdWkvYXR0YWNrU2NyZWVuLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvdWkvZ2FtZU92ZXJTY3JlZW4uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy91aS9wbGFjZVNoaXBTY3JlZW4uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy91aS9zdGFydFNjcmVlbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LWZhbWlseTogXCJDaGFrcmEgUGV0Y2hcIiwgc2Fucy1zZXJpZjtcbn1cblxuOnJvb3Qge1xufVxuXG5ib2R5IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IG5hdnk7XG59XG5cbiNyb290IHtcbiAgbWluLWhlaWdodDogaW5oZXJpdDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAwLjVmciA1ZnIgMC41ZnI7XG4gIGdhcDogMXJlbTtcbn1cblxuaGVhZGVyLFxuZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QwY2NkMDtcbiAgZ3JpZC1jb2x1bW46IDEvMztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaGVhZGVyIHtcbiAgZ3JpZC1yb3c6IDEvMjtcbn1cblxuaGVhZGVyIGgxIHtcbiAgZm9udC1zaXplOiA0cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcmVtO1xufVxuXG4jY29udHJvbHMge1xuICBncmlkLWNvbHVtbjogMS8zO1xuICBncmlkLXJvdzogMi8zO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2QwY2NkMDtcbiAgZ2FwOiAxcmVtO1xufVxuXG5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBncmlkLXJvdzogMy80O1xuICBncmlkLWNvbHVtbjogMS8zO1xufVxuXG5mb290ZXIge1xuICBncmlkLXJvdzogNC81O1xufVxuYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsdUNBQXVDO0FBQ3pDOztBQUVBO0FBQ0E7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsdUNBQXVDO0VBQ3ZDLFNBQVM7QUFDWDs7QUFFQTs7RUFFRSx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ2hha3JhIFBldGNoXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuOnJvb3Qge1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbmF2eTtcXG59XFxuXFxuI3Jvb3Qge1xcbiAgbWluLWhlaWdodDogaW5oZXJpdDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAwLjVmciA1ZnIgMC41ZnI7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbmhlYWRlcixcXG5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QwY2NkMDtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG59XFxuXFxuaGVhZGVyIGgxIHtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjNyZW07XFxufVxcblxcbiNjb250cm9scyB7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAgZ3JpZC1yb3c6IDIvMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICNkMGNjZDA7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBncmlkLXJvdzogMy80O1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGdyaWQtcm93OiA0LzU7XFxufVxcbmJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmdyaWQtZ2FwIHtcbiAgZ2FwOiA1cmVtO1xufVxuXG4uZGlyZWN0aW9ucy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig4NywgOTYsIDk5KTtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgbWluLXdpZHRoOiA2MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNkMGNjZDA7XG59XG5cbi5wbGF5ZXItZ3JpZCxcbi5jb21wdXRlci1ncmlkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xuICBjb2xvcjogI2QwY2NkMDtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xufVxuXG4uY29tcHV0ZXItZ3JpZCA+IC5ncmlkLWNvbnRhaW5lciA+IC5ncmlkLWNvbCA+IC5ncmlkLXNxdWFyZTpob3ZlciB7XG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xufVxuLmNvbXB1dGVyLWdyaWQgPiAuZ3JpZC1jb250YWluZXIgPiAuZ3JpZC1jb2wgPiAuZmxleC1jZW50ZXJlZDpob3ZlciB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5zaGlwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbn1cbi5mbGV4LWNlbnRlcmVkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5oaXQtY2lyY2xlLFxuLm1pc3MtY2lyY2xlIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmhpdC1jaXJjbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi50eXBpbmctZWZmZWN0IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJpZ2h0OiAwLjE1ZW0gc29saWQgb3JhbmdlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICBhbmltYXRpb246IHR5cGluZyAzLjVzIHN0ZXBzKDQwLCBlbmQpLCBibGluay1jYXJldCAwLjc1cyBzdGVwLWVuZCBpbmZpbml0ZTtcbn1cblxuLnNoaXAtc3VuayB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuQGtleWZyYW1lcyB0eXBpbmcge1xuICBmcm9tIHtcbiAgICB3aWR0aDogMDtcbiAgfVxuICB0byB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBibGluay1jYXJldCB7XG4gIGZyb20sXG4gIHRvIHtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG4gIDUwJSB7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoODcsIDk2LCA5OSk7XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3VpL2F0dGFja1NjcmVlbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsaUNBQWlDO0VBQ2pDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQ0FBaUM7RUFDakMsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsMEVBQTBFO0FBQzVFOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0U7SUFDRSxRQUFRO0VBQ1Y7RUFDQTtJQUNFLFdBQVc7RUFDYjtBQUNGOztBQUVBO0VBQ0U7O0lBRUUseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSw2QkFBNkI7RUFDL0I7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZ3JpZC1nYXAge1xcbiAgZ2FwOiA1cmVtO1xcbn1cXG5cXG4uZGlyZWN0aW9ucy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg3LCA5NiwgOTkpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBtaW4td2lkdGg6IDYwJTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNkMGNjZDA7XFxufVxcblxcbi5wbGF5ZXItZ3JpZCxcXG4uY29tcHV0ZXItZ3JpZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIGNvbG9yOiAjZDBjY2QwO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG5cXG4uY29tcHV0ZXItZ3JpZCA+IC5ncmlkLWNvbnRhaW5lciA+IC5ncmlkLWNvbCA+IC5ncmlkLXNxdWFyZTpob3ZlciB7XFxuICBjdXJzb3I6IGNyb3NzaGFpcjtcXG59XFxuLmNvbXB1dGVyLWdyaWQgPiAuZ3JpZC1jb250YWluZXIgPiAuZ3JpZC1jb2wgPiAuZmxleC1jZW50ZXJlZDpob3ZlciB7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG5cXG4uc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbn1cXG4uZmxleC1jZW50ZXJlZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGl0LWNpcmNsZSxcXG4ubWlzcy1jaXJjbGUge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLmhpdC1jaXJjbGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4udHlwaW5nLWVmZmVjdCB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYm9yZGVyLXJpZ2h0OiAwLjE1ZW0gc29saWQgb3JhbmdlO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xcbiAgYW5pbWF0aW9uOiB0eXBpbmcgMy41cyBzdGVwcyg0MCwgZW5kKSwgYmxpbmstY2FyZXQgMC43NXMgc3RlcC1lbmQgaW5maW5pdGU7XFxufVxcblxcbi5zaGlwLXN1bmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHR5cGluZyB7XFxuICBmcm9tIHtcXG4gICAgd2lkdGg6IDA7XFxuICB9XFxuICB0byB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJsaW5rLWNhcmV0IHtcXG4gIGZyb20sXFxuICB0byB7XFxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB9XFxuICA1MCUge1xcbiAgICBib3JkZXItY29sb3I6IHJnYig4NywgOTYsIDk5KTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAubW9kYWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxcmVtO1xuICBwYWRkaW5nOiAycmVtO1xuICBtYXJnaW46IGF1dG87XG4gIG1pbi13aWR0aDogMjUlO1xuICBtaW4taGVpZ2h0OiAyNSU7XG4gIGJhY2tncm91bmQtY29sb3I6IG5hdnk7XG4gIGNvbG9yOiAjZDBjY2QwO1xufVxuXG4ubW9kYWxbb3Blbl06OmJhY2tkcm9wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xufVxuXG4ucGxheS1hZ2Fpbi1idG4ge1xuICBwYWRkaW5nOiAxcmVtO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdWkvZ2FtZU92ZXJTY3JlZW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxhQUFhO0VBQ2IsWUFBWTtFQUNaLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1vZGFsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcmVtO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1pbi13aWR0aDogMjUlO1xcbiAgbWluLWhlaWdodDogMjUlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbmF2eTtcXG4gIGNvbG9yOiAjZDBjY2QwO1xcbn1cXG5cXG4ubW9kYWxbb3Blbl06OmJhY2tkcm9wIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG59XFxuXFxuLnBsYXktYWdhaW4tYnRuIHtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmdyaWQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjJyZW07XG59XG5cbi5ncmlkLWNvbCB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5ncmlkLXNxdWFyZSB7XG4gIGhlaWdodDogNDVweDtcbiAgd2lkdGg6IDQ1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XG59XG5cbi5zaGlwLWhpZ2hsaWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2hpcC1wbGFjZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XG59XG5cbi5zaGlwLWhpZ2hsaWdodC1lcnJvciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLmNoYW5nZS1kaXJlY3Rpb24tYnRuIHtcbiAgd2lkdGg6IDE1JTtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4uYWxpZ24taXRlbXMtY2VudGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI2RpcmVjdGlvblRleHQge1xuICBmb250LXNpemU6IDEuN3JlbTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3VpL3BsYWNlU2hpcFNjcmVlbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZ3JpZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMC4ycmVtO1xcbn1cXG5cXG4uZ3JpZC1jb2wge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmdyaWQtc3F1YXJlIHtcXG4gIGhlaWdodDogNDVweDtcXG4gIHdpZHRoOiA0NXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XFxufVxcblxcbi5zaGlwLWhpZ2hsaWdodCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zaGlwLXBsYWNlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XFxufVxcblxcbi5zaGlwLWhpZ2hsaWdodC1lcnJvciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG5cXG4uY2hhbmdlLWRpcmVjdGlvbi1idG4ge1xcbiAgd2lkdGg6IDE1JTtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuLmFsaWduLWl0ZW1zLWNlbnRlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jZGlyZWN0aW9uVGV4dCB7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc3RhcnQtc2NyZWVuLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDFyZW07XG4gIHdpZHRoOiAyMCU7XG4gIGNvbG9yOiAjZDBjY2QwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zdGFydC1zY3JlZW4tY29udGFpbmVyIGxhYmVsIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5zdGFydC1zY3JlZW4tY29udGFpbmVyIGlucHV0IHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMGNjZDA7XG59XG5cbi5zdGFydC1zY3JlZW4tY29udGFpbmVyIGJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMGNjZDA7XG59XG5cbi5lcnJvci1tc2cge1xuICBjb2xvcjogcmVkO1xufVxuXG4uZXJyb3Ige1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gIG91dGxpbmU6IDFweCBzb2xpZCByZWQ7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy91aS9zdGFydFNjcmVlbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztFQUNULFVBQVU7RUFDVixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsc0JBQXNCO0FBQ3hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zdGFydC1zY3JlZW4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgd2lkdGg6IDIwJTtcXG4gIGNvbG9yOiAjZDBjY2QwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc3RhcnQtc2NyZWVuLWNvbnRhaW5lciBsYWJlbCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLnN0YXJ0LXNjcmVlbi1jb250YWluZXIgaW5wdXQge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMGNjZDA7XFxufVxcblxcbi5zdGFydC1zY3JlZW4tY29udGFpbmVyIGJ1dHRvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMjVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMGNjZDA7XFxufVxcblxcbi5lcnJvci1tc2cge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLmVycm9yIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCByZWQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2F0dGFja1NjcmVlbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2F0dGFja1NjcmVlbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZU92ZXJTY3JlZW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lT3ZlclNjcmVlbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcGxhY2VTaGlwU2NyZWVuLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcGxhY2VTaGlwU2NyZWVuLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdGFydFNjcmVlbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0YXJ0U2NyZWVuLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY2xhc3MgR2FtZUJvYXJkIHtcbiAgI2JvYXJkID0gdGhpcy4jY3JlYXRlQm9hcmQoKTtcbiAgI3NoaXBzT25Cb2FyZCA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBnZXQgYm9hcmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2JvYXJkO1xuICB9XG5cbiAgZ2V0IHNoaXBzT25Cb2FyZCgpIHtcbiAgICByZXR1cm4gdGhpcy4jc2hpcHNPbkJvYXJkO1xuICB9XG5cbiAgI2NyZWF0ZUJvYXJkKCkge1xuICAgIGxldCBib2FyZCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgYm9hcmQucHVzaChbXSk7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgYm9hcmRbaV1bal0gPSBcIlwiO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYm9hcmQ7XG4gIH1cblxuICBwbGFjZVNoaXAoc2hpcCkge1xuICAgIGlmICh0aGlzLiNpbmNvcnJlY3RBbGxpZ25tZW50U3BlY2lmaWVkKHNoaXApKSB7XG4gICAgICByZXR1cm4gXCJJbmNvcnJlY3QgYWxpZ25tZW50XCI7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuI3NoaXBXaWxsT3ZlcmZsb3dCb2FyZChzaGlwKSkge1xuICAgICAgcmV0dXJuIFwiU2hpcCB3aWxsIG92ZXJmbG93IGJvYXJkXCI7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuI3Bvc2l0aW9uRmlsbGVkV2l0aFNoaXAoc2hpcCkpIHtcbiAgICAgIHJldHVybiBcInNoaXBzIGFyZSBvdmVybGFwcGluZ1wiO1xuICAgIH1cblxuICAgIGlmIChzaGlwLmFsaWdubWVudCA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAudG90YWxMZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLiNib2FyZFtzaGlwLmxvY2F0aW9uWzFdXVtzaGlwLmxvY2F0aW9uWzBdXSA9IHNoaXAuc2hpcE5hbWU7XG4gICAgICAgIHNoaXAubG9jYXRpb25bMV0rKztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNoaXAuYWxpZ25tZW50ID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLnRvdGFsTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy4jYm9hcmRbc2hpcC5sb2NhdGlvblsxXV1bc2hpcC5sb2NhdGlvblswXV0gPSBzaGlwLnNoaXBOYW1lO1xuICAgICAgICBzaGlwLmxvY2F0aW9uWzBdKys7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuI3NoaXBzT25Cb2FyZC5wdXNoKHNoaXApO1xuICAgIHJldHVybiBcIlNoaXAgcGxhY2VkXCI7XG4gIH1cblxuICByZWNlaXZlQXR0YWNrKHksIHgpIHtcbiAgICBpZiAoeCA+IDEwIHx8IHkgPiAxMCkgcmV0dXJuIFwiaW52YWxpZCBjb29yZGluYXRlc1wiO1xuXG4gICAgaWYgKHRoaXMuI2JvYXJkW3ldW3hdID09PSBcIlwiKSB7XG4gICAgICB0aGlzLiNib2FyZFt5XVt4XSA9IFwibVwiO1xuICAgICAgcmV0dXJuIFwibWlzc1wiO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy4jc2hpcHNPbkJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy4jYm9hcmRbeV1beF0gPT09IHRoaXMuI3NoaXBzT25Cb2FyZFtpXS5zaGlwTmFtZSkge1xuICAgICAgICB0aGlzLiNzaGlwc09uQm9hcmRbaV0uaGl0KCk7XG4gICAgICAgIHRoaXMuI2JvYXJkW3ldW3hdID0gXCJoXCI7XG4gICAgICAgIHJldHVybiBcImhpdFwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBcImNhbnQgYXR0YWNrIGhlcmVcIjtcbiAgfVxuXG4gIGFsbFNoaXBzU3VuaygpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuI3NoaXBzT25Cb2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCF0aGlzLiNzaGlwc09uQm9hcmRbaV0uaXNTdW5rKCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gICNwb3NpdGlvbkZpbGxlZFdpdGhTaGlwKHNoaXApIHtcbiAgICBsZXQgeXZhbCA9IE51bWJlcihzaGlwLmxvY2F0aW9uWzFdKTtcbiAgICBsZXQgeHZhbCA9IE51bWJlcihzaGlwLmxvY2F0aW9uWzBdKTtcblxuICAgIGlmIChzaGlwLmFsaWdubWVudCA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAudG90YWxMZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy4jYm9hcmRbeXZhbF1beHZhbF0gIT09IFwiXCIpIHJldHVybiB0cnVlO1xuICAgICAgICB5dmFsKys7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC50b3RhbExlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLiNib2FyZFt5dmFsXVt4dmFsXSAhPT0gXCJcIikgcmV0dXJuIHRydWU7XG4gICAgICAgIHh2YWwrKztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgI2luY29ycmVjdEFsbGlnbm1lbnRTcGVjaWZpZWQoc2hpcCkge1xuICAgIHN3aXRjaCAoc2hpcC5hbGlnbm1lbnQpIHtcbiAgICAgIGNhc2UgXCJ2ZXJ0aWNhbFwiOlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICBjYXNlIFwiaG9yaXpvbnRhbFwiOlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICAjc2hpcFdpbGxPdmVyZmxvd0JvYXJkKHNoaXApIHtcbiAgICBsZXQgeXZhbCA9IHNoaXAubG9jYXRpb25bMV07XG4gICAgbGV0IHh2YWwgPSBzaGlwLmxvY2F0aW9uWzBdO1xuICAgIGxldCBzaGlwbGVuID0gc2hpcC50b3RhbExlbmd0aDtcbiAgICBpZiAoc2hpcC5hbGlnbm1lbnQgPT09IFwidmVydGljYWxcIikge1xuICAgICAgaWYgKE51bWJlcih5dmFsKSArIHNoaXBsZW4gPiAxMCkgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChOdW1iZXIoeHZhbCkgKyBzaGlwbGVuID4gMTApIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gR2FtZUJvYXJkO1xuIiwiY2xhc3MgUGxheWVyIHtcbiAgI2lzVHVybjtcbiAgI25hbWU7XG4gICNhdHRhY2s7XG4gICNuZXh0TW92ZXMgPSBbXTtcbiAgY29uc3RydWN0b3IobmFtZSwgaXNUdXJuKSB7XG4gICAgdGhpcy4jaXNUdXJuID0gaXNUdXJuO1xuICAgIHRoaXMuI25hbWUgPSBuYW1lO1xuICAgIHRoaXMuI2F0dGFjaztcbiAgfVxuXG4gIHNldCBhdHRhY2soY29vcmRpbmF0ZUFycmF5KSB7XG4gICAgaWYgKGNvb3JkaW5hdGVBcnJheVswXSA+IDkgfHwgY29vcmRpbmF0ZUFycmF5WzFdID4gOSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW5jb3JyZWN0IGF0dGFjayBjb29yZGluYXRlc1wiKTtcbiAgICB9XG4gICAgdGhpcy4jYXR0YWNrID0gY29vcmRpbmF0ZUFycmF5O1xuICB9XG5cbiAgZ2V0IGF0dGFjaygpIHtcbiAgICByZXR1cm4gdGhpcy4jYXR0YWNrO1xuICB9XG5cbiAgZ2V0IGlzVHVybigpIHtcbiAgICByZXR1cm4gdGhpcy4jaXNUdXJuO1xuICB9XG5cbiAgZ2V0IGRpc3BsYXlOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLiNuYW1lO1xuICB9XG5cbiAgY2hhbmdlVHVybigpIHtcbiAgICB0aGlzLiNpc1R1cm4gPyAodGhpcy4jaXNUdXJuID0gZmFsc2UpIDogKHRoaXMuI2lzVHVybiA9IHRydWUpO1xuICB9XG5cbiAgc21hcnRNb3ZlKGdhbWVib2FyZCkge1xuICAgIGlmICh0aGlzLiNhdHRhY2sgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgcHJldlkgPSB0aGlzLiNhdHRhY2tbMF07XG4gICAgICBjb25zdCBwcmV2WCA9IHRoaXMuYXR0YWNrWzFdO1xuXG4gICAgICBpZiAoZ2FtZWJvYXJkW3ByZXZZXVtwcmV2WF0gPT09IFwiaFwiKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcmV2WSArIDEgPD0gOSAmJlxuICAgICAgICAgIGdhbWVib2FyZFtwcmV2WSArIDFdW3ByZXZYXSAhPT0gXCJoXCIgJiZcbiAgICAgICAgICBnYW1lYm9hcmRbcHJldlkgKyAxXVtwcmV2WF0gIT09IFwibVwiICYmXG4gICAgICAgICAgZ2FtZWJvYXJkW3ByZXZZICsgMV1bcHJldlhdICE9PSBcIlwiXG4gICAgICAgIClcbiAgICAgICAgICB0aGlzLiNuZXh0TW92ZXMucHVzaChbcHJldlkgKyAxLCBwcmV2WF0pO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJldlkgLSAxID49IDAgJiZcbiAgICAgICAgICBnYW1lYm9hcmRbcHJldlkgLSAxXVtwcmV2WF0gIT09IFwiaFwiICYmXG4gICAgICAgICAgZ2FtZWJvYXJkW3ByZXZZIC0gMV1bcHJldlhdICE9PSBcIm1cIiAmJlxuICAgICAgICAgIGdhbWVib2FyZFtwcmV2WSAtIDFdW3ByZXZYXSAhPT0gXCJcIlxuICAgICAgICApXG4gICAgICAgICAgdGhpcy4jbmV4dE1vdmVzLnB1c2goW3ByZXZZIC0gMSwgcHJldlhdKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByZXZYICsgMSA8PSA5ICYmXG4gICAgICAgICAgZ2FtZWJvYXJkW3ByZXZZXVtwcmV2WCArIDFdICE9PSBcImhcIiAmJlxuICAgICAgICAgIGdhbWVib2FyZFtwcmV2WV1bcHJldlggKyAxXSAhPT0gXCJtXCIgJiZcbiAgICAgICAgICBnYW1lYm9hcmRbcHJldlldW3ByZXZYICsgMV0gIT09IFwiXCJcbiAgICAgICAgKVxuICAgICAgICAgIHRoaXMuI25leHRNb3Zlcy5wdXNoKFtwcmV2WSwgcHJldlggKyAxXSk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcmV2WCAtIDEgPj0gMCAmJlxuICAgICAgICAgIGdhbWVib2FyZFtwcmV2WV1bcHJldlggLSAxXSAhPT0gXCJoXCIgJiZcbiAgICAgICAgICBnYW1lYm9hcmRbcHJldlldW3ByZXZYIC0gMV0gIT09IFwibVwiICYmXG4gICAgICAgICAgZ2FtZWJvYXJkW3ByZXZZXVtwcmV2WCAtIDFdICE9PSBcIlwiXG4gICAgICAgIClcbiAgICAgICAgICB0aGlzLiNuZXh0TW92ZXMucHVzaChbcHJldlksIHByZXZYIC0gMV0pO1xuXG4gICAgICAgIGlmICh0aGlzLiNuZXh0TW92ZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgY29uc3QgYWltZWRBdHRhY2sgPSB0aGlzLiNuZXh0TW92ZXMucG9wKCk7XG5cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBnYW1lYm9hcmRbYWltZWRBdHRhY2tbMF1dW2FpbWVkQXR0YWNrWzFdXSAhPT0gXCJoXCIgJiZcbiAgICAgICAgICAgIGdhbWVib2FyZFthaW1lZEF0dGFja1swXV1bYWltZWRBdHRhY2tbMV1dICE9PSBcIm1cIlxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy4jYXR0YWNrID0gYWltZWRBdHRhY2s7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChnYW1lYm9hcmRbcHJldlldW3ByZXZYXSA9PT0gXCJtXCIgJiYgdGhpcy4jbmV4dE1vdmVzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBjb25zdCBhaW1lZEF0dGFjayA9IHRoaXMuI25leHRNb3Zlcy5wb3AoKTtcblxuICAgICAgICBpZiAoXG4gICAgICAgICAgZ2FtZWJvYXJkW2FpbWVkQXR0YWNrWzBdXVthaW1lZEF0dGFja1sxXV0gIT09IFwiaFwiICYmXG4gICAgICAgICAgZ2FtZWJvYXJkW2FpbWVkQXR0YWNrWzBdXVthaW1lZEF0dGFja1sxXV0gIT09IFwibVwiXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMuI2F0dGFjayA9IGFpbWVkQXR0YWNrO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBjb25zdCB5dmFsID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgY29uc3QgeHZhbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcblxuICAgICAgaWYgKHl2YWwgPiA5IHx8IHh2YWwgPiA5KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvbXB1dGVyIGNob2ljZSB3YXMgZ3JlYXRlciB0aGFuIDlcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChnYW1lYm9hcmRbeXZhbF1beHZhbF0gIT09IFwibVwiICYmIGdhbWVib2FyZFt5dmFsXVt4dmFsXSAhPT0gXCJoXCIpIHtcbiAgICAgICAgdGhpcy4jYXR0YWNrID0gW3l2YWwsIHh2YWxdO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQbGF5ZXI7XG4iLCJjbGFzcyBTaGlwIHtcbiAgI3NoaXBMZW5ndGg7XG4gICNuYW1lO1xuICAjbG9jYXRpb247XG4gICNhbGlnbm1lbnQ7XG5cbiAgY29uc3RydWN0b3Ioc2hpcExlbiwgbG9jYXRpb24sIG5hbWUsIGFsaWdubWVudCkge1xuICAgIHRoaXMuI3NoaXBMZW5ndGggPSBzaGlwTGVuO1xuICAgIHRoaXMuI2xvY2F0aW9uID0gbG9jYXRpb247XG4gICAgdGhpcy4jbmFtZSA9IG5hbWU7XG4gICAgdGhpcy4jYWxpZ25tZW50ID0gYWxpZ25tZW50O1xuICB9XG5cbiAgZ2V0IHRvdGFsTGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLiNzaGlwTGVuZ3RoO1xuICB9XG5cbiAgZ2V0IHNoaXBOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLiNuYW1lO1xuICB9XG5cbiAgLy8gWyd4JywgeV1cbiAgZ2V0IGxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiNsb2NhdGlvbjtcbiAgfVxuXG4gIGdldCBhbGlnbm1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2FsaWdubWVudDtcbiAgfVxuXG4gIHNldCBhbGlnbm1lbnQoYWxpZ25tZW50KSB7XG4gICAgdGhpcy4jYWxpZ25tZW50ID0gYWxpZ25tZW50O1xuICB9XG5cbiAgc2V0IGxvY2F0aW9uKGxvY2F0aW9uKSB7XG4gICAgdGhpcy4jbG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgfVxuXG4gIGhpdCgpIHtcbiAgICBpZiAodGhpcy4jc2hpcExlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLiNzaGlwTGVuZ3RoLS07XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3NoaXBMZW5ndGggPT09IDAgPyB0cnVlIDogZmFsc2U7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTaGlwO1xuIiwiaW1wb3J0IHsgZHJhd0dyaWQgfSBmcm9tIFwiLi9wbGFjZVNoaXBTY3JlZW5cIjtcbmltcG9ydCBcIi4vYXR0YWNrU2NyZWVuLmNzc1wiO1xuXG5jb25zdCBhdHRhY2tTY3JlZW4gPSBhc3luYyAocGxheWVyR2FtZUJvYXJkLCBjb21wdXRlckdhbWVCb2FyZCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImNvbnRlbnRcIik7XG5cbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiZ3JpZC1nYXBcIik7XG4gIC8vICAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYWxpZ24taXRlbXMtY2VudGVyXCIpO1xuXG4gIGNvbnN0IHsgcGxheWVyR3JpZENvbnRhaW5lciwgY29tcHV0ZXJHcmlkQ29udGFpbmVyIH0gPVxuICAgIHNldHVwR3JpZHMocGxheWVyR2FtZUJvYXJkKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKHBsYXllckdyaWRDb250YWluZXIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNvbXB1dGVyR3JpZENvbnRhaW5lcik7XG59O1xuXG5jb25zdCBzZXR1cEdyaWRzID0gKHBsYXllckdhbWVCb2FyZCkgPT4ge1xuICBjb25zdCBwbGF5ZXJzR3JpZCA9IGRyYXdHcmlkKCk7XG4gIGNvbnN0IGNvbXB1dGVyc0dyaWQgPSBkcmF3R3JpZCgpO1xuXG4gIGNvbnN0IHBsYXllckNvbHMgPSBwbGF5ZXJzR3JpZC5jaGlsZE5vZGVzO1xuICBwbGF5ZXJDb2xzLmZvckVhY2goKGNvbCwgaSkgPT4ge1xuICAgIGNvbC5jaGlsZE5vZGVzLmZvckVhY2goKGdyaWRTcXVhcmUsIGopID0+IHtcbiAgICAgIGlmIChwbGF5ZXJHYW1lQm9hcmQuYm9hcmRbal1baV0gIT09IFwiXCIpIHtcbiAgICAgICAgZ3JpZFNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3QgcGxheWVyR3JpZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBsYXllckdyaWRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInBsYXllci1ncmlkXCIpO1xuICBjb25zdCBwbGF5ZXJXYXRlcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIHBsYXllcldhdGVycy50ZXh0Q29udGVudCA9IFwiUGxheWVyIFdhdGVyc1wiO1xuICBwbGF5ZXJHcmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllcldhdGVycyk7XG4gIHBsYXllckdyaWRDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheWVyc0dyaWQpO1xuXG4gIGNvbnN0IGNvbXB1dGVyR3JpZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbXB1dGVyR3JpZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29tcHV0ZXItZ3JpZFwiKTtcbiAgY29uc3QgY29tcHV0ZXJXYXRlcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGNvbXB1dGVyV2F0ZXJzLnRleHRDb250ZW50ID0gXCJFbmVteSBXYXRlcnNcIjtcbiAgY29tcHV0ZXJHcmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbXB1dGVyV2F0ZXJzKTtcbiAgY29tcHV0ZXJHcmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbXB1dGVyc0dyaWQpO1xuXG4gIHJldHVybiB7IHBsYXllckdyaWRDb250YWluZXIsIGNvbXB1dGVyR3JpZENvbnRhaW5lciB9O1xufTtcblxuY29uc3QgcGxheWVyc0F0a0Nob2ljZSA9IChjb21wdXRlckdhbWVCb2FyZCkgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IGNvbXB1dGVyQ29scyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIi5jb21wdXRlci1ncmlkID4gLmdyaWQtY29udGFpbmVyXCJcbiAgICApLmNoaWxkTm9kZXM7XG5cbiAgICBjb25zdCBjbGlja0hhbmRsZXIgPSAoZSkgPT4ge1xuICAgICAgY29uc3QgYXR0YWNrUGxhY2VkID0gaGFuZGxlUGxheWVyQXR0YWNrKGUsIGNvbXB1dGVyR2FtZUJvYXJkKTtcbiAgICAgIGNvbXB1dGVyQ29scy5mb3JFYWNoKChjb2wpID0+IHtcbiAgICAgICAgY29sLmNoaWxkTm9kZXMuZm9yRWFjaCgoZ3JpZFNxdWFyZSkgPT4ge1xuICAgICAgICAgIGdyaWRTcXVhcmUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrSGFuZGxlcik7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBpZiAoIWF0dGFja1BsYWNlZCkgcmVqZWN0KFwiaW5jb3JyZWN0IExvY2F0aW9uXCIpO1xuICAgICAgZWxzZSByZXNvbHZlKFtlLnRhcmdldC5pZFswXSwgZS50YXJnZXQuaWRbMl1dKTtcbiAgICB9O1xuXG4gICAgY29tcHV0ZXJDb2xzLmZvckVhY2goKGNvbCkgPT4ge1xuICAgICAgY29sLmNoaWxkTm9kZXMuZm9yRWFjaCgoZ3JpZFNxdWFyZSkgPT4ge1xuICAgICAgICBncmlkU3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0hhbmRsZXIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgaGlnaGxpZ2h0U3Vua1NoaXBzID0gKHNoaXBzT25Cb2FyZCkgPT4ge1xuICBmb3IgKGNvbnN0IHNoaXAgb2Ygc2hpcHNPbkJvYXJkKSB7XG4gICAgaWYgKHNoaXAudG90YWxMZW5ndGggPT09IDApIHtcbiAgICAgIGlmIChzaGlwLnNoaXBOYW1lID09PSBcIkNhcnJpZXJcIikge1xuICAgICAgICBoaWdobGlnaHRTdW5rU2hpcHNIZWxwZXIoNSwgc2hpcCk7XG4gICAgICB9IGVsc2UgaWYgKHNoaXAuc2hpcE5hbWUgPT09IFwiQmF0dGxlc2hpcFwiKSB7XG4gICAgICAgIGhpZ2hsaWdodFN1bmtTaGlwc0hlbHBlcig0LCBzaGlwKTtcbiAgICAgIH0gZWxzZSBpZiAoc2hpcC5zaGlwTmFtZSA9PT0gXCJEZXN0cm95ZXJcIikge1xuICAgICAgICBoaWdobGlnaHRTdW5rU2hpcHNIZWxwZXIoMywgc2hpcCk7XG4gICAgICB9IGVsc2UgaWYgKHNoaXAuc2hpcE5hbWUgPT09IFwiU3VibWFyaW5lXCIpIHtcbiAgICAgICAgaGlnaGxpZ2h0U3Vua1NoaXBzSGVscGVyKDMsIHNoaXApO1xuICAgICAgfSBlbHNlIGlmIChzaGlwLnNoaXBOYW1lID09PSBcIlBhdHJvbCBCb2F0XCIpIHtcbiAgICAgICAgaGlnaGxpZ2h0U3Vua1NoaXBzSGVscGVyKDIsIHNoaXApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuY29uc3QgaGlnaGxpZ2h0U3Vua1NoaXBzSGVscGVyID0gKGxlbmd0aCwgc2hpcCkgPT4ge1xuICBjb25zdCBzaGlwTG9jYXRpb24gPSBzaGlwLmxvY2F0aW9uO1xuICBjb25zdCB5ID0gc2hpcExvY2F0aW9uWzFdO1xuICBjb25zdCB4ID0gc2hpcExvY2F0aW9uWzBdO1xuICBpZiAoc2hpcC5hbGlnbm1lbnQgPT09IFwidmVydGljYWxcIikge1xuICAgIGNvbnN0IG5ld0xvY2F0aW9uID0gW3kgLSBsZW5ndGgsIHhdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgc2VsZWN0b3IgPSBgLmNvbXB1dGVyLWdyaWQgPiAuZ3JpZC1jb250YWluZXIgPiAuZ3JpZC1jb2wgLmdyaWQtc3F1YXJlW2lkPVwiJHtcbiAgICAgICAgbmV3TG9jYXRpb25bMF0gKyBpXG4gICAgICB9LCR7bmV3TG9jYXRpb25bMV19XCJdYDtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpLmNsYXNzTGlzdC5hZGQoXCJzaGlwLXN1bmtcIik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IG5ld0xvY2F0aW9uID0gW3ksIHggLSBsZW5ndGhdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgc2VsZWN0b3IgPSBgLmNvbXB1dGVyLWdyaWQgPiAuZ3JpZC1jb250YWluZXIgPiAuZ3JpZC1jb2wgLmdyaWQtc3F1YXJlW2lkPVwiJHtcbiAgICAgICAgbmV3TG9jYXRpb25bMF1cbiAgICAgIH0sJHtuZXdMb2NhdGlvblsxXSArIGl9XCJdYDtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpLmNsYXNzTGlzdC5hZGQoXCJzaGlwLXN1bmtcIik7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBoYW5kbGVQbGF5ZXJBdHRhY2sgPSAoZSwgY29tcHV0ZXJHYW1lQm9hcmQpID0+IHtcbiAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImhpdC1jaXJjbGVcIikpIHJldHVybiBmYWxzZTtcbiAgZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWlzcy1jaXJjbGVcIikpIHJldHVybiBmYWxzZTtcbiAgZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmxleC1jZW50ZXJlZFwiKSkgcmV0dXJuIGZhbHNlO1xuXG4gIGNvbnN0IHh2YWwgPSBlLnRhcmdldC5pZFsyXTtcbiAgY29uc3QgeXZhbCA9IGUudGFyZ2V0LmlkWzBdO1xuXG4gIGNvbnN0IGNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJmbGV4LWNlbnRlcmVkXCIpO1xuXG4gIGlmIChcbiAgICBjb21wdXRlckdhbWVCb2FyZFt5dmFsXVt4dmFsXSA9PT0gXCJcIiB8fFxuICAgIGNvbXB1dGVyR2FtZUJvYXJkW3l2YWxdW3h2YWxdID09PSBcIm1cIlxuICApIHtcbiAgICBjaXJjbGUuY2xhc3NMaXN0LmFkZChcIm1pc3MtY2lyY2xlXCIpO1xuICAgIGUudGFyZ2V0LmFwcGVuZENoaWxkKGNpcmNsZSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgY2lyY2xlLmNsYXNzTGlzdC5hZGQoXCJoaXQtY2lyY2xlXCIpO1xuICAgIGUudGFyZ2V0LmFwcGVuZENoaWxkKGNpcmNsZSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cbmNvbnN0IGFkZERpcmVjdGlvbk1zZyA9IChtc2csIHRpbWUpID0+IHtcbiAgY29uc3QgY29udHJvbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRyb2xzXCIpO1xuXG4gIGNvbnN0IGRpcmVjdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpcmVjdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGlyZWN0aW9ucy1jb250YWluZXJcIik7XG5cbiAgY29uc3QgZGlyZWN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgZGlyZWN0aW9ucy50ZXh0Q29udGVudCA9IG1zZztcbiAgZGlyZWN0aW9ucy5jbGFzc0xpc3QuYWRkKFwidHlwaW5nLWVmZmVjdFwiKTtcbiAgZGlyZWN0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpcmVjdGlvbnMpO1xuXG4gIGNvbnRyb2xzLmFwcGVuZENoaWxkKGRpcmVjdGlvbkNvbnRhaW5lcik7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgdGltZSk7XG4gIH0pO1xufTtcblxuY29uc3QgY2xlYXJEaXJlY3Rpb25Nc2cgPSAoKSA9PiB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udHJvbHNcIikuaW5uZXJIVE1MID0gXCJcIjtcbn07XG5cbmNvbnN0IHJlbmRlckNvbXB1dGVyc0F0dGFjayA9ICh5dmFsLCB4dmFsKSA9PiB7XG4gIGNvbnN0IHBsYXllckdyaWRTcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICBcIi5wbGF5ZXItZ3JpZCA+IC5ncmlkLWNvbnRhaW5lciA+IC5ncmlkLWNvbCA+IC5ncmlkLXNxdWFyZVwiXG4gICk7XG4gIGNvbnN0IGNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgcGxheWVyR3JpZFNxdWFyZXMuZm9yRWFjaCgoZ3JpZFNxdWFyZSkgPT4ge1xuICAgIGlmIChcbiAgICAgIE51bWJlcihncmlkU3F1YXJlLmlkWzBdKSA9PT0geXZhbCAmJlxuICAgICAgTnVtYmVyKGdyaWRTcXVhcmUuaWRbMl0pID09PSB4dmFsXG4gICAgKSB7XG4gICAgICBpZiAoZ3JpZFNxdWFyZS5jbGFzc0xpc3QuY29udGFpbnMoXCJzaGlwXCIpKSB7XG4gICAgICAgIGdyaWRTcXVhcmUuY2xhc3NMaXN0LmFkZChcImZsZXgtY2VudGVyZWRcIik7XG4gICAgICAgIGNpcmNsZS5jbGFzc0xpc3QuYWRkKFwiaGl0LWNpcmNsZVwiKTtcbiAgICAgICAgZ3JpZFNxdWFyZS5hcHBlbmRDaGlsZChjaXJjbGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ3JpZFNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiZmxleC1jZW50ZXJlZFwiKTtcbiAgICAgICAgY2lyY2xlLmNsYXNzTGlzdC5hZGQoXCJtaXNzLWNpcmNsZVwiKTtcbiAgICAgICAgZ3JpZFNxdWFyZS5hcHBlbmRDaGlsZChjaXJjbGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQge1xuICBhdHRhY2tTY3JlZW4sXG4gIHBsYXllcnNBdGtDaG9pY2UsXG4gIHJlbmRlckNvbXB1dGVyc0F0dGFjayxcbiAgYWRkRGlyZWN0aW9uTXNnLFxuICBjbGVhckRpcmVjdGlvbk1zZyxcbiAgaGlnaGxpZ2h0U3Vua1NoaXBzLFxufTtcbiIsImltcG9ydCBcIi4vZ2FtZU92ZXJTY3JlZW4uY3NzXCI7XG5cbmNvbnN0IGdhbWVPdmVyTW9kYWwgPSAobXNnKSA9PiB7XG4gIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jvb3RcIik7XG5cbiAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcbiAgZGlhbG9nLmNsYXNzTGlzdC5hZGQoXCJtb2RhbFwiKTtcbiAgZGlhbG9nLmlkID0gXCJtb2RhbFwiO1xuXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gbXNnO1xuXG4gIGNvbnN0IHBsYXlBZ2FpbkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHBsYXlBZ2FpbkJ0bi50ZXh0Q29udGVudCA9IFwiUGxheSBBZ2FpblwiO1xuICBwbGF5QWdhaW5CdG4uY2xhc3NMaXN0LmFkZChcInBsYXktYWdhaW4tYnRuXCIpO1xuICBwbGF5QWdhaW5CdG4uaWQgPSBcInBsYXlBZ2FpblwiO1xuICBwbGF5QWdhaW5CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgfSk7XG5cbiAgZGlhbG9nLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGRpYWxvZy5hcHBlbmRDaGlsZChwbGF5QWdhaW5CdG4pO1xuXG4gIHJvb3QuYXBwZW5kQ2hpbGQoZGlhbG9nKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWVPdmVyTW9kYWw7XG4iLCJpbXBvcnQgXCIuL3BsYWNlU2hpcFNjcmVlbi5jc3NcIjtcbmltcG9ydCBTaGlwIGZyb20gXCIuLi9nYW1lIGxvZ2ljL3NoaXBcIjtcblxuY29uc3QgcGxhY2VTaGlwU2NyZWVuID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImNvbnRlbnRcIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZHJhd0dyaWQoKSk7XG4gIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImFsaWduLWl0ZW1zLWNlbnRlclwiKTtcbiAgYWRkQ29udHJvbHNPblNjcmVlbigpO1xuXG4gIC8vaW5pdGlhbGl6aW5nIHNoaXBzIGhlcmUgd2l0aCB1bmRlZmluZWQgZm9yOlxuICAvL2xvY2F0aW9uIC0gdXNlciBuZWVkcyB0byBzZWxlY3Qgd2hlcmUgZWFjaCBzaGlwIHdpbGwgZ29cbiAgLy9hbGlnbm1lbnQgLSB1c2VyIHdpbGwgc2VsZWN0IGVpdGhlciBob3Jpem9udGFsIG9yIHZlcnRpY2FsIHZpYSBhIGJ1dHRvblxuICBjb25zdCBzaGlwcyA9IFtcbiAgICBuZXcgU2hpcCg1LCB1bmRlZmluZWQsIFwiQ2FycmllclwiLCB1bmRlZmluZWQpLFxuICAgIG5ldyBTaGlwKDQsIHVuZGVmaW5lZCwgXCJCYXR0bGVzaGlwXCIsIHVuZGVmaW5lZCksXG4gICAgbmV3IFNoaXAoMywgdW5kZWZpbmVkLCBcIkRlc3Ryb3llclwiLCB1bmRlZmluZWQpLFxuICAgIG5ldyBTaGlwKDMsIHVuZGVmaW5lZCwgXCJTdWJtYXJpbmVcIiwgdW5kZWZpbmVkKSxcbiAgICBuZXcgU2hpcCgyLCB1bmRlZmluZWQsIFwiUGF0cm9sIEJvYXRcIiwgdW5kZWZpbmVkKSxcbiAgXTtcblxuICBhd2FpdCBwbGFjZVNoaXBzU2VxdWVudGlhbGx5KHNoaXBzKTtcblxuICByZXR1cm4gc2hpcHM7XG59O1xuXG5jb25zdCBkcmF3R3JpZCA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICBjb25zdCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbC5jbGFzc0xpc3QuYWRkKFwiZ3JpZC1jb2xcIik7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICBjb25zdCBncmlkU3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGdyaWRTcXVhcmUuY2xhc3NMaXN0LmFkZChcImdyaWQtc3F1YXJlXCIpO1xuICAgICAgZ3JpZFNxdWFyZS5pZCA9IGAke1tqLCBpXX1gO1xuICAgICAgY29sLmFwcGVuZENoaWxkKGdyaWRTcXVhcmUpO1xuICAgIH1cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29sKTtcbiAgfVxuXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZ3JpZC1jb250YWluZXJcIik7XG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5jb25zdCBhZGRDb250cm9sc09uU2NyZWVuID0gKCkgPT4ge1xuICBjb25zdCBjb250cm9scyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udHJvbHNcIik7XG4gIGNvbnN0IGNoYW5nZURpcmVjdGlvbkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXG4gIGgxLmlkID0gXCJkaXJlY3Rpb25UZXh0XCI7XG5cbiAgY2hhbmdlRGlyZWN0aW9uQnRuLnRleHRDb250ZW50ID0gXCJIb3Jpem9udGFsXCI7XG4gIGNoYW5nZURpcmVjdGlvbkJ0bi5jbGFzc0xpc3QuYWRkKFwiY2hhbmdlLWRpcmVjdGlvbi1idG5cIik7XG4gIGNoYW5nZURpcmVjdGlvbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNoYW5nZURpcmVjdGlvbkJ0bi50ZXh0Q29udGVudCA9PT0gXCJIb3Jpem9udGFsXCJcbiAgICAgID8gKGNoYW5nZURpcmVjdGlvbkJ0bi50ZXh0Q29udGVudCA9IFwiVmVydGljYWxcIilcbiAgICAgIDogKGNoYW5nZURpcmVjdGlvbkJ0bi50ZXh0Q29udGVudCA9IFwiSG9yaXpvbnRhbFwiKTtcbiAgfSk7XG5cbiAgY29udHJvbHMuYXBwZW5kQ2hpbGQoaDEpO1xuICBjb250cm9scy5hcHBlbmRDaGlsZChjaGFuZ2VEaXJlY3Rpb25CdG4pO1xufTtcblxuY29uc3QgYWRkSG92ZXJFZmZlY3QgPSAoc2hpcExlbmd0aCkgPT4ge1xuICBjb25zdCBzcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ncmlkLXNxdWFyZVwiKTtcbiAgY29uc3QgaG92ZXJIYW5kbGVyID0gKGUpID0+IHtcbiAgICBhZGRIb3ZlckVmZmVjdEhlbHBlcihlLCBzaGlwTGVuZ3RoKTtcbiAgfTtcblxuICBzcXVhcmVzLmZvckVhY2goKGdyaWRTcXVhcmUpID0+IHtcbiAgICBncmlkU3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgaG92ZXJIYW5kbGVyKTtcbiAgICBncmlkU3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGhvdmVySGFuZGxlcik7XG4gIH0pO1xuICByZXR1cm4gaG92ZXJIYW5kbGVyO1xufTtcblxuY29uc3QgYWRkSG92ZXJFZmZlY3RIZWxwZXIgPSAoZXZlbnQsIHNoaXBMZW5ndGgpID0+IHtcbiAgY29uc3Qgb3Bwb3NpdGVBbGlnbm1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLmNoYW5nZS1kaXJlY3Rpb24tYnRuXCJcbiAgKS50ZXh0Q29udGVudDtcbiAgY29uc3QgeHZhbCA9IGV2ZW50LnRhcmdldC5pZFsyXTtcbiAgY29uc3QgeXZhbCA9IGV2ZW50LnRhcmdldC5pZFswXTtcbiAgcmVzZXRVbndhbnRlZFN0eWxpbmcoKTtcbiAgLy9oaWdobGlnaHQgdGhlIHNxdWFyZXMgdmVydGljYWxseVxuICBpZiAob3Bwb3NpdGVBbGlnbm1lbnQgPT09IFwiSG9yaXpvbnRhbFwiKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHN0YXJ0T2ZIaWdobGlnaHQgPSBpICsgTnVtYmVyKHl2YWwpO1xuICAgICAgaWYgKCFpc1ZhbGlkU3F1YXJlKGV2ZW50LCBzaGlwTGVuZ3RoLCBvcHBvc2l0ZUFsaWdubWVudCkpIHtcbiAgICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoXCJzaGlwLWhpZ2hsaWdodC1lcnJvclwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZG9jdW1lbnRcbiAgICAgICAgLmdldEVsZW1lbnRCeUlkKGAke1tzdGFydE9mSGlnaGxpZ2h0LCB4dmFsXX1gKVxuICAgICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcInNoaXAtaGlnaGxpZ2h0XCIpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cbiAgLy9oaWdobGlnaHQgdGhlIHNxdWFyZXMgaG9yaXpvbnRhbGx5XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgc3RhcnRPZkhpZ2hsaWdodCA9IGkgKyBOdW1iZXIoeHZhbCk7XG4gICAgaWYgKCFpc1ZhbGlkU3F1YXJlKGV2ZW50LCBzaGlwTGVuZ3RoLCBvcHBvc2l0ZUFsaWdubWVudCkpIHtcbiAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKFwic2hpcC1oaWdobGlnaHQtZXJyb3JcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGRvY3VtZW50XG4gICAgICAuZ2V0RWxlbWVudEJ5SWQoYCR7W3l2YWwsIHN0YXJ0T2ZIaWdobGlnaHRdfWApXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcInNoaXAtaGlnaGxpZ2h0XCIpO1xuICB9XG59O1xuXG5jb25zdCByZW1vdmVIb3ZlckVmZmVjdCA9IChob3ZlckhhbmRsZXIpID0+IHtcbiAgY29uc3Qgc3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ3JpZC1zcXVhcmVcIik7XG5cbiAgc3F1YXJlcy5mb3JFYWNoKChncmlkU3F1YXJlKSA9PiB7XG4gICAgZ3JpZFNxdWFyZS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGhvdmVySGFuZGxlcik7XG4gICAgZ3JpZFNxdWFyZS5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBob3ZlckhhbmRsZXIpO1xuICB9KTtcbn07XG5cbi8vdGhpcyBmdW5jdGlvbiBjYWxscyBwbGFjZVNoaXBPbkNsaWNrSGVscGVyXG4vL3doaWNoIHdpbGwgbW9kaWZ5IHRoZSBzaGlwIG9iamVjdHMgZmllbGRzXG5jb25zdCBwbGFjZVNoaXBPbkNsaWNrID0gKHNoaXApID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCBzcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ncmlkLXNxdWFyZVwiKTtcblxuICAgIGNvbnN0IGNsaWNrSGFuZGxlciA9IChlKSA9PiB7XG4gICAgICBsZXQgc2hpcFBsYWNlZCA9IHBsYWNlU2hpcE9uQ2xpY2tIZWxwZXIoZSwgc2hpcCk7XG4gICAgICBpZiAoIXNoaXBQbGFjZWQpIHtcbiAgICAgICAgcmVqZWN0KCk7XG4gICAgICB9XG4gICAgICBzcXVhcmVzLmZvckVhY2goKGdyaWRTcXVhcmUpID0+IHtcbiAgICAgICAgZ3JpZFNxdWFyZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyKTtcbiAgICAgIH0pO1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH07XG5cbiAgICBzcXVhcmVzLmZvckVhY2goKGdyaWRTcXVhcmUpID0+IHtcbiAgICAgIGdyaWRTcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrSGFuZGxlcik7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuLy90aGlzIGZ1bmN0aW9uIHdpbGwgbW9kaWZpeSB0aGUgcGFzc2VkIGluIHNoaXBzIGZpZWxkc1xuY29uc3QgcGxhY2VTaGlwT25DbGlja0hlbHBlciA9IChlLCBzaGlwKSA9PiB7XG4gIGNvbnN0IG9wcG9zaXRlQWxpZ25tZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIi5jaGFuZ2UtZGlyZWN0aW9uLWJ0blwiXG4gICkudGV4dENvbnRlbnQ7XG5cbiAgaWYgKCFpc1ZhbGlkU3F1YXJlKGUsIHNoaXAudG90YWxMZW5ndGgsIG9wcG9zaXRlQWxpZ25tZW50KSkgcmV0dXJuIGZhbHNlO1xuXG4gIGNvbnN0IHh2YWwgPSBlLnRhcmdldC5pZFsyXTtcbiAgY29uc3QgeXZhbCA9IGUudGFyZ2V0LmlkWzBdO1xuICBzaGlwLmxvY2F0aW9uID0gW3h2YWwsIHl2YWxdO1xuXG4gIGlmIChvcHBvc2l0ZUFsaWdubWVudCA9PT0gXCJIb3Jpem9udGFsXCIpIHtcbiAgICBzaGlwLmFsaWdubWVudCA9IFwidmVydGljYWxcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAudG90YWxMZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgc3RhcnRPZkhpZ2hsaWdodCA9IGkgKyBOdW1iZXIoeXZhbCk7XG4gICAgICBkb2N1bWVudFxuICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoYCR7W3N0YXJ0T2ZIaWdobGlnaHQsIHh2YWxdfWApXG4gICAgICAgIC5jbGFzc0xpc3QuYWRkKFwic2hpcC1wbGFjZWRcIik7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc2hpcC5hbGlnbm1lbnQgPSBcImhvcml6b250YWxcIjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLnRvdGFsTGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBzdGFydE9mSGlnaGxpZ2h0ID0gaSArIE51bWJlcih4dmFsKTtcbiAgICBkb2N1bWVudFxuICAgICAgLmdldEVsZW1lbnRCeUlkKGAke1t5dmFsLCBzdGFydE9mSGlnaGxpZ2h0XX1gKVxuICAgICAgLmNsYXNzTGlzdC5hZGQoXCJzaGlwLXBsYWNlZFwiKTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmNvbnN0IGlzVmFsaWRTcXVhcmUgPSAoZSwgc2hpcExlbmd0aCwgb3Bwb3NpdGVBbGlnbm1lbnQpID0+IHtcbiAgY29uc3QgeHZhbCA9IGUudGFyZ2V0LmlkWzJdO1xuICBjb25zdCB5dmFsID0gZS50YXJnZXQuaWRbMF07XG5cbiAgaWYgKG9wcG9zaXRlQWxpZ25tZW50ID09PSBcIkhvcml6b250YWxcIikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBzdGFydE9mSGlnaGxpZ2h0ID0gaSArIE51bWJlcih5dmFsKTtcbiAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke1tzdGFydE9mSGlnaGxpZ2h0LCB4dmFsXX1gKTtcbiAgICAgIGlmIChzdGFydE9mSGlnaGxpZ2h0ID4gOSB8fCBzcXVhcmUuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hpcC1wbGFjZWRcIikpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHN0YXJ0T2ZIaWdobGlnaHQgPSBpICsgTnVtYmVyKHh2YWwpO1xuICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke1t5dmFsLCBzdGFydE9mSGlnaGxpZ2h0XX1gKTtcbiAgICBpZiAoc3RhcnRPZkhpZ2hsaWdodCA+IDkgfHwgc3F1YXJlLmNsYXNzTGlzdC5jb250YWlucyhcInNoaXAtcGxhY2VkXCIpKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxuY29uc3QgcmVzZXRVbndhbnRlZFN0eWxpbmcgPSAoKSA9PiB7XG4gIGNvbnN0IHNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdyaWQtc3F1YXJlXCIpO1xuXG4gIHNxdWFyZXMuZm9yRWFjaCgoZ3JpZFNxdWFyZSkgPT4ge1xuICAgIGdyaWRTcXVhcmUuY2xhc3NMaXN0LnJlbW92ZShcInNoaXAtaGlnaGxpZ2h0LWVycm9yXCIpO1xuICAgIGdyaWRTcXVhcmUuY2xhc3NMaXN0LnJlbW92ZShcInNoaXAtaGlnaGxpZ2h0XCIpO1xuICB9KTtcbn07XG5cbmNvbnN0IHBsYWNlU2hpcHNTZXF1ZW50aWFsbHkgPSBhc3luYyAoc2hpcEFycmF5KSA9PiB7XG4gIGxldCBpID0gMDtcbiAgbGV0IGFsbFNoaXBzUGxhY2VkID0gZmFsc2U7XG5cbiAgd2hpbGUgKCFhbGxTaGlwc1BsYWNlZCkge1xuICAgIGNvbnN0IGhvdmVyRXZlbnRSZWYgPSBhZGRIb3ZlckVmZmVjdChzaGlwQXJyYXlbaV0udG90YWxMZW5ndGgpO1xuICAgIHRyeSB7XG4gICAgICAvL3BsYWNlU2hpcE9uQ2xpY2sgd2lsbCBtb2RpZnkgdGhlIGN1cnJlbnQgc2hpcHMgYWxpZ25tZW50IGFuZCBsb2NhdGlvbiBmaWVsZHNcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICBcImRpcmVjdGlvblRleHRcIlxuICAgICAgKS50ZXh0Q29udGVudCA9IGBQbGFjZSBEb3duIFlvdXIgJHtzaGlwQXJyYXlbaV0uc2hpcE5hbWV9IWA7XG4gICAgICBhd2FpdCBwbGFjZVNoaXBPbkNsaWNrKHNoaXBBcnJheVtpXSk7XG4gICAgICBpKys7XG4gICAgICBpZiAoaSA9PT0gNSkge1xuICAgICAgICBhbGxTaGlwc1BsYWNlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwicmVqZWN0ZWQgdHJ5aW5nIGFnYWluLi4uXCIpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICByZW1vdmVIb3ZlckVmZmVjdChob3ZlckV2ZW50UmVmKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCB7IHBsYWNlU2hpcFNjcmVlbiwgZHJhd0dyaWQgfTtcbiIsImltcG9ydCBcIi4vc3RhcnRTY3JlZW4uY3NzXCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuLi9nYW1lIGxvZ2ljL3BsYXllci5qc1wiO1xuXG5jb25zdCBzdGFydFNjcmVlbiA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJjb250ZW50XCIpO1xuICBjb25zdCBzdGFydFNjcmVlbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBjb25zdCB0ZXh0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNvbnN0IHN0YXJ0R2FtZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IGVycm9yTXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgbGFiZWwuaHRtbEZvciA9IFwicGxheWVyTmFtZVwiO1xuICBsYWJlbC50ZXh0Q29udGVudCA9IFwiRW50ZXIgUGxheWVyIE5hbWU6XCI7XG5cbiAgdGV4dElucHV0LmlkID0gXCJwbGF5ZXJOYW1lXCI7XG4gIHRleHRJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gIHRleHRJbnB1dC5wbGFjZWhvbGRlciA9IFwiTmFtZVwiO1xuICB0ZXh0SW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICB0ZXh0SW5wdXQudHlwZSA9IFwidGV4dFwiO1xuXG4gIHN0YXJ0R2FtZUJ0bi50ZXh0Q29udGVudCA9IFwiU3RhcnQgR2FtZVwiO1xuXG4gIGNvbnN0IGNyZWF0ZVBsYXllclByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIHN0YXJ0R2FtZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKCF0ZXh0SW5wdXQuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgIHRleHRJbnB1dC5jbGFzc0xpc3QuYWRkKFwiZXJyb3JcIik7XG4gICAgICAgIGVycm9yTXNnLnRleHRDb250ZW50ID0gdGV4dElucHV0LnZhbGlkYXRpb25NZXNzYWdlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICByZXNvbHZlKG5ldyBQbGF5ZXIodGV4dElucHV0LnZhbHVlLCB0cnVlKSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGVycm9yTXNnLmNsYXNzTGlzdC5hZGQoXCJlcnJvci1tc2dcIik7XG4gIHN0YXJ0U2NyZWVuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzdGFydC1zY3JlZW4tY29udGFpbmVyXCIpO1xuICBzdGFydFNjcmVlbkNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gIHN0YXJ0U2NyZWVuQ29udGFpbmVyLmFwcGVuZENoaWxkKGVycm9yTXNnKTtcbiAgc3RhcnRTY3JlZW5Db250YWluZXIuYXBwZW5kQ2hpbGQodGV4dElucHV0KTtcbiAgc3RhcnRTY3JlZW5Db250YWluZXIuYXBwZW5kQ2hpbGQoc3RhcnRHYW1lQnRuKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChzdGFydFNjcmVlbkNvbnRhaW5lcik7XG4gIHJldHVybiBjcmVhdGVQbGF5ZXJQcm9taXNlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3RhcnRTY3JlZW47XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHN0YXJ0U2NyZWVuIGZyb20gXCIuL3VpL3N0YXJ0U2NyZWVuXCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL2dhbWUgbG9naWMvcGxheWVyLmpzXCI7XG5pbXBvcnQgeyBwbGFjZVNoaXBTY3JlZW4gfSBmcm9tIFwiLi91aS9wbGFjZVNoaXBTY3JlZW5cIjtcbmltcG9ydCBHYW1lQm9hcmQgZnJvbSBcIi4vZ2FtZSBsb2dpYy9nYW1lYm9hcmRcIjtcbmltcG9ydCBTaGlwIGZyb20gXCIuL2dhbWUgbG9naWMvc2hpcFwiO1xuaW1wb3J0IGdhbWVPdmVyTW9kYWwgZnJvbSBcIi4vdWkvZ2FtZU92ZXJTY3JlZW5cIjtcbmltcG9ydCB7XG4gIGF0dGFja1NjcmVlbixcbiAgcGxheWVyc0F0a0Nob2ljZSxcbiAgcmVuZGVyQ29tcHV0ZXJzQXR0YWNrLFxuICBhZGREaXJlY3Rpb25Nc2csXG4gIGNsZWFyRGlyZWN0aW9uTXNnLFxuICBoaWdobGlnaHRTdW5rU2hpcHMsXG59IGZyb20gXCIuL3VpL2F0dGFja1NjcmVlblwiO1xuXG5jb25zdCBnYW1lTG9vcCA9IGFzeW5jICgpID0+IHtcbiAgLy9zaG93cyBzdGFydCBzY3JlZW4gYW5kIGluaXRpbGl6ZXMgcGxheWVyc1xuICBjb25zdCB7IHBsYXllciwgY29tcHV0ZXIgfSA9IGF3YWl0IGluaXRQbGF5ZXJzKCk7XG5cbiAgY2xlYXJHYW1lU2NyZWVuKCk7XG5cbiAgLy9zaG93cyBwbGFjZSBzaGlwIHNjcmVlbiBhbmQgaW5pdGlsaXplcyB0aGUgcGxheWVyXG4gIC8vYW5kIGNvbXB1dGVyIGdhbWVib2FyZHMgd2l0aCBzaGlwc1xuICBjb25zdCB7IHBsYXllckdhbWVCb2FyZCwgY29tcHV0ZXJHYW1lQm9hcmQgfSA9IGF3YWl0IGluaXRHYW1lQm9hcmRzKCk7XG5cbiAgY2xlYXJHYW1lU2NyZWVuKCk7XG4gIGNsZWFyRGlyZWN0aW9uTXNnKCk7XG5cbiAgYXR0YWNrU2NyZWVuKHBsYXllckdhbWVCb2FyZCwgY29tcHV0ZXJHYW1lQm9hcmQpO1xuICBhd2FpdCBhZGREaXJlY3Rpb25Nc2coXG4gICAgYFdlbGNvbWUgdG8gdGhlIGJhdHRsZWZpZWxkLCBDYXB0YWluICR7cGxheWVyLmRpc3BsYXlOYW1lfS5gLFxuICAgIDM1MDBcbiAgKTtcblxuICAvL3doaWxlIHRoZSBjb21wdXRlciBhbmQgcGxheWVyIGJvdGggaGF2ZSBzaGlwcyBzdGlsbFxuICB3aGlsZSAoIXBsYXllckdhbWVCb2FyZC5hbGxTaGlwc1N1bmsoKSAmJiAhY29tcHV0ZXJHYW1lQm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICB0cnkge1xuICAgICAgLy8gcGxheWVyIGF0dGFja3NcbiAgICAgIGNsZWFyRGlyZWN0aW9uTXNnKCk7XG4gICAgICBhd2FpdCBhZGREaXJlY3Rpb25Nc2coXG4gICAgICAgIGBXYWl0aW5nIG9uIHlvdXIgdGFyZ2V0LCBDYXB0YWluICR7cGxheWVyLmRpc3BsYXlOYW1lfSEgYCxcbiAgICAgICAgMjAwMFxuICAgICAgKTtcbiAgICAgIGNvbnN0IHBsYXllcnNBdGsgPSBhd2FpdCBwbGF5ZXJzQXRrQ2hvaWNlKGNvbXB1dGVyR2FtZUJvYXJkLmJvYXJkKTtcbiAgICAgIGNvbnN0IHBIaXRPck1pc3MgPSBjb21wdXRlckdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKFxuICAgICAgICBwbGF5ZXJzQXRrWzBdLFxuICAgICAgICBwbGF5ZXJzQXRrWzFdXG4gICAgICApO1xuXG4gICAgICBoaWdobGlnaHRTdW5rU2hpcHMoY29tcHV0ZXJHYW1lQm9hcmQuc2hpcHNPbkJvYXJkKTtcblxuICAgICAgY2xlYXJEaXJlY3Rpb25Nc2coKTtcbiAgICAgIGF3YWl0IGFkZERpcmVjdGlvbk1zZyhcbiAgICAgICAgYFlvdSBmaXJlIGEgc2hvdCBpbnRvIGVuZW15IHdhdGVycyBhbmQgaXRzIGEgJHtwSGl0T3JNaXNzfS5gLFxuICAgICAgICAzNjAwXG4gICAgICApO1xuXG4gICAgICAvL2NvbXB1dGVyIGF0dGFja3NcblxuICAgICAgY29tcHV0ZXIuc21hcnRNb3ZlKHBsYXllckdhbWVCb2FyZC5ib2FyZCk7XG4gICAgICBjb25zdCBjSGl0T3JNaXNzID0gcGxheWVyR2FtZUJvYXJkLnJlY2VpdmVBdHRhY2soXG4gICAgICAgIGNvbXB1dGVyLmF0dGFja1swXSxcbiAgICAgICAgY29tcHV0ZXIuYXR0YWNrWzFdXG4gICAgICApO1xuXG4gICAgICBjbGVhckRpcmVjdGlvbk1zZygpO1xuICAgICAgYXdhaXQgYWRkRGlyZWN0aW9uTXNnKFxuICAgICAgICBgVGhlIGVuZW15IGZpcmVzIGEgc2hvdCBiYWNrIGFuZCBpdHMgYSAke2NIaXRPck1pc3N9LmAsXG4gICAgICAgIDM2MDBcbiAgICAgICk7XG4gICAgICByZW5kZXJDb21wdXRlcnNBdHRhY2soY29tcHV0ZXIuYXR0YWNrWzBdLCBjb21wdXRlci5hdHRhY2tbMV0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgY29tcHV0ZXJIYXNXb24gPSBwbGF5ZXJHYW1lQm9hcmQuYWxsU2hpcHNTdW5rKCk7XG5cbiAgbGV0IHdpbm5pbmdNc2cgPSBcIlwiO1xuICBjb21wdXRlckhhc1dvblxuICAgID8gKHdpbm5pbmdNc2cgPSBcIlRoZSBjb21wdXRlciBraWNrZWQgeW91ciBidXR0LiBCZXR0ZXIgbHVjayBuZXh0IHRpbWUhXCIpXG4gICAgOiAod2lubmluZ01zZyA9IFwiWW91IG1hbmFnZWQgdG8gYmVhdCB0aGUgY29tcHV0ZXIuIE5pY2VseSBkb25lIVwiKTtcblxuICBnYW1lT3Zlck1vZGFsKHdpbm5pbmdNc2cpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vZGFsXCIpLnNob3dNb2RhbCgpO1xufTtcblxuY29uc3QgaW5pdFBsYXllcnMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHBsYXllclByb21pc2UgPSBzdGFydFNjcmVlbigpO1xuXG4gIGNvbnN0IHBsYXllciA9IGF3YWl0IHBsYXllclByb21pc2U7XG4gIGNvbnN0IGNvbXB1dGVyID0gbmV3IFBsYXllcihcIkNvbXB1dGVyXCIsIGZhbHNlKTtcblxuICByZXR1cm4geyBwbGF5ZXIsIGNvbXB1dGVyIH07XG59O1xuXG5jb25zdCBpbml0R2FtZUJvYXJkcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcGxheWVyR2FtZUJvYXJkID0gbmV3IEdhbWVCb2FyZCgpO1xuICBjb25zdCBjb21wdXRlckdhbWVCb2FyZCA9IG5ldyBHYW1lQm9hcmQoKTtcblxuICBhd2FpdCBzZXRQbGF5ZXJTaGlwc09uR2FtZWJvYXJkKHBsYXllckdhbWVCb2FyZCk7XG4gIHNldENvbXB1dGVyU2hpcHNPbkdhbWVib2FyZChjb21wdXRlckdhbWVCb2FyZCk7XG4gIHJldHVybiB7IHBsYXllckdhbWVCb2FyZCwgY29tcHV0ZXJHYW1lQm9hcmQgfTtcbn07XG5cbmNvbnN0IHNldFBsYXllclNoaXBzT25HYW1lYm9hcmQgPSBhc3luYyAocGxheWVyR2FtZUJvYXJkKSA9PiB7XG4gIGNvbnN0IHNoaXBBcnJheSA9IGF3YWl0IHBsYWNlU2hpcFNjcmVlbigpO1xuICBmb3IgKGxldCBzaGlwIG9mIHNoaXBBcnJheSkge1xuICAgIHBsYXllckdhbWVCb2FyZC5wbGFjZVNoaXAoc2hpcCk7XG4gIH1cbn07XG5cbmNvbnN0IHNldENvbXB1dGVyU2hpcHNPbkdhbWVib2FyZCA9IChjb21wdXRlckdhbWVCb2FyZCkgPT4ge1xuICBjb25zdCBzaGlwQXJyYXkgPSBjb21wdXRlclNoaXBMb2NhdGlvbnMoKTtcblxuICBmb3IgKGxldCBzaGlwIG9mIHNoaXBBcnJheSkge1xuICAgIGNvbXB1dGVyR2FtZUJvYXJkLnBsYWNlU2hpcChzaGlwKTtcbiAgfVxufTtcbi8vc3RhdGljIHNoaXAgc3Bhd25zIGZvciBub3dcbmNvbnN0IGNvbXB1dGVyU2hpcExvY2F0aW9ucyA9ICgpID0+IHtcbiAgc3dpdGNoIChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1KSkge1xuICAgIGNhc2UgMDpcbiAgICAgIHJldHVybiBbXG4gICAgICAgIG5ldyBTaGlwKDUsIFswLCAwXSwgXCJDYXJyaWVyXCIsIFwidmVydGljYWxcIiksXG4gICAgICAgIG5ldyBTaGlwKDQsIFs2LCAwXSwgXCJCYXR0bGVzaGlwXCIsIFwidmVydGljYWxcIiksXG4gICAgICAgIG5ldyBTaGlwKDMsIFsyLCA1XSwgXCJEZXN0cm95ZXJcIiwgXCJob3Jpem9udGFsXCIpLFxuICAgICAgICBuZXcgU2hpcCgzLCBbMSwgNl0sIFwiU3VibWFyaW5lXCIsIFwidmVydGljYWxcIiksXG4gICAgICAgIG5ldyBTaGlwKDIsIFs4LCA4XSwgXCJQYXRyb2wgQm9hdFwiLCBcImhvcml6b250YWxcIiksXG4gICAgICBdO1xuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiBbXG4gICAgICAgIG5ldyBTaGlwKDUsIFsyLCAzXSwgXCJDYXJyaWVyXCIsIFwidmVydGljYWxcIiksXG4gICAgICAgIG5ldyBTaGlwKDQsIFs2LCAwXSwgXCJCYXR0bGVzaGlwXCIsIFwiaG9yaXpvbnRhbFwiKSxcbiAgICAgICAgbmV3IFNoaXAoMywgWzUsIDZdLCBcIkRlc3Ryb3llclwiLCBcImhvcml6b250YWxcIiksXG4gICAgICAgIG5ldyBTaGlwKDMsIFs4LCA3XSwgXCJTdWJtYXJpbmVcIiwgXCJ2ZXJ0aWNhbFwiKSxcbiAgICAgICAgbmV3IFNoaXAoMiwgWzIsIDhdLCBcIlBhdHJvbCBCb2F0XCIsIFwidmVydGljYWxcIiksXG4gICAgICBdO1xuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiBbXG4gICAgICAgIG5ldyBTaGlwKDUsIFsyLCA3XSwgXCJDYXJyaWVyXCIsIFwiaG9yaXpvbnRhbFwiKSxcbiAgICAgICAgbmV3IFNoaXAoNCwgWzYsIDJdLCBcIkJhdHRsZXNoaXBcIiwgXCJob3Jpem9udGFsXCIpLFxuICAgICAgICBuZXcgU2hpcCgzLCBbMywgMl0sIFwiRGVzdHJveWVyXCIsIFwidmVydGljYWxcIiksXG4gICAgICAgIG5ldyBTaGlwKDMsIFs3LCA5XSwgXCJTdWJtYXJpbmVcIiwgXCJob3Jpem9udGFsXCIpLFxuICAgICAgICBuZXcgU2hpcCgyLCBbMCwgNF0sIFwiUGF0cm9sIEJvYXRcIiwgXCJ2ZXJ0aWNhbFwiKSxcbiAgICAgIF07XG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIFtcbiAgICAgICAgbmV3IFNoaXAoNSwgWzMsIDRdLCBcIkNhcnJpZXJcIiwgXCJ2ZXJ0aWNhbFwiKSxcbiAgICAgICAgbmV3IFNoaXAoNCwgWzcsIDVdLCBcIkJhdHRsZXNoaXBcIiwgXCJ2ZXJ0aWNhbFwiKSxcbiAgICAgICAgbmV3IFNoaXAoMywgWzUsIDFdLCBcIkRlc3Ryb3llclwiLCBcImhvcml6b250YWxcIiksXG4gICAgICAgIG5ldyBTaGlwKDMsIFswLCAxXSwgXCJTdWJtYXJpbmVcIiwgXCJob3Jpem9udGFsXCIpLFxuICAgICAgICBuZXcgU2hpcCgyLCBbMCwgNl0sIFwiUGF0cm9sIEJvYXRcIiwgXCJob3Jpem9udGFsXCIpLFxuICAgICAgXTtcbiAgICBjYXNlIDQ6XG4gICAgICByZXR1cm4gW1xuICAgICAgICBuZXcgU2hpcCg1LCBbMywgNV0sIFwiQ2FycmllclwiLCBcImhvcml6b250YWxcIiksXG4gICAgICAgIG5ldyBTaGlwKDQsIFs0LCAwXSwgXCJCYXR0bGVzaGlwXCIsIFwiaG9yaXpvbnRhbFwiKSxcbiAgICAgICAgbmV3IFNoaXAoMywgWzIsIDFdLCBcIkRlc3Ryb3llclwiLCBcInZlcnRpY2FsXCIpLFxuICAgICAgICBuZXcgU2hpcCgzLCBbMSwgN10sIFwiU3VibWFyaW5lXCIsIFwidmVydGljYWxcIiksXG4gICAgICAgIG5ldyBTaGlwKDIsIFs4LCAyXSwgXCJQYXRyb2wgQm9hdFwiLCBcImhvcml6b250YWxcIiksXG4gICAgICBdO1xuICB9XG59O1xuXG5jb25zdCBjbGVhckdhbWVTY3JlZW4gPSAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJjb250ZW50XCIpLmlubmVySFRNTCA9IFwiXCI7XG59O1xuZ2FtZUxvb3AoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
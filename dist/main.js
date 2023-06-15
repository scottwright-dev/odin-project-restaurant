/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createHomePage: () => (/* binding */ createHomePage)\n/* harmony export */ });\nfunction createHomePage (contentElement, switchTab) {\n    const content = document.querySelector('#content');\n   \n    // create elements\n    const image = document.createElement('img');\n    image.src = '../src/img/leon-bublitz-fBeRt6DnhC8-unsplash.jpg';\n    image.alt = 'Ichiraku Ramen Bar';\n    content.appendChild(image);\n\n    const title = document.createElement('h1');\n    title.textContent = 'Ichiraku Ramen Bar';\n    content.appendChild(title);\n\n    const copy = document.createElement('p');\n    copy.textContent = 'Step into Ichiraku Ramen Bar, where Japanese tradition intertwines with modernity to craft an extraordinary ramen experience in the heart of London.';\n    content.appendChild(copy);\n\n    const menuTab = document.createElement('a');\n    menuTab.textContent = 'Menu';\n    menuTab.href = '#';\n    menuTab.addEventListener('click', () => switchTab('menu'));\n    content.appendChild(menuTab);\n}\n\n//# sourceURL=webpack://odin-project-restaurant/./src/homePage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage */ \"./src/homePage.js\");\n/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuPage */ \"./src/menuPage.js\");\n\n\n\n// Tab switching\nfunction switchTab(tab) {\n  const contentDiv = document.querySelector('#content');\n  contentDiv.textContent = '';\n\n  switch (tab) {\n    case 'home':\n      (0,_homePage__WEBPACK_IMPORTED_MODULE_0__.createHomePage)(contentDiv, switchTab);\n      break;\n    case 'menu':\n      (0,_menuPage__WEBPACK_IMPORTED_MODULE_1__.createMenuPage)(contentDiv, switchTab);\n      break;\n    default:\n      break;\n  }\n}\n\n// Initial loading\nfunction initialLoad() {\n  const contentDiv = document.querySelector('#content');\n  (0,_homePage__WEBPACK_IMPORTED_MODULE_0__.createHomePage)(contentDiv, switchTab);\n  switchTab('home'); // Display home page initially\n}\n\ninitialLoad();\n\n\n\n\n//# sourceURL=webpack://odin-project-restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMenuPage: () => (/* binding */ createMenuPage)\n/* harmony export */ });\nfunction createMenuPage(parentElement, switchTab) {\n    const content = document.querySelector('#content');\n  \n    // home tab\n    const home = document.createElement('a');\n    home.textContent = 'Home';\n    home.href = '#';\n    home.addEventListener('click', () => switchTab('home'));\n    content.appendChild(home);\n\n    // menu content\n    const menuContainer = document.createElement('div');\n    menuContainer.textContent = 'Menu items to be added here';\n    \n    parentElement.appendChild(menuContainer);\n  }\n  \n\n//# sourceURL=webpack://odin-project-restaurant/./src/menuPage.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
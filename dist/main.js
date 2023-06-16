/* eslint-disable */

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_homePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/homePage */ \"./src/modules/homePage.js\");\n/* harmony import */ var _modules_menuPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menuPage */ \"./src/modules/menuPage.js\");\n/* harmony import */ var _modules_contactPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/contactPage */ \"./src/modules/contactPage.js\");\n\n\n\n\n// Tab switching\nfunction switchTab(tab) {\n  const contentDiv = document.querySelector('#content');\n  contentDiv.textContent = '';\n\n  switch (tab) {\n    case 'home':\n      (0,_modules_homePage__WEBPACK_IMPORTED_MODULE_0__.createHomePage)(switchTab);\n      break;\n    case 'menu':\n      (0,_modules_menuPage__WEBPACK_IMPORTED_MODULE_1__.createMenuPage)(contentDiv, switchTab);\n      break;\n    case 'contact':\n      (0,_modules_contactPage__WEBPACK_IMPORTED_MODULE_2__.createContactPage)(contentDiv, switchTab);\n      break;\n    default:\n  }\n}\n\n// Initial loading\nfunction initialLoad() {\n  const contentDiv = document.querySelector('#content');\n  (0,_modules_homePage__WEBPACK_IMPORTED_MODULE_0__.createHomePage)(contentDiv, switchTab);\n  switchTab('home'); // Display home page initially\n}\n\ninitialLoad();\n\n//# sourceURL=webpack://odin-project-restaurant/./src/index.js?");

/***/ }),

/***/ "./src/modules/contactPage.js":
/*!************************************!*\
  !*** ./src/modules/contactPage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createContactPage: () => (/* binding */ createContactPage)\n/* harmony export */ });\n/* harmony import */ var _tabManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabManager */ \"./src/modules/tabManager.js\");\n\n\nfunction createContactPage(parentElement, switchTab) {\n  (0,_tabManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(switchTab);\n\n  // contact content\n  const contactContainer = document.createElement('div');\n  contactContainer.textContent = 'contact info to be added here';\n\n  parentElement.appendChild(contactContainer);\n}\n\n\n//# sourceURL=webpack://odin-project-restaurant/./src/modules/contactPage.js?");

/***/ }),

/***/ "./src/modules/homePage.js":
/*!*********************************!*\
  !*** ./src/modules/homePage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createHomePage: () => (/* binding */ createHomePage)\n/* harmony export */ });\n/* harmony import */ var _tabManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabManager */ \"./src/modules/tabManager.js\");\n\n\nfunction createHomePage (switchTab) {\n    const content = document.querySelector('#content');\n\n    (0,_tabManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(switchTab);\n   \n    // create elements\n    const image = document.createElement('img');\n    image.src = '../src/img/leon-bublitz-fBeRt6DnhC8-unsplash.jpg';\n    image.alt = 'Ichiraku Ramen Bar';\n    content.appendChild(image);\n\n    const title = document.createElement('h1');\n    title.textContent = 'Ichiraku Ramen Bar';\n    content.appendChild(title);\n\n    const copy = document.createElement('p');\n    copy.textContent = 'Step into Ichiraku Ramen Bar, where Japanese tradition intertwines with modernity to craft an extraordinary ramen experience in the heart of London.';\n    content.appendChild(copy);\n}\n\n//# sourceURL=webpack://odin-project-restaurant/./src/modules/homePage.js?");

/***/ }),

/***/ "./src/modules/menuPage.js":
/*!*********************************!*\
  !*** ./src/modules/menuPage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMenuPage: () => (/* binding */ createMenuPage)\n/* harmony export */ });\n/* harmony import */ var _tabManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabManager */ \"./src/modules/tabManager.js\");\n\n\nfunction createMenuPage(parentElement, switchTab) {\n  (0,_tabManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(switchTab);\n\n  // menu content\n  const menuContainer = document.createElement('div');\n  menuContainer.textContent = 'Menu items to be added here';\n\n  parentElement.appendChild(menuContainer);\n}\n\n\n//# sourceURL=webpack://odin-project-restaurant/./src/modules/menuPage.js?");

/***/ }),

/***/ "./src/modules/tabManager.js":
/*!***********************************!*\
  !*** ./src/modules/tabManager.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createTabs(switchTab) {\n  const content = document.querySelector('#content');\n\n  function createIndividualTab(label, tabName) {\n    const tab = document.createElement('a');\n    tab.textContent = label;\n    tab.href = '#';\n    tab.addEventListener('click', () => switchTab(tabName));\n    return tab;\n  }\n\n  const homeTab = createIndividualTab('Home', 'home');\n  const menuTab = createIndividualTab('Menu', 'menu');\n  const contactTab = createIndividualTab('Contact', 'contact');\n\n  content.appendChild(homeTab);\n  content.appendChild(menuTab);\n  content.appendChild(contactTab);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTabs);\n\n\n//# sourceURL=webpack://odin-project-restaurant/./src/modules/tabManager.js?");

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
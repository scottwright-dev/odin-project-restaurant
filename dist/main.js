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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/*\n  Josh's Custom CSS Reset\n  https://www.joshwcomeau.com/css/custom-css-reset/\n*/\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nhtml, body {\n  height: 100%;\n}\n\nbody {\n  line-height: var(--line-height);\n  -webkit-font-smoothing: antialiased;\n}\n\nimg, picture, video, canvas, svg {\n  display: block;\n  max-width: 100%;\n}\n\ninput, button, textarea, select {\n  font: inherit;\n}\n\np, h1, h2, h3, h4, h5, h6 {\n  overflow-wrap: break-word;\n}\n\n#root {\n  isolation: isolate;\n}\n\n/* ROOT */\n\n:root {\n  --animation-fade-duration: 500ms;\n  --background-color: #061112;\n  --border: 3px solid var(--text-color);\n  --border-radius: 25px;\n  --font-family: 'Quicksand', sans-serif;\n  --font-size: 16px;\n  --font-size-range: 3rem, 16vw, 5rem;\n  --font-weight: 400;\n  --line-height: 1.5;\n  --text-color: #d2d7df;\n  --text-highlight: #eca858;\n}\n\n/* ELEMENT STYLES */\n\nbody {\n  background-color: var(--background-color);\n}\n\na, p, h1, h2, h3, li {\n  color: var(--text-color);\n  font-family: var(--font-family);\n  font-weight: var(--font-weight);\n}\n\nul {\n  list-style: none;\n}\n\n/* HOMEPAGE STYLES */\n\n.homepage-image {\n  animation: fadeIn ease-in var(--animation-fade-duration);\n  width: 60%;\n  max-width: 850px;\n  margin: 0 auto;\n  height: auto;\n  object-fit: cover;\n  position: relative;\n}\n\n.text-container {\n  animation: fadeInUp ease-in 700ms;\n  position: absolute;\n  top: 75%;\n  left: 50%;\n  transform: translate(-50%, -25%);\n}\n\n.homepage-title, .homepage-copy {\n  text-align: center;\n}\n\n.homepage-title {\n  font-size: 4rem;\n  font-weight: 500;\n  color: var(--text-highlight);\n}\n\n.homepage-copy {\n  font-size: 1.5rem;\n}\n\n/* TEXT ANIMATION */\n\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translate(-50%, 100%);\n  }\n  to {\n    opacity: 1;\n    transform: translate(-50%, -25%);\n  }\n}\n\n/* IMAGE ANIMATION */\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n/* NAV TABS STYLES */\n\n.nav-tabs-container {\n  /* animation: scrollIn ease-in 700ms; */\n  display: flex;\n  justify-content: center;\n}\n\n.nav-tabs {\n  color: var(--text-color);\n  padding: 0.5rem 1.5rem;\n  font-size: 2.5rem;\n  text-decoration: none;\n  transition: transform 0.2s ease; \n}\n\n.nav-tabs:hover {\n  font-weight: 400;\n  color: var(--text-highlight);\n}\n\n/* NAV TABS ANIMATION */\n\n@keyframes scrollIn {\n  from {\n    transform: translateY(-200%);\n  }\n  to {\n    transform: translateY(0);\n  }\n}\n\n/* CONTACT & MENU PAGE BG IMG */ \n\n.contact-container {\n  position: relative;\n}\n\n.contactpage-bg, .menupage-bg {\n  filter: blur(10px);\n  -webkit-filter: blur(10px);\n  width: 60%;\n  max-width: 850px;\n  margin: 0 auto;\n  height: auto;\n  object-fit: cover;\n}\n\n/* CONTACT PAGE STYLES */ \n\n.contact-container {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.map {\n  position: absolute;\n  top: 25%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border: var(--border);\n  border-radius: var(--border-radius);\n  animation: fadeInLeft 0.5s ease-in;\n  max-width: 450px;\n}\n\n/* MAP ANIMATION  */\n\n@keyframes fadeInLeft { \n    0% { \n        opacity: 0; \n        transform: translate(-100%, -50%); \n    } \n    100% { \n        opacity: 1; \n        transform: translate(-50%, -50%); \n    } \n}\n\n.contact-text-container {\n  text-align: center;\n  position: absolute;\n  top: 62%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  animation: fadeInLeft 0.5s ease-in;\n}\n\n.contact-text-container h2 {\n  color: var(--text-highlight);\n  font-weight: bold;\n}\n\n.contact-text-container a {\n  color: var(--text-highlight);\n  font-weight: bold;\n}\n\n.contact-text-container a:hover {\n  color: var(--text-color);\n}\n\n.contact-text-container, \n.opening-times-header, \n.bookings-header {\n  margin-top: 1rem;\n}\n\n/* MENU PAGE STYLES */\n\n.menupage-container h2 {\n  color: var(--text-highlight);\n  font-weight: bold;\n}\n\n.menu-text-container {\n  text-align: center;\n  position: absolute;\n  top: 60%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border: var(--border);\n  border-radius: var(--border-radius);\n  width: 35%;\n  background-color: rgba(57, 58, 59, 0.8);\n  animation: fadeInRight 0.5s ease-in;\n  padding: 1rem;\n}\n\n.menu-item-title {\n  display: inline;\n}\n\n.menu-item-price {\n  margin-left: 0.5rem;\n}\n\n\n.food-drink-header {\n  margin-bottom: 1rem;\n}\n\n.menu-item-title, .menu-item-price {\n  font-weight: bold;\n  text-align: left;\n}\n\n.menu-text-container p {\n  text-align: center;\n  margin-bottom: 30px;\n}\n\n/* MENU ANIMATION ANIMATION  */\n\n@keyframes fadeInRight { \n    0% { \n        opacity: 0; \n        transform: translate(100%, -50%); \n    } \n    100% { \n        opacity: 1; \n        transform: translate(-50%, -50%); \n    } \n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-project-restaurant/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-project-restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-project-restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-project-restaurant/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-project-restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-project-restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-project-restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-project-restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-project-restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-project-restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_homePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/homePage */ \"./src/modules/homePage.js\");\n/* harmony import */ var _modules_menuPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menuPage */ \"./src/modules/menuPage.js\");\n/* harmony import */ var _modules_contactPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/contactPage */ \"./src/modules/contactPage.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n// Tab switching\nfunction switchTab(tab) {\n  const contentDiv = document.querySelector('#content');\n  contentDiv.textContent = '';\n\n  switch (tab) {\n    case 'home':\n      (0,_modules_homePage__WEBPACK_IMPORTED_MODULE_0__.createHomePage)(switchTab);\n      break;\n    case 'menu':\n      (0,_modules_menuPage__WEBPACK_IMPORTED_MODULE_1__.createMenuPage)(contentDiv, switchTab);\n      break;\n    case 'contact':\n      (0,_modules_contactPage__WEBPACK_IMPORTED_MODULE_2__.createContactPage)(contentDiv, switchTab);\n      break;\n    default:\n  }\n}\n\n// Initial loading\nfunction initialLoad() {\n  const contentDiv = document.querySelector('#content');\n  (0,_modules_homePage__WEBPACK_IMPORTED_MODULE_0__.createHomePage)(contentDiv, switchTab);\n  switchTab('home'); // Display home page initially\n}\n\ninitialLoad();\n\n//# sourceURL=webpack://odin-project-restaurant/./src/index.js?");

/***/ }),

/***/ "./src/modules/contactPage.js":
/*!************************************!*\
  !*** ./src/modules/contactPage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createContactPage: () => (/* binding */ createContactPage)\n/* harmony export */ });\n/* harmony import */ var _tabManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabManager */ \"./src/modules/tabManager.js\");\n/* harmony import */ var _img_leon_bublitz_fBeRt6DnhC8_unsplash_faded_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/leon-bublitz-fBeRt6DnhC8-unsplash-faded.png */ \"./src/img/leon-bublitz-fBeRt6DnhC8-unsplash-faded.png\");\n/* harmony import */ var _img_ichiraku_map_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/ichiraku-map.png */ \"./src/img/ichiraku-map.png\");\n\n\n\n\nfunction createContactPage(parentElement, switchTab) {\n  (0,_tabManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(switchTab);\n\n  const contactContainer = document.createElement('div');\n  contactContainer.classList.add('contact-container');\n\n  const bgImage = document.createElement('img');\n  bgImage.src = _img_leon_bublitz_fBeRt6DnhC8_unsplash_faded_png__WEBPACK_IMPORTED_MODULE_1__;\n  bgImage.classList.add('contactpage-bg');\n  contactContainer.appendChild(bgImage);\n\n  const map = document.createElement('img');\n  map.src = _img_ichiraku_map_png__WEBPACK_IMPORTED_MODULE_2__;\n  map.alt = 'location map of restaurant: 45 Frith Street, London W1'\n  map.classList.add('map');\n  contactContainer.appendChild(map);\n\n  const textContainer = document.createElement('div');\n  textContainer.classList.add('contact-text-container');\n  contactContainer.appendChild(textContainer);\n\n  const addressHeader = document.createElement('h2');\n  addressHeader.textContent = 'Address';\n  textContainer.appendChild(addressHeader);\n\n  const address = document.createElement('p');\n  address.textContent = '45 Frith Street, London W1D 4SG';\n  textContainer.appendChild(address);\n\n  const openingTimes = document.createElement('h2');\n  openingTimes.textContent = 'Opening Times';\n  openingTimes.classList.add('opening-times-header');\n  textContainer.appendChild(openingTimes);\n\n  const openingTimesList = document.createElement('ul');\n\n  const listItem1 = document.createElement('li');\n  listItem1.textContent = 'Mon - Thur 12:00 - 22:30';\n  openingTimesList.appendChild(listItem1);\n\n  const listItem2 = document.createElement('li');\n  listItem2.textContent = 'Fri + Sat 12:00 - 00:00';\n  openingTimesList.appendChild(listItem2);\n\n  const listItem3 = document.createElement('li');\n  listItem3.textContent = 'Sun - Closed';\n  openingTimesList.appendChild(listItem3);\n\n  textContainer.appendChild(openingTimesList);\n\n  const bookingsHeader = document.createElement('h2');\n  bookingsHeader.textContent = 'Bookings';\n  bookingsHeader.classList.add('bookings-header');\n  textContainer.appendChild(bookingsHeader);\n\n  const bookingsInfo = document.createElement('p');\n  bookingsInfo.textContent = 'For bookings please email us at:';\n  textContainer.appendChild(bookingsInfo);\n\n  const email = document.createElement('a');\n  email.href = 'mailto:hello@ichiraku.co.uk';\n  email.textContent = 'hello@ichiraku.co.uk';\n  textContainer.appendChild(email);\n\n  const callInfo = document.createElement('p');\n  callInfo.textContent = 'or call:';\n  textContainer.appendChild(callInfo);\n\n  const phoneNumber = document.createElement('a');\n  phoneNumber.href = 'tel:+442030195082';\n  phoneNumber.textContent = '020 3019 5082';\n  textContainer.appendChild(phoneNumber);\n\n  contactContainer.appendChild(textContainer);\n  parentElement.appendChild(contactContainer);\n}\n\n\n//# sourceURL=webpack://odin-project-restaurant/./src/modules/contactPage.js?");

/***/ }),

/***/ "./src/modules/homePage.js":
/*!*********************************!*\
  !*** ./src/modules/homePage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createHomePage: () => (/* binding */ createHomePage)\n/* harmony export */ });\n/* harmony import */ var _tabManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabManager */ \"./src/modules/tabManager.js\");\n/* harmony import */ var _img_leon_bublitz_fBeRt6DnhC8_unsplash_faded_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/leon-bublitz-fBeRt6DnhC8-unsplash-faded.png */ \"./src/img/leon-bublitz-fBeRt6DnhC8-unsplash-faded.png\");\n\n\n\nfunction createHomePage (switchTab) {\n    const content = document.querySelector('#content');\n\n    (0,_tabManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(switchTab);\n   \n    // create elements\n    const image = document.createElement('img');\n    image.src = _img_leon_bublitz_fBeRt6DnhC8_unsplash_faded_png__WEBPACK_IMPORTED_MODULE_1__;\n    image.alt = 'Ichiraku Ramen Bar';\n    image.classList.add('homepage-image');\n    content.appendChild(image);\n\n    const textContainer = document.createElement('div');\n    textContainer.classList.add('text-container');\n    content.appendChild(textContainer);\n\n    const title = document.createElement('h1');\n    title.textContent = 'Ichiraku Ramen Bar';\n    title.classList.add('homepage-title');\n    textContainer.appendChild(title);\n\n    const copyLine1 = document.createElement('p');\n    copyLine1.textContent = 'Japanese tradition intertwined with modernity.';\n    copyLine1.classList.add('homepage-copy');\n    textContainer.appendChild(copyLine1);\n\n    const copyLine2 = document.createElement('p');\n    copyLine2.textContent = 'Crafting an extraordinary ramen experience in the heart of London.';\n    copyLine2.classList.add('homepage-copy');\n    textContainer.appendChild(copyLine2);\n}\n\n//# sourceURL=webpack://odin-project-restaurant/./src/modules/homePage.js?");

/***/ }),

/***/ "./src/modules/menuPage.js":
/*!*********************************!*\
  !*** ./src/modules/menuPage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMenuPage: () => (/* binding */ createMenuPage)\n/* harmony export */ });\n/* harmony import */ var _tabManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabManager */ \"./src/modules/tabManager.js\");\n/* harmony import */ var _img_leon_bublitz_fBeRt6DnhC8_unsplash_faded_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/leon-bublitz-fBeRt6DnhC8-unsplash-faded.png */ \"./src/img/leon-bublitz-fBeRt6DnhC8-unsplash-faded.png\");\n\n\n\nfunction createMenuPage(parentElement, switchTab) {\n  (0,_tabManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(switchTab);\n\n  const menuContainer = document.createElement('div');\n  menuContainer.classList.add('menupage-container');\n  parentElement.appendChild(menuContainer);\n\n  const bgImage = document.createElement('img');\n  bgImage.src = _img_leon_bublitz_fBeRt6DnhC8_unsplash_faded_png__WEBPACK_IMPORTED_MODULE_1__;\n  bgImage.classList.add('menupage-bg');\n  menuContainer.appendChild(bgImage);\n\n  const textContainer = document.createElement('div');\n  textContainer.classList.add('menu-text-container');\n  menuContainer.appendChild(textContainer);\n\n  const ramenHeader = document.createElement('h2');\n  ramenHeader.textContent = 'Ramen';\n  ramenHeader.classList.add('food-drink-header');\n  textContainer.appendChild(ramenHeader);\n\n  const menuList = document.createElement('ul');\n  menuList.classList.add('menu-list');\n  textContainer.appendChild(menuList);\n\n  const createMenuItem = (title, description, price) => {\n    const listItem = document.createElement('li');\n\n    const itemTitlePriceContainer = document.createElement('div');\n    itemTitlePriceContainer.classList.add('menu-item-title-price');\n    listItem.appendChild(itemTitlePriceContainer);\n\n    const itemTitle = document.createElement('h3');\n    itemTitle.textContent = title;\n    itemTitle.classList.add('menu-item-title');\n    itemTitlePriceContainer.appendChild(itemTitle);\n\n    const itemPrice = document.createElement('span');\n    itemPrice.textContent = price;\n    itemPrice.classList.add('menu-item-price');\n    itemTitlePriceContainer.appendChild(itemPrice);\n\n    const itemDescription = document.createElement('p');\n    itemDescription.textContent = description;\n    itemDescription.classList.add('menu-item-description');\n    listItem.appendChild(itemDescription);\n\n    return listItem;\n  };\n\n  const tonkotsuItem = createMenuItem('Tonkotsu', '18 hour pork bone broth, chashu pork belly, wood ear mushroom, spring onion, tamago egg, black garlic oil.', '£14');\n  menuList.appendChild(tonkotsuItem);\n\n  const tantanmenItem = createMenuItem('Tantanmen', 'Chicken mince & pulled chicken, sesame, chilli bits, bok choy, beansprouts, tamago egg.', '£13');\n  menuList.appendChild(tantanmenItem);\n\n  const spicyMisoItem = createMenuItem('Spicy Miso', 'Miso base, sliced beef, bamboo shoots, bean sprouts, spring onion, tamago egg.', '£14');\n  menuList.appendChild(spicyMisoItem);\n\n  const veganItem = createMenuItem('Vegan', 'Shiitake mushroom and porcini-soya milk broth, asparagus, spring onion, wood ear mushroom, Shirataki noodles.', '£13');\n  menuList.appendChild(veganItem);\n\n  const drinksHeader = document.createElement('h2');\n  drinksHeader.textContent = 'Drinks';\n  drinksHeader.classList.add('food-drink-header');\n  textContainer.appendChild(drinksHeader);\n\n  const drinksList = document.createElement('ul');\n  drinksList.classList.add('menu-list');\n  textContainer.appendChild(drinksList);\n\n  const beersItem = createMenuItem('Beers', 'Kirin, Asahi, Sapporo', '£6');\n  drinksList.appendChild(beersItem);\n\n  const yuzuPunchItem = createMenuItem('Yuzu Punch', 'Yuzu, Hendricks Gin, Bitters, Soda', '£7');\n  drinksList.appendChild(yuzuPunchItem);\n\n  const mineralWaterItem = createMenuItem('Mineral Water', 'Still, sparkling', '£3');\n  drinksList.appendChild(mineralWaterItem);\n\n  const teaItem = createMenuItem('Teas', 'Green Tea, Jasmine Tea', '£2');\n  drinksList.appendChild(teaItem);\n}\n\n\n//# sourceURL=webpack://odin-project-restaurant/./src/modules/menuPage.js?");

/***/ }),

/***/ "./src/modules/tabManager.js":
/*!***********************************!*\
  !*** ./src/modules/tabManager.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createTabs(switchTab) {\n  const content = document.querySelector('#content');\n\n  function createIndividualTab(label, tabName) {\n    const tab = document.createElement('a');\n    tab.textContent = label;\n    tab.href = '#';\n    tab.addEventListener('click', () => switchTab(tabName));\n    return tab;\n  }\n\n  const tabContainer = document.createElement('div');\n  tabContainer.classList.add('nav-tabs-container');\n\n  const homeTab = createIndividualTab('Home', 'home');\n  homeTab.classList.add('nav-tabs');\n  tabContainer.appendChild(homeTab);\n\n  const menuTab = createIndividualTab('Menu', 'menu');\n  menuTab.classList.add('nav-tabs');\n  tabContainer.appendChild(menuTab);\n\n  const contactTab = createIndividualTab('Contact', 'contact');\n  contactTab.classList.add('nav-tabs');\n  tabContainer.appendChild(contactTab);\n\n  content.appendChild(tabContainer);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTabs);\n\n\n//# sourceURL=webpack://odin-project-restaurant/./src/modules/tabManager.js?");

/***/ }),

/***/ "./src/img/ichiraku-map.png":
/*!**********************************!*\
  !*** ./src/img/ichiraku-map.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d5af26a62f005e39ac3d.png\";\n\n//# sourceURL=webpack://odin-project-restaurant/./src/img/ichiraku-map.png?");

/***/ }),

/***/ "./src/img/leon-bublitz-fBeRt6DnhC8-unsplash-faded.png":
/*!*************************************************************!*\
  !*** ./src/img/leon-bublitz-fBeRt6DnhC8-unsplash-faded.png ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"82cba9ba064c583e20ce.png\";\n\n//# sourceURL=webpack://odin-project-restaurant/./src/img/leon-bublitz-fBeRt6DnhC8-unsplash-faded.png?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
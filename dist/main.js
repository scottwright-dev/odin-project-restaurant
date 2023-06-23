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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createContactPage: () => (/* binding */ createContactPage)\n/* harmony export */ });\n/* harmony import */ var _tabManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabManager */ \"./src/modules/tabManager.js\");\n\n\nfunction createContactPage(parentElement, switchTab) {\n  (0,_tabManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(switchTab);\n\n  const contactContainer = document.createElement('div');\n  contactContainer.classList.add('contact-container');\n\n  const bgImage = document.createElement('img');\n  bgImage.src = '../src/img/leon-bublitz-fBeRt6DnhC8-unsplash-faded.png';\n  bgImage.classList.add('contactpage-bg');\n  contactContainer.appendChild(bgImage);\n\n  const map = document.createElement('img');\n  map.src = '../src/img/ichiraku-map.png';\n  map.alt = 'location map of restaurant: 45 Frith Street, London W1'\n  map.classList.add('map');\n  contactContainer.appendChild(map);\n\n  const textContainer = document.createElement('div');\n  textContainer.classList.add('contact-text-container');\n  contactContainer.appendChild(textContainer);\n\n  const addressHeader = document.createElement('h2');\n  addressHeader.textContent = 'Address';\n  textContainer.appendChild(addressHeader);\n\n  const address = document.createElement('p');\n  address.textContent = '45 Frith Street, London W1D 4SG';\n  textContainer.appendChild(address);\n\n  const openingTimes = document.createElement('h2');\n  openingTimes.textContent = 'Opening Times';\n  openingTimes.classList.add('opening-times-header');\n  textContainer.appendChild(openingTimes);\n\n  const openingTimesList = document.createElement('ul');\n\n  const listItem1 = document.createElement('li');\n  listItem1.textContent = 'Mon - Thur 12:00 - 22:30';\n  openingTimesList.appendChild(listItem1);\n\n  const listItem2 = document.createElement('li');\n  listItem2.textContent = 'Fri + Sat 12:00 - 00:00';\n  openingTimesList.appendChild(listItem2);\n\n  const listItem3 = document.createElement('li');\n  listItem3.textContent = 'Sun - Closed';\n  openingTimesList.appendChild(listItem3);\n\n  textContainer.appendChild(openingTimesList);\n\n  const bookingsHeader = document.createElement('h2');\n  bookingsHeader.textContent = 'Bookings';\n  bookingsHeader.classList.add('bookings-header');\n  textContainer.appendChild(bookingsHeader);\n\n  const bookingsInfo = document.createElement('p');\n  bookingsInfo.textContent = 'For bookings please email us at:';\n  textContainer.appendChild(bookingsInfo);\n\n  const email = document.createElement('a');\n  email.href = 'mailto:hello@ichiraku.co.uk';\n  email.textContent = 'hello@ichiraku.co.uk';\n  textContainer.appendChild(email);\n\n  const callInfo = document.createElement('p');\n  callInfo.textContent = 'or call:';\n  textContainer.appendChild(callInfo);\n\n  const phoneNumber = document.createElement('a');\n  phoneNumber.href = 'tel:+442030195082';\n  phoneNumber.textContent = '020 3019 5082';\n  textContainer.appendChild(phoneNumber);\n\n  contactContainer.appendChild(textContainer);\n  parentElement.appendChild(contactContainer);\n}\n\n\n//# sourceURL=webpack://odin-project-restaurant/./src/modules/contactPage.js?");

/***/ }),

/***/ "./src/modules/homePage.js":
/*!*********************************!*\
  !*** ./src/modules/homePage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createHomePage: () => (/* binding */ createHomePage)\n/* harmony export */ });\n/* harmony import */ var _tabManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabManager */ \"./src/modules/tabManager.js\");\n\n\nfunction createHomePage (switchTab) {\n    const content = document.querySelector('#content');\n\n    (0,_tabManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(switchTab);\n   \n    // create elements\n    const image = document.createElement('img');\n    image.src = '../src/img/leon-bublitz-fBeRt6DnhC8-unsplash-faded.png';\n    image.alt = 'Ichiraku Ramen Bar';\n    image.classList.add('homepage-image');\n    content.appendChild(image);\n\n    const textContainer = document.createElement('div');\n    textContainer.classList.add('text-container');\n    content.appendChild(textContainer);\n\n    const title = document.createElement('h1');\n    title.textContent = 'Ichiraku Ramen Bar';\n    title.classList.add('homepage-title');\n    textContainer.appendChild(title);\n\n    const copyLine1 = document.createElement('p');\n    copyLine1.textContent = 'Japanese tradition intertwined with modernity.';\n    copyLine1.classList.add('homepage-copy');\n    textContainer.appendChild(copyLine1);\n\n    const copyLine2 = document.createElement('p');\n    copyLine2.textContent = 'Crafting an extraordinary ramen experience in the heart of London.';\n    copyLine2.classList.add('homepage-copy');\n    textContainer.appendChild(copyLine2);\n}\n\n//# sourceURL=webpack://odin-project-restaurant/./src/modules/homePage.js?");

/***/ }),

/***/ "./src/modules/menuPage.js":
/*!*********************************!*\
  !*** ./src/modules/menuPage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMenuPage: () => (/* binding */ createMenuPage)\n/* harmony export */ });\n/* harmony import */ var _tabManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabManager */ \"./src/modules/tabManager.js\");\n\n\nfunction createMenuPage(parentElement, switchTab) {\n  (0,_tabManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(switchTab);\n\n  const menuContainer = document.createElement('div');\n  menuContainer.classList.add('menupage-container');\n  parentElement.appendChild(menuContainer);\n\n  const bgImage = document.createElement('img');\n  bgImage.src = '../src/img/leon-bublitz-fBeRt6DnhC8-unsplash-faded.png';\n  bgImage.classList.add('menupage-bg');\n  menuContainer.appendChild(bgImage);\n\n  const textContainer = document.createElement('div');\n  textContainer.classList.add('menu-text-container');\n  menuContainer.appendChild(textContainer);\n\n  const ramenHeader = document.createElement('h2');\n  ramenHeader.textContent = 'Ramen';\n  ramenHeader.classList.add('food-drink-header');\n  textContainer.appendChild(ramenHeader);\n\n  const menuList = document.createElement('ul');\n  menuList.classList.add('menu-list');\n  textContainer.appendChild(menuList);\n\n  const createMenuItem = (title, description, price) => {\n    const listItem = document.createElement('li');\n\n    const itemTitlePriceContainer = document.createElement('div');\n    itemTitlePriceContainer.classList.add('menu-item-title-price');\n    listItem.appendChild(itemTitlePriceContainer);\n\n    const itemTitle = document.createElement('h3');\n    itemTitle.textContent = title;\n    itemTitle.classList.add('menu-item-title');\n    itemTitlePriceContainer.appendChild(itemTitle);\n\n    const itemPrice = document.createElement('span');\n    itemPrice.textContent = price;\n    itemPrice.classList.add('menu-item-price');\n    itemTitlePriceContainer.appendChild(itemPrice);\n\n    const itemDescription = document.createElement('p');\n    itemDescription.textContent = description;\n    itemDescription.classList.add('menu-item-description');\n    listItem.appendChild(itemDescription);\n\n    return listItem;\n  };\n\n  const tonkotsuItem = createMenuItem('Tonkotsu', '18 hour pork bone broth, chashu pork belly, wood ear mushroom, spring onion, tamago egg, black garlic oil.', '£14');\n  menuList.appendChild(tonkotsuItem);\n\n  const tantanmenItem = createMenuItem('Tantanmen', 'Chicken mince & pulled chicken, sesame, chilli bits, bok choy, beansprouts, tamago egg.', '£13');\n  menuList.appendChild(tantanmenItem);\n\n  const spicyMisoItem = createMenuItem('Spicy Miso', 'Miso base, sliced beef, bamboo shoots, bean sprouts, spring onion, tamago egg.', '£14');\n  menuList.appendChild(spicyMisoItem);\n\n  const veganItem = createMenuItem('Vegan', 'Shiitake mushroom and porcini-soya milk broth, asparagus, spring onion, wood ear mushroom, Shirataki noodles.', '£13');\n  menuList.appendChild(veganItem);\n\n  const drinksHeader = document.createElement('h2');\n  drinksHeader.textContent = 'Drinks';\n  drinksHeader.classList.add('food-drink-header');\n  textContainer.appendChild(drinksHeader);\n\n  const drinksList = document.createElement('ul');\n  drinksList.classList.add('menu-list');\n  textContainer.appendChild(drinksList);\n\n  const beersItem = createMenuItem('Beers', 'Kirin, Asahi, Sapporo', '£6');\n  drinksList.appendChild(beersItem);\n\n  const yuzuPunchItem = createMenuItem('Yuzu Punch', 'Yuzu, Hendricks Gin, Bitters, Soda', '£7');\n  drinksList.appendChild(yuzuPunchItem);\n\n  const mineralWaterItem = createMenuItem('Mineral Water', 'Still, sparkling', '£3');\n  drinksList.appendChild(mineralWaterItem);\n\n  const teaItem = createMenuItem('Teas', 'Green Tea, Jasmine Tea', '£2');\n  drinksList.appendChild(teaItem);\n}\n\n\n//# sourceURL=webpack://odin-project-restaurant/./src/modules/menuPage.js?");

/***/ }),

/***/ "./src/modules/tabManager.js":
/*!***********************************!*\
  !*** ./src/modules/tabManager.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createTabs(switchTab) {\n  const content = document.querySelector('#content');\n\n  function createIndividualTab(label, tabName) {\n    const tab = document.createElement('a');\n    tab.textContent = label;\n    tab.href = '#';\n    tab.addEventListener('click', () => switchTab(tabName));\n    return tab;\n  }\n\n  const tabContainer = document.createElement('div');\n  tabContainer.classList.add('nav-tabs-container');\n\n  const homeTab = createIndividualTab('Home', 'home');\n  homeTab.classList.add('nav-tabs');\n  tabContainer.appendChild(homeTab);\n\n  const menuTab = createIndividualTab('Menu', 'menu');\n  menuTab.classList.add('nav-tabs');\n  tabContainer.appendChild(menuTab);\n\n  const contactTab = createIndividualTab('Contact', 'contact');\n  contactTab.classList.add('nav-tabs');\n  tabContainer.appendChild(contactTab);\n\n  content.appendChild(tabContainer);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTabs);\n\n\n//# sourceURL=webpack://odin-project-restaurant/./src/modules/tabManager.js?");

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
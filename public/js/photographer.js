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

/***/ "./src/class/Media.js":
/*!****************************!*\
  !*** ./src/class/Media.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Media{\r\n    constructor(data){\r\n        this.id = data.id;\r\n        this.photographerId = data.photographerId;\r\n        this.title = data.title;\r\n        this.image = data.image;\r\n        this.likes = data.likes;\r\n        this.date = data.date;\r\n        this.price = data.price;\r\n    }\r\n\r\n    get id(){\r\n        return this.id;\r\n    }\r\n    get photographerId(){\r\n        return this.photographerId;\r\n    }\r\n    get title(){\r\n        return this.title;\r\n    }\r\n    get image(){\r\n        return this.image;\r\n    }\r\n    get likes(){\r\n        return this.likes;\r\n    }\r\n    get date(){\r\n        return this.date;\r\n    }\r\n    get price(){\r\n        return this.price;\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Media);\n\n//# sourceURL=webpack://openclassrooms-p6/./src/class/Media.js?");

/***/ }),

/***/ "./src/class/Photographer.js":
/*!***********************************!*\
  !*** ./src/class/Photographer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Photographer{\r\n    constructor(data){\r\n        this.name = data.name;\r\n        this.id = data.id;\r\n        this.city = data.city;\r\n        this.country = data.country;\r\n        this.tagline = data.tagline;\r\n        this.price = data.price;\r\n        this.portrait = data.portrait;\r\n    }\r\n\r\n    getName(){\r\n        return this.name;\r\n    }\r\n    getId(){\r\n        return this.id;\r\n    }\r\n    getCity(){\r\n        return this.city;\r\n    }\r\n    getCountry(){\r\n        return this.country;\r\n    }\r\n    getTagline(){\r\n        return this.tagline;\r\n    }\r\n    getPrice(){\r\n        return this.price;\r\n    }\r\n    getPortrait(){\r\n        return `/public/assets/photographers/${this.portrait}`;\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Photographer);\n\n//# sourceURL=webpack://openclassrooms-p6/./src/class/Photographer.js?");

/***/ }),

/***/ "./src/factories/mediaFactory.js":
/*!***************************************!*\
  !*** ./src/factories/mediaFactory.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _class_Media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../class/Media */ \"./src/class/Media.js\");\n\r\n\r\nfunction mediaFactory(data){\r\n    const media = new _class_Media__WEBPACK_IMPORTED_MODULE_0__[\"default\"](data);\r\n    const photographBody = document.querySelector('.photograph-body');\r\n\r\n    function medias(){\r\n        const media_article =`\r\n        <div class=\"media_article\">\r\n            <a class=\"media_link\">\r\n                <div class=\"media_mmh\">\r\n                    \r\n                </div>\r\n                <div>\r\n                    <p class=\"media_name\">\r\n                    \r\n                    </p>\r\n                    <p class=\"media_likes\">\r\n                    \r\n                    <span class=\"media_icon\">\r\n                    \r\n                    </span>\r\n                    </p>\r\n                </div>\r\n            </a>\r\n        </div>\r\n    `;\r\n    }\r\n\r\n    return {medias};\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mediaFactory);\r\n\r\n/* class MediaFactory {\r\n    constructor(data, type) {\r\n        if (type === 'image') {\r\n            return new Picture(data);\r\n        } else if (type === 'video') {\r\n            return new Video(data);\r\n        } else {\r\n            throw 'Format non reconnu';\r\n        }\r\n    }\r\n} */\n\n//# sourceURL=webpack://openclassrooms-p6/./src/factories/mediaFactory.js?");

/***/ }),

/***/ "./src/factories/photographerFactory.js":
/*!**********************************************!*\
  !*** ./src/factories/photographerFactory.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _class_Photographer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../class/Photographer */ \"./src/class/Photographer.js\");\n/* harmony import */ var _class_Media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../class/Media */ \"./src/class/Media.js\");\n\r\n\r\n\r\nfunction photographerFactory(data) {\r\n    /* console.log(data); */\r\n    /* const { name, city, country, tagline, price, portrait } = data; */\r\n    const photographer = new _class_Photographer__WEBPACK_IMPORTED_MODULE_0__[\"default\"](data);\r\n\r\n    /* const picture = `assets/photographers/${portrait}`; */\r\n\r\n    function getUserCardDOM() {\r\n        /* const article = document.createElement( 'article' );\r\n        const link = document.createElement('a');\r\n        link.setAttribute('href','/public/index.html?id='+photographer.getId());\r\n        link.classList.add('link');\r\n        const img = document.createElement( 'img' );\r\n        img.setAttribute(\"src\", photographer.getPortrait());\r\n        img.setAttribute('alt', photographer.getName());\r\n        const name = document.createElement( 'h2' );\r\n        name.classList.add('name');\r\n        name.textContent = photographer.getName();\r\n        const location = document.createElement('p');\r\n        location.classList.add('city');\r\n        location.textContent = photographer.getCity()+ \", \"+ photographer.getCountry();\r\n        const tagline = document.createElement('p');\r\n        tagline.classList.add('tagline');\r\n        tagline.textContent = photographer.getTagline();\r\n        const price = document.createElement('p');\r\n        price.classList.add('price');\r\n        price.textContent = photographer.getPrice()+ '€/Jour';\r\n  \r\n        link.appendChild(img);\r\n        link.appendChild(name);\r\n        article.appendChild(link);\r\n        article.appendChild(location);\r\n        article.appendChild(tagline);\r\n        article.appendChild(price); */\r\n        /* return (article); */\r\n\r\n        /* let section = document.querySelector('.photographer_section');\r\n        section.insertAdjacentHTML('afterbegin',\r\n        '<article></article>')\r\n        .insertAdjacentHTML('afterbegin','<a href=\"/public/index.html?='+photographer.getId()+'\"></a>')\r\n        .insertAdjacentHTML('afterbegin','<img src=\"'+photographer.getPortrait()+'alt=\"'+photographer.getName()+'\"></img>')\r\n        .insertAdjacentHTML('afterend','<h2 class=\"name\">'+photographer.getName()+'</h2>')\r\n        .insertAdjacentHTML('afterend','<p class=\"location\">'+photographer.getCity()+', '+photographer.getCountry()+'</p>')\r\n        .insertAdjacentHTML('afterend','<p class=\"tagline\">'+photographer.getTagline()+'</p>')\r\n        .insertAdjacentHTML('afterend','<p class=\"price\">'+photographer.getPrice()+' €/Jour'+'</p>');\r\n        */\r\n\r\n        /* let section = document.querySelector('.photographer_section');\r\n        let article = '<article></article>';\r\n        let link = '<a href=\"/public/index.html?='+photographer.getId()+'\"></a>';\r\n        let img = '<img src=\"'+photographer.getPortrait()+'alt=\"'+photographer.getName()+'\"></img>';\r\n        let name = '<h2 class=\"name\">'+photographer.getName()+'</h2>';\r\n        let location = '<p class=\"location\">'+photographer.getCity()+', '+photographer.getCountry()+'</p>';\r\n        let tagline = '<p class=\"tagline\">'+photographer.getTagline()+'</p>';\r\n        let price = '<p class=\"price\">'+photographer.getPrice()+' €/Jour'+'</p>';\r\n\r\n        section.insertAdjacentHTML('afterbegin', article);\r\n        article.insertAdjacentHTML('afterbegin', link);\r\n        link.insertAdjacentHTML('afterbegin', img);\r\n        img.insertAdjacentHTML('afterend', name);\r\n        name.insertAdjacentHTML('afterend', location);\r\n        location.insertAdjacentHTML('afterend', tagline);\r\n        tagline.insertAdjacentHTML('afterend', price); */\r\n        \r\n        /* const gilles = \"je m'appelle Gilles\";\r\n\r\n        const message = ()=>{\r\n            alert ('Salut tout le monde');\r\n        }\r\n\r\n        const message2 = (params)=>{\r\n            return `j'aime le ${params}`;\r\n        }\r\n */\r\n        {/* <p onclick=${message()}</p>> */}\r\n        /* const test = `\r\n            <div>\r\n                <p>\r\n                \r\n                    J'aime le React\r\n                    ${gilles} \r\n                    ${message2(`php`)} , \r\n                    ${message2(`vueJS`)}\r\n                </p>\r\n            </div>\r\n        `;\r\n        const tag = document.getElementById('main');\r\n        tag.insertAdjacentHTML('afterbegin',test); */\r\n\r\n        const photographer_article =\r\n        `\r\n            <article>\r\n                <a href=\"/public/photographer.html?id=${photographer.getId()}\">\r\n                    <img src=\"${photographer.getPortrait()}\" alt=\"${photographer.getName()}\">\r\n                    <h2 class=\"name\">\r\n                        ${photographer.getName()}\r\n                    </h2>\r\n                    <p class=\"location\">\r\n                        ${photographer.getCity()} , ${photographer.getCountry()}\r\n                    </p>\r\n                    <p class=\"tagline\">\r\n                        ${photographer.getTagline()}\r\n                    </p>\r\n                    <p class=\"price\">\r\n                        ${photographer.getPrice()}€/Jour\r\n                    </p>\r\n                </a>\r\n            </article>\r\n        `;\r\n\r\n        const section = document.querySelector('.photographer_section');\r\n        section.insertAdjacentHTML('afterbegin', photographer_article);\r\n\r\n        /* return (section); */\r\n    }\r\n\r\n    function user(){\r\n\r\n        const photographer_header = `\r\n            <div class=\"photographer_header\">\r\n                <div>\r\n                    <h1>\r\n                        ${photographer.getName()}\r\n                    </h1>\r\n                    <p>\r\n                        ${photographer.getCity()}, ${photographer.getCountry()}\r\n                    </p>\r\n                    <p>\r\n                        ${photographer.getTagline()}\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        `;\r\n\r\n        const photographer_avatar = `\r\n            <div>\r\n                <img src=${photographer.getPortrait()} alt=${photographer.getName()} class=\"photographerPortrait\" >\r\n            </div>\r\n        `;\r\n\r\n        const photographHeader = document.querySelector('.photograph-header');\r\n        photographHeader.insertAdjacentHTML('afterbegin', photographer_header);\r\n        photographHeader.insertAdjacentHTML('beforeend', photographer_avatar);\r\n    }\r\n\r\n    /* return { name, city, country, picture, getUserCardDOM } */\r\n    return {getUserCardDOM,user};\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (photographerFactory);\n\n//# sourceURL=webpack://openclassrooms-p6/./src/factories/photographerFactory.js?");

/***/ }),

/***/ "./src/pages/photographer.js":
/*!***********************************!*\
  !*** ./src/pages/photographer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _factories_photographerFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factories/photographerFactory */ \"./src/factories/photographerFactory.js\");\n/* harmony import */ var _factories_mediaFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../factories/mediaFactory */ \"./src/factories/mediaFactory.js\");\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/api */ \"./src/utils/api.js\");\n\r\n\r\n\r\n\r\n\r\nasync function displayDataPhotographer(photographer) {\r\n    const photographersSection = document.querySelector('.photograph-header');\r\n    const photographerModel = (0,_factories_photographerFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(photographer);\r\n    photographerModel.user();\r\n};\r\n\r\nasync function displayDataMedias(medias){\r\n    const mediasSection = document.querySelector('.photograph-body');\r\n    const mediaModel = (0,_factories_mediaFactory__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(medias);\r\n    mediaModel.medias();\r\n    /* console.log(medias); */\r\n    /* medias.forEach((media)=>{\r\n\r\n        const mediasSection = document.querySelector('.photograph-body');\r\n        const Params = (new URL(document.location).searchParams);\r\n        const Id = Number(Params.get('id'));\r\n\r\n        if(media.photographerId === Id){\r\n            console.log(media);\r\n            const photographerModel = mediasFactory(media);\r\n            const userCardDOM = photographerModel.medias();\r\n        }\r\n\r\n    }); */\r\n\r\n};\r\n\r\n/* function test(){\r\n    const abc = {\r\n        title : \"gilles\",\r\n        text : \"test\"\r\n    };\r\n    console.log(abc);\r\n    const {title,text,bug} = abc;\r\n    console.log(title,text,bug);\r\n} */\r\n\r\n\r\nasync function init() {\r\n    // Récupère les datas des photographes\r\n    /* const { photographers } = await api.getPhotographers(); */\r\n    const  photographer  = await _utils_api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getPhotographer();\r\n    const medias = await _utils_api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getMedias();\r\n    /* console.log(medias); */\r\n    console.log(photographer);\r\n    displayDataPhotographer(photographer);\r\n    displayDataMedias(medias);\r\n};\r\n\r\ninit();\n\n//# sourceURL=webpack://openclassrooms-p6/./src/pages/photographer.js?");

/***/ }),

/***/ "./src/utils/api.js":
/*!**************************!*\
  !*** ./src/utils/api.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nasync function getPhotographers() {\r\n    // Penser à remplacer par les données récupérées dans le json\r\n    const response = await fetch(\"/public/data/photographers.json\", {method:\"GET\"});\r\n    const photographers = await response.json();\r\n    // et bien retourner le tableau photographers seulement une fois\r\n    console.log(photographers);\r\n    return photographers;\r\n}\r\n\r\nfunction getId(){\r\n  const Params = new URL(document.location).searchParams;\r\n  const Id = Number(Params.get('id'));\r\n  return Id;\r\n}\r\n\r\nasync function getPhotographer(){\r\n  const response = await fetch(\"/public/data/photographers.json\",{method:\"GET\"});\r\n  const data = await response.json();\r\n  const photographers = data.photographers;\r\n  const Id = getId();\r\n  /* const photographersSection = document.querySelector('.photographer-header'); */\r\n  let match = {};\r\n  console.log(photographers);\r\n  photographers.forEach((photographer) => {\r\n    if(photographer.id === Id){\r\n      /* const photographerModel = photographerFactory(photographer);\r\n      const userCardDOM = photographerModel.user(); */\r\n      match = photographer;\r\n    }\r\n  });\r\n\r\n  return match;\r\n\r\n  /* Object.keys(photographers).forEach((photographer)=>{\r\n    if(photographer.id === Id){\r\n      const photographerModel = photographerFactory(photographer);\r\n      const userCardDOM = photographerModel.user();\r\n      photographersSection.append(userCardDOM);  \r\n      console.log(photographer) ;\r\n    }\r\n  }); */\r\n  \r\n  /* return photographers; */\r\n\r\n}\r\n\r\n/* if (Object.keys(players).length > 0) {\r\n  for (const key in players) {\r\n    html += '<div>' + players[key].status + '</div>';\r\n  }\r\n} */\r\n\r\nasync function getMedias(){\r\n  const response = await fetch(\"/public/data/photographers.json\",{method:\"GET\"});\r\n  const data = await response.json();\r\n  const Id = getId();\r\n  let medias = data.media;\r\n  console.log(medias);\r\n  let match = {};\r\n  medias.forEach((media)=>{\r\n    if(medias.photographerId === Id){\r\n      match = media;\r\n    }\r\n  });\r\n\r\n  return match;\r\n}\r\n\r\nconst api = {\r\n  getPhotographers,\r\n  getPhotographer,\r\n  getMedias,\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);\n\n//# sourceURL=webpack://openclassrooms-p6/./src/utils/api.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/photographer.js");
/******/ 	
/******/ })()
;
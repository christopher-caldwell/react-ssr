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

/***/ "./lambdas/server/index.tsx":
/*!**********************************!*\
  !*** ./lambdas/server/index.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.handler = void 0;\nconst jsx_runtime_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'react/jsx-runtime'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nconst server_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'react-dom/server'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));\nconst App_1 = __importDefault(__webpack_require__(/*! ./ui/src/App */ \"./lambdas/server/ui/src/App.tsx\"));\nconst indexFile = `\n<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n    <meta name=\"theme-color\" content=\"#000000\" />\n    <meta\n      name=\"description\"\n      content=\"Web site created using create-react-app\"\n    />\n    <title>React App</title>\n  </head>\n  <body>\n    <noscript>You need to enable JavaScript to run this app.</noscript>\n    <div id=\"root\"></div>\n    <div>Rendered on Server</div>\n  </body>\n</html>`;\nconst handler = () => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        const result = 'Hey Bitches!';\n        const app = server_1.default.renderToString(jsx_runtime_1.jsx(App_1.default, { message: result }, void 0));\n        const html = indexFile.replace('<div id=\"root\"></div>', `<div id=\"root\">${app}</div>`);\n        return {\n            statusCode: 200,\n            headers: { 'Content-Type': 'text/html' },\n            body: html,\n        };\n    }\n    catch (error) {\n        console.log(`Error ${error.message}`);\n        return `Error ${error}`;\n    }\n});\nexports.handler = handler;\n\n\n//# sourceURL=webpack://api/./lambdas/server/index.tsx?");

/***/ }),

/***/ "./lambdas/server/ui/src/App.tsx":
/*!***************************************!*\
  !*** ./lambdas/server/ui/src/App.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst jsx_runtime_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'react/jsx-runtime'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nfunction App({ message }) {\n    return (jsx_runtime_1.jsx(\"div\", Object.assign({ className: \"App\" }, { children: jsx_runtime_1.jsxs(\"header\", Object.assign({ className: \"App-header\" }, { children: [jsx_runtime_1.jsxs(\"p\", { children: [\"Edit \", jsx_runtime_1.jsx(\"code\", { children: \"src/App.tsx\" }, void 0), \" and save to reload.\"] }, void 0), jsx_runtime_1.jsx(\"a\", Object.assign({ className: \"App-link\", href: \"https://reactjs.org\", target: \"_blank\", rel: \"noopener noreferrer\" }, { children: message }), void 0)] }), void 0) }), void 0));\n}\nexports.default = App;\n\n\n//# sourceURL=webpack://api/./lambdas/server/ui/src/App.tsx?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./lambdas/server/index.tsx");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;
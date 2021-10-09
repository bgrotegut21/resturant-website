/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/elementEvents.js":
/*!**************************************!*\
  !*** ./src/scripts/elementEvents.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setToElement": () => (/* binding */ setToElement)
/* harmony export */ });

function setToElement(currentElement,elements){
    if (!Array.isArray(elements)) currentElement.appendChild(elements)
    else elements.forEach(element => currentElement.appendChild(element))
}

/***/ }),

/***/ "./src/images/location.png":
/*!*********************************!*\
  !*** ./src/images/location.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1a178ab389dbbc079b8e.png";

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./src/scripts/contact.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactInterface": () => (/* binding */ contactInterface)
/* harmony export */ });
/* harmony import */ var _elementEvents_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementEvents.js */ "./src/scripts/elementEvents.js");
/* harmony import */ var _images_location_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/location.png */ "./src/images/location.png");



let contactInterface = (function(){
    function  createContactFace(){
        let contactTitle = document.createElement("h1")
        contactTitle.setAttribute("class","contactTitle");
        contactTitle.textContent = "Contact";

        let mapImage = document.createElement("img");
        mapImage.setAttribute("class","mapImage")
        mapImage.setAttribute("width","400");
        mapImage.src = _images_location_png__WEBPACK_IMPORTED_MODULE_1__;

        let informationTitle = document.createElement("h2");
        informationTitle.textContent = "Information";
        informationTitle.setAttribute("class","informationText");


        let adressText = document.createElement("p");
        adressText.textContent = "Adress: 1233 Fake Street 300s";
        adressText.setAttribute("class","contactParagraph")

        let numberText = document.createElement("p");
        numberText.textContent = "Our number is 1(234)567-8900";
    
        return [contactTitle, mapImage, informationTitle, adressText, numberText]
    }

    return createContactFace();
})()


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ087QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FnRDtBQUNHOztBQUVuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixpREFBYTs7QUFFcEM7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0dXJhbnQtd2Vic2l0ZS8uL3NyYy9zY3JpcHRzL2VsZW1lbnRFdmVudHMuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXdlYnNpdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3R1cmFudC13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXdlYnNpdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtd2Vic2l0ZS8uL3NyYy9zY3JpcHRzL2NvbnRhY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZnVuY3Rpb24gc2V0VG9FbGVtZW50KGN1cnJlbnRFbGVtZW50LGVsZW1lbnRzKXtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZWxlbWVudHMpKSBjdXJyZW50RWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50cylcbiAgICBlbHNlIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiBjdXJyZW50RWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KSlcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiOyIsImltcG9ydCB7c2V0VG9FbGVtZW50fSBmcm9tIFwiLi9lbGVtZW50RXZlbnRzLmpzXCI7XG5pbXBvcnQgbG9jYXRpb25JbWFnZSBmcm9tIFwiLi4vaW1hZ2VzL2xvY2F0aW9uLnBuZ1wiO1xuXG5sZXQgY29udGFjdEludGVyZmFjZSA9IChmdW5jdGlvbigpe1xuICAgIGZ1bmN0aW9uICBjcmVhdGVDb250YWN0RmFjZSgpe1xuICAgICAgICBsZXQgY29udGFjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpXG4gICAgICAgIGNvbnRhY3RUaXRsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwiY29udGFjdFRpdGxlXCIpO1xuICAgICAgICBjb250YWN0VGl0bGUudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcblxuICAgICAgICBsZXQgbWFwSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBtYXBJbWFnZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwibWFwSW1hZ2VcIilcbiAgICAgICAgbWFwSW1hZ2Uuc2V0QXR0cmlidXRlKFwid2lkdGhcIixcIjQwMFwiKTtcbiAgICAgICAgbWFwSW1hZ2Uuc3JjID0gbG9jYXRpb25JbWFnZTtcblxuICAgICAgICBsZXQgaW5mb3JtYXRpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgICAgaW5mb3JtYXRpb25UaXRsZS50ZXh0Q29udGVudCA9IFwiSW5mb3JtYXRpb25cIjtcbiAgICAgICAgaW5mb3JtYXRpb25UaXRsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwiaW5mb3JtYXRpb25UZXh0XCIpO1xuXG5cbiAgICAgICAgbGV0IGFkcmVzc1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgYWRyZXNzVGV4dC50ZXh0Q29udGVudCA9IFwiQWRyZXNzOiAxMjMzIEZha2UgU3RyZWV0IDMwMHNcIjtcbiAgICAgICAgYWRyZXNzVGV4dC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwiY29udGFjdFBhcmFncmFwaFwiKVxuXG4gICAgICAgIGxldCBudW1iZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIG51bWJlclRleHQudGV4dENvbnRlbnQgPSBcIk91ciBudW1iZXIgaXMgMSgyMzQpNTY3LTg5MDBcIjtcbiAgICBcbiAgICAgICAgcmV0dXJuIFtjb250YWN0VGl0bGUsIG1hcEltYWdlLCBpbmZvcm1hdGlvblRpdGxlLCBhZHJlc3NUZXh0LCBudW1iZXJUZXh0XVxuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVDb250YWN0RmFjZSgpO1xufSkoKVxuXG5leHBvcnQge2NvbnRhY3RJbnRlcmZhY2V9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
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
/* harmony export */   "setToElement": () => (/* binding */ setToElement),
/* harmony export */   "addBindings": () => (/* binding */ addBindings),
/* harmony export */   "removeBindings": () => (/* binding */ removeBindings),
/* harmony export */   "createElementsChildren": () => (/* binding */ createElementsChildren),
/* harmony export */   "makeElementTemplate": () => (/* binding */ makeElementTemplate)
/* harmony export */ });

function setToElement(currentElement,elements){
    if (!Array.isArray(elements)) currentElement.appendChild(elements)
    else elements.forEach(element => currentElement.appendChild(element))
}
//if array is not button than the array is the button for addBindings and removeBindings
function addBindings(array,func){
    if (!Array.isArray(array)) array.addEventListener("click",func) 
    else array.forEach(button => button.addEventListener("click",func))
}


function removeBindings(array,func){
    if (!Array.isArray(array)) array.addEventListener("click",func)
    else array.forEach(button => button.removeEventListener("click",func))
}

function createElementsChildren(element,className,text){
    let newElement = document.createElement(element);
    newElement.setAttribute("class",className);
    newElement.innerHTML = text;
    return newElement;
}

function makeElementTemplate(array,events){
    let elementObject = {array, events};
    return elementObject;
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
/* harmony export */   "contactObject": () => (/* binding */ contactObject)
/* harmony export */ });
/* harmony import */ var _elementEvents_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementEvents.js */ "./src/scripts/elementEvents.js");
/* harmony import */ var _images_location_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/location.png */ "./src/images/location.png");





function createContactTitle(){
    let contactTitle = document.createElement("h1")
    contactTitle.setAttribute("class","contactTitle");
    contactTitle.textContent = "Contact";
    return contactTitle;
    
}

function createMapImage(){
    let mapImage = document.createElement("img");
    mapImage.setAttribute("class","mapImage")
    mapImage.setAttribute("width","400");
    mapImage.src = _images_location_png__WEBPACK_IMPORTED_MODULE_1__;
    return mapImage;
}

function createInformationTitle(){
    let informationTitle = document.createElement("h2");
    informationTitle.textContent = "Information";
    informationTitle.setAttribute("class","informationText");
    return informationTitle;
}

function createAdressText(){
    let adressText = document.createElement("p");
    adressText.textContent = "Adress: 1233 Fake Street 300s";
    adressText.setAttribute("class","contactParagraph");
    return adressText;
}

function createNumberText(){
    let numberText = document.createElement("p");
    numberText.textContent = "Our number is 1(234)567-8900";
    return numberText;
}


let contactArray = [createContactTitle(), createMapImage(),
                    createInformationTitle(), createAdressText(),
                    createNumberText()];

let contactObject =  (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.makeElementTemplate)(contactArray,[]);


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTs7O0FBR087QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1AseUJBQXlCO0FBQ3pCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBdUQ7QUFDSjs7OztBQUluRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpREFBYTtBQUNoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixzRUFBbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0dXJhbnQtd2Vic2l0ZS8uL3NyYy9zY3JpcHRzL2VsZW1lbnRFdmVudHMuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXdlYnNpdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3R1cmFudC13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXdlYnNpdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtd2Vic2l0ZS8uL3NyYy9zY3JpcHRzL2NvbnRhY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZnVuY3Rpb24gc2V0VG9FbGVtZW50KGN1cnJlbnRFbGVtZW50LGVsZW1lbnRzKXtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZWxlbWVudHMpKSBjdXJyZW50RWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50cylcbiAgICBlbHNlIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiBjdXJyZW50RWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KSlcbn1cbi8vaWYgYXJyYXkgaXMgbm90IGJ1dHRvbiB0aGFuIHRoZSBhcnJheSBpcyB0aGUgYnV0dG9uIGZvciBhZGRCaW5kaW5ncyBhbmQgcmVtb3ZlQmluZGluZ3NcbmV4cG9ydCBmdW5jdGlvbiBhZGRCaW5kaW5ncyhhcnJheSxmdW5jKXtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpKSBhcnJheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jKSBcbiAgICBlbHNlIGFycmF5LmZvckVhY2goYnV0dG9uID0+IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jKSlcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQmluZGluZ3MoYXJyYXksZnVuYyl7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSkgYXJyYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuYylcbiAgICBlbHNlIGFycmF5LmZvckVhY2goYnV0dG9uID0+IGJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRzQ2hpbGRyZW4oZWxlbWVudCxjbGFzc05hbWUsdGV4dCl7XG4gICAgbGV0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixjbGFzc05hbWUpO1xuICAgIG5ld0VsZW1lbnQuaW5uZXJIVE1MID0gdGV4dDtcbiAgICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VFbGVtZW50VGVtcGxhdGUoYXJyYXksZXZlbnRzKXtcbiAgICBsZXQgZWxlbWVudE9iamVjdCA9IHthcnJheSwgZXZlbnRzfTtcbiAgICByZXR1cm4gZWxlbWVudE9iamVjdDtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiOyIsImltcG9ydCB7bWFrZUVsZW1lbnRUZW1wbGF0ZX0gZnJvbSBcIi4vZWxlbWVudEV2ZW50cy5qc1wiO1xuaW1wb3J0IGxvY2F0aW9uSW1hZ2UgZnJvbSBcIi4uL2ltYWdlcy9sb2NhdGlvbi5wbmdcIjtcblxuXG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3RUaXRsZSgpe1xuICAgIGxldCBjb250YWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIilcbiAgICBjb250YWN0VGl0bGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcImNvbnRhY3RUaXRsZVwiKTtcbiAgICBjb250YWN0VGl0bGUudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcbiAgICByZXR1cm4gY29udGFjdFRpdGxlO1xuICAgIFxufVxuXG5mdW5jdGlvbiBjcmVhdGVNYXBJbWFnZSgpe1xuICAgIGxldCBtYXBJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbWFwSW1hZ2Uuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcIm1hcEltYWdlXCIpXG4gICAgbWFwSW1hZ2Uuc2V0QXR0cmlidXRlKFwid2lkdGhcIixcIjQwMFwiKTtcbiAgICBtYXBJbWFnZS5zcmMgPSBsb2NhdGlvbkltYWdlO1xuICAgIHJldHVybiBtYXBJbWFnZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW5mb3JtYXRpb25UaXRsZSgpe1xuICAgIGxldCBpbmZvcm1hdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGluZm9ybWF0aW9uVGl0bGUudGV4dENvbnRlbnQgPSBcIkluZm9ybWF0aW9uXCI7XG4gICAgaW5mb3JtYXRpb25UaXRsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwiaW5mb3JtYXRpb25UZXh0XCIpO1xuICAgIHJldHVybiBpbmZvcm1hdGlvblRpdGxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBZHJlc3NUZXh0KCl7XG4gICAgbGV0IGFkcmVzc1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBhZHJlc3NUZXh0LnRleHRDb250ZW50ID0gXCJBZHJlc3M6IDEyMzMgRmFrZSBTdHJlZXQgMzAwc1wiO1xuICAgIGFkcmVzc1RleHQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcImNvbnRhY3RQYXJhZ3JhcGhcIik7XG4gICAgcmV0dXJuIGFkcmVzc1RleHQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU51bWJlclRleHQoKXtcbiAgICBsZXQgbnVtYmVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIG51bWJlclRleHQudGV4dENvbnRlbnQgPSBcIk91ciBudW1iZXIgaXMgMSgyMzQpNTY3LTg5MDBcIjtcbiAgICByZXR1cm4gbnVtYmVyVGV4dDtcbn1cblxuXG5sZXQgY29udGFjdEFycmF5ID0gW2NyZWF0ZUNvbnRhY3RUaXRsZSgpLCBjcmVhdGVNYXBJbWFnZSgpLFxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVJbmZvcm1hdGlvblRpdGxlKCksIGNyZWF0ZUFkcmVzc1RleHQoKSxcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlTnVtYmVyVGV4dCgpXTtcblxubGV0IGNvbnRhY3RPYmplY3QgPSAgbWFrZUVsZW1lbnRUZW1wbGF0ZShjb250YWN0QXJyYXksW10pO1xuXG5leHBvcnQge2NvbnRhY3RPYmplY3R9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
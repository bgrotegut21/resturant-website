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
    console.log(events, "current events")
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

//let contactObject =  makeElementTemplate(contactArray,[]);
let contactObject = {};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTs7O0FBR087QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztVQzFCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0F1RDtBQUNKOzs7O0FBSW5EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlEQUFhO0FBQ2hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3R1cmFudC13ZWJzaXRlLy4vc3JjL3NjcmlwdHMvZWxlbWVudEV2ZW50cy5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtd2Vic2l0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3R1cmFudC13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3R1cmFudC13ZWJzaXRlLy4vc3JjL3NjcmlwdHMvY29udGFjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBmdW5jdGlvbiBzZXRUb0VsZW1lbnQoY3VycmVudEVsZW1lbnQsZWxlbWVudHMpe1xuICAgIGlmICghQXJyYXkuaXNBcnJheShlbGVtZW50cykpIGN1cnJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnRzKVxuICAgIGVsc2UgZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IGN1cnJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpKVxufVxuLy9pZiBhcnJheSBpcyBub3QgYnV0dG9uIHRoYW4gdGhlIGFycmF5IGlzIHRoZSBidXR0b24gZm9yIGFkZEJpbmRpbmdzIGFuZCByZW1vdmVCaW5kaW5nc1xuZXhwb3J0IGZ1bmN0aW9uIGFkZEJpbmRpbmdzKGFycmF5LGZ1bmMpe1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheSkpIGFycmF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmMpIFxuICAgIGVsc2UgYXJyYXkuZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmMpKVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVCaW5kaW5ncyhhcnJheSxmdW5jKXtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpKSBhcnJheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jKVxuICAgIGVsc2UgYXJyYXkuZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmMpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudHNDaGlsZHJlbihlbGVtZW50LGNsYXNzTmFtZSx0ZXh0KXtcbiAgICBsZXQgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLGNsYXNzTmFtZSk7XG4gICAgbmV3RWxlbWVudC5pbm5lckhUTUwgPSB0ZXh0O1xuICAgIHJldHVybiBuZXdFbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUVsZW1lbnRUZW1wbGF0ZShhcnJheSxldmVudHMpe1xuICAgIGNvbnNvbGUubG9nKGV2ZW50cywgXCJjdXJyZW50IGV2ZW50c1wiKVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7IiwiaW1wb3J0IHttYWtlRWxlbWVudFRlbXBsYXRlfSBmcm9tIFwiLi9lbGVtZW50RXZlbnRzLmpzXCI7XG5pbXBvcnQgbG9jYXRpb25JbWFnZSBmcm9tIFwiLi4vaW1hZ2VzL2xvY2F0aW9uLnBuZ1wiO1xuXG5cblxuZnVuY3Rpb24gY3JlYXRlQ29udGFjdFRpdGxlKCl7XG4gICAgbGV0IGNvbnRhY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxuICAgIGNvbnRhY3RUaXRsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwiY29udGFjdFRpdGxlXCIpO1xuICAgIGNvbnRhY3RUaXRsZS50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuICAgIHJldHVybiBjb250YWN0VGl0bGU7XG4gICAgXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1hcEltYWdlKCl7XG4gICAgbGV0IG1hcEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBtYXBJbWFnZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwibWFwSW1hZ2VcIilcbiAgICBtYXBJbWFnZS5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLFwiNDAwXCIpO1xuICAgIG1hcEltYWdlLnNyYyA9IGxvY2F0aW9uSW1hZ2U7XG4gICAgcmV0dXJuIG1hcEltYWdlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJbmZvcm1hdGlvblRpdGxlKCl7XG4gICAgbGV0IGluZm9ybWF0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgaW5mb3JtYXRpb25UaXRsZS50ZXh0Q29udGVudCA9IFwiSW5mb3JtYXRpb25cIjtcbiAgICBpbmZvcm1hdGlvblRpdGxlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsXCJpbmZvcm1hdGlvblRleHRcIik7XG4gICAgcmV0dXJuIGluZm9ybWF0aW9uVGl0bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFkcmVzc1RleHQoKXtcbiAgICBsZXQgYWRyZXNzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGFkcmVzc1RleHQudGV4dENvbnRlbnQgPSBcIkFkcmVzczogMTIzMyBGYWtlIFN0cmVldCAzMDBzXCI7XG4gICAgYWRyZXNzVGV4dC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLFwiY29udGFjdFBhcmFncmFwaFwiKTtcbiAgICByZXR1cm4gYWRyZXNzVGV4dDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTnVtYmVyVGV4dCgpe1xuICAgIGxldCBudW1iZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbnVtYmVyVGV4dC50ZXh0Q29udGVudCA9IFwiT3VyIG51bWJlciBpcyAxKDIzNCk1NjctODkwMFwiO1xuICAgIHJldHVybiBudW1iZXJUZXh0O1xufVxuXG5cbmxldCBjb250YWN0QXJyYXkgPSBbY3JlYXRlQ29udGFjdFRpdGxlKCksIGNyZWF0ZU1hcEltYWdlKCksXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZUluZm9ybWF0aW9uVGl0bGUoKSwgY3JlYXRlQWRyZXNzVGV4dCgpLFxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVOdW1iZXJUZXh0KCldO1xuXG4vL2xldCBjb250YWN0T2JqZWN0ID0gIG1ha2VFbGVtZW50VGVtcGxhdGUoY29udGFjdEFycmF5LFtdKTtcbmxldCBjb250YWN0T2JqZWN0ID0ge307XG5leHBvcnQge2NvbnRhY3RPYmplY3R9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
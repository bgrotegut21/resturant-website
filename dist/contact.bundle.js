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
/* harmony export */   "addBindings": () => (/* binding */ addBindings),
/* harmony export */   "removeBindings": () => (/* binding */ removeBindings),
/* harmony export */   "makeElementTemplate": () => (/* binding */ makeElementTemplate),
/* harmony export */   "createBindingTemplate": () => (/* binding */ createBindingTemplate),
/* harmony export */   "createCategoriesButton": () => (/* binding */ createCategoriesButton),
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "addElements": () => (/* binding */ addElements)
/* harmony export */ });
//if array is not button than the array is the button for addBindings and removeBindings
function addBindings(array,func){
    console.log(array, "current array")
    if (!Array.isArray(array)) array.addEventListener("click",func) 
    else array.forEach(button => button.addEventListener("click",func))
}


function removeBindings(array,func){
    if (!Array.isArray(array)) array.addEventListener("click",func)
    else array.forEach(button => button.removeEventListener("click",func))
}


function makeElementTemplate(page,array){
   let object = {};
   object.page = page; 
   object.array = array;
   return object;
}

function createBindingTemplate(array,event){
    let object = {};
    object.bindingsArray = array; 
    object.event = event;
    return object;
}

function createCategoriesButton (array){
    let buttons = [];
    array.forEach(object => {
       let button =  createElement("button",object.class,"",object.text);
       buttons.push(button);
    })
    return buttons;
    
}


function createElement(element,className,src,content){
    let elementAttributes = [element,className,src,content];
    let elementObject = {};
    elementObject.element = element;
    elementObject.className = className;
    elementObject.source = src;
    elementObject.content = content;
    
    let elementKeys = Object.keys(elementObject);
    let index = 0;
    elementKeys.forEach(key => {
        if (typeof elementAttributes[index] == "undefined") elementObject[key] = "";
        index ++;
    })
    return generateNewElement(elementObject);
}

 function generateNewElement(elementObject){
    let newElement;
    if (elementObject.element == "img"){
        newElement = document.createElement(elementObject.element);
        newElement.classList = elementObject.className;
        newElement.src = elementObject.source;
    } else {
        newElement = document.createElement(elementObject.element);
        newElement.classList = elementObject.className;
        newElement.textContent = elementObject.content;
    }
    return newElement;
}

function addElements(parentElement,childrenElements){
    console.log(childrenElements, "current children elements")
    childrenElements.forEach(element => parentElement.innerHTML += element.outerHTML); 
    return parentElement;

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




function renderContactElements(){
    let contactTitle = (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2","contactTitle","","Contact");
    let mapImage = (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("img","mapImage",_images_location_png__WEBPACK_IMPORTED_MODULE_1__);
    let informationText = (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2","informationText","","Information");
    let contactParagraph = (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("p","contactParagraph","","Our Adrerss is 1233 Fake Street 300s");
    let contactPragraph2 = (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("p","contactPragraph","","Our number is 1(234)567-8900");

    let elementsHtml = "";
    let elements = [contactTitle, mapImage,informationText, contactParagraph, contactPragraph2];
    elements.forEach(element => elementsHtml += element.outerHTML);
    return elementsHtml;
}

let contactPage = renderContactElements();
let contactObject = (0,_elementEvents_js__WEBPACK_IMPORTED_MODULE_0__.makeElementTemplate)(contactPage,[]);


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7OztBQUdPO0FBQ1A7QUFDQTtBQUNBOzs7QUFHTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7QUFHTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBMEc7QUFDdkQ7OztBQUduRDtBQUNBLHVCQUF1QixnRUFBYTtBQUNwQyxtQkFBbUIsZ0VBQWEsa0JBQWtCLGlEQUFhO0FBQy9ELDBCQUEwQixnRUFBYTtBQUN2QywyQkFBMkIsZ0VBQWE7QUFDeEMsMkJBQTJCLGdFQUFhOztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLHNFQUFtQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3R1cmFudC13ZWJzaXRlLy4vc3JjL3NjcmlwdHMvZWxlbWVudEV2ZW50cy5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtd2Vic2l0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3R1cmFudC13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3R1cmFudC13ZWJzaXRlLy4vc3JjL3NjcmlwdHMvY29udGFjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2lmIGFycmF5IGlzIG5vdCBidXR0b24gdGhhbiB0aGUgYXJyYXkgaXMgdGhlIGJ1dHRvbiBmb3IgYWRkQmluZGluZ3MgYW5kIHJlbW92ZUJpbmRpbmdzXG5leHBvcnQgZnVuY3Rpb24gYWRkQmluZGluZ3MoYXJyYXksZnVuYyl7XG4gICAgY29uc29sZS5sb2coYXJyYXksIFwiY3VycmVudCBhcnJheVwiKVxuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheSkpIGFycmF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmMpIFxuICAgIGVsc2UgYXJyYXkuZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmMpKVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVCaW5kaW5ncyhhcnJheSxmdW5jKXtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpKSBhcnJheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jKVxuICAgIGVsc2UgYXJyYXkuZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmMpKVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlRWxlbWVudFRlbXBsYXRlKHBhZ2UsYXJyYXkpe1xuICAgbGV0IG9iamVjdCA9IHt9O1xuICAgb2JqZWN0LnBhZ2UgPSBwYWdlOyBcbiAgIG9iamVjdC5hcnJheSA9IGFycmF5O1xuICAgcmV0dXJuIG9iamVjdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJpbmRpbmdUZW1wbGF0ZShhcnJheSxldmVudCl7XG4gICAgbGV0IG9iamVjdCA9IHt9O1xuICAgIG9iamVjdC5iaW5kaW5nc0FycmF5ID0gYXJyYXk7IFxuICAgIG9iamVjdC5ldmVudCA9IGV2ZW50O1xuICAgIHJldHVybiBvYmplY3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDYXRlZ29yaWVzQnV0dG9uIChhcnJheSl7XG4gICAgbGV0IGJ1dHRvbnMgPSBbXTtcbiAgICBhcnJheS5mb3JFYWNoKG9iamVjdCA9PiB7XG4gICAgICAgbGV0IGJ1dHRvbiA9ICBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsb2JqZWN0LmNsYXNzLFwiXCIsb2JqZWN0LnRleHQpO1xuICAgICAgIGJ1dHRvbnMucHVzaChidXR0b24pO1xuICAgIH0pXG4gICAgcmV0dXJuIGJ1dHRvbnM7XG4gICAgXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZWxlbWVudCxjbGFzc05hbWUsc3JjLGNvbnRlbnQpe1xuICAgIGxldCBlbGVtZW50QXR0cmlidXRlcyA9IFtlbGVtZW50LGNsYXNzTmFtZSxzcmMsY29udGVudF07XG4gICAgbGV0IGVsZW1lbnRPYmplY3QgPSB7fTtcbiAgICBlbGVtZW50T2JqZWN0LmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIGVsZW1lbnRPYmplY3QuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgIGVsZW1lbnRPYmplY3Quc291cmNlID0gc3JjO1xuICAgIGVsZW1lbnRPYmplY3QuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgXG4gICAgbGV0IGVsZW1lbnRLZXlzID0gT2JqZWN0LmtleXMoZWxlbWVudE9iamVjdCk7XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICBlbGVtZW50S2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgZWxlbWVudEF0dHJpYnV0ZXNbaW5kZXhdID09IFwidW5kZWZpbmVkXCIpIGVsZW1lbnRPYmplY3Rba2V5XSA9IFwiXCI7XG4gICAgICAgIGluZGV4ICsrO1xuICAgIH0pXG4gICAgcmV0dXJuIGdlbmVyYXRlTmV3RWxlbWVudChlbGVtZW50T2JqZWN0KTtcbn1cblxuIGZ1bmN0aW9uIGdlbmVyYXRlTmV3RWxlbWVudChlbGVtZW50T2JqZWN0KXtcbiAgICBsZXQgbmV3RWxlbWVudDtcbiAgICBpZiAoZWxlbWVudE9iamVjdC5lbGVtZW50ID09IFwiaW1nXCIpe1xuICAgICAgICBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50T2JqZWN0LmVsZW1lbnQpO1xuICAgICAgICBuZXdFbGVtZW50LmNsYXNzTGlzdCA9IGVsZW1lbnRPYmplY3QuY2xhc3NOYW1lO1xuICAgICAgICBuZXdFbGVtZW50LnNyYyA9IGVsZW1lbnRPYmplY3Quc291cmNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnRPYmplY3QuZWxlbWVudCk7XG4gICAgICAgIG5ld0VsZW1lbnQuY2xhc3NMaXN0ID0gZWxlbWVudE9iamVjdC5jbGFzc05hbWU7XG4gICAgICAgIG5ld0VsZW1lbnQudGV4dENvbnRlbnQgPSBlbGVtZW50T2JqZWN0LmNvbnRlbnQ7XG4gICAgfVxuICAgIHJldHVybiBuZXdFbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkRWxlbWVudHMocGFyZW50RWxlbWVudCxjaGlsZHJlbkVsZW1lbnRzKXtcbiAgICBjb25zb2xlLmxvZyhjaGlsZHJlbkVsZW1lbnRzLCBcImN1cnJlbnQgY2hpbGRyZW4gZWxlbWVudHNcIilcbiAgICBjaGlsZHJlbkVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiBwYXJlbnRFbGVtZW50LmlubmVySFRNTCArPSBlbGVtZW50Lm91dGVySFRNTCk7IFxuICAgIHJldHVybiBwYXJlbnRFbGVtZW50O1xuXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjsiLCJpbXBvcnQge21ha2VFbGVtZW50VGVtcGxhdGUsIGFkZEVsZW1lbnRzLCBjcmVhdGVFbGVtZW50LCBjcmVhdGVCaW5kaW5nVGVtcGxhdGV9IGZyb20gXCIuL2VsZW1lbnRFdmVudHMuanNcIjtcbmltcG9ydCBsb2NhdGlvbkltYWdlIGZyb20gXCIuLi9pbWFnZXMvbG9jYXRpb24ucG5nXCI7XG5cblxuZnVuY3Rpb24gcmVuZGVyQ29udGFjdEVsZW1lbnRzKCl7XG4gICAgbGV0IGNvbnRhY3RUaXRsZSA9IGNyZWF0ZUVsZW1lbnQoXCJoMlwiLFwiY29udGFjdFRpdGxlXCIsXCJcIixcIkNvbnRhY3RcIik7XG4gICAgbGV0IG1hcEltYWdlID0gY3JlYXRlRWxlbWVudChcImltZ1wiLFwibWFwSW1hZ2VcIixsb2NhdGlvbkltYWdlKTtcbiAgICBsZXQgaW5mb3JtYXRpb25UZXh0ID0gY3JlYXRlRWxlbWVudChcImgyXCIsXCJpbmZvcm1hdGlvblRleHRcIixcIlwiLFwiSW5mb3JtYXRpb25cIik7XG4gICAgbGV0IGNvbnRhY3RQYXJhZ3JhcGggPSBjcmVhdGVFbGVtZW50KFwicFwiLFwiY29udGFjdFBhcmFncmFwaFwiLFwiXCIsXCJPdXIgQWRyZXJzcyBpcyAxMjMzIEZha2UgU3RyZWV0IDMwMHNcIik7XG4gICAgbGV0IGNvbnRhY3RQcmFncmFwaDIgPSBjcmVhdGVFbGVtZW50KFwicFwiLFwiY29udGFjdFByYWdyYXBoXCIsXCJcIixcIk91ciBudW1iZXIgaXMgMSgyMzQpNTY3LTg5MDBcIik7XG5cbiAgICBsZXQgZWxlbWVudHNIdG1sID0gXCJcIjtcbiAgICBsZXQgZWxlbWVudHMgPSBbY29udGFjdFRpdGxlLCBtYXBJbWFnZSxpbmZvcm1hdGlvblRleHQsIGNvbnRhY3RQYXJhZ3JhcGgsIGNvbnRhY3RQcmFncmFwaDJdO1xuICAgIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50c0h0bWwgKz0gZWxlbWVudC5vdXRlckhUTUwpO1xuICAgIHJldHVybiBlbGVtZW50c0h0bWw7XG59XG5cbmxldCBjb250YWN0UGFnZSA9IHJlbmRlckNvbnRhY3RFbGVtZW50cygpO1xubGV0IGNvbnRhY3RPYmplY3QgPSBtYWtlRWxlbWVudFRlbXBsYXRlKGNvbnRhY3RQYWdlLFtdKTtcblxuZXhwb3J0IHtjb250YWN0T2JqZWN0fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
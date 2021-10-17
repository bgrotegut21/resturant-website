/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./src/scripts/elementEvents.js ***!
  \**************************************/
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
    childrenElements.forEach(element => parentElement.innerHTML += element.outerHTML); 
    return parentElement;
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudEV2ZW50cy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNPO0FBQ1A7QUFDQTtBQUNBOzs7QUFHTztBQUNQO0FBQ0E7QUFDQTs7O0FBR087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7O0FBR087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0dXJhbnQtd2Vic2l0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3R1cmFudC13ZWJzaXRlLy4vc3JjL3NjcmlwdHMvZWxlbWVudEV2ZW50cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vaWYgYXJyYXkgaXMgbm90IGJ1dHRvbiB0aGFuIHRoZSBhcnJheSBpcyB0aGUgYnV0dG9uIGZvciBhZGRCaW5kaW5ncyBhbmQgcmVtb3ZlQmluZGluZ3NcbmV4cG9ydCBmdW5jdGlvbiBhZGRCaW5kaW5ncyhhcnJheSxmdW5jKXtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXkpKSBhcnJheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jKSBcbiAgICBlbHNlIGFycmF5LmZvckVhY2goYnV0dG9uID0+IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jKSlcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQmluZGluZ3MoYXJyYXksZnVuYyl7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSkgYXJyYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuYylcbiAgICBlbHNlIGFycmF5LmZvckVhY2goYnV0dG9uID0+IGJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jKSlcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUVsZW1lbnRUZW1wbGF0ZShwYWdlLGFycmF5KXtcbiAgIGxldCBvYmplY3QgPSB7fTtcbiAgIG9iamVjdC5wYWdlID0gcGFnZTsgXG4gICBvYmplY3QuYXJyYXkgPSBhcnJheTtcbiAgIHJldHVybiBvYmplY3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCaW5kaW5nVGVtcGxhdGUoYXJyYXksZXZlbnQpe1xuICAgIGxldCBvYmplY3QgPSB7fTtcbiAgICBvYmplY3QuYmluZGluZ3NBcnJheSA9IGFycmF5OyBcbiAgICBvYmplY3QuZXZlbnQgPSBldmVudDtcbiAgICByZXR1cm4gb2JqZWN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2F0ZWdvcmllc0J1dHRvbiAoYXJyYXkpe1xuICAgIGxldCBidXR0b25zID0gW107XG4gICAgYXJyYXkuZm9yRWFjaChvYmplY3QgPT4ge1xuICAgICAgIGxldCBidXR0b24gPSAgY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLG9iamVjdC5jbGFzcyxcIlwiLG9iamVjdC50ZXh0KTtcbiAgICAgICBidXR0b25zLnB1c2goYnV0dG9uKTtcbiAgICB9KVxuICAgIHJldHVybiBidXR0b25zO1xuICAgIFxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KGVsZW1lbnQsY2xhc3NOYW1lLHNyYyxjb250ZW50KXtcbiAgICBsZXQgZWxlbWVudEF0dHJpYnV0ZXMgPSBbZWxlbWVudCxjbGFzc05hbWUsc3JjLGNvbnRlbnRdO1xuICAgIGxldCBlbGVtZW50T2JqZWN0ID0ge307XG4gICAgZWxlbWVudE9iamVjdC5lbGVtZW50ID0gZWxlbWVudDtcbiAgICBlbGVtZW50T2JqZWN0LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICBlbGVtZW50T2JqZWN0LnNvdXJjZSA9IHNyYztcbiAgICBlbGVtZW50T2JqZWN0LmNvbnRlbnQgPSBjb250ZW50O1xuICAgIFxuICAgIGxldCBlbGVtZW50S2V5cyA9IE9iamVjdC5rZXlzKGVsZW1lbnRPYmplY3QpO1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgZWxlbWVudEtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnRBdHRyaWJ1dGVzW2luZGV4XSA9PSBcInVuZGVmaW5lZFwiKSBlbGVtZW50T2JqZWN0W2tleV0gPSBcIlwiO1xuICAgICAgICBpbmRleCArKztcbiAgICB9KVxuICAgIHJldHVybiBnZW5lcmF0ZU5ld0VsZW1lbnQoZWxlbWVudE9iamVjdCk7XG59XG5cbiBmdW5jdGlvbiBnZW5lcmF0ZU5ld0VsZW1lbnQoZWxlbWVudE9iamVjdCl7XG4gICAgbGV0IG5ld0VsZW1lbnQ7XG4gICAgaWYgKGVsZW1lbnRPYmplY3QuZWxlbWVudCA9PSBcImltZ1wiKXtcbiAgICAgICAgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudE9iamVjdC5lbGVtZW50KTtcbiAgICAgICAgbmV3RWxlbWVudC5jbGFzc0xpc3QgPSBlbGVtZW50T2JqZWN0LmNsYXNzTmFtZTtcbiAgICAgICAgbmV3RWxlbWVudC5zcmMgPSBlbGVtZW50T2JqZWN0LnNvdXJjZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50T2JqZWN0LmVsZW1lbnQpO1xuICAgICAgICBuZXdFbGVtZW50LmNsYXNzTGlzdCA9IGVsZW1lbnRPYmplY3QuY2xhc3NOYW1lO1xuICAgICAgICBuZXdFbGVtZW50LnRleHRDb250ZW50ID0gZWxlbWVudE9iamVjdC5jb250ZW50O1xuICAgIH1cbiAgICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEVsZW1lbnRzKHBhcmVudEVsZW1lbnQsY2hpbGRyZW5FbGVtZW50cyl7XG4gICAgY2hpbGRyZW5FbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4gcGFyZW50RWxlbWVudC5pbm5lckhUTUwgKz0gZWxlbWVudC5vdXRlckhUTUwpOyBcbiAgICByZXR1cm4gcGFyZW50RWxlbWVudDtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
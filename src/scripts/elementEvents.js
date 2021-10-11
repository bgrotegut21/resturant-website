
export function setToElement(currentElement,elements){
    if (!Array.isArray(elements)) currentElement.appendChild(elements)
    else elements.forEach(element => currentElement.appendChild(element))
}

export function addBindings(array,func){
    array.forEach(button => button.addEventListener("click",func))
}

export function removeBindings(array,func){
    array.forEach(button => button.removeEventListener("click",func))
}

export function createElementsChildren(element,className,text){
    let newElement = document.createElement(element);
    newElement.setAttribute("class",className);
    newElement.innerHTML = text;
    return newElement;
}

export function makeElementTemplate(array,events){
    let elementObject = {array, events};
    return elementObject;
}
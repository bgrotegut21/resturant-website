
export function setToElement(currentElement,elements){
    if (!Array.isArray(elements)) currentElement.appendChild(elements)
    else elements.forEach(element => currentElement.appendChild(element))
}
//if array is not button than the array is the button for addBindings and removeBindings
export function addBindings(array,func){
    if (!Array.isArray(array)) array.addEventListener("click",func) 
    else array.forEach(button => button.addEventListener("click",func))
}


export function removeBindings(array,func){
    if (!Array.isArray(array)) array.addEventListener("click",func)
    else array.forEach(button => button.removeEventListener("click",func))
}

export function createElementsChildren(element,className,text){
    let newElement = document.createElement(element);
    newElement.setAttribute("class",className);
    newElement.innerHTML = text;
    return newElement;
}

export function makeElementTemplate(array,events){
    console.log(events, "current events")
}
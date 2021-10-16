//if array is not button than the array is the button for addBindings and removeBindings
export function addBindings(array,func){
    console.log(array, "current array")
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

export function makeElementTemplate(page,array){
   let object = {};
   object.page = page; 
   object.array = array;
   return object;
}

export function createBindingTemplate(array,event){
    let object = {};
    object.bindingsArray = array; 
    object.event = event;
    return object;
}

export function setToElement(currentElement,elements){
    if (!Array.isArray(elements)) currentElement.appendChild(elements)
    else elements.forEach(element => currentElement.appendChild(element))
}

export function createElement(element,className,src,content){
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

export function addElements(parentElement,childrenElements){
    console.log(childrenElements, "current children elements")
    childrenElements.forEach(element => parentElement.innerHTML += element.outerHTML); 
    return parentElement;

}

export function setToElement(currentElement,elements){
    if (!Array.isArray(elements)) currentElement.appendChild(elements)
    else elements.forEach(element => currentElement.appendChild(element))
}
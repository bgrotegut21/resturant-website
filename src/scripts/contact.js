import {makeElementTemplate, addElements, createElement, createBindingTemplate} from "./elementEvents.js";
import locationImage from "../images/location.png";


function renderContactElements(){
    let contactTitle = createElement("h2","contactTitle","","Contact");
    let mapImage = createElement("img","mapImage",locationImage);
    let informationText = createElement("h2","informationText","","Information");
    let contactParagraph = createElement("p","contactParagraph","","Our Adrerss is 1233 Fake Street 300s");
    let contactPragraph2 = createElement("p","contactPragraph","","Our number is 1(234)567-8900");

    let elementsHtml = "";
    let elements = [contactTitle, mapImage,informationText, contactParagraph, contactPragraph2];
    elements.forEach(element => elementsHtml += element.outerHTML);
    return elementsHtml;
}

let contactPage = renderContactElements();
let contactObject = makeElementTemplate(contactPage,[]);

export {contactObject};
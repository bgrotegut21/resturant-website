import {makeElementTemplate} from "./elementEvents.js";
import locationImage from "../images/location.png";



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
    mapImage.src = locationImage;
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
export {contactObject};
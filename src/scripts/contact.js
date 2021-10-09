import {setToElement} from "./elementEvents.js";
import locationImage from "../images/location.png";

let contactInterface = (function(){
    function  createContactFace(){
        let contactTitle = document.createElement("h1")
        contactTitle.setAttribute("class","contactTitle");
        contactTitle.textContent = "Contact";

        let mapImage = document.createElement("img");
        mapImage.setAttribute("class","mapImage")
        mapImage.setAttribute("width","400");
        mapImage.src = locationImage;

        let informationTitle = document.createElement("h2");
        informationTitle.textContent = "Information";
        informationTitle.setAttribute("class","informationText");


        let adressText = document.createElement("p");
        adressText.textContent = "Adress: 1233 Fake Street 300s";
        adressText.setAttribute("class","contactParagraph")

        let numberText = document.createElement("p");
        numberText.textContent = "Our number is 1(234)567-8900";
    
        return [contactTitle, mapImage, informationTitle, adressText, numberText]
    }

    return createContactFace();
})()

export {contactInterface};
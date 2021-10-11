import arrowDownImage from "../images/arrowDrop.svg";
import arrowUpImage from "../images/arrowUp.svg";
import hamburgerImage from "../images/hamburger.svg";
import cheeseBurgerImage from "../images/cheeseburger.svg";
import chickenSandwichImage from "../images/chickenSandwhich.svg";
import doubleCheeseBurgerImage from "../images/doublecheeseBurger.svg";
import friesImage from "../images/fries.svg";
import chickenNuggets from "../images/chickenNuggets.svg";
import iceCreamImage from "../images/icecream.svg";
import milkshakeImage from "../images/milkshake.svg";

import {createElementsChildren, setToElement, makeElementTemplate} from "./elementEvents.js";




let categoryArray = [{class: "sandwichesCategory", text:"Sandwiches"},
{class: "sidesCategory", text:"Sides"},
{class: "dessertCategory", text: "Sandwiches"}, ]




function createCategorySelction (){
    let categorySelection = document.createElement("div");
    categorySelection.setAttribute("class","categorySelctions");
    return categorySelection;
}



function createArrowDown (){
    let arrowDown = document.createElement("img");
    arrowDown.setAttribute("class","arrowDown");
    arrowDown.src = arrowDownImage;
    return arrowDown;
}

function createArrowUp(){
    let arrowUp = document.createElement("img");
    arrowUp.setAttribute("class", "arrowUp");
    arrowUp.src = arrowUpImage;
    return arrowUp;
}

function createCurrentCategoryText(){
    let currentCategoryText =  document.createElement("h2");
    currentCategoryText.textContent = "Sandwiches";
    currentCategoryText.setAttribute("class","currentCategoryText");
    return currentCategoryText;
}

function createCategoryButtons(){
    let categoryButtons = document.createElement("div");
    categoryButtons.setAttribute("class", "categoryButtons");
    return categoryButtons;

}

function setCategorySelction(categorySelection, currentCategory, arrowDown, arrowUp,currentCategoryText, categoryButtons, categories){
    let currentCategoryItems = [arrowDown, arrowUp, currentCategoryText];
    setToElement(currentCategory,currentCategoryItems);
    setToElement(categoryButtons,categories); 

    let categoryItems = [currentCategory, categoryButtons];
    setToElement(categorySelection,categoryItems);
}

function createCurrentCategory(){
    let currentCategory = document.createElement("div");
    currentCategory.setAttribute("class","currentCategory" )
    return currentCategory;
}


function createCategorySelectionMenu(){
    let categorySelection = createCategorySelction();
    let currentCategory =  createCurrentCategory();
    let arrowDown = createArrowDown();
    let arrowUp = createArrowUp();
    let currentCategoryText =  createCurrentCategoryText();
    let categoryButtons = createCategoryButtons();

    let categories = categoryArray.map(object => createElementsChildren("button",object.class,object.text));
    setCategorySelction(categorySelection,currentCategory,arrowDown,arrowUp,currentCategoryText,categoryButtons,categories);
    return categorySelection;
}

function createSections(className){
    let sections = document.createElement("div");
    sections.setAttribute("class",className);
    return sections;

}

function createSection(){
    let section = document.createElement("div");
    section.setAttribute("class","section");
    return section;
    
}

function createImage(imageClass, image){
    let elementImage = document.createElement("img");
    elementImage.setAttribute("class",imageClass);
    elementImage.src = image;
    
    return elementImage;
}

function createTextSection(){
    let textSection = document.createElement("div");
    textSection.setAttribute("class","textSection");
    return textSection;

}

function createH2(h2Text){
    let h2 = document.createElement("h2");
    h2.textContent = h2Text;
    return h2;
}

function createP(pText){ 
    let p = document.createElement("p");
    p.textContent = pText;
    return p;
}

function createSectionsMenu(imageClass,image,h2Text, pText){
    let section = createSection();
    let elementImage = createImage(imageClass,image);
    let textSection = createTextSection();
    let h2 = createH2(h2Text);
    let p = createP(pText);   

    let texts = [h2,p];
    setToElement(textSection,texts);
    let elements = [elementImage, textSection];
    setToElement(section,elements);
}

function createSectionTemplate(sections,imageClass,image,h2Text,pText){
    let template = {};
    template.sections = sections;
    template.imageClass = imageClass;
    template.image = image;
    template.h2Text = h2Text;
    template.pText = pText;
    return template;
}

let menuArray = [createCategorySelectionMenu()];

let menuObject = makeElementTemplate(menuArray,[]);

export {menuObject}

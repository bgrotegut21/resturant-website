import arrowDownImage from "../images/arrowDrop.svg";
import arrowUpImage from "../images/arrowUp.svg";
import hamburgerImage from "../images/hamburger.svg";
import cheeseBurgerImage from "../images/cheeseburger.svg";
import chickenSandwichImage from "../image/chickenSandwhich.svg";
import doubleCheeseBurgerImage from "../images/doublecheeseBurger.svg";
import friesImage from "../images/fries.svg";
import chickenNuggets from "../images/chickenNuggets.svg";
import iceCreamImage from "../images/icecream.svg";
import milkshakeImage from "../images/milkshake.svg";

import {createElementsChildren, setToElement} from "./elementEvents.js";




categoryArray = [{class: "sandwichesCategory", text:"Sandwiches"},
{class: "sidesCategory", text:"Sides"},
{class: "dessertCategory", text: "Sandwiches"}, ]




function createCategorySelction (){
    let categorySelection = document.createElement("div");
    categorySelection.setAttribute("class","categorySelctions");
    return categorySelection;
}

function createCurrentCategory(){
    let currentCategory = document.createElement("div");
    currentCategory.setAttribute("class","currentCategory");
    return currentCategory;

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


function createCategorySelection(){
    let categorySelection =createCategorySelection();
    let currentCategory =  createCurrentCategory();
    let arrowDown = createArrowDown();
    let arrowUp = createArrowUp();
    let currentCategoryText =  createCurrentCategoryText();
    let categoryButtons = createCategoryButtons();

    let categories = categoryArray.map(object => createElementsChildren("button",object.class,object.text));
    setCategorySelction(categorySelection,currentCategory,arrowDown,arrowUp,currentCategoryText,categoryButtons,categories);
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

function createSections(imageClass,image, divClass,h2Text, pText,){
    let section = createSection();
    let elementImage = createImage(imageClass,image);
    




}

function createAllSections(){
    let sections = ["sections sandwichSection", "sections sidesSection","sections desserSection" ];
    let sectionsElement = sections.map(section => createSections(section));



}


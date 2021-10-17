
import hamburgerImage from "../images/hamburger.svg";
import cheeseBurgerImage from "../images/cheeseburger.svg";
import chickenSandwichImage from "../images/chickenSandwhich.svg";
import doubleCheeseBurgerImage from "../images/doublecheeseBurger.svg";
import friesImage from "../images/fries.svg";
import chickenNuggetsImage from "../images/chickenNuggets.svg";
import iceCreamImage from "../images/icecream.svg";
import milkshakeImage from "../images/milkshake.svg";

import arrowDownImage from "../images/arrowDrop.svg";

import {toggleCategories, addEventBindings, removeEventBindings} from "./navigation.js"
import {makeElementTemplate,addBindings,removeBindings, createBindingTemplate,createElement, addElements, createCategoriesButton} from "./elementEvents.js";

let categoryArray = [{class: "sandwichesCategory button", text:"Sandwiches"},
{class: "sidesCategory button", text:"Sides"},
{class: "dessertCategory button", text: "Desserts"}, ]

let categorySelection = createElement("div","categorySelection");
let currentCategory = createElement("div","currentCategory");
let arrow = createElement("img","arrow",arrowDownImage);
let currentCategoryText = createElement("h2","currentCategoryText","","Sandwiches");
let categoryButtons = createElement("div","categoryButtons");
let sections = createElement("div","sections");

function renderMenuElements(){
    let importantSections = [currentCategory, categoryButtons, categorySelection,sections];
    importantSections.forEach(section => section.innerHTML = "");

    let currentCategoryElements = [arrow, currentCategoryText];

    let buttonArray = createCategoriesButton(categoryArray);
    let currentCategoryElement = addElements(currentCategory, currentCategoryElements);
    let categorySelectedChildren = [currentCategoryElement, categoryButtons];

    let categorySelectionElement = addElements(categorySelection, categorySelectedChildren);
    let sectionsElement = sections;
    let sandwichSection = createSandwhichSections();
    sandwichSection.forEach(section => sections.innerHTML += section);

    let finalElements = categorySelectionElement.outerHTML + sectionsElement.outerHTML;
    return finalElements;
}






export function renderButtons(bool,main){
    let categoryButtons = main.querySelector(".categoryButtons");
    let newButtons = main.getElementsByClassName("button");

    let newButtonsArray = Array.from(newButtons);
    if(newButtons.length != 0) removeBindings(newButtonsArray,createSections);
    categoryButtons.innerHTML = "";

    if (bool){
        let buttons = createCategoriesButton(categoryArray);
        addElements(categoryButtons,buttons);
        newButtons = main.getElementsByClassName("button");
        newButtonsArray = Array.from(newButtons);
        newButtonsArray.forEach(button => button.mainHolder = main);
        addBindings(newButtonsArray,createSections);

    }
}

function makeSection(newSection,currentCategoryText,text,main){
    let sections = newSection();
    currentCategoryText.textContent = text;
    renderSections(sections,main)
}

function createSections(event){
    let main = event.target.mainHolder;
    let arrow = main.querySelector(".arrow")
    let currentCategoryText = main.querySelector(".currentCategoryText");
    let eventClass = event.target.classList[0];

    if (eventClass == "sandwichesCategory") {
        makeSection(createSandwhichSections,currentCategoryText,"Sandwiches",main)
    } else if (eventClass == "sidesCategory"){
        makeSection(createSidesSection,currentCategoryText,"Sides",main)
    } else if (eventClass == "dessertCategory") {
        makeSection(createDessertSection,currentCategoryText, "Desserts",main)
    }
    renderButtons(false,main);
    arrow.src = arrowDownImage;
}


function renderSections(sections,main){
    console.log(main, "current main")
    let section = main.querySelector(".sections")
    section.innerHTML = ""
    sections.forEach(block => section.innerHTML += block);

}

function createSectionsMenu(imageClass, image, h2Text, pText){
    let sections = createElement("div","section")
    let img = createElement("img", imageClass,image);
    let textSection = createElement("div","textSection");
    let h2 = createElement("h2","h2Text","",h2Text);
    let p = createElement("p","pText","",pText)

    let textSectionElements = [h2,p];
    let newTextSection = addElements(textSection,textSectionElements);
    let sectionElements = [img,newTextSection];
    let newSections = addElements(sections,sectionElements);
    return newSections.outerHTML;

}

function createSandwhichSections(){
    let hamburgerText = "A sandwich that has two buns, made with fresh italian tomatoes, and delecious beef."
    let hamburgerSection = createSectionsMenu("sectionImage hamburgerImage",hamburgerImage,"Hamburger",hamburgerText);
    let cheeseBurgerText = "A sandwich that has two buns, made with fresh italian tomatoes, and delecious beef and cheddar cheese."
    let cheeseBurgerSection = createSectionsMenu("sectionImage cheeseburgerImage",cheeseBurgerImage,"Cheeseburger", cheeseBurgerText);
    let chickenBurgerText ="A sandwich that has two buns and has a chicken patty.";
    let chickenBurgerSection = createSectionsMenu("sectionImage chickenBurgerImage",chickenSandwichImage,"Chicken Sandwich",chickenBurgerText);
    let doubleCheeseburgerText = " sandwich that has two buns with fresh lettuce and italian tomatoes, with two patties."
    let doubleCheeseBurgerSection = createSectionsMenu("sectionImage doubleCheeseBurgerImage", doubleCheeseBurgerImage, "Double Cheeseburger", doubleCheeseburgerText);
    let sandwiches = [hamburgerSection, cheeseBurgerSection,
                      chickenBurgerSection, doubleCheeseBurgerSection]
    return sandwiches
}


function createSidesSection(){
    let friesText = "Potatos cut into wedges topped with salt.";
    let friesSection = createSectionsMenu("sectionImage friesImage",friesImage,"French Fries",friesText);
    let chickenNuggetsText = "Chicken that is cut into a nugget shape.";
    let chickenNuggetsSection = createSectionsMenu("sectionImage chickenImage", chickenNuggetsImage, "Chicken Nuggets",chickenNuggetsText);
    let sides =  [friesSection, chickenNuggetsSection,];
    return sides;
}

function createDessertSection(){
    let icecreamText = "Delecious frozen treat with edible cone.";
    let icecreamSection = createSectionsMenu("sectionImage iceCreamImage",iceCreamImage,"Icecream",icecreamText);
    let millkshakeText = " delecious drink with milk usually mixed with icream.";
    let milkShakeSection = createSectionsMenu("sectionImage milkshakeImage",milkshakeImage,"Milkshake",millkshakeText);
    let desserts = [icecreamSection, milkShakeSection];
    return desserts;
 
}




let menuPage = renderMenuElements();
let bindings = [arrow.className, currentCategoryText.className]

let menuObject = makeElementTemplate(menuPage,[createBindingTemplate(bindings,toggleCategories)]);
export {menuObject}


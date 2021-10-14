import arrowDownImage from "../images/arrowDrop.svg";
import arrowUpImage from "../images/arrowUp.svg";
import hamburgerImage from "../images/hamburger.svg";
import cheeseBurgerImage from "../images/cheeseburger.svg";
import chickenSandwichImage from "../images/chickenSandwhich.svg";
import doubleCheeseBurgerImage from "../images/doublecheeseBurger.svg";
import friesImage from "../images/fries.svg";
import chickenNuggetsImage from "../images/chickenNuggets.svg";
import iceCreamImage from "../images/icecream.svg";
import milkshakeImage from "../images/milkshake.svg";

import {renderSections} from "./index.js"
import {createElementsChildren, setToElement, makeElementTemplate,addBindings,removeBindings} from "./elementEvents.js";

let categoryArray = [{class: "sandwichesCategory", text:"Sandwiches"},
{class: "sidesCategory", text:"Sides"},
{class: "dessertCategory", text: "Desserts"}, ]

let categorySelection = createElement("div","categorySelection");
let currentCategory = createElement("div","currentCategory");
let arrow = createElement("img","arrow",arrowDownImage);
let currentCategoryText = createElement("h2","currentCategoryText","","Sandwiches");
let categoryButtons = createElement("div","categoryButtons");
let sections = createElement("div","sections")
let buttonArray;



function renderMenuElements(){
    categorySelection.innerHTML = "";
    let currentCategoryElements = [arrow, currentCategoryText];

    let buttonArray = createCategoriesButton();

    let currentCategoryElement = addElements(currentCategory, currentCategoryElements);
    let categoryButtonElement = addElements(categoryButtons,buttonArray);
    let categorySelectedChildren = [currentCategoryElement, categoryButtonElement];
    let categorySelectionElement = addElements(categorySelection, categorySelectedChildren);
    let sectionsElement = sections.outerHTML;

    console.log(categorySelectionElement, "categoery selection")
    let finalElements = categorySelectionElement + sectionsElement;
   // console.log(finalElements, "final elements")
    return finalElements;
    


}

function addElements(parentElement,childrenElements){
    childrenElements.forEach(element => parentElement.innerHTML += element.outerHTML); 
    let newElement = parentElement.outerHTML;
    parentElement.innerHTML = "";
    return newElement;

}


function createCategoriesButton (){
    let buttons = [];
    categoryArray.forEach(object => {
       let button =  createElement("button",object.class,"",object.text);
       buttons.push(button);
    })
    return buttons;
    
}




function createElement(element,className,src,content){
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
    if (elementObject.src != ""){
        newElement = document.createElement("img");
        newElement.src = elementObject.src;
        newElement.classList = elementObject.className;
    } else {
        newElement = document.createElement(elementObject.element);
        newElement.classList = elementObject.className;
        newElement.textContent = elementObject.content;
    }
    return newElement;
}


function createSandwhichSections(){
    let hamburgerText = "A sandwich that has two buns, made with fresh italian tomatoes, and delecious beef."
    let hamburgerSection = createSectionsMenu("sectionImage hamburgerImage",hamburgerImage,"hamburger",hamburgerText);
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



let menuElement = renderMenuElements();
let menuObject = makeElementTemplate([menuElement],[]);
console.log(menuObject,"current menu object")
export {menuObject}


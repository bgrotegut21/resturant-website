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

import {createElementsChildren, setToElement, makeElementTemplate, addBindings, removeBindings} from "./elementEvents.js";




let categoryArray = [{class: "sandwichesCategory", text:"Sandwiches"},
{class: "sidesCategory", text:"Sides"},
{class: "dessertCategory", text: "Desserts"}, ]

let categoryButtons;
let currentCategory = true;
let categories;
let categorySelection;
let arrow;
let currentMenuCategory = "sandwiches"


function createCategorySelction (){
    let categorySelection = document.createElement("div");
    categorySelection.setAttribute("class","categorySelection");
    return categorySelection;
}



function createArrow(arrowImage){
    arrow = document.createElement("img")
    arrow.setAttribute("class","arrow");
    arrow.src = arrowImage;
    return arrow;
}

function changeArrowImage(arrowImage){ 
    arrow.src = arrowImage;
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

function setCategorySelction(categorySelection, currentCategory, arrow,currentCategoryText, categoryButtons){
    console.log("setting category selction")
    let currentCategoryItems = [arrow, currentCategoryText];
    console.log(currentCategoryItems, "current category items")
    setToElement(currentCategory,currentCategoryItems);

  
    let categoryItems = [currentCategory, categoryButtons];
    setToElement(categorySelection,categoryItems);
    console.log(categorySelection, "current categoery selection")
    return categorySelection;
}

function createCurrentCategory(){
    let currentCategory = document.createElement("div");
    currentCategory.setAttribute("class","currentCategory" )
    return currentCategory;
}


function createCategorySelectionMenu(){
    categorySelection = createCategorySelction();
    let currentCategory =  createCurrentCategory();
    arrow = createArrow(arrowDownImage)
    let currentCategoryText =  createCurrentCategoryText();
    categoryButtons = createCategoryButtons();
    let bindings = [arrow, currentCategoryText];
    addBindings(bindings,toggleCategories)

    return setCategorySelction(categorySelection,currentCategory,arrow,currentCategoryText,categoryButtons);
}

function shadeButton(button){
    console.log("shading button")
    let grey = "rgb(249, 248, 248)";
    button.style.backgroundColor = grey;
    button.style.borderRadius = "20px";
}


function unshadeCategories(){
    console.log(categories, "current categories")
    categories.forEach(button => button.style.backgroundColor = "white")
}

function checkCurrentCategory(button){
 //   console.log(currentMenuCategory, "current menu category")
    if (currentMenuCategory == "sandwiches"){
      //  console.log(button.getAttribute("class") == "sandwichesCategory","button attribute class")
        if (button.getAttribute("class") == "sandwichesCategory") shadeButton(button)
    } else if (currentMenuCategory == "sides"){
        if(button.getAttribute("class") == "sidesCategory") shadeButton(button);
    } else {
        if (button.getAttribute("class") == "dessertCategory") shadeButton(button);
    }
}

function createButtons(){
    categories = categoryArray.map( item => {
        let button = createElementsChildren("button",item.class,item.text);
        checkCurrentCategory(button);
        return button
    });

}


function createCategories(){
    createButtons();
    addBindings(categories,changeCategory);
    setToElement(categoryButtons, categories);
    return categories;
}

function removeCategories(){
    removeBindings(categories, changeCategory);
    categoryButtons.innerHTML = "";
    
}

function changeCategory(event){
    let button = event.target;
    if(button.getAttribute("class") == "sandwichesCategory") {
        unshadeCategories();
        currentMenuCategory = "sandwiches";
        checkCurrentCategory(button);
        populateSections("sandwichSection")
    } else if (button.getAttribute("class") == "sidesCategory") {
        unshadeCategories();
        currentMenuCategory = "sides"
        checkCurrentCategory(button)
        populateSections("sidesSection")
     } else {
         unshadeCategories();
         currentMenuCategory = "dessert";
         checkCurrentCategory(button);
         populateSections("dessertSection");
     }
    
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
    let sandwichSection = createSections("sections sandwichSection");
    setToElement(sandwichSection, sandwiches)
    return sandwichSection;
}


function createSidesSection(){
    let friesText = "Potatos cut into wedges topped with salt.";
    let friesSection = createSectionsMenu("sectionImage friesImage",friesImage,"French Fries",friesText);
    let chickenNuggetsText = "Chicken that is cut into a nugget shape.";
    let chickenNuggetsSection = createSectionsMenu("sectionImage chickenImage", chickenNuggetsImage, "Chicken Nuggets",chickenNuggetsText);
    let sides =  [friesSection, chickenNuggetsSection,];
    let sidesSection =  createSections("sections sidesSection");
    setToElement(sidesSection,sides);
    return sidesSection;
}

function createDessertSection(){
    let icecreamText = "Delecious frozen treat with edible cone.";
    let icecreamSection = createSectionsMenu("sectionImage iceCreamImage",iceCreamImage,"Icecream",icecreamText);
    let millkshakeText = " delecious drink with milk usually mixed with icream.";
    let milkShakeSection = createSectionsMenu("sectionImage milkshakeImage",milkshakeImage,"Milkshake",millkshakeText);
    let desserts = [icecreamSection, milkShakeSection];
    let dessertSection = createSections("sections dessertSection");
    setToElement(dessertSection,desserts);
    return dessertSection;

}

function populateSections(className){
    if (className == "sandwichSection" ){
        createSandwhichSections();
        
    } else if (className == "sidesSection") {

    } else if (className == "dessertSection"){

    }
}


function toggleCategories(){
    if(currentCategory) {
        changeArrowImage(arrowUpImage);
        createCategories();
    } else {
        changeArrowImage(arrowDownImage);
        removeCategories();
    }
    currentCategory = !currentCategory

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
    return section;
    
}
let menuArray = [createCategorySelectionMenu()];

let menuObject = makeElementTemplate(menuArray,[]);

export {menuObject}

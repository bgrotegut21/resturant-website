import arrowDownImage from "../images/arrowDrop.svg";
import arrowUpImage from "../images/arrowUp.svg";
import hamburgerImage from "../images/hamburger.svg";
import cheeseBurgerImage from "../images/cheeseburger.svg";
import chickenSandwichImage from "../image/chickenSandwhich.svg";
import doubleCheeseBurgerImage from "../images/"

import {createElementsChildren, setToElement} from "./elementEvents.js";



let menuInterface = (
    function (){

        categoryArray = [{class: "sandwichesCategory", text:"Sandwiches"},
        {class: "sidesCategory", text:"Sides"},
        {class: "dessertCategory", text: "Sandwiches"}, ]
        

        function setCategorySelction(categorySelection, currentCategory, arrowDown, arrowUp,currentCategoryText, categoryButtons, categories){
            let currentCategoryItems = [arrowDown, arrowUp, currentCategoryText];
            setToElement(currentCategory,currentCategoryItems);
            setToElement(categoryButtons,categories); 

            let categoryItems = [currentCategory, categoryButtons];
            setToElement(categorySelection,categoryItems);
        }


        function createCategorySelection(){
            let categorySelection = document.createElement("div");
            categorySelection.setAttribute("class","categorySelctions");

            let currentCategory = document.createElement("div");
            currentCategory.setAttribute("class","currentCategory")

            let arrowDown = document.createElement("img");
            arrowDown.setAttribute("class","arrowDown");
            arrowDown.src = arrowDownImage;

            let arrowUp = document.createElement("img");
            arrowUp.setAttribute("class", "arrowUp");
            arrowUp.src = arrowUpImage;

            let currentCategoryText =  document.createElement("h2");
            currentCategoryText.textContent = "Sandwiches";
            currentCategoryText.setAttribute("class","currentCategoryText");

            let categoryButtons = document.createElement("div");
            categoryButtons.setAttribute("class", "categoryButtons");
        
            let categories = categoryArray.map(object => createElementsChildren("button",object.class,object.text));
            setCategorySelction(categorySelection,currentCategory,arrowDown,arrowUp,currentCategoryText,categoryButtons,categories);
        }

        function createSections(className){
            let sections = document.createElement("div");
            sections.setAttribute("class",className);
            return sections;

        }

        function createSections(imageClass,image, divClass,h2Text, pText,){
            let section = document.createElement("div");
            section.setAttribute("class","section");

            let image = do

        }

        function createAllSections(){
            let sections = ["sections sandwichSection", "sections sidesSection","sections desserSection" ];
            let sectionsElement = sections.map(section => createSections(section));



        }

    }
)()
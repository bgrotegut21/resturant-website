import arrowDownImage from "../arrowDrop.svg";
import arrowUpImage from "../arrowUp.svg";
import {createElementsChildren, setToElement} from "elementEvents.js";


let menuInterface = (
    function (){

        categoryArray = [{class: "sandwichesCategory", text:"Sandwiches"},
        {class: "sidesCategory", text:"Sides"},
        {class: "dessertCategory", text: "Sandwiches"}, ]
        

        function setCategorySelction(categorySelction, currentCategory, arrowDown, arrowUp,currentCategoryText, categoryButtons, categories){


            
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
            setCategorySelction(categorySelction,currentCategory,arrowDown,arrowUp,currentCategoryText,categoryButtons,categories);
        }

    }
)()
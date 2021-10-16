import "../styles/home.css";
import "../styles/menu.css";
import "../styles/adress.css";


import arrowDownImage from "../images/arrowDrop.svg";
import arrowUpImage from "../images/arrowUp.svg";
import hamburgerMenuIcon from "../images/menu.svg";
import {contactObject} from  "./contact.js";

import {homeObject} from "./home.js";
import {menuObject,renderButtons} from "./menu.js";


 
import {addBindings,removeBindings, createBindingTemplate,createElement, addElements, createCategoriesButton} from "./elementEvents.js"
 


    //stores text and class names for navigation button
let body = document.body;
let main;
let currentTemplate;

let currentSection = "Home";

let navClassTextObjects = [{class:"home",text:"Home"},
                           {class:"menu",text:"Menu"},
                            {class:"contact", text:"Contact"}
]

//useful values;




function switchTabs(button){
    if (button.target.getAttribute("class") == "home") renderPage(homeObject,"homeSection");
    if (button.target.getAttribute("class") == "menu") renderPage(menuObject,"menuSection") ;
    if (button.target.getAttribute("class") == "contact") renderPage(contactObject,"contactPage");

}

function renderPage(template,className){
    if (typeof currentTemplate != "undefined") {
        if (currentSection == "menuSection" || currentSection == "homeSection") removeEventBindings(currentTemplate,main);
        if (currentSection == "menuSection") renderButtons(false,main);
    }
    currentSection = className;
    main.innerHTML = "";
    main.classList = className;
    main.innerHTML = template.page;
    
    if(currentSection == "menuSection" || currentSection == "homeSection") addEventBindings(template, main);
    currentTemplate = template;
}

export function renderSections(elements){
    let sections = main.querySelector(".sections");
    sections.innerHTML = "";
    elements.forEach(element => sections.innerHTML += element.outerHTML);
}

export function toggleCategories(){
    //checks if buttons exist
    let arrow = main.querySelector(".arrow");
    let buttons = Array.from(main.getElementsByClassName("button"));
    if(buttons.length == 0){
        renderButtons(true,main);
        arrow.src = arrowUpImage;
    } else {
        renderButtons(false,main);
        arrow.src = arrowDownImage;
    }
}


export function switchToMenu(){
    renderPage(menuObject,"menuSection");
}




export function addEventBindings(template,main){
 //   console.log(template, "current template")
    let bindings = findButtonClasses(template,main);
    console.log(bindings,"current bindings")
    bindings.forEach(binding => addBindings(binding.bindingsArray, binding.event));

}

function findButtonClasses(template,main){
   // console.log(template, "current template")
    let newTemplate = template;
    let bindings = [];
    console.log(newTemplate, "current new template")
    newTemplate.array.forEach(eventObject => {
        let currentBindingObjects = [];
        eventObject.bindingsArray.forEach(className => {
            let element = main.getElementsByClassName(className)[0]
            currentBindingObjects.push(element);
        })
        let newBindingObject = createBindingTemplate(currentBindingObjects, eventObject.event);
        bindings.push(newBindingObject);
    })    
    return bindings;
}

export function removeEventBindings(template,main){
    let bindings = findButtonClasses(template,main);
    bindings.forEach(binding => removeBindings(binding.bindingsArray, binding.event));

}

function naviagtionPage(){
    let nav = createElement("nav","defaultNaviagtion");
    let navTitle = createElement("h2","navTitle","","McRonalds");
    let navigation = createElement("div","navigation");
    

}

    

function iniatlizeWebpage(){
    createNavigationMenu();
    main = document.createElement("main")
    setToElement(body,main);
    createFooter();
}



iniatlizeWebpage();
export {main};
  



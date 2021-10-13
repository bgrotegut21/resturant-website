import "../styles/home.css";
import "../styles/menu.css";
import "../styles/adress.css";


import hamburgerMenuIcon from "../images/menu.svg";
import {contactObject} from  "./contact.js";
import {homeObject} from "./home.js";
import { menuObject } from "./menu.js";

import {setToElement,addBindings,createElementsChildren, removeBindings} from "./elementEvents.js"
 


    //stores text and class names for navigation button
let body = document.body;
let main;

let navClassTextObjects = [{class:"home",text:"Home"},
                           {class:"menu",text:"Menu"},
                            {class:"contact", text:"Contact"}
]



function createNavTitle(){
    let navTitle = document.createElement("h2");
    navTitle.textContent = "McRonalds";
    navTitle.setAttribute("class","navTitle");
    return navTitle;

}

function createNavigation(){
    let navigation = document.createElement("div");
    navigation.setAttribute("class","navigation")
    return navigation

}

function createBurgerMenu(){
    let burgerMenu = document.createElement("img");
    burgerMenu.src = hamburgerMenuIcon;
    burgerMenu.alt = "Hamburger Menu";
    burgerMenu.setAttribute("class","hamburgerMenu")
    return burgerMenu;

}


function createNavigationMenu(){
    let nav = document.createElement("nav")
    let navigation = createNavigation();
    let navTitle = createNavTitle();
    let burgerMenu = createBurgerMenu();

    let navigationButtons = navClassTextObjects.map(buttonObject => createElementsChildren("button",buttonObject.class,buttonObject.text));
    let navArray = [navTitle, navigation, burgerMenu];

    setToElement(navigation,navigationButtons);
    setToElement(nav,navArray)
    setToElement(body,nav);
    addBindings(navigationButtons,switchTabs);

}


function switchTabs(button){
    console.log(menuObject, "menu object")
    if (button.target.getAttribute("class") == "home") console.log("home menu") //renderMain(homeObject, "homeSection")
    if (button.target.getAttribute("class") == "menu") renderMenu(menuObject,"menuSection")
    if (button.target.getAttribute("class") == "contact") console.log("contact") //renderMain(contactObject,"contactPage")

}



export function changeToMenu(event){
   // console.log("changing to menu")
    renderMenu(menuObject,"menuSection")
    removeEventBindings(homeObject);
    removeBindings(event.target,changeToMenu);

}

function setEvents (){
   // console.log("setting events");
}

function renderMenu(template,className){
    main.innerHTML = "";
    main.classList = className;
    template.array.forEach(elements => main.appendChild(elements));
  //  console.log(template)
    removeEventBindings(template,main)
    addEventBindings(template,main);
}

export function renderSections(elements){
    let sections = main.querySelector(".sections");
    
    sections.innerHTML = "";
    elements.forEach(element => sections.innerHTML += element.outerHTML);
}

 function renderMain(template, className){
    main.classList = className;
    main.innerHTML = "";
    template.array.forEach(element => main.innerHTML += element.outerHTML)
   // console.log(template.events.length, "template event length")
    if (template.events.length > 0) {
        addEventBindings(template,main)
    }
}



export function addEventBindings(template,main){
 //   console.log(template, "current template")
    let newTemplate = findButtonClasses(template,main);
    newTemplate.events.forEach(eventObject => addBindings(eventObject.bindingsArray, eventObject.event));
}

function findButtonClasses(template,main){
   // console.log(template, "current template")
    let newTemplate = template;
    console.log(newTemplate, "new template")
    newTemplate.events.forEach(eventObject => {
        eventObject.bindingsArray = eventObject.bindingsArray.map(
            className => {
                let newElement = main.getElementsByClassName(className)[0];
                return newElement;
            }
        )
    })
    return newTemplate;
}

export function removeEventBindings(template,main){
    let newTemplate = findButtonClasses(template,main);
    newTemplate.events.forEach(eventObject => removeBindings(eventObject.bindingsArray, eventObject.event));

}

    
function  createFooter() {
    let footer = document.createElement("footer");
    let paragraph = document.createElement("p");
    paragraph.setAttribute("class","footerText");
    paragraph.innerHTML = "Copyright &copy; 2021 Brayden Grotegut";

    setToElement(footer,paragraph); 
    setToElement(body,footer);
}


function iniatlizeWebpage(){
    createNavigationMenu();
    main = document.createElement("main")
    setToElement(body,main);
    createFooter();

}

iniatlizeWebpage();


  



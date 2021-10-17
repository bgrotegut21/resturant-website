import "../styles/home.css";
import "../styles/menu.css";
import "../styles/adress.css";


import arrowDownImage from "../images/arrowDrop.svg";
import arrowUpImage from "../images/arrowUp.svg";
import hamburgerMenuIcon from "../images/menu.svg";
import {contactObject} from  "./contact.js";


import {menuObject,renderButtons} from "./menu.js";
import {homeObject} from "./home.js";

 
import {addBindings,removeBindings, createBindingTemplate,createElement, addElements, createCategoriesButton, makeElementTemplate} from "./elementEvents.js"
 


let body = document.body;
let main;
let currentTemplate;

let currentSection = "Home";

let navClassTextObjects = [{class:"home",text:"Home"},
                           {class:"menu",text:"Menu"},
                            {class:"contact", text:"Contact"}
]

let hamburgerNaviationObjects = [{class: "home2 hamburgerButton",text:"Home"}, {class: "menu3 hamburgerButton", text:"Menu"},
                                 {class: "contact3 hamburgerButton", text: "Contact" }
]





function switchTabs(button){
    let buttonClass = button.target.getAttribute("class");
    if (buttonClass == "home" || buttonClass == "home2 hamburgerButton") renderPage(homeObject,"homeSection");
    if (buttonClass == "menu" || buttonClass == "menu3 hamburgerButton") renderPage(menuObject,"menuSection") ;
    if (buttonClass == "contact" || buttonClass == "contact3 hamburgerButton") renderPage(contactObject,"contactPage");

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
    renderHamburgerMenuButtons(false);
}




export function addEventBindings(template,main){
    let bindings = findButtonClasses(template,main);
    bindings.forEach(binding => addBindings(binding.bindingsArray, binding.event));
}

function findButtonClasses(template,main){
    let newTemplate = template;
    let bindings = [];
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

function renderHamburgerMenuButtons(bool){
    let burgerNav = body.querySelector(".hamburgerNavigation");

    let burgerButtons = burgerNav.getElementsByClassName("hamburgerButton");
    let burgerArray = Array.from(burgerButtons);
    if (burgerButtons.length != 0) removeBindings(burgerArray,switchTabs);
    burgerNav.innerHTML = "";
    if (bool){
        let hamburgerMenuButtons = createCategoriesButton(hamburgerNaviationObjects);
        hamburgerMenuButtons.forEach(button => burgerNav.innerHTML += button.outerHTML);
        let burgerButtons = burgerNav.getElementsByClassName("hamburgerButton");
        let burgerArray = Array.from(burgerButtons);
        addBindings(burgerArray, closeTabs);
    }
    
}

function closeTabs(event){
    switchTabs(event);
    renderHamburgerMenuButtons(false);
}

function toggleMenu(){
   let burgerButtons = body.getElementsByClassName("hamburgerButton");
   let burgerArray = Array.from(burgerButtons);
   if (burgerArray.length > 0) renderHamburgerMenuButtons(false);
   else renderHamburgerMenuButtons(true);
}


function renderNavigationPage(){
    let nav = createElement("nav","defaultNaviagtion");
    let navTitle = createElement("h2","navTitle","","McRonalds");
    let navigation = createElement("div","navigation");
    let navigationButtons = createCategoriesButton(navClassTextObjects);
    let hamburgerMenu = createElement("img","hamburgerMenu",hamburgerMenuIcon);
    let hamburgerNavigation = createElement("div","hamburgerNavigation")

    let footer = createElement("footer","footer");
    let footerText = createElement("p","footerText","","All code and graphics made by Brayden Grotegut");
    
    let main = createElement("main","noSection");

    addElements(navigation, navigationButtons);
    let navElements = [navTitle, navigation, hamburgerMenu];
    addElements(nav,navElements);
    addElements(footer, [footerText]);

    let elementText = "";
    let elements = [nav,hamburgerNavigation, main, footer];
    elements.forEach(element => elementText += element.outerHTML);


    let bindings = ["home","menu","contact"];
    let hamburgerMenuBindings = ["hamburgerMenu"];

    let navigationObject = makeElementTemplate(elementText,[createBindingTemplate(bindings,switchTabs), createBindingTemplate(hamburgerMenuBindings,toggleMenu)]);
    return navigationObject;
}


function checkNavigationMediaQuery(media){
    if (media.matches){
        renderHamburgerMenuButtons(false);
    }
}

export function iniatlizeWebpage(){

    let navigationObject = renderNavigationPage();
    body.innerHTML += navigationObject.page;
    addEventBindings(navigationObject,body);
    main = body.querySelector("main")
    renderPage(homeObject, "homeSection")
}


let currentMedia =  window.matchMedia("(min-width:421px)");
currentMedia.addEventListener("change",checkNavigationMediaQuery)



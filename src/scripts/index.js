import "../styles/home.css";
import "../styles/menu.css";
import "../styles/adress.css";


import hamburgerMenuIcon from "../images/menu.svg";
import {contactObject} from  "./contact.js";
import {homeObject} from "./home.js";
import { menuObject } from "./menu.js";

import {setToElement,addBindings,createElementsChildren} from "./elementEvents.js"


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
    if (button.target.getAttribute("class") == "home") createMain(homeObject,"homeSection")
    if (button.target.getAttribute("class") == "menu") createMain(menuObject,"menuSection")
    if (button.target.getAttribute("class") == "contact") createMain(contactObject,"contactPage")

}


function deleteMain(){
    main.innerHTML = "";
}

function setEvents (){
    console.log("setting events");
}
    
function createMain(template,className,){
    deleteMain()
    main.setAttribute("class",className);
    setToElement(main,template.array);
    if (template.events.length > 1) setEvents();
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


  



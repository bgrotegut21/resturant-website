import "../styles/home.css";
import "../styles/menu.css";
import "../styles/adress.css";

import hamburgerMenuIcon from "../images/menu.svg";
import {contactInterface} from  "./contact.js";

import {setToElement} from "./elementEvents.js"

let mainInterface = (function(){
    //stores text and class names for navigation button
    let body = document.body;
    let main;


    let navClassTextObjects = [{class:"home",text:"Home"},
                              {class:"menu",text:"Menu"},
                              {class:"contact", text:"Contact"}
]

    function createNavigationChildren(className,buttonText){
       let navButton = document.createElement("button");
       navButton.setAttribute("class",className);
       navButton.textContent =buttonText;
       return navButton;

    }


    function createNavigation(){
        let nav = document.createElement("nav")
        let navTitle = document.createElement("h2");
        navTitle.textContent = "McRonalds";
        navTitle.setAttribute("class","navTitle");

        let navigation = document.createElement("div");
        navigation.setAttribute("class","navigation")

        let navigationButtons = navClassTextObjects.map(buttonObject => createNavigationChildren(buttonObject.class,buttonObject.text));
        let burgerMenu = document.createElement("img");
        burgerMenu.src = hamburgerMenuIcon;
        burgerMenu.alt = "Hamburger Menu";
        burgerMenu.setAttribute("class","hamburgerMenu")


        let navArray = [navTitle, navigation, burgerMenu];

        setToElement(navigation,navigationButtons);
        setToElement(nav,navArray)
        setToElement(body,nav);
        addBindings(navigationButtons);
    }


    function switchTabs(button){
        if (button.target.getAttribute("class") == "home") console.log("home");
        if (button.target.getAttribute("class") == "menu") console.log("menu");
        if (button.target.getAttribute("class") == "contact") createMain(contactInterface,"contactPage")

    }


    
    function createMain(array,className){
        main.setAttribute("class",className);
        setToElement(main,array);
    }

    

    function addBindings(array){
        array.forEach(button => button.addEventListener("click",switchTabs))
    }



    function  createFooter() {
        let footer = document.createElement("footer");
        let paragraph = document.createElement("p");
        paragraph.setAttribute("class","footerText");
        paragraph.innerHTML = "Copyright &copy; 2021 Brayden Grotegut";

        setToElement(footer,paragraph); 
        setToElement(body,footer);
    }



    createNavigation();
    main = document.createElement("main")
    setToElement(body,main);
    createFooter();
  
})();


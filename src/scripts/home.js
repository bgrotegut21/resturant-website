


import {makeElementTemplate,addElements,createElement,createBindingTemplate} from "./elementEvents.js"
import {switchToMenu} from "./navigation.js";


let sectionsClassNames = [{className:"hamburgerIcon",text:"Hamburger"},{className:"icecreamIcon",text:"Icecream"}]


function renderHomeElements(){
    let banner = createElement("div","banner");
    let burgerSaleMenu = createElement("div","burgerSaleMenu");
    let tastyBurgerText = createElement("h1","h1Text","","Tasty Burger")
    let halfOffText = createElement("h2","h2Text","","50% Off!");
    let seeMenu = createElement("button","seeMenu","","See Menu");
    let popularItems = createElement("div","popularItems");
    let popularItemsText = createElement("h2","h2Text","","Popular Items");
    let itemsElement = createElement("div","items");
    let items = sectionsClassNames.map(object => createSections(object.className, object.text));

    let burgerSaleMenuItems = [tastyBurgerText, halfOffText,seeMenu];
    
    banner.innerHTML = "";
    popularItems.innerHTML = "";

    addElements(burgerSaleMenu, burgerSaleMenuItems)
    addElements(banner, [burgerSaleMenu]);

    items.forEach(item => itemsElement.innerHTML += item);
    let popularItemsElements = [popularItemsText, itemsElement];
    addElements(popularItems, popularItemsElements);
    return banner.outerHTML + popularItems.outerHTML;
}

function createSections(className,text){
    let item = createElement("div",`item ${className}`);
    let itemText  = createElement("h2","itemText","",text);

    addElements(item,[itemText]);
    return item.outerHTML;
    

}


let homePage = renderHomeElements();
let bindings = ["seeMenu"]


let homeObject = makeElementTemplate(homePage,[createBindingTemplate(bindings,switchToMenu)])
export {homeObject};
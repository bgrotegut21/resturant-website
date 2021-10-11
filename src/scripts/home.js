import {setToElement,makeElementTemplate} from "./elementEvents.js"

let seeMenu;

function createBanner(){
    let banner = document.createElement("div");
    banner.setAttribute("class","banner");
    return banner;

}

function createBurgerSaleMenu(){
    let burgerSaleMenu = document.createElement("div");
    burgerSaleMenu.setAttribute("class","burgerSaleMenu");
    return burgerSaleMenu;
}

function createTasteBurgerText(){
    let tasteBurgerText = document.createElement("h1");
    tasteBurgerText.textContent = "Tasty Burger";
    return tasteBurgerText;

}

function createPercentOffText(){
    let percentOffText = document.createElement("h2");
    percentOffText.textContent = "50% Off!";
    return percentOffText;

}

function createSeeMenu(){
    seeMenu = document.createElement("button");
    seeMenu.setAttribute("class","seeMenu");
    seeMenu.innerHTML = "See Menu";
    return seeMenu;

}

function createPopularItems(){
    let popularItems = document.createElement("div");  
    popularItems.setAttribute("class","popularItems");
    return popularItems;
}

function createPopularItemText(){
    let popularItemsText = document.createElement("h2");
    popularItemsText.textContent = "Popular Items";
    return popularItemsText;

}

function createItems(){
    let items = document.createElement("div");
    items.setAttribute("class","items")
    return items;

}

function createHamburgerIcon (){
    let hamburgerIcon = document.createElement("div");
    hamburgerIcon.setAttribute("class", "item hamburgerIcon");
    return hamburgerIcon;

}

function createItemText(){
    let itemText = document.createElement("h2");
    itemText.setAttribute("class","itemText");
    itemText.textContent = "Hamburger"
    return itemText;
}

function createIcecreamIcon(){
    let icecreamIcon = document.createElement("div");
    icecreamIcon.setAttribute("class","item icecreamIcon");
    return icecreamIcon;

}

function createItemText2(){
    let itemText2 = document.createElement("h2");
    itemText2.setAttribute("class","itemText")
    itemText2.textContent = "Icecream"
    return itemText2;
    
}


function createBannerMenu(){
    let tasteBurgerText = createTasteBurgerText();
    let percentOffText = createPercentOffText();
    let seeMenu = createSeeMenu();
    let banner = createBanner();
    let burgerSaleMenu = createBurgerSaleMenu();

    let elementsArray = [tasteBurgerText, percentOffText, seeMenu];
    setToElement(burgerSaleMenu,elementsArray);
    setToElement(banner,burgerSaleMenu);
    return banner;
    }


function setPopularItems (popularItems, popularItemsText,items,hamburgerIcon,itemText,icecreamIcon,itemText2){
        setToElement(hamburgerIcon,itemText);
        setToElement(icecreamIcon,itemText2);
        let icons = [hamburgerIcon,icecreamIcon]
        setToElement(items,icons);
        let itemsArray = [popularItemsText,items];
        setToElement(popularItems,itemsArray);
        return popularItems;
}




function createPopularItemsMenu(){
    let popularItems = createPopularItems();
    let popularItemsText = createPopularItemText();
    let items = createItems();
    let hamburgerIcon = createHamburgerIcon();
    let itemText = createItemText();
    let icecreamIcon = createIcecreamIcon();
    let itemText2 = createItemText2();
    
    return setPopularItems(popularItems,popularItemsText,items,hamburgerIcon,itemText,icecreamIcon,itemText2)
}



let structureArray = [createBannerMenu(),createPopularItemsMenu()];
let homeObject = makeElementTemplate(structureArray,[]);
export {homeObject}; 


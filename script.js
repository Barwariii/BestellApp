function init() {
    render();
}


function render() {
    renderMenus();
    renderBasket();
}

// render menus elements
function renderMenus() {
    let menusRef = document.getElementById('content');
    menusRef.innerHTML= "";
    for (let indexMenus = 0; indexMenus < menus.length; indexMenus++) {
        const menusElements = menus[indexMenus];
        
        menusRef.innerHTML += getMenusTemplate(menusElements, indexMenus);
    }
}


// render basket elements
function renderBasket() {
    let basketRef = document.getElementById('basket_content');
    basketRef.innerHTML= "";
    for (let indexBasket = 0; indexBasket < basket.length; indexBasket++) {
        const basketElements = basket[indexBasket];
        
        basketRef.innerHTML += getBasketsTemplate(basketElements, indexBasket);
    }
}


function checkMenu(singleMenue) {
    return singleMenue.dishes == menus[globalIndex].dishes;
}


// add elements to basket and reder it
function addToBasket(indexBasket) {
    globalIndex = indexBasket;
    let basketIndex = basket.findIndex(checkMenu);
    console.log(basketIndex);

    let chosedDishes = menus[indexBasket];
    if (basketIndex == -1) {
        basket.push(chosedDishes);
        console.log("wir sind im if part");
        
    } else {
        console.log("wir sind im else part");
        basket[basketIndex].amounts++;
    }
    

    // let chosedDishes = menus[indexBasket];
    // basket.push(chosedDishes);

    renderBasket();
}


// delete elements from basket and render it
function deleteBtn(indexdeleteDishes) {
    basket.splice(indexdeleteDishes, 1);
    
    renderBasket();
}


// amount btns
function plusDishesBtn(basketIndex) {
    // let myOrderAmount = basket.amounts;
    if (basket[basketIndex].amounts >= 1) {
        basket[basketIndex].amounts++;
        renderBasket();
    }
}


function minusDishesBtn(basketIndex) {
    // let myOrderAmount = basket.amounts;
    if (basket[basketIndex].amounts >= 1) {
        basket[basketIndex].amounts--;
        renderBasket();
    }
}

// function getMenuIndex(basket) {
//     let index = basket.indexOf(basket);
//     return index;
// }
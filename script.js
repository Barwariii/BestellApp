function init() {
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
    let basketRef = document.getElementById('basket_div');
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

    // let chosedDishes = menus[indexBasket];
    if (basketIndex == -1) {
        basket.push({
            "dishes": menus[indexBasket].dishes,
            "prices": menus[indexBasket].prices,
            "amounts": menus[indexBasket].amounts,
            "calcu": menus[indexBasket].price //!!!!!!!!!!!!
        });
        console.log("wir sind im if part");
        
    } else {
        console.log("wir sind im else part");
        basket[basketIndex].amounts++;
    }

    renderBasket();
}

function totalPrice(params) {
    
}


// delete elements from basket and render it
function deleteBtn(indexdeleteDishes) {
    basket.splice(indexdeleteDishes, 1);
    renderBasket(indexdeleteDishes);
}


// amount btns
function plusDishesBtn(basketIndex) {
    // let myOrderAmount = basket.amounts;
    if (basket[basketIndex].amounts >= 1) {
        basket[basketIndex].amounts++;
        basket[basketIndex].price += basket[basketIndex].price; //!!!!!!!!!!!!
        renderBasket();
    }
}


function minusDishesBtn(basketIndex, indexdeleteDishes) {
    // let myOrderAmount = basket.amounts;
    if (basket[basketIndex].amounts > 1) {
        basket[basketIndex].amounts--;
    } else {
        basket[basketIndex].amounts < 1;
        basket.splice(indexdeleteDishes, 1);
    }
    renderBasket();
}
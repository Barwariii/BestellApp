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
    totalPrice(indexBasket);
}


//total price (gesamtpreise)
function totalPrice(indexPrice) {
    let endPrice = document.getElementById('totalPrice');
    endPrice.innerHTML= "";
    let endTotalPrice = 0;
    for (let indexPrice = 0; indexPrice < basket.length; indexPrice++) {
        const element = basket[indexPrice];
        endTotalPrice += basket[indexPrice].amounts * element.prices;
    }
    renderBasket(indexPrice);
    endPrice.innerHTML = endTotalPrice.toFixed(2);
}


// delete elements from basket and render it
function deleteBtn(indexdeleteDishes) {
    basket.splice(indexdeleteDishes, 1);
    renderBasket(indexdeleteDishes);
    totalPrice();
}


// amount btns
function plusDishesBtn(basketIndex, indexPrice) {
    // let myOrderAmount = basket.amounts;
    if (basket[basketIndex].amounts >= 1) {
        basket[basketIndex].amounts++;
        basket[basketIndex].price += basket[basketIndex].price; //!!!!!!!!!!!!
        renderBasket();
        totalPrice(indexPrice);
    }
}


function minusDishesBtn(basketIndex, indexdeleteDishes, indexPrice) {
    // let myOrderAmount = basket.amounts;
    if (basket[basketIndex].amounts > 1) {
        basket[basketIndex].amounts--;
    } else {
        basket[basketIndex].amounts < 1;
        basket.splice(basketIndex, 1);
    }
    renderBasket();
    totalPrice(indexPrice);
}
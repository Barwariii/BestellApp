function init() {
    render();
}


function render() {
    renderMenus();
    renderBasket();
}

function renderMenus() {
    let menusRef = document.getElementById('content');
    menusRef.innerHTML= "";
    for (let indexMenus = 0; indexMenus < menus.length; indexMenus++) {
        const menusElements = menus[indexMenus];
        
        menusRef.innerHTML += getMenusTemplate(menusElements, indexMenus);
    }
}


function renderBasket() {
    let basketRef = document.getElementById('basket_content');
    basketRef.innerHTML= "";
    for (let indexBasket = 0; indexBasket < basket.length; indexBasket++) {
        const basketElements = basket[indexBasket];
        
        basketRef.innerHTML += getBasketsTemplate(basketElements, indexBasket);
    }
}


function addToBasket(indexBasket) {
    let chosedDishes = menus[indexBasket];
    basket.push(chosedDishes);

    render();
}
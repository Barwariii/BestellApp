function getMenusTemplate(menusElements, indexMenus) {
    return /*html*/ `
        <div id="menus_box${indexMenus}" class="menus-box">
            <div class="addToBasketBtn">
            <button onclick="addToBasketBtn${indexMenus}">+</button>
            </div>
            <div id="menu_info">
                <h3>${menusElements.disches}</h3>
                <p>${menusElements.info}</p>
                <p>preis: ${menusElements.prices.toFixed(2)} €</p>
            </div>
        </div>
        `
}

function getBasketsTemplate(basketElements, indexBasket) {
    return /*html*/ `
    <div id="basket_box${indexBasket}" class="basket-box">
        <div id="basket_dishes" class="basket-dishes">
            <h6>${basketElements.disches}</h6>
            
            <div class="amount-preis">
            <div class="basket-btn">
            <button onclick="dishesPownBtn${indexBasket}">-</button>
            <p>${basketElements.amounts}x</p>
            <button onclick="dishesUpBtn${indexBasket}">+</button>
            </div>
            <p class="basket-preisec">preis: ${basketElements.prices.toFixed(2)} €</p>
            </div>
        </div>
    </div>
    `
}
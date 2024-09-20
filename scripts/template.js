function getMenusTemplate(menusElements, indexMenus) {
    return /*html*/ `
        <div id="menus_box${indexMenus}" class="menus-box">
            <div class="addToBasketBtn">
            <button onclick="addToBasket(${indexMenus})">+</button>
            </div>
            <div id="menu_info">
                <h3>${menusElements.dishes}</h3>
                <p>${menusElements.info}</p>
                <p>preis: ${menusElements.prices.toFixed(2)} €</p>
            </div>
        </div>
        `
}

function getBasketsTemplate(basketElements, indexBasket) {
    return /*html*/ `
    <div id="basket_box" class="basket-box">
        <div id="basket_dishes${indexBasket}" class="basket-dishes">
            <h6>${basketElements.dishes}</h6>
            
            <div class="amount-price">
                <div class="basket-btn">
                    <img onclick="minusDishesBtn(${indexBasket})" src="./icn/remove.png" alt="">
                    <!-- <button onclick="dishesDownBtn(${indexBasket})">-</button> -->
                    <p>${basketElements.amounts}x</p>
                    <img id="upAmount" onclick="plusDishesBtn(${indexBasket})" src="./icn/add.png" alt="">
                    <!-- <button onclick="dishesUpBtn(${indexBasket})">+</button> -->
                </div>
                <p class="basket-prices">preis: ${basketElements.prices.toFixed(2)} €</p>
                <img onclick="deleteBtn(${indexBasket})" class="delete-icn" src="./icn/delete.png" alt="">
            </div>
        </div>
    </div>
    `
}
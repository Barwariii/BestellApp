let menus = [
    {
        "dishes": "Hawaiisalat",
        "info": "gemischter Salat mit Vorderschinken, Käse, Ananas und Dressing",
        "prices": 7.90,
        "amounts": 1
    },
    {
        "dishes": "Pizzabrot",
        "info": "mit Tomatensauce, Sardellen und Knoblauch",
        "prices": 6.20,
        "amounts": 3
    },
    {
        "dishes": "Pizza Margherita",
        "info": "Tomaten, Käse",
        "prices": 8.20,
        "amounts": 5
    },
    {
        "dishes": "Rigatoni al forno",
        "info": "mit Vorderschinken, Champignons, Erbsen in Fleisch- und Tomatensahnesauce überbacken",
        "prices": 9.40,
        "amounts": 2
    },
    {
        "dishes": "Insalata nizzarda",
        "info": "gemischter Salat mit Vorderschinken, Käse, Ei, Thunfisch und Dressing",
        "prices": 9.80,
        "amounts": 4
    }
]


let basket = [

]

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
let menus = [
    {
        "disches": "Hawaiisalat",
        "info": "gemischter Salat mit Vorderschinken, Käse, Ananas und Dressing",
        "prices": 7.90,
        "amounts": 1
    },
    {
        "disches": "Pizzabrot",
        "info": "mit Tomatensauce, Sardellen und Knoblauch",
        "prices": 6.20,
        "amounts": 3
    },
    {
        "disches": "Pizza Margherita",
        "info": "Tomaten, Käse",
        "prices": 8.20,
        "amounts": 5
    },
    {
        "disches": "Rigatoni al forno",
        "info": "mit Vorderschinken, Champignons, Erbsen in Fleisch- und Tomatensahnesauce überbacken",
        "prices": 9.40,
        "amounts": 2
    },
    {
        "disches": "Insalata nizzarda",
        "info": "gemischter Salat mit Vorderschinken, Käse, Ei, Thunfisch und Dressing",
        "prices": 9.80,
        "amounts": 4
    }
]


let basket = [
    {
        "disches": "Hawaiisalat",
        "info": "gemischter Salat mit Vorderschinken, Käse, Ananas und Dressing",
        "prices": 7.90,
        "amounts": 1
    }
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
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

function init() {
    let menusRef = document.getElementById('content');
    menusRef.innerHTML= "";
    for (let indexMenus = 0; indexMenus < menus.length; indexMenus++) {
        const element = menus[indexMenus];
        
        menusRef.innerHTML += /*html*/ `
        <div id="menus-box${indexMenus}" class="menus-box">
            <div class="btn">
            <button onclick="addToBasketBtn${indexMenus}">+</button>
            </div>
            <div id="menu-info">
                <h3>${element.disches}</h3>
                <p>${element.info}</p>
                <p>preis: ${element.prices} €</p>
            </div>
        </div>
        `
    }
}
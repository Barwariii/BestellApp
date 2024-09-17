let menus = [
    {
        "disches": "Hawaiisalat",
        "prices": 7.90,
        "amounts": 1
    },
    {
        "disches": "Pizzabrot",
        "prices": 6.20,
        "amounts": 3
    },
    {
        "disches": "Pizza Margherita",
        "prices": 8.20,
        "amounts": 5
    },
    {
        "disches": "Rigatoni al forno",
        "prices": 9.40,
        "amounts": 2
    },
    {
        "disches": "Insalata nizzarda",
        "prices": 9.80,
        "amounts": 4
    }
]



// let disches = ["Hawaiisalat", "Pizzabrot", "Pizza Margherita", "Rigatoni al forno", "Insalata nizzarda"];

// let prices = [7.90, 6.20, 8.20, 9.40, 9.80];

// let amounts = [1, 3, 5, 2, 4];


// function init() {
//     render();
// }


// function render() {
//     main();
// }


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
                <p>preis: ${element.prices}€</p>
            </div>
        </div>
        `
    }
}
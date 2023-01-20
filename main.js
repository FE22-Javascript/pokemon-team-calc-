const pokemons = [{
    id: 1,
    name: 'Bulbasaur',
    cp: 439
},
{
    id: 37,
    name: 'Vulpix',
    cp: 194
},
{
    id: 134,
    name: 'Vaporeon',
    cp: 2469
},
{
    id: 130,
    name: 'Gyarados',
    cp: 2406
},
{
    id: 25,
    name: 'Pikachu',
    cp: 455
},
{
    id: 27,
    name: 'Sandshrew',
    cp: 710
},
{
    id: 52,
    name: 'Meowth',
    cp: 121
},
];
let chosenPokemons = [];
let availablePokemonsContainer = document.querySelector('available');
let chosenPokemonsContainer = document.querySelector('chosen');

// kallar på funktionen för att rendera pokemons ut till ui't när sidan laddas
renderPokemonsUI(pokemons);

// funktion för att rendera pokemons
function renderPokemonsUI(list) {
    list.forEach(pokemon => {
        let el = document.createElement('article');
        el.setAttribute('id', pokemon.id);
        el.setAttribute('class', 'pokemon');
        el.innerHTML = `
            <img src="https://www.muraldecal.com/en/img/pokgo03-png/folder/products-detalle-png/stickers-poke-ball---pokemon.png" alt="${pokemon.name}">
            <section>
                <h2>${pokemon.name}</h2>
                <p>${pokemon.cp} CP</p>
            </section>
        `;
        document.querySelector('.available').appendChild(el)
    });
};


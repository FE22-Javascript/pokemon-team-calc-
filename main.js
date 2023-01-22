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
let availablePokemonsContainer = document.querySelector('.available');
let chosenPokemonsContainer = document.querySelector('.chosen');

// kallar på funktionen för att rendera pokemons ut till ui't när sidan laddas
renderPokemonsUI(pokemons, 'available');

// funktion för att rendera pokemons
function renderPokemonsUI(pokemonlist, target) {
    pokemonlist.forEach(pokemon => {
        let el = document.createElement('article');
        el.setAttribute('class', 'pokemon');
        el.innerHTML = `
            <img src="https://www.muraldecal.com/en/img/pokgo03-png/folder/products-detalle-png/stickers-poke-ball---pokemon.png" alt="${pokemon.name}">
            <section>
                <h2>${pokemon.name}</h2>
                <p>${pokemon.cp} CP</p>
            </section>
        `;
        // lägg på eventlyssnare på varje pokemon
        el.addEventListener('click', () => {
            let toArray;
            let fromArray;
            if (target === 'available') {
                toArray = chosenPokemons;
                fromArray = pokemons;
            } else {
                toArray = pokemons;
                fromArray = chosenPokemons;
            }
            handleClickedPokemon(fromArray, toArray, pokemon);
            updateUI();
        });
        document.querySelector(`.${target}`).appendChild(el);
    });
};

function handleClickedPokemon(fromArray, toArray, pokemon) {
    // hitta vart pokemonen ligger i listan som den skall tas ifrån
    let index = fromArray.findIndex((p) => p.id === pokemon.id);
    fromArray.splice(index, 1);
    // pusha pokemonen till nya listan
    toArray.push(pokemon);
};

function updateUI() {
    // töm listorna i UI't
    availablePokemonsContainer.innerHTML = "";
    chosenPokemonsContainer.innerHTML = "";
    // lägg in pokemons i de olika listorna i UI't
    renderPokemonsUI(pokemons, 'available');
    renderPokemonsUI(chosenPokemons, 'chosen');
    document.querySelector('.total').innerHTML = countCP();
};

function countCP() {
    let sum = 0;
    chosenPokemons.forEach((pokemon) => {
        sum = sum + pokemon.cp;
    });
    return sum;
}
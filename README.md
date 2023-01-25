# Pokemon Team Calculator
Endagame: Samla ihop pokémons till ett team och summera den totala combat powern.

Gå efter [Figma-skissen](https://www.figma.com/file/1BR2CXM8cH1yXvQx89KxI1/pokemon-list-exercise?node-id=0%3A1&t=zbFjxGWWV4NaQDvw-0).

Välja pokémon genom att klicka på ett pokémon-kort. Det skall sedan lägga sig i listan över valda pokémons och summan på CP skall räknas ut.

## Steg 1
För varje pokémon i listan skall du skapa ett html-element i javascript och rendera den i din html

## Steg 2
Lägg på eventlyssnare på varje pokémon där den valde pokémonen hamnar i en ny lista

## Steg 3
Summera varje pokémons CP och skriv ut i din html

## Steg 4
Man ska kunna klicka på de valda pokémonsen i sin list och så åker de tillbaka till den första listan istället

```
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
]
```

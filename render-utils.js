export function renderPokemonDetail(poke) {
    const pokemonEl = document.createElement('div');
    const pokemonIMG = document.createElement('img');
    const pokemonColor = document.createElement('p');
    const pokemonNumber = document.createElement('p');
    const PokemonEvo = document.createElement('p');
    const pokemonName = document.createElement('p');

    pokemonIMG.src = `../assets/${poke.name}.jpg`;
    pokemonColor.textContent = `Color: ${poke.color}`;
    pokemonNumber.textContent = `Pokedoex #: ${poke.number}`;
    PokemonEvo.textContent = `Next Evolution: ${poke.next_evolution}`;
    pokemonName.textContent = `Name: ${poke.name}`;

    pokemonEl.classList.add('pokemon');

    pokemonEl.append(pokemonColor, pokemonIMG, pokemonNumber, PokemonEvo);

    return pokemonEl;


}

export function renderPokemon(poke) {
    const pokemonEl = document.createElement('div');
    const link = document.createElement('a');
    const img = document.createElement('img');
    const name = document.createElement('p');

    pokemonEl.classList.add('pokemon-main');

    name.textContent = poke.name;
    img.src = `../assets/${poke.name}.jpg`;
    link.href = `./pokemon/?id=${poke.id}`;

    link.append(name, img);

    pokemonEl.append(link);

    return pokemonEl;
}
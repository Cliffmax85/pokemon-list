// import functions and grab DOM elements
import { renderPokemon } from './render-utils.js';
import { getAllPokemon } from './fetch-utils.js';
// let state
const pokemonContainerEl = document.querySelector('.pokemon');

window.addEventListener('load', async(e) => {
    e.preventDefault();
  
    const pokemons = await getAllPokemon();

    for (let poke of pokemons) {
        const pokemonEl = renderPokemon(poke);
        pokemonContainerEl.append(pokemonEl);
    }  
});
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

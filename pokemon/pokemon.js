import { getPokemon } from '../fetch-utils.js';
import { renderPokemonDetail } from '../render-utils.js';

const pokemonDetail = document.querySelector('.pokemon');

window.addEventListener('load', async(e) => {
    e.preventDefault();
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const poke = await getPokemon(id);

    const pokeEl = renderPokemonDetail(poke);

    pokemonDetail.append(pokeEl);
});
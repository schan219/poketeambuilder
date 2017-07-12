import pokemon_json from '../data/pokemon.json';

export function getPokemon(name) {
	let pokemon = pokemon_json.find(p => p.Name === name);
	return pokemon;
}

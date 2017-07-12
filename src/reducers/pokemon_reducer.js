import pokemon_json from '../data/pokemon.json';
import { ADD_POKEMON, REMOVE_POKEMON } from '../actions';

function pokemon(state = pokemon_json, action) {
	switch(action.type) {
		case ADD_POKEMON:
			return state;
		case REMOVE_POKEMON:
			return state;
		default:
			return state;
	}
}

export default pokemon;
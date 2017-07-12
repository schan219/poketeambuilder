import { ADD_POKEMON, REMOVE_POKEMON } from '../actions';
import { getPokemon } from './helpers';

function party(state = [], action) {
	switch(action.type) {
		case ADD_POKEMON:
			let party = [...state];
			let alreadyExists = false;
			for (var index in party) {
				if (party[index].Name === getPokemon(action.name).Name)
					alreadyExists = true;
			}
			if (party.length >= 6)
				party = state;
			else if (alreadyExists === true)
				party = state;
			else
				party = [...state, getPokemon(action.name)];			
			return party;
		case REMOVE_POKEMON:
			party = state.filter(item => item.Name !== action.name);
			return party;
		default:
			return state;
	}
}

export default party;
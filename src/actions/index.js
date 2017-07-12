export const ADD_POKEMON = 'ADD_POKEMON';
export const REMOVE_POKEMON = 'REMOVE_POKEMON';

export function addPokemonByName(name) {
	const action = {
		type: ADD_POKEMON,
		name: name
	}
	return action;
}

export function removePokemonByName(name) {
	const action = {
		type: REMOVE_POKEMON,
		name: name
	}
	return action;
}
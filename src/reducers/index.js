import { combineReducers } from 'redux';

import pokemon from './pokemon_reducer';
import party from './party_reducer';


const rootReducer = combineReducers({
	pokemon,
	party
});

export default rootReducer;
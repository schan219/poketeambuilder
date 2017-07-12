import React, { Component } from 'react';
import PokemonList from './PokemonList';
import PartyList from './PartyList';
import PartyStats from './PartyStats';
import '../styles/index.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h2>Pokemon Team Builder</h2>
				<div className="col-md-4">
					<PartyList />
				</div>
				<div className="col-md-4">
					<PartyStats />
				</div>
				<div className="col-md-4">
					<PokemonList />
				</div>
			</div>
		)
	}
}

export default App;
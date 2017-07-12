import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPokemonByName } from '../actions';

class PokemonList extends Component {
	render() {
		console.log('this.props', this.props);

		return (
			<div>
				<h4>List of All Pokemon</h4>
				<ul className="list-group">
					{
						this.props.pokemon.map(pokemon => {
							return (
								<li key={pokemon.Name} className="list-group-item">
									<div className="list-item">{pokemon.Name}</div>
									<div
									className="list-item right-button"
									onClick={() => this.props.addPokemonByName(pokemon.Name)}>
										+
									</div>
								</li>
							)
						})
					}
				</ul>
			</div>
		)
	}
}

function mapStateToProps(state) {
	console.log('state', state);
	return {
		pokemon: state.pokemon
	};
}

export default connect(mapStateToProps, { addPokemonByName })(PokemonList);
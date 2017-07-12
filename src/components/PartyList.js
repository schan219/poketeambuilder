import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removePokemonByName } from '../actions';

class PartyList extends Component {
	render() {
		return (
			<div>
				<h4>Your Pokemon Party</h4>
				<ul className="list-group">
					{
						this.props.party.map(partyMember => {
							return (
								<li key={partyMember.Name} className="list-group-item">
									<div className="list-item">
										{partyMember.Name}
									</div>
									<div
									className="list-item right-button"
									onClick={()=> this.props.removePokemonByName(partyMember.Name)}>
										x
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
		party: state.party
	};
}

export default connect(mapStateToProps, { removePokemonByName })(PartyList);
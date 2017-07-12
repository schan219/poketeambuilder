import React, { Component } from 'react';
import { connect } from 'react-redux';

class PartyStats extends Component {
	hp() {
		let hp = 0;
		this.props.party.forEach(partyMember => hp += partyMember.HP);
		return hp;
	}

	attack() {
		let attack = 0;
		this.props.party.forEach(partyMember => attack += partyMember.Attack);
		return attack;
	}

	defense() {
		let defense = 0;
		this.props.party.forEach(partyMember => defense += partyMember.Defense);
		return defense;
	}

	spatk() {
		let spatk = 0;
		this.props.party.forEach(partyMember => spatk += partyMember.SpAtk);
		return spatk;
	}

	spdef() {
		let spdef = 0;
		this.props.party.forEach(partyMember => spdef += partyMember.SpDef);
		return spdef;
	}

	speed() {
		let speed = 0;
		this.props.party.forEach(partyMember => speed += partyMember.Speed);
		return speed;
	}

	totalStats() {
		let totalStats = 0;
		this.props.party.forEach(partyMember => totalStats += partyMember.Total);
		return totalStats;
	}

	render() {
		return (
			<div>
				<h4>Party Attributes</h4>
				<ul className="list-group">
					<li className="list-group-item">
						<b>Overall HP:</b> {this.hp()}
					</li>
					<li className="list-group-item">
						<b>Overall Attack:</b> {this.attack()}
					</li>
					<li className="list-group-item">
						<b>Overall Defense:</b> {this.defense()}
					</li>
					<li className="list-group-item">
						<b>Overall Sp. Atk:</b> {this.spatk()}
					</li>
					<li className="list-group-item">
						<b>Overall Sp. Def:</b> {this.spdef()}
					</li>
					<li className="list-group-item">
						<b>Overall Speed:</b> {this.speed()}
					</li>
					<li className="list-group-item">
						<b>Total Stats of Party:</b> {this.totalStats()}
					</li>
				</ul>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		party: state.party
	}
}

export default connect(mapStateToProps, null)(PartyStats);
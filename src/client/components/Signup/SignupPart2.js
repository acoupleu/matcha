import React, { Component } from 'react';
import { mesFonctions } from './CheckDatas.js';

export default class SignupPart2 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			email: "",
			password: "",
			passwordConfirm: ""
		};

		this.onChange = this.onChange.bind(this);
	}

	onChange(event) {
		this.setState({[event.target.name]: event.target.value});
		var fct = 'check' + event.target.name.capitalizeFirstLetter();
		mesFonctions[fct](event.target.value);
		console.log(fct);
	}

	render(){
		return(
			<div>
				<label>
					Pseudo:
					<br />
					<input type="text" value={this.state.username} onChange={this.onChange}
						placeholder="Ex: 'Marie, Julien...'" name="username"/>
				</label>
				<br />
				<label>
					Adresse email:
					<br />
					<input type="text" value={this.state.email} onChange={this.onChange}
						placeholder="Ex: 'julien@gmail.com'" name="email"/>
				</label>
				<br />
				<label>
					Mot de passe:
					<br />
					<input type="text" value={this.state.password} onChange={this.onChange}
						placeholder="8 caractères alphanumériques minimum" name="password"/>
				</label>
				<br />
				<label>
					Confirmation mot de passe:
					<br />
					<input type="text" value={this.state.passwordConfirm} onChange={this.onChangeConfirm} name="passwordConfirm"/>
				</label>
				<br />
				<button type="button" onClick={this.props.changeForm}>Precedent</button>
			</div>
	)};
}

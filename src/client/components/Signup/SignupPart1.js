import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { getGender, getSexorient, getAge, getTown } from '../../redux/actions/signupAction';
import { mesFonctions } from './CheckDatas.js';

export default class SignupPart1 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			gender: "homme",
			sexualOrientation: "homme",
			age: "",
			town: ""
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
		return (
		<div>
			<label>
				Je suis un(e):
				<br />
				<select value={this.state.gender} onChange={this.onChange} name="gender">
				<option value="homme">Homme</option>
				<option value="femme">Femme</option>
				</select>
			</label>
			<br />
			<label>
				Je cherche un(e):
				<br />
				<select value={this.state.sexualOrientation} onChange={this.onChange} name="sexualOrientation">
				<option value="homme">Homme</option>
				<option value="femme">Femme</option>
				<option value="les deux">Les deux</option>
				</select>
			</label>
			<br />
			<label>
				Age:
				<br />
				<input type="text" value={this.state.age} onChange={this.onChange} name="age"/>
			</label>
			<br />
			<label>
				Ville:
				<br />
				<input type="text" value={this.state.town} onChange={this.onChange} name="town"/>
			</label>
			<br />
			<button type="button" onClick={this.props.userSignupRequest(this.state)}>Suivant</button>
		</div>
	)};
}
//
// const mapStateToProps = (state) => {
// 	return state;
// };
//
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ getGender, getSexorient, getAge, getTown }, dispatch);
// }
//
//
// export default connect(mapStateToProps, mapDispatchToProps)(SignupPart1);

SignupPart1.propTypes = {
	userSignupRequest: React.PropTypes.func.isRequired
}

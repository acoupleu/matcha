import React, { Component } from 'react';
import { Link } from 'react-router';
import SignupForm from '../Signup/SignupForm';
require("./style.scss");

export class Home extends Component {
	render() {
		return (
			<div>
				<SignupForm />
			</div>
		);
	}
}

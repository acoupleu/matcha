import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignupPart1 from './SignupPart1';
import SignupPart2 from './SignupPart2';
import { userSignupRequest } from '../../redux/actions/signupAction';

class SignupForm extends Component {
	constructor(props) {
		super(props);
		this.handleFormChange = this.handleFormChange.bind(this);

		this.state = {
			signupStatus: 0,
			form: <SignupPart1 userSignupRequest={userSignupRequest} changeForm={this.handleFormChange}/>
		};
	}

	handleFormChange() {
		if (this.state.signupStatus == 0) {
			this.setState({
				signupStatus: 1,
				form: <SignupPart2 changeForm={this.handleFormChange}/>
			});
		}
		else {
			this.setState({
				signupStatus: 0,
				form: <SignupPart1 userSignupRequest={userSignupRequest} changeForm={this.handleFormChange}/>
			});
		}
		console.log(this.state.form);
	}

	render() {
		const { userSignupRequest } = this.props;

		return (
			<div>
				{this.state.form}
			</div>
		)
	}
}

SignupForm.propTypes = {
	userSignupRequest: React.PropTypes.func.isRequired
}

export default connect((state) => { return {} }, { userSignupRequest })(SignupForm);

import React, { Component } from 'react';
import { Header } from './Header/Header';
require('./global.scss');

export class App extends Component {
	constructor(props) {
		super(props);

		this.state = {}
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						<Header />
					</div>
				</div>
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						{this.props.children}
					</div>
				</div>
			</div>
			);
		}
}

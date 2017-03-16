import React, { Component } from 'react';
import { Link } from 'react-router';
require("./style.scss");

export class Header extends Component {
	constructor(props) {
		super(props);
	}

	isLogged() {
		return false;
	}

	render() {
		let log = "";

		if (this.isLogged()) {
			log = (
				<li>
					<form action="index.php?p=login" method="post">
						<input type="text" name="username" placeholder="username" required/>
						<input type="password" name="password" placeholder="password" required/>
						<input type="submit" value="Se connecter" />
					</form>
					<a>mot de passe oublié</a>
				</li>
			);
		}
		else
		{
			log = ('Bonjour Alexis !');
		}
		return (
			<header className="navbar navbar-default">
				<div className="navbar-header">
					<ul className="nav navbar-nav">
						<li><Link to={"/home"} activeStyle={{color: "red"}}>Home</Link></li>
						{log}
					</ul>
				</div>
			</header>
		);
	}
}

import React, { Component } from 'react';
import { copyright } from './Footer.module.css';

export default class Footer extends Component {
	render() {
		return (
			<footer>
				<p className={copyright}>"Resilia 2020 - Alguns direitos reservados"</p>
			</footer>
		)
	}
}
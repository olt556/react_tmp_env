import React, { Component } from 'react';
import styles from '../scss/app.scss'


export class OnClickButtonS extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<button className={ styles.ButtonSize }>
				{ this.props.text }
			</button>
		);
	}
}

export class ShowCounter extends Component {
	constructor(props) {
		super(props);
	};
	render() {
		return (
			<div>
				{ this.props.value }
			</div>
		);
	}
}
import React, { Component } from 'react';
import { OnClickButtonS, ShowCounter } from './CounterShows.js';
import styles from '../scss/app.scss'

export class ContentCounter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text1: "+",
			text2: "-",
			value: 0
		};
		this.Count = this.Count.bind(this);
	}
	Count(text) {
		if(text === "+"){
			console.log(this.state.value);
			this.setState({ value: this.state.value+1 });
		} else if (text === "-") {
			console.log(this.state.value);
			this.setState({ value: this.state.value-1 });
		}
	};
	render() {
		return (
			<div>
				<div className={ styles.ShowCounter }>
					<ShowCounter 
						value={this.state.value}
					/>
				</div>
				<div className={ styles.OnClickButtonPlus } onClick={ this.Count.bind(this, this.state.text1) }>
					<OnClickButtonS
						text={ this.state.text1 }
					/>
				</div>
				<div className={ styles.OnClickButtonMinus } onClick={ this.Count.bind(this, this.state.text2) }>
					<OnClickButtonS
						text={ this.state.text2 }
					/>
				</div>
			</div>
		);
	};
};


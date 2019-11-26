import React from 'react';
import ReactDOM from 'react-dom';
import { ContentCounter } from './components/ContentCounter';

class Main extends React.Component {
	render() {
		return (
			<ContentCounter />
		);
	}
}

ReactDOM.render(
	<Main />,
	document.getElementById('root')
);

export default Main;
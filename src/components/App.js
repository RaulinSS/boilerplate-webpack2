import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './App.scss';

const App = (props) => {
	return (
		<div className={styles.app}>
			<h2>Hello, {props.name}</h2>
			<h2>Hello2, {props.name}</h2>
		</div>
	);
};

App.propTypes = {
	name: PropTypes.string
};

export default App;
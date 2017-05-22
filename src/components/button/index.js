import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const Button = ({text}) => {
	return (
			<button className={styles.Button}>{text}</button>
	);
};

Button.propTypes = {
	text: PropTypes.string.isRequired
};

export default Button;
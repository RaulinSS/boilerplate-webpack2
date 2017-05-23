import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
//import AttendanceApp from './AttendanceApp';
import Home from './Home.js';

const store = configureStore();

export default class Root extends Component {
	render() {
		return (
				<Provider store={store}>
						<Home />
				</Provider>
		);
	}
};
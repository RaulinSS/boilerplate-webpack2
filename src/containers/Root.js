import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import AttendanceApp from './AttendanceApp';

const store = configureStore();

export default class Root extends Component {
	render() {
		return (
				<Provider store={store}>
						<AttendanceApp />
				</Provider>
		);
	}
};
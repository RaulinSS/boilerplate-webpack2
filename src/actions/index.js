import axios from 'axios';

export const REQUEST_CLIENTS = 'REQUEST_CLIENTS';
export const RECEIVE_CLIENTS = 'RECEIVE_CLIENTS';

const apiFAKE = 'https://jsonplaceholder.typicode.com/users';

const requestClients = function(filter) {
	return {
		type: REQUEST_CLIENTS
	};
};

const receiveClients = function(clients) {
	return {
		type: RECEIVE_CLIENTS,
		payload: clients
	};
};

export const fetchClients = function(filter) {
	debugger;
	return dispatch => {
		dispatch(requestClients(filter));

		return axios.get(apiFAKE)
			.then(response => response.data)
			.then(data => dispatch(receiveClients(data)));
	};
};
import { REQUEST_CLIENTS, RECEIVE_CLIENTS } from '../actions/index';

const clientsByFilter = function(state = {
	isFetching: false,
	data: []
}, action) {
	debugger;
	switch (action.type)	{
		case REQUEST_CLIENTS:
			return Object.assign({}, state, {
				isFetching: true
			});
		case RECEIVE_CLIENTS:
			return Object.assign({}, state, {
				isFetching: false,				
				data: action.payload
			});
		default:
			return state; 
	}
};

export default clientsByFilter;
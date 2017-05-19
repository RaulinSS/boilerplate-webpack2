import { combineReducers } from 'redux';
import clientsByFilter from './reducer_clients';

const rootReducer = combineReducers({
	clientsByFilter
});

export default rootReducer;
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
//import createLogger from 'redux-logger'
import rootReducer from '../reducers/index';

export default function configureStore(preloadedState) {
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	const store = createStore(rootReducer, 
														preloadedState,
														composeEnhancers(applyMiddleware(
															thunkMiddleware))
														);

	 if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index').default;
      store.replaceReducer(nextRootReducer); 
    });
  }

	return store;
}
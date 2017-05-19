
import React from 'react';
import ReactDOM from 'react-dom';
// AppContainer is a necessary wrapper component for HMR
import { AppContainer } from 'react-hot-loader';
import Root from './containers/Root';

const render = (Component) => {
	ReactDOM.render(
		<AppContainer>
				<Component name="pagseguro"/>
		</AppContainer>,
		document.getElementById('root')
	);
};

render(Root);

// Hot Module Replacement API
if (module.hot) {
  //module.hot.accept specifies how to handle changes to specific dependencies.

  //Whenever src/components/App.js or its dependencies are changed module.hot.accept
  //will fire the render method
  //The render method will even fire when App.css is changed because it is included
  //in App.js.

	module.hot.accept(Root, () => {
		render(Root);
	});
}


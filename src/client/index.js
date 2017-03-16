import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './redux/reducers';
import thunk from 'redux-thunk';

const store = createStore(
	reducers,
	applyMiddleware(thunk)
);

class Index extends React.Component {
	render() {
		return (
			<Router history={browserHistory}>
				{routes}
			</Router>
		);
	}
}

render(
	<Provider store={store}>
		<Index />
	</Provider>
	, document.getElementById("main"));

import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './redux/reducers';

const store = createStore(reducers);

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

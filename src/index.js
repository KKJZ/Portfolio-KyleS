import React from 'react';
import ReactDOM from 'react-dom';
import "bulma";
import './index.css';
import Routes from './component/Routes';
import {Provider} from 'react-redux';
import store from './store';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<Provider store={store}>
		<Routes />
	</Provider>
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

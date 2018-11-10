import {createStore, combineReducers} from 'redux';
import navReducer from './reducers/navReducer';

export default createStore(
	combineReducers({
		navbar: navReducer
	}),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
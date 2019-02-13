import {createStore, combineReducers} from 'redux';
import burgerReducer from "./reducers/burger";

export default createStore(
	combineReducers({
        burgerMenu: burgerReducer
	}),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
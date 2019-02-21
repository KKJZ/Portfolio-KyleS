import {createStore, combineReducers} from 'redux';
import burgerReducer from "./reducers/burger";
import formReducer from "./reducers/form";

export default createStore(
	combineReducers({
	burgerMenu: burgerReducer,
	form: formReducer
	}),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
import {createStore, combineReducers} from 'redux';
import burgerReducer from "./reducers/burger";
import formReducer from "./reducers/form";
import projectReducer from "./reducers/project";

export default createStore(
	combineReducers({
	burgerMenu: burgerReducer,
	form: formReducer,
	project: projectReducer
	}),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
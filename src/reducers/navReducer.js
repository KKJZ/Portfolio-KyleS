import {HOME, PROJECTS, ABOUT} from '../actions/navbar';

const initialState = {
	active: HOME
};

export default function navReducer(state=initialState, action) {
	switch(action.type){
		case HOME:
			return Object.assign({}, state, {
				active: HOME
			});

		case PROJECTS:
			return Object.assign({}, state, {
				active: PROJECTS
			});

		case ABOUT:
			return Object.assign({}, state, {
				active: ABOUT
			});

		default:
			return state;
	};
};
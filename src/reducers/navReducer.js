import {HOME, PROJECTS, ABOUT, BURGER} from '../actions/navbar';

const initialState = {
	active: HOME,
	burger: false
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

		case BURGER:
			return Object.assign({}, state, {
				burger: action.burger
			})

		default:
			return state;
	}
};
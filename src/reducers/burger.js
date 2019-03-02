import {
    BURGER,
    BURGER_OPEN,
    BURGER_CLOSE
} from "../actions/burger";

const initialState = {
    isMenuOpen: false,
    isYOffset: false
}

export default function burgerReducer(state=initialState, action) {
    switch(action.type){
        case BURGER:
            return Object.assign({}, state, {
                isYOffset: action.burger
            });

        case BURGER_OPEN:
            return Object.assign({}, state, {
                isMenuOpen: true
            });
        
        case BURGER_CLOSE:
            return Object.assign({}, state, {
                isMenuOpen: false
            });
            
        default:
            return state;
    }
}
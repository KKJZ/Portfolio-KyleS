import {
    NAME_CHANGE,
    SUBJECT_CHANGE,
    EMAIL_CHANGE,
    CONTENT_CHANGE
} from "../actions/form";

const initialState = {
    name: null,
    subject: null,
    email: null,
    content: null
};

export default function formReducer(state=initialState, action) {
    switch(action.type){
        case NAME_CHANGE:
            return Object.assign({}, state, {
                name: action.name
            });

        case SUBJECT_CHANGE:
            return Object.assign({}, state, {
                subject: action.subject
            });

        case EMAIL_CHANGE:
            return Object.assign({}, state, {
                email: action.email
            });

        case CONTENT_CHANGE: 
            return Object.assign({}, state, {
                content: action.content
            });

        default:
            return state;
    }
    
}
import {
    CHANGE_PROJECTS
} from "../actions/project";

const initialState = {
    currentProject: "PersonalPub"
};

export default function projectReducer(state=initialState, action) {
    switch(action.type){
        case CHANGE_PROJECTS:
            return Object.assign({}, state, {
                currentProject: action.project
            })
        
        default:
            return state;
    }
}
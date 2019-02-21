export const CHANGE_PROJECTS = "CHANGE_PROJECTS";

//function to find the next project to show
export const findProject = (current, direction, dispatch) => {
    if(current === "PersonalPub"){
        if(direction === "next"){
            dispatch(setProject("BartendersBB"));
        }else{
            dispatch(setProject("LoL"));
        }
    } else if(current === "BartendersBB"){
        if(direction === "next"){
            dispatch(setProject("LoL"));
        }else{
            dispatch(setProject("PersonalPub"));
        }
    } else if(current === "LoL"){
        if(direction === "next"){
            dispatch(setProject("PersonalPub"));
        }else{
            dispatch(setProject("BartendersBB"));
        }
    }
};
export const setProject = project => ({
    type: CHANGE_PROJECTS,
    project
});
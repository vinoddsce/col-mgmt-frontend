import { ADD_STUDENT, UPDATE_STUDENT, DELETE_STUDENT, LOAD_STUDENT } from '../actions/types';

const initialState = {
    students: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_STUDENT:
            return {
                ...state,
            }
        case LOAD_STUDENT:
            console.log("Students Action: ", action.students);
            return {
                ...state, students: action.students
            }
        default:
            return state;
    }
}
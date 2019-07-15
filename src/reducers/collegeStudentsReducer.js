import { ADD_STUDENT, UPDATE_STUDENT, DELETE_STUDENT } from '../actions/types';

const initialState = {
    students: []
}

export default (state = initialState, action) => {

    switch (action.type) {
        case ADD_STUDENT:

            return {
                ...state,
            }
    }
}
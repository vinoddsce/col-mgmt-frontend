import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import collegeStudentsReducer from './collegeStudentsReducer';

export default combineReducers({
    errors: errorReducer,
    auth: authReducer,
    college: collegeStudentsReducer
});
import { combineReducers } from 'redux';
import { 
    FETCH_USER_INFO_REQUEST, 
    FETCH_USER_INFO_SUCCEEDED, 
    FETCH_USER_INFO_FAILED,
    FETCH_USER_INFO_FROM_LOCAL 
} from '../actions';


const userInfo = (state = {}, action) => {
    switch(action.type) {
        case FETCH_USER_INFO_REQUEST:
            return action.data || {};
        case FETCH_USER_INFO_SUCCEEDED: 
            localStorage.setItem('userInfo', JSON.stringify(action.user));

            return action.user;
        case FETCH_USER_INFO_FAILED:
            console.error(action.error);

            return state;
        case FETCH_USER_INFO_FROM_LOCAL: 
        try {
            return JSON.parse(localStorage.getItem('userInfo')) || {};
        } catch (error) {
            return state;
        };
        default: 
            return state;
    }
};

const reducers = combineReducers({
    userInfo
});

export default reducers;
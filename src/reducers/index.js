import { combineReducers } from 'redux';
import { FETCH_USER_INFO } from '../actions';


const userInfo = (state = {}, action) => {
    switch(action.type) {
        case FETCH_USER_INFO:
            return action.data || {};
        default: 
            return state;
    }
};

const reducers = combineReducers({
    userInfo
});

export default reducers;
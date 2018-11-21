import { call, put } from 'redux-saga/effects';
import { FETCH_USER_INFO_FAILED, FETCH_USER_INFO_SUCCEEDED } from '../actions';

import { API_SERVER_HOST } from '../config';
import axios from 'axios';

export const fetchUserInfo = function*(action) {
    try {
        const response = yield call(() => axios.post(`${API_SERVER_HOST}/login`, { ...action.payload.formInfo }));
        yield put({ 
            type: FETCH_USER_INFO_SUCCEEDED,
            user: response.data
        });
    } catch (error) {
        yield put({
            type: FETCH_USER_INFO_FAILED,
            error
        });
    }
};
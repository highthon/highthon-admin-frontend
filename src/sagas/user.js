import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

export const fetchUserInfo = function*(action) {
    try {
        const user = yield call(() => axios.post('/login'), action.payload.formInfo);
        yield put({ type: 'USER_INFO_FETCH_SUCCEEDED', user });
    } catch (error) {
        yield put({
            type: 'USER_INFO_FETCH_FAILED',
            error
        });
    }
};
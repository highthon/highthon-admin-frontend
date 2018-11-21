import { takeLatest } from 'redux-saga/effects';
import { fetchUserInfo } from './user';
import { FETCH_USER_INFO_REQUEST } from '../actions';

export default function* rootSaga() {
    yield takeLatest(FETCH_USER_INFO_REQUEST, fetchUserInfo);
};
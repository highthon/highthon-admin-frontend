import { takeLatest } from 'redux-saga/effects';
import { fetchUserInfo } from './user';
import { fetchApplicantList } from './applicant';
import { FETCH_USER_INFO_REQUEST, FETCH_APPLICANT_LIST_REQUEST } from '../actions';

export default function* rootSaga() {
    yield takeLatest(FETCH_USER_INFO_REQUEST, fetchUserInfo);
    yield takeLatest(FETCH_APPLICANT_LIST_REQUEST, fetchApplicantList);
};
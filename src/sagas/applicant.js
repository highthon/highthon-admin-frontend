import { call, put } from 'redux-saga/effects';
import { 
    FETCH_APPLICANT_LIST_FAILED,
    FETCH_APPLICANT_LIST_SUCCEEDED
 } from '../actions';

 import { API_SERVER_HOST } from '../config';
 import axios from 'axios';

 export const fetchApplicantList = function* (action) {
    try {
        const response = yield call(() => (
            axios.get(`${API_SERVER_HOST}/applicant`, {
                params: action.payload
            })
        ));

        yield put({
            type: FETCH_APPLICANT_LIST_SUCCEEDED,
            data: response.data
        })
    } catch(error) {
        yield put({
            type: FETCH_APPLICANT_LIST_FAILED,
            error
        });
    }
}
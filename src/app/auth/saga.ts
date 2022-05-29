import { PayloadAction } from '@reduxjs/toolkit';
import { delay, call, put, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';
import { LoginForm } from './types';
import { init, request, ResponseError } from 'app/utils/requests';

function* login(action: PayloadAction<LoginForm>) {
    yield delay(1000);
    try {
        const url      = ""
        const options  = init(action.payload)
        const response = yield call(request, url, options)

        yield put(actions.successLogin(response))
    } catch (err) {
        yield put(actions.failedLogin(err as ResponseError))
    }
}

export function* saga() {
    yield takeLatest(actions.login.type, login)
}
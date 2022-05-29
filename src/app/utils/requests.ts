export class ResponseError extends Error {
    code   : number
    message: string

    constructor(code: number, message: string) {
        super(message)
        this.code = code
        this.message = message
    }
}

export const request = async (url: string, init?: RequestInit) => {
    const response = await fetch(url, init)
    if (response.status >= 200 && response.status < 300) {
        return response.json()
    }

    throw new ResponseError(response.status, await response.text())
}

export const get_header = (token?: string) => {
    const header = {
        "Content-type": "application/json",
        "Accept"      : "application/json",
        "Access-Control-Allow-Origin": process.env.REACT_APP_CORE_API_URL
    }

    if (token) {
        header["Authorization"] = `Bearer ${token}`
    }

    return header
}

export const init = (body?: object, header: object = get_header(), method: string = "POST") => {
    return {method, header, body: JSON.stringify(body)}
}

/***
SAMPLE USAGE ON SAGA

import { delay, call, put, takeLatest } from 'redux-saga/effects';
import { init, request, ResponseError } from 'app/utils/requests';
import { actions } from './slice';

function* get() {
    yield delay(1000);
    try {
        const response = yield call(request, "https://127.0.0.1:8000")
        yield put(actions.update(response))
    } catch (err) {
        yield put(actions.failed(err as ResponseError))
    }
}

function* post(action: PayloadAction<Data>) {
    yield delay(1000);
    try {
        const url      = "https://127.0.0.1:8000"
        const options  = init(action.payload)
        const response = yield call(request, url, options)

        yield put(actions.success(response))
    } catch (err) {
        yield put(actions.failed(err as ResponseError))
    }
}

export function* saga() {
    yield takeLatest(actions.get.type, get)
    yield takeLatest(actions.post.type, post)
}

***/
interface EventHandlers {
    onOpen?   : any,
    onClose?  : any,
    onMessage?: any,
    onError?  : any
}

export interface Socket {
    socket?: WebSocket
    connect: () => void
}

const useWebsocket = (url, {onOpen, onClose, onMessage, onError}: EventHandlers) => {
    var socket: WebSocket | undefined

    const connect = async () => {
        if (!socket || socket.readyState === WebSocket.CLOSED) {
            socket = new WebSocket(url)
            socket.onopen    = onOpen || null
            socket.onclose   = onClose || null
            socket.onmessage = (e => onMessage(e.data)) || null
            socket.onerror   = (e => onError(e)) || null
        } else if (socket.readyState !== WebSocket.OPEN) {
            socket?.close()
            connect()
        }
    }
    return {socket, connect}
}

export default useWebsocket

/***

SAMPLE USAGE ON SAGA

import { delay, call, put, takeLatest } from 'redux-saga/effects';
import useWebsocket, { Socket } from 'app/utils/websockets';
import { actions } from './slice';

var socket: Socket | undefined;

function* get() {
    yield delay(1000);
    try {
        const data: any = []
        socket ||= useWebsocket("", {
            onMessage: message => data.append(JSON.parse(message)),
            onClose  : () => yield put(actions.loadData(data))
        })
        yield call(socket.connect)
    } catch (err) {
        console.log(err)
    }
}

export function* saga() {
    yield takeLatest(actions.get.type, get)
}

***/
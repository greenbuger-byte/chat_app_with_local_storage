import { createAction } from "@reduxjs/toolkit";
import { v4 } from "uuid";

import { addMessage } from "@qex/store/chat";
import { writeIndexedDB } from "@qex/store/middleware/indexed";
import avatar from "@qex/components/icons/avatar.png";

export const wsConnect = createAction('ws/connect');
export const wsSendMessage = createAction('ws/sendMessage');
const wsConnected = createAction('ws/connected');
const wsError = createAction('ws/error');
const wsDisconnected = createAction('ws/disconnected');

const wsUrl = process.env.REACT_APP_WS_URL || 'wss://ws.qexsystems.ru';

const defaultUser = {
    username: 'Ilon Mask',
    avatar,
    type: 'incoming',
}

export default function webSocketMiddleware(){
    let socket = null;

    const onOpen = (dispatch, resolve) => (event) => {
        resolve(event.currentTarget);
        dispatch(wsConnected(event.currentTarget.url));
    };
    const onError = (dispatch, reject) => (event) => {
        console.log('WS IS ERROR');
        socket = null;
        setTimeout(() => dispatch(wsConnect()), 3000);
        reject(event);
        dispatch(wsError(event.currentTarget.url))
    }
    const onMessage = (dispatch) => (event) => {
        dispatch(writeIndexedDB({message: JSON.parse(event.data)}));
        dispatch(addMessage(JSON.parse(event.data)));
    }
    const onClose = (dispatch, reject) => (event) => {
        console.log('WS IS CLOSED');
        socket = null;
        setTimeout(() => dispatch(wsConnect()), 3000);
        reject(event);
    }

    return ({ dispatch }) => next => action => {
        const { type, payload } = action;
        switch (type){
            case wsConnect.type: {
                if(socket!==null) {
                    return new Promise((resolve) => {
                        resolve(socket);
                    })
                }
                return new Promise((resolve, reject) => {
                    socket = new WebSocket(wsUrl);
                    socket.onopen = onOpen(dispatch, resolve);
                    socket.onerror = onError(dispatch, reject);
                    socket.onclose = onClose(dispatch, reject);
                    socket.onmessage = onMessage(dispatch);
                });
            }
            case wsConnected.type: {
                console.log('WS CONNECTION ESTABLISHED', payload);
                break;
            }
            case wsDisconnected.type: {
                if(socket !== null ) socket.close();
                socket = null;
                break;
            }
            case wsSendMessage.type: {
                if(socket === null) dispatch(wsConnect());
                const { message, onLoading } = payload;
                if(onLoading) dispatch({type: onLoading, payload: true});
                socket.send(JSON.stringify({ message, id: v4(), created: Date.now(), ...defaultUser }));
                break;
            }
            case wsError.type: {
                console.log('WS ERROR', payload);
                break;
            }

            default:
                next(action);
        }
    }
}

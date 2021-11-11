import { createSlice } from "@reduxjs/toolkit";

import { wsConnect, wsSendMessage } from "@qex/store/middleware/webSocketMiddleware";
import {readIndexedDB, writeIndexedDB} from "@qex/store/middleware/indexed";

const slice = createSlice({
    name: 'chatSlice',
    initialState: {
        messages: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        toggleLoading: (state, { payload } ) => {
            state.isLoading = payload;
        },
        onErrorResponse: (state, { payload }) => {
            state.error = payload;
        },
        addMessage: (state, { payload }) => {
            state.messages = [...state.messages, payload];
        },
        loadFromIndexed: (state, {payload}) =>{
            state.messages = [...state.messages, ...payload]
        }
    }
});

export const { toggleLoading, onErrorResponse, addMessage, loadFromIndexed } = slice.actions;
export default slice.reducer;

export const createWebSocketConnection = () => {
    return wsConnect();
}

export const sendMessage = (data) => {
    return wsSendMessage({
        message: data,
        onLoading: toggleLoading.type,
    });
}

export const addChatMessage = (message) => {
    return writeIndexedDB({
        message,
        onSuccess: addMessage.type,
        onError: onErrorResponse.type,
        onLoading: toggleLoading.type,
    })
}

export const loadChatHistory = () => {
    return readIndexedDB({
        onSuccess: loadFromIndexed.type,
        onError: onErrorResponse.type,
        onLoading: toggleLoading.type,
    })
}
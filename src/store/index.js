import { configureStore } from "@reduxjs/toolkit";
import chatSlice from "@qex/store/chat";
import indexedMiddleWare from "@qex/store/middleware/indexed";
import webSocketMiddleware from "@qex/store/middleware/webSocketMiddleware";

const reducer = {
    chatSlice
}

const middleware = [ webSocketMiddleware(), indexedMiddleWare() ];

export default function createStore () {
    return configureStore({reducer, middleware});
}
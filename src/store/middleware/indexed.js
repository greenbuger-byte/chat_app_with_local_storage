import { createAction } from "@reduxjs/toolkit";
import localforage from "localforage";

export const writeIndexedDB = createAction('indexed/write');
export const readIndexedDB = createAction('indexed/read');
export const cleanIndexedDB = createAction('indexed/clean');
const errorIndexedDB = createAction('indexed/error');


export default function indexedMiddleWare () {
    return ({dispatch}) => next => async action => {
        const { type, payload } = action;

        switch (type){
            case writeIndexedDB.type: {
                const { message, onError, onLoading, onSuccess } = payload;
                if(onLoading) dispatch({ type: onLoading, payload: true });
                return localforage.setItem(`${message.id}`, message)
                    .then(() => {
                        if(onLoading) dispatch({ type: onLoading, payload: false });
                        if(onSuccess) dispatch({type: onSuccess, payload: message});
                        return Promise.resolve('success');
                    })
                    .catch( error =>{
                        dispatch(errorIndexedDB({onError, error}))
                        return Promise.reject(error);
                    });
            }
            case readIndexedDB.type: {
                const { onSuccess, onLoading, onError } = payload;
                dispatch({ type: onLoading, payload: true });
                let messages = [];
                const loadMessages = (value, _) => {
                    messages = [...messages, value];
                }
                try{
                    await localforage.iterate(loadMessages);
                    await dispatch({ type: onSuccess, payload: messages.sort((a,b) => a.created - b.created) });
                    await dispatch({ type: onLoading, payload: false });
                }catch (error) {
                    dispatch( { type: onLoading, payload: false } );
                    dispatch( errorIndexedDB({ error: error.message, onError }) );
                }
                break;
            }
            case cleanIndexedDB.type: {
                const { onSuccess, onError, onLoading } = payload;
                if(onLoading) dispatch({ type: onLoading,payload: true });
                try{
                    await localforage.clear();
                    if(onSuccess) dispatch({ type: onSuccess });
                }catch (error) {
                    dispatch(errorIndexedDB({ error: error.message, onError }));
                }finally {
                    if(onLoading) dispatch({ type: onLoading, payload: false })
                }
                break;
            }
            case errorIndexedDB.type: {
                const { onError, error } = payload;
                if(onError) dispatch({ type: onError, payload: error });
                await Promise.reject(error);
                break;
            }
            default:
                next(action);
        }
    }
}

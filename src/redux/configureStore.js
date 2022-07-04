// import createStore from 'redux';
import { combineReducers, createStore } from 'redux';
import { chatReducer } from './chatReducer/chatReducer';
import { messageReducer } from './messageReducer/messageReducer';
import {createLogger} from 'redux-logger'

const persistConfig = {
    key: 'root',
    storage
}

const logger = createLogger ({
    collapsed: true,
    diff: true
})

const mainReducer = combineReducers({
    chats: chatReducer,
    messages: messageReducer
})

const persistReducer = persistReducer(persistConfig, mainReducer)

export const store = createStore(persistedReducer)
export const persist = persistStore(store)
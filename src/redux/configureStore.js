// import createStore from 'redux';
import { combineReducers, createStore } from 'redux';
import { chatReducer } from './chatReducer/chatReducer';
import { messageReducer } from './messageReducer/messageReducer';

const mainReducer = combineReducers({
    chats: chatReducer,
    messages: messageReducer
})

export const store = createStore(mainReducer)
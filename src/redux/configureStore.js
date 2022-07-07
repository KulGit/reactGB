// import createStore from 'redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
// import { chatReducer } from './chatReducer/chatReducer';
// import { messageReducer } from './messageReducer/messageReducer';
import {createLogger} from 'redux-logger'
import { todosReducer } from './todosReducer/todosReducer';
import thunk from 'redux-thunk';

const logger = createLogger ({
    collapsed: true,
    diff: true
})

const mainReducer = combineReducers({
    // chats: chatReducer,
    // messages: messageReducer
    todos: todosReducer
})

export const store = createStore(mainReducer, applyMiddleware(thunk, logger))

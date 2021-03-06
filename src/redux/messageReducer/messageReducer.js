import { ADD_MESSAGE, DELETE_MESSAGE } from "../actionTypes"

const initialState = {
    messages: [
        {
            id: 1,
            idChat: 1,
            message: 'The first message'
        },
        {
            id: 2,
            idChat: 2,
            message: 'The second message'
        }
    ]
}

export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_MESSAGE:
            return {
            ...state,
            messages: state.messages.filter((item) =>  item.id !== action.payload )
        }
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, state.payload]
            }





        default:
            return state
    }
}
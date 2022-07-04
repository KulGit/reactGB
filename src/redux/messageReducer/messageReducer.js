import { GET_MESSAGES } from "../actionTypes"

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
        // case GET_MESSAGES {
        //     ...message, state.message
        // }





        default:
            return state
    }
}
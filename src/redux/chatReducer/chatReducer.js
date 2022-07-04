import { GET_MESSAGES } from "../actionTypes"

const initialState = {
    chats: [
        {
            id: 1,
            name: 'John'
        },
        {
            id: 2,
            name: 'Smith'
        }
    ]
}

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MESSAGES:
            return {
                ...state, 
                chats: state.chats
            }




        default: 
            return state
    }

}
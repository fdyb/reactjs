import { ADD_MESSAGE } from "./types";

const initialState = {
    messages: {
        room0: [{ author: "User", message: "Привет !", date: new Date() }],
        room1: [{ author: "User", message: "Привет room2!", date: new Date() }],
    },
};

export function messages(state = initialState, action) {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: action.messages
            };
        default:
            return state;
    }
}
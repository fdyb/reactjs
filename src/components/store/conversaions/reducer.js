import { CHANGE_VALUE } from "./types";

const initialState = {
    conversations: [
        { title: "room0", value: "" },
        { title: "room1", value: "" },
    ],
};

export function conversations(state = initialState, action) {
    switch (action.type) {
        case CHANGE_VALUE:
            return {
                ...state,
                conversations: action.conversations
            };
        default:
            return state;
    }
}
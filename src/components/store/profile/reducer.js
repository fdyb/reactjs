import { TOGGLE_SHOW_NAME } from "./types";

const initialState = {
    showName: false,
    name: 'User'
};

export function profile(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_SHOW_NAME:
            return {
                ...state,
                showName: !state.showName
            }
        default:
            return state
    }
}
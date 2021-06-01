import { createStore, combineReducers } from "redux";
import { counter } from "./counter";
import { profile } from "./profile";
import { messages } from "./messages";
import { conversations } from "./conversations";

const reducers = combineReducers({ counter, profile, messages, conversations});

export const store = createStore(reducers);
import { createStore, combineReducers } from "redux";
import { counter } from "./counter";
import { profile } from "./profile";

const reducers = combineReducers({ counter, profile });

export const store = createStore(reducers);
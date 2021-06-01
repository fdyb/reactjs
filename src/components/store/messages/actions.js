import { ADD_MESSAGE } from "./types";

export const addMessage = (messages) => {
  return { type: ADD_MESSAGE, messages: messages };
};
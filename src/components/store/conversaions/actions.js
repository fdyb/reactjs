import { CHANGE_VALUE } from "./types";

export const changeValue = (conversations) => {
  return { type: INCREMENT, conversations: conversations };
};

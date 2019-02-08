import { ADD_COUNTER, DEC_COUNTER } from "../types";

export const addCounter = () => ({
  type: ADD_COUNTER,
});

export const decCounter = () => ({
  type: DEC_COUNTER,
});

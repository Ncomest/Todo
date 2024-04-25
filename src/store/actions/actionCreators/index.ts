import { ADD_COUNT, DECREMENT, INCREMENT, RESET } from "../actionTypes";

export const increment = () => {
 return {
  type: INCREMENT,
 };
};

export const decrement = () => {
 return {
  type: DECREMENT,
 };
};

export const reset = () => {
 return {
  type: RESET,
 };
};

export const addCount = (value: number) => {
 return {
  type: ADD_COUNT,
  payload: value,
 };
};

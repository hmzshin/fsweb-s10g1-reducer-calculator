export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const SET_MEMORY = "SET_MEMORY";
export const SET_TOTAL = "SET_TOTAL";
export const CLEAR_MEMORY = "CLEAR_MEMORY";
export const addOne = () => {
  return { type: ADD_ONE };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};

export const changeOperation = (operation) => {
  return { type: CHANGE_OPERATION, payload: operation };
};

export const clearDisplay = () => {
  return { type: "CLEAR_DISPLAY" };
};

export const setMemory = () => {
  return { type: "SET_MEMORY" };
};
export const setTotal = () => {
  return { type: "SET_TOTAL" };
};
export const clearMemory = () => {
  return { type: "CLEAR_MEMORY" };
};

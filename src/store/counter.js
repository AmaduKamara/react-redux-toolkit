// Import createSlice FROM REDUX/TOOLKIT
import { createSlice } from "@reduxjs/toolkit";

// Create initialState
const initialCounterState = { counter: 0, showCounter: true };

// Create a slice - It needs an object with a name, initial state and reducers.
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  // Reducers is an objects - a map of all the reducers this state slice needs
  // You add methods in the object that will serve as action creators
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrease(state, action) {
      state.counter = state.counter - action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// export counterSlice actions
export const counterActions = counterSlice.actions;

// export counterSlice reducers
export default counterSlice.reducer;

// 1. Import createSlice from Redux Toolkit to create a state slice
import { createSlice } from "@reduxjs/toolkit";

// 4. Import configureStore from @reduxjs/toolkit
import { configureStore } from "@reduxjs/toolkit";

// 2. Create initialState
const initialCounterState = { counter: 0, showCounter: true };

// ################################################################################

// 3. Create a slice - It needs an object with a name, initial state and reducers.
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

// ##################################################################################
// 7. Another slice
const initialAuthState = {
  isAuthenticated: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// ###################################################################################
// 5. Call configureStore and pass a configuration object where you set a reducer property that holds a single reducer slice or many slices
const store = configureStore({
  // reducer receives a configuration object with the different state properties
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});
 
// 6. Actions - export counterSlice's actions thru counterSlice.actions
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions; 

// 7. Export the store
export default store;

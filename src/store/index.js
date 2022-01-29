// Import configureStore from @reduxjs/toolkit
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

// Call configureStore and pass a configuration object where you set a reducer property that holds a single reducer slice or many slices
const store = configureStore({
  // reducer receives a configuration object with the different state properties
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

// Export the store
export default store;

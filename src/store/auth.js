// import createSlice
import { createSlice } from "@reduxjs/toolkit";

// auth slice
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

// export authSlice actions
export const authActions = authSlice.actions;

// export auth slice reducers
export default authSlice.reducer;

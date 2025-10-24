import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isUserLogin: false,
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isUserLogin = action.payload.isUserLogin;
      state.email = action.payload.email;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login } = userSlice.actions;

export default userSlice.reducer;

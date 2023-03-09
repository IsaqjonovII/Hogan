import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { signIn } = authSlice.actions;
export default authSlice.reducer;

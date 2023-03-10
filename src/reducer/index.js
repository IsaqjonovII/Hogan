import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import productSlice from "./productSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productSlice,
  },
});

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products = action.payload;
    },
    removeProduct: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { addProduct, removeProduct } = productsSlice.actions;
export default productsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { ProductApi } from "../../Api/product";

const initialState = {
  bestSellerProduct: [],
  newProduct: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    bestSeller: async (state, action) => {
      state.bestSellerProduct = action.payload;
    },
  },
});

export const { bestSeller } = productSlice.actions;

export default productSlice.reducer;

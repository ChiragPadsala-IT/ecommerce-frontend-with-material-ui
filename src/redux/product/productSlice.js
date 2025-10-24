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
      try {
        const res = await fetch(ProductApi.bestSeller);
        const data = await res.json();
        console.log("***********Best Seller*******************");
        console.log(data);
        console.log("******************************");
        if (res.status == 200) {
          state.bestSellerProduct = data;
        }
      } catch (error) {}
    },
  },
});

export const { bestSeller } = productSlice.actions;

export default productSlice.reducer;

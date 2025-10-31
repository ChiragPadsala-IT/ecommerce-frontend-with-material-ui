import { configureStore, compose, applyMiddleware } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import { cartReducer } from "./new/reducers/mycartReducer";
import { productReducer } from "../redux/new/reducers/productReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    productReducer: productReducer,
    cartReducer: cartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});

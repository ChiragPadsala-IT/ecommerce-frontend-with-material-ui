import { configureStore, compose, applyMiddleware } from "@reduxjs/toolkit";
import { userReducer } from "./new/reducers/userReducer";
import { cartReducer } from "./new/reducers/mycartReducer";
import { productReducer } from "../redux/new/reducers/productReducer";
import { favoriteReducer } from "./new/reducers/favoriteProductReducer";

export const store = configureStore({
  reducer: {
    // user: userReducer,
    userReducer: userReducer,
    productReducer: productReducer,
    cartReducer: cartReducer,
    favoriteReducer: favoriteReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});

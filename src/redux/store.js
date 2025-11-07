import { configureStore, compose, applyMiddleware } from "@reduxjs/toolkit";
import { userReducer } from "./new/reducers/userReducer";
import { cartReducer } from "./new/reducers/mycartReducer";
import { productReducer } from "../redux/new/reducers/productReducer";
import { favoriteReducer } from "./new/reducers/favoriteProductReducer";
import { orderReducer } from "./new/reducers/orderReducer";

export const store = configureStore({
  reducer: {
    // user: userReducer,
    userReducer: userReducer,
    productReducer: productReducer,
    cartReducer: cartReducer,
    favoriteReducer: favoriteReducer,
    orderReducer: orderReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});

import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./new/reducers/userReducer";
import { cartReducer } from "./new/reducers/mycartReducer";
import { productReducer } from "../redux/new/reducers/productReducer";
import { favoriteReducer } from "./new/reducers/favoriteProductReducer";
import { orderReducer } from "./new/reducers/orderReducer";
import { adsReducer } from "./new/reducers/adsReducer";

export const store = configureStore({
  reducer: {
    userReducer: userReducer,
    productReducer: productReducer,
    cartReducer: cartReducer,
    favoriteReducer: favoriteReducer,
    orderReducer: orderReducer,
    adsReducer: adsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});

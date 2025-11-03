import { MyCartAction } from "../constant/mycart";

const initialState = {
  myCartData: [],
  shippingCharge: 0,
  error: "",
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case MyCartAction.GET_PRODUCT:
      return { ...state, myCartData: action.data };

    default:
      return state;
  }
};

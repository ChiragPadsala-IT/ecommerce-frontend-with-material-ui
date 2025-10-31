import { MyCartAction } from "../constant/mycart";

const initialState = {
  myCartData: [],
  unCheckedProduct: [],
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

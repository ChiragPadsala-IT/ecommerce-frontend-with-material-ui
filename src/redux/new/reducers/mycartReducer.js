import { MyCartAction } from "../constant/mycart";

const initialState = {
  myCartData: [],
  shippingCharge: 0,
  itemDeleted: false,
  lastDeletedItem: [],
  error: "",
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case MyCartAction.GET_PRODUCT:
      return { ...state, myCartData: action.data };

    case MyCartAction.DELETE_PRODUCT:
      return {
        ...state,
        itemDeleted: true,
        myCartData: action.data.updatedCart.items,
      };

    default:
      return state;
  }
};

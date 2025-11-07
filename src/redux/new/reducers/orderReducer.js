import { OrderAction } from "../constant/order";

const initialState = {
  orderItem: [],
  orderConfirm: false,
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case OrderAction.MAKE_ORDER:
      return { ...state, orderConfirm: action.data };
    default:
      return state;
  }
};

import { productAction } from "../constant/productAction";

const initialState = {
  bestSellerProduct: [],
  newProduct: [],
  favoriteProduct: [],
  categoryWiseProduct: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case productAction.GET_NEW_PRODUCT:
      return {
        ...state,
        newProduct: action.newProduct,
      };

    case productAction.GET_BEST_SELLER_PRODUCT:
      return {
        ...state,
        bestSellerProduct: action.bestSellerProduct,
      };

    case productAction.GET_PRODUCT_BY_CATEGORY:
      return {
        ...state,
        categoryWiseProduct: action.data,
      };

    default:
      return state;
  }
};

import { FavoriteProductAction } from "../constant/favoriteProduct";

const intialState = {
  favoriteProduct: [],
  isProductAdded: false,
  errorMessage: "",
};

export const favoriteReducer = (state = intialState, action) => {
  switch (action.type) {
    case FavoriteProductAction.GET_FAVORITE_PRODUCT:
      return { ...state, favoriteProduct: action.data };

    case FavoriteProductAction.ADD_FAVORITE_PRODUCT:
      return { ...state, isProductAdded: true };

    case FavoriteProductAction.ERROR:
      return {
        ...state,
        errorMessage: action.errorMessage && "Something wrong",
      };
    default:
      return state;
  }
};

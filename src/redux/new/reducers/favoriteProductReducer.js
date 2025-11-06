import { FavoriteProductAction } from "../constant/favoriteProduct";

const intialState = {
  favoriteProduct: [],
};

export const favoriteReducer = (state = intialState, action) => {
  switch (action.type) {
    case FavoriteProductAction.GET_FAVORITE_PRODUCT:
      return { ...state, favoriteProduct: action.data };

    default:
      return state;
  }
};

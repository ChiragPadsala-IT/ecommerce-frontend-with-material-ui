import { FavoriteProductAction } from "../constant/favoriteProduct";

const { FavoriteProductApi } = require("../../../Api/favoriteProduct");

export const getFavoriteProduct = () => async (dispatch) => {
  const res = await fetch(FavoriteProductApi.getFavoriteProduct, {
    method: "GET",
    credentials: "include",
  });

  const data = await res.json();

  console.log(data.products.favorites);

  dispatch({
    type: FavoriteProductAction.GET_FAVORITE_PRODUCT,
    data: data.products.favorites,
  });
};

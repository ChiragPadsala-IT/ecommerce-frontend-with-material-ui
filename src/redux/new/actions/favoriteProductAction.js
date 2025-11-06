import { FavoriteProductAction } from "../constant/favoriteProduct";

const { FavoriteProductApi } = require("../../../Api/favoriteProduct");

export const getFavoriteProduct = () => async (dispatch) => {
  try {
    const res = await fetch(FavoriteProductApi.getFavoriteProduct, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    const data = await res.json();

    console.log(data.products);

    dispatch({
      type: FavoriteProductAction.GET_FAVORITE_PRODUCT,
      data: data.products.favorites,
    });
  } catch (error) {
    console.log(error);
  }
};

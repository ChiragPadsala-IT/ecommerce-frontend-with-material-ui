import { FavoriteProductAction } from "../constant/favoriteProduct";

const { FavoriteProductApi } = require("../../../Api/favoriteProduct");

export const getFavoriteProduct = () => async (dispatch) => {
  try {
    const res = await fetch(
      "http://localhost:4000/api/v1/favorite/favorite-product",
      {
        method: "GET",
        credentials: "include",
      }
    );

    const data = await res.json();

    console.log(data.products);

    // dispatch({
    //   type: FavoriteProductAction.GET_FAVORITE_PRODUCT,
    //   data: data.products.favorites,
    // });
  } catch (error) {
    console.log(error);
  }
};

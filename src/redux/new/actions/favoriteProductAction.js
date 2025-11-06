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

export const addToFavoriteProduct = (productId) => async (dispatch) => {
  try {
    const res = await fetch(FavoriteProductApi.addToFavoriteProduct, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ productId: productId }),
    });

    const data = await res.json();

    if (data.success) {
      dispatch({ type: FavoriteProductAction.ADD_FAVORITE_PRODUCT });
      alert("Item Added successfully");
    } else {
      dispatch({
        type: FavoriteProductAction.ERROR,
        errorMessage: data.message,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const removeFavoriteProduct = (productId) => async (dispatch) => {
  try {
    const res = await fetch(FavoriteProductApi.removeFavoriteProduct, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ productId: productId }),
    });

    const data = await res.json();

    if (data.success) {
      dispatch({
        type: FavoriteProductAction.REMOVE_FAVORITE_PRODUCT,
        data: data.favoriteList.favorites,
      });
    } else {
      dispatch({
        type: FavoriteProductAction.ERROR,
        errorMessage: data.message,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

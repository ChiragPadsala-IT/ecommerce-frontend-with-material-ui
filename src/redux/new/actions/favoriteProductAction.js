const { FavoriteProductApi } = require("../../../Api/favoriteProduct");

export const getFavoriteProduct = () => async (dispatch) => {
  const res = await fetch(FavoriteProductApi.getFavoriteProduct);

  const data = await res.json();

  console.log(data);
};

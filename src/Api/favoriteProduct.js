const rootUrl = "http://localhost:4000";

export const FavoriteProductApi = {
  getFavoriteProduct: `${rootUrl}/api/v1/favorite/favorite-product`,
  addToFavoriteProduct: `${rootUrl}/api/v1/favorite/add-to-favorite`,
  removeFavoriteProduct: `${rootUrl}/api/v1/favorite/remove-product`,
};

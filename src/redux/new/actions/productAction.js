import { ProductApi } from "../../../Api/product";
import { productAction } from "../constant/productAction";

export const getNewProduct = () => async (dispatch) => {
  const res = await fetch(ProductApi.newProduct);

  const data = await res.json();

  dispatch({ type: productAction.GET_NEW_PRODUCT, newProduct: data.products });
};

export const getBestSellerProduct = () => async (dispatch) => {
  const res = await fetch(ProductApi.bestSeller);

  const data = await res.json();

  dispatch({
    type: productAction.GET_BEST_SELLER_PRODUCT,
    bestSellerProduct: data,
  });
};

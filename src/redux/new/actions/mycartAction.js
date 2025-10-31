import { MyCartApi } from "../../../Api/myCart";
import { MyCartAction } from "../constant/mycart";

export const getCartData = () => async (dispatch) => {
  try {
    const res = await fetch(MyCartApi.getCartData, {
      method: "GET",
      credentials: "include",
    });

    const data = await res.json();

    dispatch({ type: MyCartAction.GET_PRODUCT, data: data.cart.items });
  } catch (err) {
    console.log(err.messages);
  }
};

export const addToCartData = (product) => async (dispatch) => {
  try {
    const res = await fetch(MyCartApi.addToCart, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(product),
      credentials: true,
    });

    const data = await res.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

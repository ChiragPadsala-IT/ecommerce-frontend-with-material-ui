import { MyCartApi } from "../../../Api/myCart";
import { MyCartAction } from "../constant/mycart";

export const getCartData = () => async (dispatch) => {
  try {
    const res = await fetch(MyCartApi.getCartData, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
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
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(product),
    });

    const data = await res.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

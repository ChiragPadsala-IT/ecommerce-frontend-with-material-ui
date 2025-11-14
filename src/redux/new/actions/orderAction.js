import { loadStripe } from "@stripe/stripe-js";
import { OrderAction } from "../constant/order";
import { OrderApi } from "../../../Api/orderApi";
import { useStripe } from "@stripe/react-stripe-js";

export const makeOrder = (products) => async (dispatch) => {
  const updatedProducts = products.map(({ _id, ...rest }) => ({
    productId: _id,
    ...rest,
  }));

  const res = await fetch(OrderApi.makeOrder, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({ products: updatedProducts }),
  });

  const data = await res.json();

  console.log(data);
  if (data.success) {
    window.location.href = data.sessionUrl;
  }
};

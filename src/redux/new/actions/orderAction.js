import { loadStripe } from "@stripe/stripe-js";
import { OrderAction } from "../constant/order";
import { OrderApi } from "../../../Api/orderApi";
import { useStripe } from "@stripe/react-stripe-js";

export const makeOrder = (products) => async (dispatch) => {
  //   const stripe = await loadStripe(
  //     process.env.STRIPE_PUBLISHABLE_KEY ||
  //       "pk_test_51SQi6rQLy61FKKAvt7EIpsakkyIRp2oDs2mIOgdzrwpZLfOhJkcVvWkhg1XQpBgEUjE9PrugkTtxxpeOlr8lCw0K00nkQJIm1g"
  //   );

  const updatedProducts = products.map(({ _id, ...rest }) => ({
    productID: _id,
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

  if (data.success) {
    console.log(data.session);
    window.location.href = data.session;
  }
};

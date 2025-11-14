import { OrderApi } from "../../../Api/orderApi";

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

  if (data.success) {
    window.location.href = data.sessionUrl;
  }
};

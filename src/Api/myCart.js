const rootUrl = "http://localhost:4000";

export const MyCartApi = {
  addToCart: `${rootUrl}/api/v1/mycart/add-to-cart`,
  getCartData: `${rootUrl}/api/v1/mycart/get-cart-data`,
  makeOrder: `${rootUrl}/api/v1/order/create-order`,
  deleteCart: `${rootUrl}/api/v1/mycart/delete-cart-data`,
};

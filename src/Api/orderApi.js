const rootUrl = "http://localhost:4000";

export const OrderApi = {
  makeOrder: `${rootUrl}/api/v1/order/create-order`,
  paymentSuccess: `${rootUrl}/api/v1/order/payment-success`,
  paymentFailed: `${rootUrl}/api/v1/order/payment-failed`,
};

import Home from "../Pages/Home/Home";
import MyCart from "../Pages/MyCart";

export const routes = [
  {
    name: "Home",
    path: "/",
    page: <Home />,
  },
  {
    name: "Cart",
    path: "/mycart",
    page: <MyCart />,
  },
];

import Home from "../Pages/Home";
import Login from "../Pages/Login";
import MyCart from "../Pages/MyCart";
import SignUp from "../Pages/SignUp";

export const routes = [
  {
    name: "Login",
    path: "/login",
    page: <Login />,
  },
  {
    name: "SignUp",
    path: "/sign-up",
    page: <SignUp />,
  },
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

import { PaymentFailed, PaymentSuccess } from "../Components";
import ContactUs from "../Pages/ContactUs";
import Favorite from "../Pages/Favorite";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import MyCart from "../Pages/MyCart";
import SignUp from "../Pages/SignUp";
import ProductView from "../Pages/ProductView";

export const routes = [
  {
    name: "Login",
    path: "/login",
    page: <Login />,
  },
  {
    name: "SignUp",
    path: "/signup",
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
  {
    name: "Favorite",
    path: "/favorite",
    page: <Favorite />,
  },
  {
    name: "ContactUs",
    path: "/contact-us",
    page: <ContactUs />,
  },
  {
    name: "PaymentSuccess",
    path: "/payment-success",
    page: <PaymentSuccess />,
  },
  {
    name: "PaymentFailed",
    path: "/payment-failed",
    page: <PaymentFailed />,
  },
  {
    name: "Category",
    path: "/category",
    page: <ProductView />,
  },
];

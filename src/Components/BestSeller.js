import "react-multi-carousel/lib/styles.css";
import HomePageSellingList from "./HomePageSellingList";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bestSeller } from "../redux/product/productSlice";
import { ProductApi } from "../Api/product";

const BestSeller = () => {
  const [productList, setProductList] = useState([]);
  const [advertiseImg, setAdvertiseImg] = useState("");

  useEffect(() => {
    fetch(ProductApi.bestSeller)
      .then((res) => res.json())
      .then((data) => setProductList(data))
      .catch((err) => {
        console.log("*****************Best Seller useEffect******************");
        console.log(err);
        console.log("*****************Best Seller useEffect******************");
      });
  }, []);

  return (
    <HomePageSellingList
      title="Best Seller"
      desc="Do not miss the current offer until the end of the March."
      productList={productList}
      advertiseImg={advertiseImg}
    />
  );
};

export default BestSeller;

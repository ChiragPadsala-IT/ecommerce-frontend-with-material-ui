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
    setAdvertiseImg(
      "https://images.squarespace-cdn.com/content/v1/63a319730d8d6a5a211c4a43/999d5bb0-0a5e-4890-abcb-5b4a7c7dcb1d/Car-Selling-Point-Ad-Design.jpg"
    );
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

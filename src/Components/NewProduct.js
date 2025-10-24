import React, { useEffect, useState } from "react";
import HomePageSellingList from "./HomePageSellingList";
import { ProductApi } from "../Api/product";

const NewProduct = () => {
  const [productList, setProductList] = useState([]);
  const [advertiseImg, setAdvertiseImg] = useState("");

  useEffect(
    () => {
      fetch(ProductApi.newProduct)
        .then((res) => res.json())
        .then((data) => setProductList(data.products))
        .catch((err) => {
          console.log(
            "*****************Best Seller useEffect******************"
          );
          console.log(err);
          console.log(
            "*****************Best Seller useEffect******************"
          );
        });
      setAdvertiseImg(
        "https://images.squarespace-cdn.com/content/v1/63a319730d8d6a5a211c4a43/999d5bb0-0a5e-4890-abcb-5b4a7c7dcb1d/Car-Selling-Point-Ad-Design.jpg"
      );
    },
    productList,
    advertiseImg
  );

  return (
    <HomePageSellingList
      title="New Product"
      desc="New products with updated stocks."
      productList={productList}
      advertiseImg={advertiseImg}
    />
  );
};

export default NewProduct;

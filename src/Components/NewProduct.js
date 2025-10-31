import React, { useEffect, useState } from "react";
import HomePageSellingList from "./HomePageSellingList";
import { ProductApi } from "../Api/product";
import { useDispatch, useSelector } from "react-redux";
import { getNewProduct } from "../redux/new/actions/productAction";

const NewProduct = () => {
  const [advertiseImg, setAdvertiseImg] = useState(
    "https://images.squarespace-cdn.com/content/v1/63a319730d8d6a5a211c4a43/999d5bb0-0a5e-4890-abcb-5b4a7c7dcb1d/Car-Selling-Point-Ad-Design.jpg"
  );

  const dispatch = useDispatch();
  const { newProduct } = useSelector((state) => state.productReducer);

  useEffect(() => {
    dispatch(getNewProduct());
  }, []);

  return (
    <HomePageSellingList
      title="New Product"
      desc="New products with updated stocks."
      productList={newProduct}
      advertiseImg={advertiseImg}
    />
  );
};

export default NewProduct;

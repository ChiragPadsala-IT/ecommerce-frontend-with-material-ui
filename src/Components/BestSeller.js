import "react-multi-carousel/lib/styles.css";
import HomePageSellingList from "./HomePageSellingList";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBestSellerProduct } from "../redux/new/actions/productAction";

const BestSeller = () => {
  const [advertiseImg, setAdvertiseImg] = useState(
    "https://images.squarespace-cdn.com/content/v1/63a319730d8d6a5a211c4a43/999d5bb0-0a5e-4890-abcb-5b4a7c7dcb1d/Car-Selling-Point-Ad-Design.jpg"
  );

  const dispatch = useDispatch();
  const { bestSellerProduct } = useSelector((state) => state.productReducer);

  useEffect(() => {
    dispatch(getBestSellerProduct());
  }, []);

  return (
    <HomePageSellingList
      title="Best Seller"
      desc="Do not miss the current offer until the end of the March."
      productList={bestSellerProduct}
      advertiseImg={advertiseImg}
    />
  );
};

export default BestSeller;

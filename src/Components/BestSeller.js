import "react-multi-carousel/lib/styles.css";
import HomePageSellingList from "./HomePageSellingList";
import { useEffect, useState } from "react";

const BestSeller = () => {
  const [productList, setProductList] = useState([]);
  const [advertiseImg, setAdvertiseImg] = useState("");

  useEffect(() => {
    const list = [
      {
        name: "Precious Gift",
        desc: "Women perce",
        image: "https://m.media-amazon.com/images/I/61GpT8+nFXL._UY900_.jpg",
        inStock: true,
        rating: 3,
        price: 10.99,
        discount: 0,
      },
      {
        name: "Precious Gift",
        desc: "Women perce",
        image: "https://arce.org/wp-content/uploads/2023/01/21X_CAT115R1.jpg",
        inStock: true,
        rating: 3,
        price: 10.99,
        discount: 0,
      },
      {
        name: "Precious Gift",
        desc: "Women perce",
        image: "https://m.media-amazon.com/images/I/61GpT8+nFXL._UY900_.jpg",
        inStock: true,
        rating: 3,
        price: 10.99,
        discount: 0,
      },
      {
        name: "Precious Gift",
        desc: "Women perce",
        image: "https://m.media-amazon.com/images/I/61GpT8+nFXL._UY900_.jpg",
        inStock: true,
        rating: 3,
        price: 10.99,
        discount: 0,
      },
      {
        name: "Precious Gift",
        desc: "Women perce",
        image: "https://m.media-amazon.com/images/I/61GpT8+nFXL._UY900_.jpg",
        inStock: true,
        rating: 3,
        price: 10.99,
        discount: 0,
      },
      {
        name: "Precious Gift",
        desc: "Women perce",
        image: "https://m.media-amazon.com/images/I/61GpT8+nFXL._UY900_.jpg",
        inStock: true,
        rating: 3,
        price: 10.99,
        discount: 0,
      },
      {
        name: "Precious Gift",
        desc: "Women perce",
        image: "https://m.media-amazon.com/images/I/61GpT8+nFXL._UY900_.jpg",
        inStock: true,
        rating: 3,
        price: 10.99,
        discount: 0,
      },
      {
        name: "Precious Gift",
        desc: "Women perce",
        image: "https://m.media-amazon.com/images/I/61GpT8+nFXL._UY900_.jpg",
        inStock: true,
        rating: 3,
        price: 10.99,
        discount: 8.99,
      },
      {
        name: "Precious Gift",
        desc: "Women perce",
        image: "https://m.media-amazon.com/images/I/61GpT8+nFXL._UY900_.jpg",
        inStock: true,
        rating: 3,
        price: 10.99,
        discount: 8.99,
      },
      {
        name: "Precious Gift",
        desc: "Women perce",
        image: "https://m.media-amazon.com/images/I/61GpT8+nFXL._UY900_.jpg",
        inStock: true,
        rating: 3,
        price: 10.99,
        discount: 8.99,
      },
    ];
    setProductList([...list]);
    setAdvertiseImg(
      "https://www.shutterstock.com/shutterstock/photos/2661738301/display_1500/stock-vector--d-flash-sale-banner-with-september-number-on-podium-or-stage-isolated-on-background-with-2661738301.jpg"
    );
  }, productList);

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

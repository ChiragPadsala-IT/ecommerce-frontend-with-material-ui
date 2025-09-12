import React, { useEffect, useState } from "react";
import HomePageSellingList from "./HomePageSellingList";

const NewProduct = () => {
  const [productList, setProductList] = useState([]);
  const [advertiseImg, setAdvertiseImg] = useState("");

  useEffect(
    () => {
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

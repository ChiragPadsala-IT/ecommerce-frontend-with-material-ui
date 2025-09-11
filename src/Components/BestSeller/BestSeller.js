import "react-multi-carousel/lib/styles.css";
import HomePageSellingList from "../HomePageSellingList";
import { useEffect, useState } from "react";

const BestSeller = () => {
  const [productList, setProductList] = useState([]);

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
  }, productList);

  return <HomePageSellingList productList={productList} />;
};

export default BestSeller;

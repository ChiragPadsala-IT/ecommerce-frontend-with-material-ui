import "react-multi-carousel/lib/styles.css";
import HomePageSellingList from "./HomePageSellingList";
import { useEffect, useState } from "react";

const BestSeller = () => {
  const [productList, setProductList] = useState([]);
  const [advertiseImg, setAdvertiseImg] = useState("");

  useEffect(() => {
    const list = [
      {
        name: "Ophidia pochette",
        brand: "Gucci",
        desc: "Gucci handbags blend iconic style with modern luxury, crafted to make every look timeless.",
        image: "https://m.media-amazon.com/images/I/61GpT8+nFXL._UY900_.jpg",
        sku: "ZU4E58R",
        itemCount: 0,
        type: "Luxury",
        mfg: "Jan 4, 2021",
        life: "Up to you",
        inStock: false,
        category: "Women",
        tag: "Luxurious",
        rating: 3,
        price: 10.99,
        discount: 0,
      },
      {
        name: "Ophidia pochette",
        brand: "Gucci",
        desc: "Gucci handbags blend iconic style with modern luxury, crafted to make every look timeless.",
        image: "https://m.media-amazon.com/images/I/61GpT8+nFXL._UY900_.jpg",
        sku: "ZU4E58R",
        itemCount: 10,
        type: "Luxury",
        mfg: "Jan 4, 2021",
        Life: "Up to you",
        inStock: true,
        category: "Women",
        tag: "Luxurious",
        rating: 3,
        price: 10.99,
        discount: 0,
      },
      {
        name: "Ophidia pochette",
        brand: "Gucci",
        desc: "Gucci handbags blend iconic style with modern luxury, crafted to make every look timeless.",
        image: "https://m.media-amazon.com/images/I/61GpT8+nFXL._UY900_.jpg",
        sku: "ZU4E58R",
        itemCount: 10,
        type: "Luxury",
        mfg: "Jan 4, 2021",
        Life: "Up to you",
        inStock: true,
        category: "Women",
        tag: "Luxurious",
        rating: 3,
        price: 10.99,
        discount: 0,
      },
      {
        name: "Ophidia pochette",
        brand: "Gucci",
        desc: "Gucci handbags blend iconic style with modern luxury, crafted to make every look timeless.",
        image: "https://m.media-amazon.com/images/I/61GpT8+nFXL._UY900_.jpg",
        sku: "ZU4E58R",
        itemCount: 10,
        type: "Luxury",
        mfg: "Jan 4, 2021",
        Life: "Up to you",
        inStock: true,
        category: "Women",
        tag: "Luxurious",
        rating: 3,
        price: 10.99,
        discount: 0,
      },
      {
        name: "Ophidia pochette",
        brand: "Gucci",
        desc: "Gucci handbags blend iconic style with modern luxury, crafted to make every look timeless.",
        image: "https://m.media-amazon.com/images/I/61GpT8+nFXL._UY900_.jpg",
        sku: "ZU4E58R",
        itemCount: 10,
        type: "Luxury",
        mfg: "Jan 4, 2021",
        Life: "Up to you",
        inStock: true,
        category: "Women",
        tag: "Luxurious",
        rating: 3,
        price: 10.99,
        discount: 0,
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

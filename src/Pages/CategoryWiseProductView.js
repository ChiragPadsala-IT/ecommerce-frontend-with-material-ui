import React, { useEffect } from "react";
import { Footer, Header, ProductCard } from "../Components";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductByCategory } from "../redux/new/actions/productAction";

const CategoryWiseProductView = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const categoryName = query.get("name");

  const dispatch = useDispatch();
  const { categoryWiseProduct } = useSelector((state) => state.productReducer);

  useEffect(() => {
    dispatch(getProductByCategory(categoryName));
  }, [categoryName]);

  console.log(categoryWiseProduct);
  return (
    <>
      <Header />
      <Box sx={{ my: "3rem" }}>
        <Typography sx={{ my: "3rem", fontWeight: 700, fontSize: "1.5rem" }}>
          {categoryName.toUpperCase()}
        </Typography>
        {categoryWiseProduct.length === 0 ? (
          <Typography
            sx={{ textAlign: "center", margin: "10rem 0", fontSize: "2rem" }}
          >
            No products are available in this category at the moment.
          </Typography>
        ) : (
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {categoryWiseProduct.map((item) => (
              <Box sx={{ width: "18rem" }}>
                <ProductCard props={item} />
              </Box>
            ))}
          </Box>
        )}
      </Box>
      {/* <Footer></Footer> */}
    </>
  );
};
{
  /* categoryWiseProduct.map((item) =>
            (
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 200, objectFit: "cover" }}
                image={item.image}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography>In Stock</Typography>
                <Rating></Rating>
                <Typography>$10.99</Typography>
              </CardContent>
              </Card>)
            ) */
}
export default CategoryWiseProductView;

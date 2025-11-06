import React, { useEffect } from "react";
import { Header } from "../Components";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  getFavoriteProduct,
  removeFavoriteProduct,
} from "../redux/new/actions/favoriteProductAction";
import { addToCartData } from "../redux/new/actions/mycartAction";

const Favorite = () => {
  const { favoriteProduct } = useSelector((state) => state.favoriteReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavoriteProduct());
  });

  const onAddToCartHandler = (id) => {
    // dispatch();
  };

  return (
    <>
      <Header />
      <Box>
        <Typography
          sx={{
            fontSize: "1.5rem",
            fontWeight: "500",
            my: "1rem",
            textAlign: "center",
          }}
        >
          Your Favorite Products
        </Typography>
        <Grid container spacing={3} justifyContent={"center"}>
          {favoriteProduct.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item._id}>
              <Card
                sx={{
                  //   position: "relative",
                  //   height: 300,
                  width: 300,
                  borderRadius: 3,
                  boxShadow: 3,
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.03)" },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  py: "5px",
                }}
              >
                <CardMedia
                  component="img"
                  //   height="180"
                  image={item.image || "/placeholder.png"}
                  alt={item.name}
                  sx={{
                    width: "100%",
                    height: 160,
                    objectFit: "contain",
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                  }}
                />
                <CardContent>
                  <Typography>{item.name}</Typography>
                  <Typography>${item.price?.toFixed(2)}</Typography>
                </CardContent>
                <Box sx={{ display: "flex", gap: 1, px: "5px" }}>
                  <Button
                    variant="outlined"
                    color="error"
                    sx={{ width: "50%" }}
                    onClick={() => dispatch(removeFavoriteProduct(item._id))}
                  >
                    Remove
                  </Button>
                  <Button
                    variant="outlined"
                    color="success"
                    sx={{ width: "50%" }}
                    onClick={() => {
                      dispatch(
                        addToCartData({
                          productId: item._id,
                          quantity: 1,
                        })
                      );
                      dispatch(removeFavoriteProduct(item._id));
                    }}
                  >
                    Add to Cart
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Favorite;

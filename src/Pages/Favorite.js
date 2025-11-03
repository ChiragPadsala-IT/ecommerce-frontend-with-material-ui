import React, { useEffect } from "react";
import { Header } from "../Components";
import { Box, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { getFavoriteProduct } from "../redux/new/actions/favoriteProductAction";

const Favorite = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavoriteProduct());
  });

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
      </Box>
    </>
  );
};

export default Favorite;

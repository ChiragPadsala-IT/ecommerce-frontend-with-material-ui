import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box, flex } from "@mui/system";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Rating from "@mui/material/Rating";
import ProductCard from "../ProductCard";

const BestSeller = () => {
  const productList = [
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

  return (
    <Box
      sx={{
        my: "2rem",
        display: "flex",
        flexDirection: "row",
        height: { xs: "40vw", lg: "30vw" },
      }}
    >
      <Box sx={{ width: "30%", background: "yellow" }}>
        <img
          src="https://www.shutterstock.com/shutterstock/photos/2661738301/display_1500/stock-vector--d-flash-sale-banner-with-september-number-on-podium-or-stage-isolated-on-background-with-2661738301.jpg"
          alt="Sele Image"
          style={{ height: "100%", width: "100%" }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: "5px",
          }}
        >
          <Box>
            <Typography sx={{ fontSize: "2em" }}>BestSeller</Typography>
            <Typography sx={{ fontWeight: "300" }}>
              Do not miss the current offer until the end of the March
            </Typography>
          </Box>
          <Box>
            <Button variant="outlined">
              <Typography sx={{ fontSize: "0.82em", mr: "5px" }}>
                View All
              </Typography>
              <ArrowForwardIosIcon sx={{ fontSize: "0.9em" }} />
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
          }}
        >
          {productList.map((r, index) => (
            <ProductCard
              name="Precious Gift"
              desc="Women perce"
              image="https://m.media-amazon.com/images/I/61GpT8+nFXL._UY900_.jpg"
              inStock={true}
              rating={3}
              price={10.99}
              discount={8.99}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default BestSeller;

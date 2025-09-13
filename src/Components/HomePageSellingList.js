import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { IconButton } from "@mui/material";
import ProductCard from "./ProductCard";

const HomePageSellingList = ({ title, desc, productList, advertiseImg }) => {
  return (
    <Box
      sx={{
        my: "2rem",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        width: "100%",
        // position: "relative",
      }}
    >
      <Box
        sx={{
          width: "25%",
          height: "100%",
          background: "yellow",
          display: { xs: "none", md: "block" },
        }}
      >
        <img
          src={advertiseImg}
          alt="Sale Image"
          style={{ width: "100%", height: "100%" }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          pl: "1em",
          pr: { xs: "1em", md: "0" },
          width: { xs: "100%", md: "75%" },
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: "5px",
            height: "20%",
            mb: "2em",
          }}
        >
          <Box>
            <Typography sx={{ fontSize: "2em" }}>{title}</Typography>
            <Typography sx={{ fontWeight: "300" }}>{desc}</Typography>
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
            height: "80%",
          }}
        >
          <Carousel
            responsive={responsive}
            customLeftArrow={
              <IconButton
                sx={{
                  position: "absolute",
                  top: "50%", // move to bottom
                  left: "1%", // center-ish
                  zIndex: 100,
                  bgcolor: "rgba(239, 233, 233, 1)",
                }}
              >
                <ArrowBackIosIcon />
              </IconButton>
            }
            customRightArrow={
              <IconButton
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: "1%",
                  zIndex: 100,
                  bgcolor: "rgba(239, 233, 233, 1)",
                }}
              >
                <ArrowForwardIosIcon />
              </IconButton>
            }
          >
            {productList.map((r, index) => (
              <ProductCard
                name={r.name}
                desc={r.desc}
                image={r.image}
                inStock={r.inStock}
                rating={r.rating}
                price={r.price}
                discount={r.discount}
              />
            ))}
          </Carousel>
        </Box>
      </Box>
    </Box>
  );
};

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

export default HomePageSellingList;

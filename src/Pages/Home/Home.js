import React from "react";
import { BestSeller, ReactSlickSlider } from "../../Components";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const Home = () => {
  return (
    <Box sx={{ height: "76vh" }}>
      <ReactSlickSlider />

      <BestSeller />
    </Box>
  );
};

export default Home;

import { Box } from "@mui/material";
import React from "react";
import DiscountImg1 from "../Assets/Images/discount1.jpg";
import DiscountImg2 from "../Assets/Images/discount2.jpg";

const DiscountCard = () => {
  return (
    <Box
      sx={{
        width: { xs: "90%", lg: "75%" },
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        justifyContent: "center",
        alignItems: "center",
        ml: "1em",
        gap: 2,
        py: { xs: "2em", lg: "0" },
      }}
    >
      <Box
        sx={{
          width: { xs: "75%", lg: "50%" },
          height: { xs: "100%", lg: "15vw" },
          background: "red",
        }}
      >
        <img
          src={DiscountImg1}
          alt="Discount"
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
      </Box>
      <Box
        sx={{
          width: { xs: "75%", lg: "50%" },
          height: { xs: "100%", lg: "15vw" },
          background: "yellow",
        }}
      >
        <img
          src={DiscountImg2}
          alt="Discount"
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
      </Box>
    </Box>
  );
};

export default DiscountCard;

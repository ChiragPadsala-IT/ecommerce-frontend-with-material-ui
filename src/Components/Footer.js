import { Box, Typography } from "@mui/material";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import React from "react";
import PercentIcon from "@mui/icons-material/Percent";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import { footerMenu } from "../Constants/footerMenu";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 5,
        pt: "4em",
        background: "rgba(239, 234, 234, 0.21)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        <Box sx={{ display: "flex", gap: 1 }}>
          <InventoryOutlinedIcon />
          <Box>Everyday fresh products</Box>
        </Box>
        <Box sx={{ display: "flex", gap: 1 }}>
          <LocalShippingOutlinedIcon />
          <Box>Free delivery for order over $100</Box>
        </Box>
        <Box sx={{ display: "flex", gap: 1 }}>
          <PercentIcon />
          <Box>Daily Mega Discounts</Box>
        </Box>
        <Box sx={{ display: "flex", gap: 1 }}>
          <MonetizationOnOutlinedIcon />
          <Box>Best price on the market</Box>
        </Box>
      </Box>
      <hr />

      <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
        {footerMenu.map((e, index) => (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography sx={{ fontWeight: "600", textTransform: "uppercase" }}>
              {e.name}
            </Typography>
            <Box>
              {e.subCategories.map((subCat, i) => (
                <Typography sx={{ fontSize: "0.9em", opacity: "0.8" }}>
                  {subCat.name}
                </Typography>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
      <Box
        sx={{ height: { xs: "10vw", sm: "4vw" } }}
        style={{
          width: "100%",
          background: "rgba(71, 70, 70, 1)",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "600",
          letterSpacing: 1,
          // position: "relative",
        }}
      >
        All Rights reserved by Chirag
      </Box>
    </Box>
  );
};

export default Footer;

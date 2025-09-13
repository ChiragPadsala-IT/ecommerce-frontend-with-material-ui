import { Box, IconButton, Typography } from "@mui/material";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import React from "react";
import PercentIcon from "@mui/icons-material/Percent";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import { footerMenu } from "../Constants/footerMenu";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

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
          // justifyContent: "space-evenly",
          justifyContent: { xs: "flex-start", sm: "space-evenly" },
          flexWrap: "wrap",
          pl: { xs: "1em", sm: "0" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            // gap: 1,
            width: { xs: "50%", sm: "20%" },
          }}
        >
          <InventoryOutlinedIcon
            sx={{ display: "flex", alignItems: "center" }}
          />
          <Box>Everyday fresh products</Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            width: "20%",
            width: { xs: "50%", sm: "20%" },
          }}
        >
          <LocalShippingOutlinedIcon />
          <Box>Free delivery for order over $100</Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            width: "20%",
            width: { xs: "50%", sm: "20%" },
            mt: { xs: "1em", sm: "0" },
          }}
        >
          <PercentIcon />
          <Box>Daily Mega Discounts</Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            width: "20%",
            width: { xs: "50%", sm: "20%" },
            mt: { xs: "1em", sm: "0" },
          }}
        >
          <MonetizationOnOutlinedIcon />
          <Box>Best price on the market</Box>
        </Box>
      </Box>
      <hr />

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 2, sm: 0 },
          justifyContent: "space-around",
          alignItems: { xs: "center", sm: "start" },
          px: { xs: "1em", sm: "0" },
          flexWrap: "wrap",
        }}
      >
        {footerMenu.map((e, index) => (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography sx={{ fontWeight: "600", textTransform: "uppercase" }}>
              {e.name}
            </Typography>
            <Box>
              {e.subCategories.map((subCat, i) => (
                <Typography
                  sx={{ fontSize: "0.9em", opacity: "0.8", cursor: "pointer" }}
                  onClick={() =>
                    alert("Product of this category is not available yet...")
                  }
                >
                  {subCat.name}
                </Typography>
              ))}
            </Box>
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          height: { xs: "10vw", sm: "4vw" },
          width: "100%",
          background: "rgba(71, 70, 70, 1)",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontWeight: "600",
          letterSpacing: 1,
          p: "2em",
        }}
      >
        <Typography
          sx={{
            width: "62%",
            textAlign: "end",
            fontSize: { xs: "0.7rem", sm: "1rem" },
          }}
        >
          Copyright 2025, All rights reserved.
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 1, sm: 2 },
          }}
        >
          <IconButton
            onClick={() => {}}
            sx={{ cursor: "pointer", color: "white" }}
            href="https://github.com/ChiragPadsala-IT?tab=repositories"
            component="a"
            target="_blank"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            onClick={() => {}}
            sx={{ cursor: "pointer", color: "white" }}
            href="https://www.linkedin.com/in/chirag-padsala-72ba161b5"
            component="a"
            target="_blank"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            onClick={() => {}}
            sx={{ cursor: "pointer", color: "white" }}
            href="https://www.instagram.com/chiragpadsala38"
            component="a"
            target="_blank"
          >
            <InstagramIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

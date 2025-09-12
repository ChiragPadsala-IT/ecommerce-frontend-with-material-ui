import { Box } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
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
  );
};

export default Footer;

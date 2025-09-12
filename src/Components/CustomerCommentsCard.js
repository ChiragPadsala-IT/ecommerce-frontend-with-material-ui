import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

const CustomerCommentsCard = () => {
  return (
    <Box
      sx={{
        width: { xs: "75%", lg: "25%" },
        mb: "1em",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{
          textTransform: "uppercase",
          mb: "1em",
          fontWeight: "600",
          textAlign: { xs: "center", lg: "left" },
        }}
      >
        Customer Comment
      </Typography>
      <Box sx={{ padding: "1em", background: "rgba(245, 250, 242, 1)" }}>
        <Typography sx={{ fontWeight: "550" }}>The Best Marketplace</Typography>
        <Typography>We’d love to hear your feedback</Typography>
        <Box sx={{ my: "2em", display: "flex", gap: 2 }}>
          <Avatar>N</Avatar>
          <Box>
            <Typography>Tina Mcdonnell</Typography>
            <Typography sx={{ color: "rgba(114, 104, 104, 1)" }}>
              Sales Manager
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CustomerCommentsCard;

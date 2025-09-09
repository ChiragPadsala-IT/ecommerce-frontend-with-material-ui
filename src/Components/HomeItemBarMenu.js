import { Box } from "@mui/material";
import React from "react";
import { HomeNavMenuLogoList } from "../Assets/HomeNavMenuLogo";

const HomeItemBarMenu = () => {
  return (
    <Box sx={{ display: "flex", my: "2rem", flexDirection: "column", gap: 2 }}>
      <Box sx={{ fontSize: "1.5em", fontWeight: "500" }}>
        Featured Categories
      </Box>
      <Box sx={{ display: "flex", gap: 2 }}>
        {HomeNavMenuLogoList.map((r, index) => (
          <>
            <Box
              sx={{
                height: "10em",
                width: "10em",
                // background: "yellow",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
              }}
            >
              <img
                src={r.image}
                alt="name"
                style={{ height: "70%", width: "70%" }}
              />
              <Box>{r.name}</Box>
            </Box>
            {/* <Box
              sx={{
                height: "10em",
                width: "10em",
                background: "yellow",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Hello
            </Box> */}
          </>
        ))}
      </Box>
    </Box>
  );
};

export default HomeItemBarMenu;

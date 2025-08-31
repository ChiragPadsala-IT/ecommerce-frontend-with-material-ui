import React from "react";
import "./app.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./Constants/routes";
import { Header } from "./Components";
import Home from "./Pages/Home/Home";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <Box
      sx={{
        mx: {
          xs: "0",
          lg: "3rem",
        },
      }}
    >
      <Header />
      {/* <Grid container sx={{ display: "flex" }}> */}
      {/* <Grid size={4} sx={{ background: "blue" }}>
          <Box>hello</Box>
        </Grid> */}
      {/* <Grid size={8} sx={{ background: "orange" }}> */}
      <div>
        <BrowserRouter>
          <Routes>
            {routes.map((r, index) => (
              <Route key={index} path={r.path} element={r.page} />
            ))}
          </Routes>
        </BrowserRouter>
      </div>
      {/* </Grid> */}
      {/* </Grid> */}
    </Box>
  );
}

export default App;

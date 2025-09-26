import "./app.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./Constants/routes";
import { Footer, Header } from "./Components";
import Box from "@mui/material/Box";

function App() {
  return (
    <BrowserRouter>
      <Box
        display="flex"
        flexDirection="column"
        minHeight="100vh"
        sx={{
          mx: {
            xs: "0",
            lg: "3rem",
          },
        }}
      >
        {/* <Header /> */}
        <Box sx={{ flex: 1, height: "auto" }}>
          <Routes>
            {routes.map((r, index) => (
              <Route key={index} path={r.path} element={r.page} />
            ))}
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default App;

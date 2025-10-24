import "./app.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./Constants/routes";
import Box from "@mui/material/Box";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { UserApi } from "./Api/user";
import { useDispatch } from "react-redux";
import { login } from "./redux/user/userSlice";

function App() {
  console.log("*****************************");
  console.log("I am from App");
  console.log(Cookies.get("token"));
  console.log("*****************************");

  const dispatch = useDispatch();

  useEffect(() => {
    fetch(UserApi.isLogedIn, { method: "POST", credentials: "include" })
      .then((res) => res.json())
      .then((data) => {
        dispatch(login({ isUserLogin: true, email: data.user.email }));
      })
      .catch((error) => {});
  }, []);

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

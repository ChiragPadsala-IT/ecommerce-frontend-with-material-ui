import React from "react";
import "./app.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./Constants/routes";
import { Header } from "./Components";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          {routes.map((r, index) => (
            <Route key={index} path={r.path} element={r.page} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

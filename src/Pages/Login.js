import {
  Avatar,
  Box,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import googleLogo from "../Assets/Logos/google_logo.png";
import facebookLogo from "../Assets/Logos/facebook_logo.png";
import loginBg from "../Assets/Images/loginbg.webp";
import { GoogleOAuthProvider } from "@react-oauth/google";
import React, { useState } from "react";

const Login = () => {
  const [userCredential, setUserCredential] = useState({
    email: "",
    password: "",
  });

  const onUserCredentialHandler = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    setUserCredential((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    console.log(userCredential);

    setUserCredential({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: { xs: "100vh", sm: "400px" },
            boxShadow: "5px 5px 20px ",
            borderRadius: "10px",
            padding: "30px 20px",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            bgcolor: "rgba(255, 255, 255, 0.9)",
            zIndex: 100,
            my: "auto",
          }}
        >
          <Typography
            sx={{ textAlign: "center", fontSize: "22px", fontWeight: "600" }}
          >
            Login
          </Typography>
          <FormControl variant="outlined">
            <InputLabel>Email</InputLabel>
            <OutlinedInput
              label="Email"
              type="email"
              name="email"
              value={userCredential.email}
              onChange={onUserCredentialHandler}
            />
          </FormControl>
          <FormControl variant="outlined">
            <InputLabel>Password</InputLabel>
            <OutlinedInput
              label="Password"
              type="password"
              name="password"
              value={userCredential.password}
              onChange={onUserCredentialHandler}
            />
          </FormControl>
          <Typography
            sx={{
              color: "rgba(82, 133, 204, 1)",
              textDecoration: "underLine",
              cursor: "pointer",
            }}
          >
            Forgot Password?
          </Typography>
          <Button variant="contained" type="submit" onClick={onSubmitHandler}>
            Login
          </Button>
          <Typography>
            Not Registered?{" "}
            <span
              style={{
                color: "rgba(82, 133, 204, 1)",
                textDecoration: "underLine",
                cursor: "pointer",
              }}
            >
              Sign Up
            </span>
          </Typography>
          <Typography>Or Continue with social account</Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
            <Avatar src={googleLogo} sx={{ scale: 1.5, cursor: "pointer" }} />
            <Avatar src={facebookLogo} sx={{ scale: 1, cursor: "pointer" }} />
          </Box>
        </Box>
      </Box>
      <img
        height="100%"
        width="100%"
        style={{ position: "absolute", zIndex: 0, left: "0%", top: "0%" }}
        src={loginBg}
      />
    </>
  );
};

export default Login;

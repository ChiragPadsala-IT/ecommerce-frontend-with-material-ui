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
import React from "react";

const Login = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            width: { xs: "100vh", sm: "500px" },
            //   background: "yellow",
            boxShadow: "5px 5px 20px ",
            borderRadius: "10px",
            padding: "30px 20px",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography
            sx={{ textAlign: "center", fontSize: "22px", fontWeight: "600" }}
          >
            Login
          </Typography>
          <FormControl variant="outlined">
            <InputLabel>Email</InputLabel>
            <OutlinedInput label="Email" type="email" />
          </FormControl>
          <FormControl variant="outlined">
            <InputLabel>Password</InputLabel>
            <OutlinedInput label="Password" type="password" />
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
          <Button variant="contained">Login</Button>
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
    </>
  );
};

export default Login;

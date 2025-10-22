import {
  Avatar,
  Box,
  Button,
  FormControl,
  FormLabel,
  InputLabel,
  Link,
  ListItem,
  OutlinedInput,
  Radio,
  Typography,
} from "@mui/material";
import validator from "validator";
import googleLogo from "../Assets/Logos/google_logo.png";
import facebookLogo from "../Assets/Logos/facebook_logo.png";
import loginBg from "../Assets/Images/loginbg.webp";
import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const SignUp = () => {
  const [userCredential, setUserCredential] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    role: "user",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
    confirmPassword: "",
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

    if (userCredential.email == "") {
      setError((prev) => {
        return { ...prev, email: "Email is required..." };
      });
    } else if (!validator.isEmail(userCredential.email)) {
      setError((prev) => {
        return { ...prev, email: "Invalid email address..." };
      });
    } else {
      setError((prev) => {
        return { ...prev, email: "" };
      });
    }

    if (userCredential.password == "") {
      setError((prev) => {
        return { ...prev, password: "Password is required..." };
      });
    } else if (userCredential.password.length < 10) {
      setError((prev) => {
        return {
          ...prev,
          password: "Password must be 10 or more characters...",
        };
      });
    } else {
      setError((prev) => {
        return { ...prev, password: "" };
      });
    }

    if (userCredential.confirmPassword == "") {
      setError((prev) => {
        return { ...prev, confirmPassword: "Confirm password is required..." };
      });
    } else if (userCredential.confirmPassword.length < 10) {
      setError((prev) => {
        return {
          ...prev,
          confirmPassword: "Confirm password must be 10 or more characters...",
        };
      });
    } else if (userCredential.confirmPassword !== userCredential.password) {
      setError((prev) => {
        return {
          ...prev,
          confirmPassword: "Confirm password dose not match...",
        };
      });
    } else {
      setError((prev) => {
        return { ...prev, confirmPassword: "" };
      });
    }

    setUserCredential({
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center", // horizontal
          alignItems: "center", // vertical
          height: "100vh", // full screen height
          width: "100%", // full width
          position: "relative",
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
            SignUp
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
          {error.email.length > 0 && (
            <Typography sx={{ color: "red", fontSize: "14px" }}>
              {error.email}
            </Typography>
          )}
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
          {error.password.length > 0 && (
            <Typography sx={{ color: "red", fontSize: "14px" }}>
              {error.password}
            </Typography>
          )}
          <FormControl variant="outlined">
            <InputLabel>Confirm Password</InputLabel>
            <OutlinedInput
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              value={userCredential.confirmPassword}
              onChange={onUserCredentialHandler}
            />
          </FormControl>
          {error.confirmPassword.length > 0 && (
            <Typography sx={{ color: "red", fontSize: "14px" }}>
              {error.confirmPassword}
            </Typography>
          )}
          <ListItem>
            <FormLabel>User</FormLabel>
            <Radio
              checked={userCredential.role === "user"}
              onChange={(e) => {
                setUserCredential((prev) => {
                  return {
                    ...prev,
                    role: e.target.value,
                  };
                });
              }}
              value="user"
              name="role"
            />
            <FormLabel>Seller</FormLabel>
            <Radio
              checked={userCredential.role === "seller"}
              onChange={(e) => {
                setUserCredential((prev) => {
                  return {
                    ...prev,
                    role: e.target.value,
                  };
                });
              }}
              value="seller"
              name="role"
            />
          </ListItem>
          <Button variant="contained" type="submit" onClick={onSubmitHandler}>
            Sign Up
          </Button>
          <Typography>
            Already have an account?{" "}
            <Link component={RouterLink} to={"/login"}>
              <span
                style={{
                  color: "rgba(82, 133, 204, 1)",
                  textDecoration: "underLine",
                  cursor: "pointer",
                }}
              >
                Login
              </span>
            </Link>
          </Typography>
          <Typography>Or Continue with social account</Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
            <Avatar
              src={googleLogo}
              sx={{ scale: 1.5, cursor: "pointer" }}
              onClick={() =>
                alert(
                  "Google sign up is working process, so please use default way to login"
                )
              }
            />
            <Avatar
              src={facebookLogo}
              sx={{ scale: 1, cursor: "pointer" }}
              onClick={() =>
                alert(
                  "Facebook sign up is working process, so please use default way to login"
                )
              }
            />
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

export default SignUp;

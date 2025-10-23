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
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { UserApi } from "../Api/user";

const SignUp = () => {
  const navigate = useNavigate();

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
    anonymous: "",
  });

  const [isVerificationCodeSend, setIsVerificationCodeSend] = useState(false);

  const [verificationcode, setVerificationcode] = useState("");

  const [verificationMessage, setVerificationMessage] = useState("");

  const onUserCredentialHandler = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    setUserCredential((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const onSubmitHandler = async (e) => {
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
      try {
        const res = await fetch(UserApi.signup, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userCredential),
        });

        const data = await res.json();
        if (!data.success) {
          setError((prev) => {
            return { ...prev, confirmPassword: "", anonymous: data.message };
          });
        } else {
          setError((prev) => {
            return { ...prev, confirmPassword: "", anonymous: "" };
          });
        }

        setIsVerificationCodeSend(true);
      } catch (error) {
        setError((prev) => {
          return { ...prev, confirmPassword: "", anonymous: error.message };
        });
      }
    }
  };

  const onVarificarionCodeHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(UserApi.verifyUser, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userCredential.email,
          varificationCode: verificationcode,
        }),
      });

      const data = await res.json();

      if (!data.success) {
        setVerificationMessage(data.message);
      } else {
        navigate("/");
      }
    } catch (error) {
      setVerificationMessage(error.message);
    }
  };

  const onResendVerificationCodeHanlder = async (e) => {
    // e.preventDefault();

    try {
      const res = await fetch(UserApi.resendVerificationCode, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userCredential.email,
        }),
      });

      const data = await res.json();

      if (!data.success) {
        setVerificationMessage(data.message);
      } else {
        setVerificationMessage(
          "OTP resent successfully. Please check your email."
        );
      }
    } catch (error) {
      setVerificationMessage(error.message);
    }
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
        {isVerificationCodeSend ? (
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
              Enter Verification Code
            </Typography>
            <Typography sx={{ fontSize: "14px" }}>
              Please check your email for the verification code we just sent.
            </Typography>
            <OutlinedInput
              type="number"
              placeholder="Enter code here"
              value={verificationcode}
              name="VarificationCode"
              onChange={(e) => setVerificationcode(e.target.value)}
            />
            <Button variant="contained" onClick={onVarificarionCodeHandler}>
              Verify Email
            </Button>
            {verificationMessage.length > 0 && (
              <Typography sx={{ color: "red", fontSize: "14px" }}>
                {verificationMessage}
              </Typography>
            )}
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                sx={{
                  color: "rgba(69, 132, 220, 1)",
                  cursor: "pointer",
                }}
                onClick={onResendVerificationCodeHanlder}
              >
                Resend code
              </Typography>
              <Typography
                variant="span"
                sx={{
                  color: "rgba(69, 132, 220, 1)",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setIsVerificationCodeSend(false);
                }}
              >
                Go To Sign Up
              </Typography>
            </Box>
          </Box>
        ) : (
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
            {error.anonymous !== "" && (
              <Typography sx={{ color: "red", fontSize: "14px" }}>
                {error.anonymous}
              </Typography>
            )}
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
        )}
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

import {
  Box,
  Button,
  Divider,
  FormHelperText,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import { useState } from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NewsLatterDiscountImg from "../Assets//Images/newsLetterDiscountImg.jpg";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [errorHelperText, setErrorHelperText] = useState("");

  const onEmailChnageHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const onEmailSubmitHandler = (e) => {
    e.preventDefault();

    // const { value } = e.target;
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (email.length == 0) {
      setErrorHelperText("Email is required...");
      return;
    } else if (!emailRegex.test(email)) {
      setErrorHelperText("Please enter valid email address...");
      return;
    } else {
      setErrorHelperText("");
      setEmail("");
    }

    console.log(e.target.value);
  };

  return (
    <Box
      sx={{
        background: "rgba(42, 68, 152, 1)",
        // height: "30vw",
        py: "4em",
        my: "4em",
        color: "white",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box
        sx={{
          width: { xs: "90%", md: "50%" },
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 0.5,
            px: "1em",
            pb: { xs: "5em", md: "0" },
          }}
        >
          <Typography sx={{ opacity: "0.8" }}>
            $20 discount for your first order
          </Typography>
          <Typography sx={{ fontSize: "2em", fontWeight: "600" }}>
            Join our newsletter and get...
          </Typography>
          <Typography sx={{ opacity: "0.5", mb: "1.5em" }}>
            Join our email subscription to get updated on <br /> promotions and
            coupons.
          </Typography>
          <Paper
            variant="form"
            sx={{
              p: "4px 10px",
              display: "flex",
              alignItems: "center",
              // width: 400,
            }}
          >
            <MailOutlineIcon />
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="example@gmail.com"
              inputProps={{ "aria-label": "search google maps" }}
              value={email}
              type="email"
              onChange={onEmailChnageHandler}
              required={true}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <Button variant="text" type="submit" onClick={onEmailSubmitHandler}>
              SUBSCRIBE
            </Button>
          </Paper>
          {errorHelperText != "" && (
            <FormHelperText
              sx={{
                color: "red",
                fontSize: "0.8em",
                fontWeight: "700",
                letterSpacing: 1,
              }}
            >
              {errorHelperText}
            </FormHelperText>
          )}
        </Box>
      </Box>
      <Box
        sx={{
          width: { xs: "90%", md: "50%" },
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "end",
          alignSelf: "center",
        }}
      >
        <img
          src={NewsLatterDiscountImg}
          style={{ width: "90%", height: "80%" }}
        />
      </Box>
    </Box>
  );
};

export default NewsLetter;

import React, { useState } from "react";
import { Header } from "../Components";
import {
  Box,
  Button,
  FilledInput,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const ContactUs = () => {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    countryCode: null,
    phone: null,
    message: "",
  });

  const onContactInfoHanlder = (e) => {
    e.preventDefault();

    setContactInfo((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: "2rem",
          gap: 1,
        }}
      >
        <Typography sx={{ fontWeight: 700, fontSize: "2rem" }}>
          Get In Touch
        </Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          <PhoneIcon />
          <Typography>Phone: +1 437-663-3514</Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 1 }}>
          <EmailIcon />
          <Typography>Email: chiragpadsala.it@gmail.com</Typography>
        </Box>

        <Box
          component="form"
          noValidate
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            width: "80vw",
            my: "2rem",
            gap: 3,
          }}
        >
          <Grid
            container
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1.7,
                width: "49%",
              }}
            >
              <TextField
                label="Name"
                name="name"
                type="text"
                placeholder="Your name"
                value={contactInfo.name}
                onChange={onContactInfoHanlder}
                required
              />
              <TextField
                label="Email"
                name="email"
                type="email"
                placeholder="Your email"
                value={contactInfo.email}
                onChange={onContactInfoHanlder}
                required
              />
              <Grid gap={2} display={"flex"}>
                <TextField
                  label="Country Code"
                  placeholder="+1"
                  name="phone"
                  type="number"
                  value={contactInfo.countryCode}
                  inputProps={{ maxlength: 4 }}
                  onChange={onContactInfoHanlder}
                  required
                />
                <TextField
                  label="Phone no."
                  name="phone"
                  type="number"
                  placeholder="Your Phone Number"
                  value={contactInfo.phone}
                  inputProps={{ maxlength: 10 }}
                  onChange={onContactInfoHanlder}
                  sx={{ width: "110%" }}
                  required
                />
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{ display: "flex", flexDirection: "column", width: "49%" }}
            >
              <TextField
                label="Message"
                name="message"
                placeholder="Write message"
                value={contactInfo.message}
                onChange={onContactInfoHanlder}
                fullheight
                multiline
                minRows={7}
                required
              />
            </Grid>
          </Grid>
          <Button variant="contained" sx={{ px: "3rem", letterSpacing: 2 }}>
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ContactUs;

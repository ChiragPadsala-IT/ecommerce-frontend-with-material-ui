import React, { useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import CancelIcon from "@mui/icons-material/Cancel";
import { useNavigate } from "react-router-dom";
import { OrderApi } from "../Api/orderApi";

const PaymentFailed = () => {
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${OrderApi.paymentFailed}${window.location.search}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        background: "linear-gradient(135deg, #FFEBEE, #FFCDD2)",
      }}
    >
      <motion.div
        initial={{ rotate: 0, scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <CancelIcon sx={{ fontSize: 100, color: "red" }} />
      </motion.div>

      <Typography variant="h4" sx={{ mt: 2, fontWeight: 600 }}>
        Payment Failed!
      </Typography>
      <Typography variant="body1" sx={{ mt: 1, color: "text.secondary" }}>
        Oops! Something went wrong. Please try again or contact support.
      </Typography>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Button
          variant="contained"
          sx={{
            mt: 4,
            backgroundColor: "red",
            "&:hover": { backgroundColor: "darkred" },
          }}
          onClick={() => navigate("/mycart")}
        >
          Try Again
        </Button>
      </motion.div>
    </Box>
  );
};

export default PaymentFailed;

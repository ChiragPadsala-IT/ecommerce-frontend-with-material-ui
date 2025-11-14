import React, { useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { OrderApi } from "../Api/orderApi";
import { useSelector } from "react-redux";

const PaymentSuccess = () => {
  const { isLogin } = useSelector((state) => state.userReducer);

  useEffect(() => {
    fetch(`${OrderApi.paymentSuccess}${window.location.search}`, {
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
        background: "linear-gradient(135deg, #E0F7FA, #C8E6C9)",
      }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      >
        <CheckCircleIcon sx={{ fontSize: 100, color: "green" }} />
      </motion.div>

      <Typography variant="h4" sx={{ mt: 2, fontWeight: 600 }}>
        Payment Successful!
      </Typography>
      <Typography variant="body1" sx={{ mt: 1, color: "text.secondary" }}>
        Thank you for your purchase. Your payment was processed successfully.
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
            backgroundColor: "green",
            "&:hover": { backgroundColor: "darkgreen" },
          }}
          onClick={() => (window.location.href = "/")}
        >
          Back to Home
        </Button>
      </motion.div>
    </Box>
  );
};

export default PaymentSuccess;

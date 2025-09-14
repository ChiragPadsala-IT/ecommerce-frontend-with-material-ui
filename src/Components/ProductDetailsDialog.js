import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Rating,
  Slide,
  Typography,
} from "@mui/material";
import React from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ProductDetailsDialog = ({ isOpen, onDialogCloseHanlder }) => {
  return (
    <Dialog
      open={true}
      slots={{
        transition: Transition,
      }}
      keepMounted
      onClose={onDialogCloseHanlder}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"Precious Gift"}</DialogTitle>
      <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Box sx={{ display: "flex" }}>
            <Typography sx={{ opacity: "0.7" }}>Brands : </Typography>
            <Typography>Unknown</Typography>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box sx={{ display: "flex", opacity: "0.7" }}>
            <Rating />
            <Typography>1 Review</Typography>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box sx={{ display: "flex" }}>
            <Typography sx={{ opacity: "0.7" }}>SKU : </Typography>
            <Typography>ZU4E58R</Typography>
          </Box>
        </Box>
        <Divider />
        <Box sx={{ display: "flex", gap: 2 }}>
          <Box sx={{ width: "50%", height: "20vw", background: "yellow" }}>
            <img
              src="https://m.media-amazon.com/images/I/61GpT8+nFXL._UY900_.jpg"
              alt=""
              style={{ width: "50%" }}
            />
          </Box>
          <Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Typography>$9.55</Typography>
              <Typography>$7.99</Typography>
            </Box>
          </Box>
        </Box>
      </DialogContent>
      {/* <DialogActions>
        <Button onClick={handleClose}>Disagree</Button>
        <Button onClick={handleClose}>Agree</Button>
      </DialogActions> */}
    </Dialog>
  );
};

export default ProductDetailsDialog;

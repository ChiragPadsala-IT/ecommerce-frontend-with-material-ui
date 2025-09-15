import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  IconButton,
  Rating,
  Slide,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import FavoriteIcon from "@mui/icons-material/Favorite";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import DoneIcon from "@mui/icons-material/Done";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ProductDetailsDialog = ({ isOpen, onDialogCloseHanlder }) => {
  const [imageShowNumber, setImageShowNumber] = useState(0);

  const imageList = [
    "https://m.media-amazon.com/images/I/61GpT8+nFXL._UY900_.jpg",
    "https://i.pinimg.com/736x/af/62/dc/af62dcc7bc9afffe88c9f95d9b484973.jpg",
    "https://i.pinimg.com/736x/a4/3f/60/a43f60e89edeb878b86e3405b98ff4df.jpg",
  ];

  const onImageHandler = (index) => {
    setImageShowNumber(index);
  };

  return (
    <Dialog
      open={isOpen}
      slots={{
        transition: Transition,
      }}
      keepMounted
      onClose={onDialogCloseHanlder}
      aria-describedby="alert-dialog-slide-description"
      maxWidth="md"
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <DialogTitle>{"Precious Gift"}</DialogTitle>
        <Box sx={{ m: "1em" }}>
          <IconButton
            onClick={() => {
              onDialogCloseHanlder(false);
            }}
          >
            <CloseOutlinedIcon />
          </IconButton>
        </Box>
      </Box>
      <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Box sx={{ display: "flex", gap: 1 }}>
            <Typography sx={{ opacity: "0.7" }}>Brands : </Typography>
            <Typography>Unknown</Typography>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box sx={{ display: "flex", opacity: "0.7", gap: 1 }}>
            <Rating />
            <Typography>1 Review</Typography>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box sx={{ display: "flex", gap: 1 }}>
            <Typography sx={{ opacity: "0.7" }}>SKU : </Typography>
            <Typography>ZU4E58R</Typography>
          </Box>
        </Box>
        <Divider />
        <Box
          sx={{
            display: "flex",
            gap: { xs: 4, sm: 2 },
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // display: "grid",
                // placeItems: "center",
                width: "70%",
                height: "70%",
                // margin: "auto",
                background: "yellow",
                mb: "2em",
              }}
            >
              {imageList.map(
                (e, index) =>
                  index === imageShowNumber && (
                    <img
                      // src="https://m.media-amazon.com/images/I/61GpT8+nFXL._UY900_.jpg"
                      src={e}
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  )
              )}
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
              {imageList.map((e, index) => {
                return (
                  <Box
                    sx={{
                      height: "50px",
                      width: "50px",
                      border: "1px solid ",
                      borderColor:
                        imageShowNumber == index
                          ? "rgba(76, 103, 202, 1)"
                          : "rgba(236, 227, 227, 1)",
                      padding: "2px",
                      cursor: "pointer",
                    }}
                    onClick={() => onImageHandler(index)}
                  >
                    <img src={e} style={{ height: "100%", width: "100%" }} />
                  </Box>
                );
              })}
            </Box>
          </Box>
          <Box
            sx={{
              //   width: "50%",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              //   background: "red",
            }}
          >
            <Box sx={{ display: "flex", gap: 1 }}>
              <Typography sx={{ textDecoration: "line-through", opacity: 0.6 }}>
                $9.55
              </Typography>
              <Typography>$7.99</Typography>
            </Box>
            <Box
              sx={{
                background: "rgba(147, 212, 158, 1)",
                width: "fit-content",
                p: "2px 10px",
                borderRadius: "5px",
              }}
            >
              <Typography
                sx={{ color: "green", fontSize: "0.8em", letterSpacing: 1 }}
              >
                In stock
              </Typography>
            </Box>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <IconButton>
                <RemoveIcon />
              </IconButton>
              <Typography>1</Typography>
              <IconButton>
                <AddIcon />
              </IconButton>
              <Button>Add To Cart</Button>
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              <Button variant="outlined" sx={{ display: "flex", gap: 1 }}>
                <FavoriteIcon />
                <Typography>Add to Wishlist</Typography>
              </Button>
              <Button variant="text" sx={{ display: "flex", gap: 1 }}>
                <UnfoldMoreIcon />
                <Typography>Compare</Typography>
              </Button>
            </Box>
            <Box>
              <Box sx={{ display: "flex", gap: 1 }}>
                <DoneIcon sx={{ color: "green" }} />
                <Typography>Type: Organic</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1 }}>
                <DoneIcon sx={{ color: "green" }} />
                <Typography>MFG: Jun 4, 2021</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1 }}>
                <DoneIcon sx={{ color: "green" }} />
                <Typography>Life: 30 days</Typography>
              </Box>
            </Box>
            <Divider sx={{ borderBottomWidth: "3px" }} />
            <Box>
              <Box sx={{ display: "flex", gap: 1 }}>
                <Typography>Category : </Typography>
                <Typography>Woman</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1 }}>
                <Typography>Tags : </Typography>
                <Typography>Luxurious</Typography>
              </Box>
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

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

const ProductDetailsDialog = ({
  isOpen,
  onDialogCloseHanlder,
  productdetails,
  onAddToCartHandler,
  onFavoriteHandler,
}) => {
  const [imageShowNumber, setImageShowNumber] = useState(0);
  const [itemCount, setItemCount] = useState(1);

  const imageList = [
    "https://m.media-amazon.com/images/I/61GpT8+nFXL._UY900_.jpg",
    "https://i.pinimg.com/736x/af/62/dc/af62dcc7bc9afffe88c9f95d9b484973.jpg",
    "https://i.pinimg.com/736x/a4/3f/60/a43f60e89edeb878b86e3405b98ff4df.jpg",
  ];

  const onImageHandler = (index) => {
    setImageShowNumber(index);
  };

  const onAddItemCountHandler = (e) => {
    e.preventDefault();

    setItemCount(itemCount < 10 ? itemCount + 1 : 10);
  };

  const onMinusItemCountHandler = (e) => {
    e.preventDefault();

    setItemCount(itemCount > 1 ? itemCount - 1 : 0);
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
        <DialogTitle>{productdetails.name}</DialogTitle>
        <Box sx={{ m: "1em" }}>
          <IconButton onClick={onDialogCloseHanlder}>
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
            <Typography>{productdetails.brand}</Typography>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box sx={{ display: "flex", opacity: "0.7", gap: 1 }}>
            <Rating value={productdetails.rating} />
            <Typography>1 Review</Typography>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box sx={{ display: "flex", gap: 1 }}>
            <Typography sx={{ opacity: "0.7" }}>SKU : </Typography>
            <Typography>{productdetails.sku}</Typography>
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
                width: "70%",
                height: "70%",
                background: "yellow",
                mb: "2em",
              }}
            >
              <img
                src={productdetails.image}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Box sx={{ display: "flex", gap: 1 }}>
              <Typography
                sx={{
                  textDecoration:
                    productdetails.discount > 0 ? "line-through" : "none",
                  color:
                    productdetails.discount > 0
                      ? "rgba(117, 115, 115, 1)"
                      : "black ",
                  fontSize: "1.1em",
                  fontWeight: productdetails.discount > 0 ? "200" : "bold",
                }}
              >
                {"$" + productdetails.price}
              </Typography>
              {productdetails.discount > 0 && (
                <Typography
                  sx={{
                    fontWeight: "bold",
                    pl: "5px",
                    fontSize: "1.1em",
                    color: "black",
                  }}
                >
                  {"$" + productdetails.discount}
                </Typography>
              )}
            </Box>
            <Box
              sx={{
                background: productdetails.itemCount
                  ? "rgba(147, 212, 158, 1)"
                  : "rgba(212, 163, 147, 1)",
                width: "fit-content",
                p: "2px 10px",
                borderRadius: "5px",
              }}
            >
              <Typography
                sx={{
                  color: productdetails.itemCount ? "green" : "red",
                  fontSize: "0.8em",
                  letterSpacing: 1,
                }}
              >
                {productdetails.itemCount > 0 ? "In Stock" : "Out of Stock"}
              </Typography>
            </Box>
            <Typography>{productdetails.desc}</Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <IconButton onClick={onMinusItemCountHandler}>
                <RemoveIcon />
              </IconButton>
              <Typography>{itemCount}</Typography>
              <IconButton onClick={onAddItemCountHandler}>
                <AddIcon />
              </IconButton>
              <Button
                variant="contained"
                onClick={(e) =>
                  onAddToCartHandler(productdetails._id, itemCount, e)
                }
              >
                Add To Cart
              </Button>
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              <Button
                variant="outlined"
                sx={{ display: "flex", gap: 1, p: "0.5em 1em" }}
                onClick={() => onFavoriteHandler(productdetails._id)}
              >
                <FavoriteIcon sx={{ fontSize: "1.5em" }} />
                <Typography sx={{ fontSize: "0.9em" }}>
                  Add to Wishlist
                </Typography>
              </Button>
              <Button variant="text" sx={{ display: "flex", gap: 1 }}>
                <UnfoldMoreIcon sx={{ fontSize: "1.5em" }} />
                <Typography sx={{ fontSize: "0.9em" }}>Compare</Typography>
              </Button>
            </Box>
            <Box>
              <Box sx={{ display: "flex", gap: 1 }}>
                <DoneIcon sx={{ color: "green" }} />
                <Typography>Type: {productdetails.type}</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1 }}>
                <DoneIcon sx={{ color: "green" }} />
                <Typography>MFG: {productdetails.mfg}</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1 }}>
                <DoneIcon sx={{ color: "green" }} />
                <Typography>Life: {productdetails.life}</Typography>
              </Box>
            </Box>
            <Divider sx={{ borderBottomWidth: "3px" }} />
            <Box>
              <Box sx={{ display: "flex", gap: 1 }}>
                <Typography>Category : </Typography>
                <Typography>{productdetails.category}</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1 }}>
                <Typography>Tags : </Typography>
                <Typography>{productdetails.tag}</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailsDialog;

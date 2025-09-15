import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ProductDetailsDialog from "./ProductDetailsDialog";

const ProductCard = (props) => {
  const [isHover, setIsHover] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isOpenProductDetailModel, setIsOpenProductDetailModel] =
    useState(false);

  const isHoverHandler = (val) => setIsHover(val);

  const isFavoriteHandler = (e) => {
    e.preventDefault();

    setIsFavorite(!isFavorite);
  };

  const onViewProductDetailsModelHandler = (val) => {
    setIsOpenProductDetailModel(val);
  };

  return (
    <>
      <Box
        onMouseEnter={() => isHoverHandler(true)}
        onMouseLeave={() => isHoverHandler(false)}
        on
        sx={{
          width: "100%",
          height: "100%",
          border: "1px solid rgba(230, 223, 223, 1)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            height: "50%",
            textAlign: "center",
            py: "2em",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={props.image}
            alt={props.name}
            style={{
              width: "50%",
            }}
          />
          {isHover ? (
            <>
              <IconButton
                sx={{ position: "absolute", top: "4%", right: "7%" }}
                onClick={isFavoriteHandler}
              >
                {isFavorite ? (
                  <FavoriteIcon sx={{ color: "rgba(253, 71, 71, 1)" }} />
                ) : (
                  <FavoriteBorderIcon />
                )}
              </IconButton>
              <IconButton
                sx={{ position: "absolute", top: "15%", right: "7%" }}
                onClick={() => onViewProductDetailsModelHandler(true)}
              >
                <ZoomOutMapIcon />
              </IconButton>
            </>
          ) : (
            <></>
          )}
        </Box>
        <Box sx={{ p: "0.7em" }}>
          <Typography variant="h6">{props.name}</Typography>
          <Typography sx={{ color: props.inStock ? "green" : "red" }}>
            {props.inStock ? "In Stock" : "Not Available"}
          </Typography>
          <Rating
            defaultValue={props.rating}
            sx={{ padding: "0px", margin: "0px" }}
          ></Rating>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography
              sx={{
                textDecoration: props.discount > 0 ? "line-through" : "none",
                color: props.discount > 0 ? "rgba(117, 115, 115, 1)" : "black ",
                fontSize: "1.1em",
                fontWeight: props.discount > 0 ? "200" : "bold",
              }}
            >
              {"$" + props.price}
            </Typography>
            {props.discount > 0 && (
              <Typography
                sx={{
                  fontWeight: "bold",
                  pl: "5px",
                  fontSize: "1.1em",
                  color: "black",
                }}
              >
                {"$" + props.discount}
              </Typography>
            )}
          </Box>
        </Box>
      </Box>
      {isOpenProductDetailModel && (
        <ProductDetailsDialog
          isOpen={isOpenProductDetailModel}
          onDialogCloseHanlder={() => {
            onViewProductDetailsModelHandler(false);
          }}
        />
      )}
    </>
  );
};

export default ProductCard;

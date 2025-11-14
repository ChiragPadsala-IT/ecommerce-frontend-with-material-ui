import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import ProductDetailsDialog from "./ProductDetailsDialog";
import { useDispatch } from "react-redux";
import { addToCartData } from "../redux/new/actions/mycartAction";
import { addToFavoriteProduct } from "../redux/new/actions/favoriteProductAction";
import { Stack } from "@mui/material";

const ProductCard = ({ props }) => {
  const dispatch = useDispatch();

  const [isHover, setIsHover] = useState(false);
  const [isOpenProductDetailModel, setIsOpenProductDetailModel] =
    useState(false);

  const onHoverHandler = (val) => setIsHover(val);

  const onFavoriteHandler = (productId) => {
    dispatch(addToFavoriteProduct(productId));
    setIsOpenProductDetailModel(false);
  };

  const onViewProductDetailsModelHandler = (val) => {
    setIsOpenProductDetailModel(val);
  };

  const onDialogCloseHanlder = (e) => {
    e.preventDefault();
    setIsOpenProductDetailModel(false);
  };

  const onAddToCartHandler = (id, itemCount, e) => {
    e.preventDefault();

    dispatch(
      addToCartData({
        productId: id,
        quantity: itemCount,
      })
    );
  };

  return (
    <div>
      <Box
        onMouseEnter={() => onHoverHandler(true)}
        onMouseLeave={() => onHoverHandler(false)}
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
          <Stack position="relative">
            <img
              src={props.image}
              alt={props.name}
              style={{
                width: "50%",
                display: "block",
                margin: "0 auto",
              }}
            />
            <Box position={"absolute"} top={10} right={10}>
              {isHover ? (
                <>
                  {/* <IconButton
                sx={{ position: "absolute", top: "4%", right: "7%" }}
                onClick={onFavoriteHandler}
              >
                {isFavorite ? (
                  <FavoriteIcon sx={{ color: "rgba(253, 71, 71, 1)" }} />
                ) : (
                  <FavoriteBorderIcon />
                )}
              </IconButton> */}
                  <IconButton
                    onClick={() => onViewProductDetailsModelHandler(true)}
                  >
                    <ZoomOutMapIcon />
                  </IconButton>
                </>
              ) : (
                <></>
              )}
            </Box>
          </Stack>
        </Box>
        <Box sx={{ p: "0.7em" }}>
          <Typography variant="h6">{props.name}</Typography>
          <Typography sx={{ color: props.itemCount > 0 ? "green" : "red" }}>
            {props.itemCount > 0 ? "In Stock" : "Not Available"}
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
          productdetails={props}
          isOpen={isOpenProductDetailModel}
          onDialogCloseHanlder={onDialogCloseHanlder}
          onAddToCartHandler={onAddToCartHandler}
          onFavoriteHandler={onFavoriteHandler}
        />
      )}
    </div>
  );
};

export default ProductCard;

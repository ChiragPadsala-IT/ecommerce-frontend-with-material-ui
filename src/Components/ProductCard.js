import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import React from "react";

const ProductCard = (props) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "99%",
        border: "1px solid rgba(230, 223, 223, 1)",
        m: "5px",
      }}
    >
      <Box sx={{ height: "50%", textAlign: "center", mt: "2em" }}>
        <img
          src={props.image}
          alt={props.name}
          style={{ height: "100%", width: "50%" }}
        />
      </Box>
      <Box sx={{ height: "50%", p: "0.7em" }}>
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
              color: "rgba(117, 115, 115, 1)",
              fontSize: "1.1em",
            }}
          >
            {"$" + props.price}
          </Typography>
          {props.discount > 0 && (
            <Typography
              sx={{ fontWeight: "bold", pl: "5px", fontSize: "1.1em" }}
            >
              {"$" + props.discount}
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCard;

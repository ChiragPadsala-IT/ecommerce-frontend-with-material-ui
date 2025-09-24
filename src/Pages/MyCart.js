import {
  Box,
  Checkbox,
  Rating,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useState } from "react";

const MyCart = () => {
  const [myCartList, setMyCartList] = useState([
    {
      id: 1,
      isChecked: true,
      productDetails: {
        image: "https://m.media-amazon.com/images/I/61GpT8+nFXL._UY900_.jpg",
        name: "Product Name",
        rating: 3,
        review: 20,
      },
      unitPrice: 10.99,
      quantity: 2,
    },
    {
      id: 2,
      isChecked: true,
      productDetails: {
        image: "https://m.media-amazon.com/images/I/61GpT8+nFXL._UY900_.jpg",
        name: "Product Name",
        rating: 3,
        review: 20,
      },
      unitPrice: 10.99,
      quantity: 2,
    },
    {
      id: 3,
      isChecked: true,
      productDetails: {
        image: "https://m.media-amazon.com/images/I/61GpT8+nFXL._UY900_.jpg",
        name: "Product Name",
        rating: 3,
        review: 20,
      },
      unitPrice: 10.99,
      quantity: 2,
    },
  ]);

  const productUpdatedHandler = (e) => {
    e.preventDefault();

    console.log(e.target.name);
  };

  return (
    <Box sx={{ height: "100vh", m: "1em 1em" }}>
      <Typography sx={{ fontSize: "1.3em", fontWeight: "700", pl: "0.7em" }}>
        Your Cart
      </Typography>
      <Box>
        <Box sx={{ width: { xs: "100%", sm: "70%" } }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Checkbox checked={true} />
                </TableCell>
                <TableCell>
                  <Typography>Product</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography>Unit Price</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography>Quantity</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography>Subtotal</Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography>Remove</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {myCartList.map((e, index) => (
                <TableRow>
                  <TableCell>
                    <Checkbox checked={true} />
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", gap: 2 }}>
                      <Box
                        sx={{
                          height: "70px",
                          width: "70px",
                          border: "1px solid rgba(227, 223, 223, 1)",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src={e.productDetails.image}
                          alt={e.productDetails.name}
                          style={{ height: "70%", width: "70%" }}
                        />
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                        }}
                      >
                        <Typography sx={{ pl: "3px" }}>
                          {e.productDetails.name}
                        </Typography>
                        <Box sx={{ display: "flex", gap: 1 }}>
                          <Rating value={e.productDetails.rating} />
                          <Typography>{e.productDetails.review}</Typography>
                        </Box>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell align="center">
                    <Typography>${e.unitPrice}</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography>{e.quantity}</Typography>
                  </TableCell>
                  <TableCell align="center">
                    {e.quantity * e.unitPrice}
                  </TableCell>
                  <TableCell align="center">
                    <DeleteIcon />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
        <Box></Box>
      </Box>
    </Box>
  );
};

export default MyCart;

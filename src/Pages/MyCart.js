import {
  Box,
  Button,
  Checkbox,
  Divider,
  IconButton,
  Rating,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React, { useEffect, useState } from "react";

const MyCart = () => {
  const [isAllCheck, setIsAllCheck] = useState(true);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const shippingCharge = 0;

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

  useEffect(() => {
    const hasChecked = myCartList.some((item) => item.isChecked == false);

    if (hasChecked) {
      setIsAllCheck(false);
    } else {
      setIsAllCheck(true);
    }

    setSubtotal(
      myCartList.reduce(
        (acc, item) =>
          item.isChecked ? acc + item.quantity * item.unitPrice : acc,
        0
      )
    );

    setTotal(subtotal + shippingCharge);
  }, [myCartList, total, subtotal]);

  const onAllCheckHandler = () => {
    setMyCartList((prev) =>
      prev.map((item) => {
        return { ...item, isChecked: !isAllCheck };
      })
    );

    setIsAllCheck(!isAllCheck);
  };

  const onCheckHandler = (id, value) => {
    setMyCartList((prev) =>
      prev.map((item) =>
        item.id == id ? { ...item, isChecked: !value } : item
      )
    );
  };

  const productUpdatedHandler = (e) => {
    e.preventDefault();

    console.log(e.target.name);
  };

  const addQuantityHandler = (id) => {
    setMyCartList((prev) =>
      prev.map((item) =>
        item.id == id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const removeQuantityHandler = (id) => {
    const qa = myCartList.some((item) => item.id == id && item.quantity == 0);

    if (qa !== true) {
      setMyCartList((prev) =>
        prev.map((item) =>
          item.id == id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  };

  const onDeleteHanlder = (id) => {
    setMyCartList((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <Box sx={{ height: "100vh", m: "1em 0em" }}>
      <Typography sx={{ fontSize: "1.3em", fontWeight: "700", pl: "0.7em" }}>
        Your Cart
      </Typography>
      <Box>
        <Box
          sx={{
            height: "50vh",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ height: "50vh", width: { xs: "100%", md: "70%" } }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Checkbox
                      value={isAllCheck}
                      checked={isAllCheck}
                      onChange={onAllCheckHandler}
                    />
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
                      <Checkbox
                        key={e.id}
                        value={e.isChecked}
                        checked={e.isChecked}
                        onChange={(element) =>
                          onCheckHandler(e.id, e.isChecked)
                        }
                      />
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
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          // alignContent: "center",
                          gap: 1,
                        }}
                      >
                        <IconButton onClick={() => removeQuantityHandler(e.id)}>
                          <RemoveIcon />
                        </IconButton>
                        <IconButton disabled>
                          <Typography sx={{ color: "black" }}>
                            {e.quantity}
                          </Typography>
                        </IconButton>
                        <IconButton onClick={() => addQuantityHandler(e.id)}>
                          <AddIcon />
                        </IconButton>
                      </Box>
                    </TableCell>
                    <TableCell align="center">
                      {e.quantity * e.unitPrice}
                    </TableCell>
                    <TableCell align="center">
                      <IconButton
                        key={e.id}
                        id={e.id}
                        onClick={() => onDeleteHanlder(e.id)}
                      >
                        <DeleteIcon sx={{ color: "red" }} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            {myCartList.length === 0 && (
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <RemoveShoppingCartIcon sx={{ scale: 2 }} />
                <Typography
                  sx={{ fontSize: "20px", fontWeight: "500", letterSpacing: 1 }}
                >
                  You don't have any product in Cart
                </Typography>
              </Box>
            )}
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "30%" },
              border: "1px solid rgba(207, 201, 201, 1)",
              borderRadius: 3,
              padding: 3,
              mx: { xs: "5vw", sm: "10vw", md: "0" },
              mt: "1em",
            }}
          >
            <Box
              sx={{
                border: "1px solid rgba(207, 201, 201, 1)",
                borderRadius: 3,
                display: "flex",
                flexDirection: "column",
                gap: 2,
                padding: 3,
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Subtotal</Typography>
                <Typography>${subtotal}</Typography>
              </Box>
              <Divider />
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Shipping</Typography>
                <Typography>Free</Typography>
              </Box>
              <Divider />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography>Estimate for</Typography>
                <Typography sx={{ textAlign: "right" }}>
                  United States
                </Typography>
              </Box>
              <Divider />
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Total</Typography>
                <Typography>${total}</Typography>
              </Box>
              <Divider />
              <Button variant="contained">
                Proceed To CheckOut <LogoutIcon sx={{ ml: 2, scale: 0.8 }} />
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MyCart;

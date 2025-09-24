import {
  Box,
  Button,
  Checkbox,
  Divider,
  Drawer,
  FormControlLabel,
  FormGroup,
  Slider,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const FilterProductDrawer = () => {
  const [isToggleDrawer, setIsToggleDrawer] = useState(false);
  const [filterPrice, seTfilterPrice] = useState([20, 100]);

  const onDrawerHandler = (e) => {
    e.preventDefault();

    setIsToggleDrawer(!isToggleDrawer);
  };

  console.log(filterPrice);
  const onFilterPriceHandler = (e, newVal) => {
    e.preventDefault();

    seTfilterPrice(newVal);
  };

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "right", pr: "1em" }}>
        <Button onClick={onDrawerHandler} sx={{}}>
          Filter
        </Button>
      </Box>
      <Drawer open={isToggleDrawer} onClose={onDrawerHandler}>
        <Box
          sx={{
            width: { xs: "80vw", sm: "350px" },
            p: "1em 2em",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Box>
            <Typography sx={{ fontWeight: "600", fontSize: "1.2em" }}>
              Product Categories
            </Typography>
            <FormGroup ss>
              <FormControlLabel control={<Checkbox />} label="Man" />
              <FormControlLabel control={<Checkbox />} label="Man" />
              <FormControlLabel control={<Checkbox />} label="Man" />
            </FormGroup>
          </Box>

          <Divider />

          <Box sx={{ width: "200px" }}>
            <Typography sx={{ fontWeight: "600", fontSize: "1.2em" }}>
              Filter by Price
            </Typography>
            <Slider
              value={filterPrice}
              min={5}
              max={1000}
              valueLabelDisplay="auto"
              onChange={onFilterPriceHandler}
              onChangeCommitted={() => {
                console.log("Complete...");
              }}
            />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>From: $5</Typography>
              <Typography>To: $1000</Typography>
            </Box>
          </Box>

          <Divider />

          <Box>
            <Typography sx={{ fontWeight: "600", fontSize: "1.2em" }}>
              Brand
            </Typography>
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="All" />
              <FormControlLabel control={<Checkbox />} label="Gucii" />
              <FormControlLabel control={<Checkbox />} label="H&M" />
            </FormGroup>
          </Box>

          <Divider />
        </Box>
      </Drawer>
    </>
  );
};

export default FilterProductDrawer;

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { categories } from "../Constants/categories";
import Box from "@mui/material/Box";
import { Link as RouterLink } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
  border: "0.2px solid rgb(0,0,0)",
  color: "black",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Header = () => {
  const [country, setCountry] = React.useState("");
  const [isAllCategoriesOpen, setIsAllCategoriesOpen] = React.useState(false);

  const selectCountryHandler = (e) => {
    e.preventDefault();

    const { value } = e.target;

    console.log(value);

    setCountry(value);
  };

  const isAllCategoriesOpenHandler = (e, value) => {
    e.preventDefault();

    setIsAllCategoriesOpen(value);
  };

  return (
    <AppBar
      position="static"
      elevation={1}
      sx={{ py: 2, px: 2 }}
      style={{
        background: "white",
        color: "black",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Grid
        container
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid
          size={{
            sm: 2,
            xs: 3,
          }}
        >
          <Container style={{ display: "flex" }}>
            <AdbIcon />
            <Typography>Logo</Typography>
          </Container>
        </Grid>

        <Grid
          size={{
            sm: 4,
            xs: 0,
          }}
          display={{ sm: "flex", xs: "none" }}
        >
          <Container>
            <FormControl
              sx={{
                m: 1,
                // minWidth: 120,
                width: "100%",
                display: "flex",
                // alignItems: "center",
              }}
            >
              <InputLabel
                id="demo-simple-select-helper-label"
                style={{ fontSize: "0.7rem" }}
              >
                Your Country
              </InputLabel>
              <Select
                lable="Select Country"
                value={country}
                onChange={selectCountryHandler}
              >
                <MenuItem value={"US"}>US</MenuItem>
                <MenuItem value={"Canada"}>Canada</MenuItem>
                <MenuItem value={"India"}>India</MenuItem>
                <MenuItem value={"Australia"}>Australia</MenuItem>
              </Select>
            </FormControl>
          </Container>
        </Grid>

        <Grid
          size={{
            sm: 4,
            xs: 6,
          }}
        >
          <Container>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search..."
                inputProps={{ "arial-lable": "search" }}
              />
            </Search>
          </Container>
        </Grid>

        <Grid
          size={{
            sm: 2,
            xs: 3,
          }}
        >
          <Container
            style={{
              display: "flex",
              // border: "1px solid black",
              justifyContent: "end",
              alignItems: "center",
              padding: "0px",
            }}
          >
            <ShoppingCartCheckoutIcon sx={{ mr: "1rem" }} />

            <Link component={RouterLink} to="/login">
              <Avatar
                style={{
                  background: "none",
                  color: "black",
                  margin: 0,
                }}
              />
            </Link>
          </Container>
        </Grid>
      </Grid>

      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "start", sm: "center" },
          // background: "yellow",
          width: "100%",
          mt: "1em",
        }}
      >
        <Box
          sx={{
            display: { xs: "block", sm: "none" },
          }}
        >
          <Button
            variant="outlined"
            sx={{
              borderRadius: 5,
              // height: "100%",
              // width: "40%",
            }}
            onClick={(e) => isAllCategoriesOpenHandler(e, !isAllCategoriesOpen)}
          >
            <MenuIcon sx={{ mr: 1, fontSize: "1.2rem" }} />
            <Typography sx={{ fontSize: "0.7rem" }}>ALL CATEGORIES</Typography>
          </Button>

          <Box
            sx={{
              background: "white",
              width: { xs: "50%", sm: "17vw" },
              padding: "1em",
              position: "absolute",
              zIndex: "100",
              display: isAllCategoriesOpen ? "flex" : "none",
              flexDirection: "column",
              top: { xs: "7em", sm: "9em" },
            }}
          >
            {categories.map((r, index) => (
              <Link
                key={index}
                sx={{ textDecoration: "none", color: "black", mb: "0.5em" }}
              >
                {r.name}
              </Link>
            ))}
          </Box>
        </Box>
        <Box sx={{ display: { xs: "none", sm: "flex" } }}>
          {categories.map((r, index) => (
            <Link
              key={index}
              sx={{
                textDecoration: "none",
                color: "black",
                cursor: "pointer",
                ":hover": { background: "#a6b9cc6c" },
                padding: "0.5rem 1rem",
                borderRadius: 5,
                // fontSize: "1em",
              }}
            >
              {r.name}
            </Link>
          ))}
        </Box>
      </Box>
    </AppBar>
  );
};

export default Header;

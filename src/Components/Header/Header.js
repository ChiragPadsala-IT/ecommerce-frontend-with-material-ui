import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
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

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

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
    // vertical padding + font size from searchIcon
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
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  const [country, setCountry] = React.useState("US");

  const selectCountryHandler = (e) => {
    e.preventDefault();

    const { value } = e.target;

    console.log(value);

    setCountry(value);
  };

  return (
    <AppBar
      style={{
        background: "white",
        boxShadow: "none",
        color: "black",
        borderBottom: "1px solid hsla(0, 11%, 28%, 1.00)",
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
                value={""}
                onChange={selectCountryHandler}
              >
                <MenuItem value={"US"}>
                  <em>US</em>
                </MenuItem>
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
            }}
          >
            <ShoppingCartCheckoutIcon sx={{ mr: "1rem" }} />
            <Avatar style={{ background: "none", color: "black" }} />
          </Container>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Header;

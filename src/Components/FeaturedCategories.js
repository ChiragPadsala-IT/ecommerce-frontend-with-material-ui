import { Box } from "@mui/material";
import { HomeNavMenuLogoList } from "../Assets/HomeNavMenuLogo";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const FeaturedCategories = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        my: "2rem",
        flexDirection: "column",
        gap: 2,
        pl: "1em",
      }}
    >
      <Box sx={{ fontSize: "1.5em", fontWeight: "500" }}>
        Featured Categories
      </Box>

      <div
        style={{
          padding: "0px 0 0 0.5em",
        }}
      >
        <Carousel
          responsive={responsive}
          slidesToSlide={1}
          customLeftArrow={
            <IconButton
              sx={{
                position: "absolute",
                top: "40%", // move to bottom
                left: "1%", // center-ish
                zIndex: 1,
                bgcolor: "rgba(239, 233, 233, 1)",
              }}
            >
              <ArrowBackIosIcon />
            </IconButton>
          }
          customRightArrow={
            <IconButton
              sx={{
                position: "absolute",
                top: "40%",
                right: "2%",
                zIndex: 100,
                // bgcolor: "rgba(239, 233, 233, 1)",
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          }
        >
          {HomeNavMenuLogoList.map((r, index) => (
            <Box
              sx={{
                height: "10em",
                width: "10em",
                background: r.backgroundColor,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
              }}
            >
              <img
                src={r.image}
                alt="name"
                style={{ height: "70%", width: "70%" }}
              />
              <Box>{r.name}</Box>
            </Box>
          ))}
        </Carousel>
      </div>
    </Box>
  );
};

export default FeaturedCategories;

import Container from "@mui/material/Container";
import React from "react";
import Slider from "react-slick";
import Box from "@mui/material/Box";

const ReactSlickSlider = () => {
  const sliderImg = [
    {
      url: "https://t4.ftcdn.net/jpg/03/06/69/49/360_F_306694930_S3Z8H9Qk1MN79ZUe7bEWqTFuonRZdemw.jpg",
    },
    {
      url: "https://static.vecteezy.com/system/resources/thumbnails/003/599/328/small_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg",
    },
    {
      url: "https://static.vecteezy.com/ti/vetor-gratis/t2/6828785-paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-pink-backgroud-for-banner-market-ecommerce-women-concept-gratis-vetor.jpg",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <Box
      sx={{
        height: "35vw",
        width: "100%",
        background: "yellow",
        display: "display",
        alignItems: "center",
      }}
    >
      <Slider {...settings}>
        {sliderImg.map((r, index) => (
          <Box key={index} sx={{ height: "35vw", width: "100%" }}>
            <img
              src={r.url}
              alt="Slider Img"
              style={{ width: "100%", height: "100%", objectFit: "fill" }}
              // style={{ objectFit: "cover" }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ReactSlickSlider;

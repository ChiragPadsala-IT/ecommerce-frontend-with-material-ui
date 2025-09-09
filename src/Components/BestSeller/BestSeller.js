import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ProductCard from "../ProductCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { IconButton } from "@mui/material";

const BestSeller = () => {
  const productList = [
    {
      name: "Precious Gift",
      desc: "Women perce",
      image: "https://m.media-amazon.com/images/I/61GpT8+nFXL._UY900_.jpg",
      inStock: true,
      rating: 3,
      price: 10.99,
      discount: 0,
    },
    {
      name: "Precious Gift",
      desc: "Women perce",
      image: "https://arce.org/wp-content/uploads/2023/01/21X_CAT115R1.jpg",
      inStock: true,
      rating: 3,
      price: 10.99,
      discount: 0,
    },
    {
      name: "Precious Gift",
      desc: "Women perce",
      image: "https://m.media-amazon.com/images/I/61GpT8+nFXL._UY900_.jpg",
      inStock: true,
      rating: 3,
      price: 10.99,
      discount: 0,
    },
    {
      name: "Precious Gift",
      desc: "Women perce",
      image: "https://m.media-amazon.com/images/I/61GpT8+nFXL._UY900_.jpg",
      inStock: true,
      rating: 3,
      price: 10.99,
      discount: 0,
    },
    {
      name: "Precious Gift",
      desc: "Women perce",
      image: "https://m.media-amazon.com/images/I/61GpT8+nFXL._UY900_.jpg",
      inStock: true,
      rating: 3,
      price: 10.99,
      discount: 0,
    },
    {
      name: "Precious Gift",
      desc: "Women perce",
      image: "https://m.media-amazon.com/images/I/61GpT8+nFXL._UY900_.jpg",
      inStock: true,
      rating: 3,
      price: 10.99,
      discount: 0,
    },
    {
      name: "Precious Gift",
      desc: "Women perce",
      image: "https://m.media-amazon.com/images/I/61GpT8+nFXL._UY900_.jpg",
      inStock: true,
      rating: 3,
      price: 10.99,
      discount: 0,
    },
    {
      name: "Precious Gift",
      desc: "Women perce",
      image: "https://m.media-amazon.com/images/I/61GpT8+nFXL._UY900_.jpg",
      inStock: true,
      rating: 3,
      price: 10.99,
      discount: 8.99,
    },
    {
      name: "Precious Gift",
      desc: "Women perce",
      image: "https://m.media-amazon.com/images/I/61GpT8+nFXL._UY900_.jpg",
      inStock: true,
      rating: 3,
      price: 10.99,
      discount: 8.99,
    },
    {
      name: "Precious Gift",
      desc: "Women perce",
      image: "https://m.media-amazon.com/images/I/61GpT8+nFXL._UY900_.jpg",
      inStock: true,
      rating: 3,
      price: 10.99,
      discount: 8.99,
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <Box
      sx={{
        my: "2rem",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        width: "100%",
        // height: "30vw",
      }}
    >
      <Box
        sx={{
          width: "25%",
          height: "100%",
          background: "yellow",
          display: { xs: "none", md: "block" },
        }}
      >
        <img
          src="https://www.shutterstock.com/shutterstock/photos/2661738301/display_1500/stock-vector--d-flash-sale-banner-with-september-number-on-podium-or-stage-isolated-on-background-with-2661738301.jpg"
          alt="Sale Image"
          style={{ width: "100%", height: "100%" }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          pl: "1em",
          pr: { xs: "1em", md: "0" },
          width: { xs: "100%", md: "75%" },
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: "5px",
            height: "20%",
          }}
        >
          <Box>
            <Typography sx={{ fontSize: "2em" }}>BestSeller</Typography>
            <Typography sx={{ fontWeight: "300" }}>
              Do not miss the current offer until the end of the March
            </Typography>
          </Box>
          <Box>
            <Button variant="outlined">
              <Typography sx={{ fontSize: "0.82em", mr: "5px" }}>
                View All
              </Typography>
              <ArrowForwardIosIcon sx={{ fontSize: "0.9em" }} />
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            width: "100%",
            height: "80%",
          }}
        >
          <Carousel
            responsive={responsive}
            customLeftArrow={
              <IconButton
                sx={{
                  position: "absolute",
                  top: "50%", // move to bottom
                  left: "1%", // center-ish
                  zIndex: 100,
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
                  top: "50%",
                  right: "1%",
                  zIndex: 100,
                  bgcolor: "rgba(239, 233, 233, 1)",
                }}
              >
                <ArrowForwardIosIcon />
              </IconButton>
            }
          >
            {productList.map((r, index) => (
              <ProductCard
                name={r.name}
                desc={r.desc}
                image={r.image}
                inStock={r.inStock}
                rating={r.rating}
                price={r.price}
                discount={r.discount}
              />
            ))}
          </Carousel>
        </Box>
      </Box>
    </Box>
  );
};
const itemStyle = {
  // background: "#61dafb",
  // padding: "60px",
  margin: "10px",
  // borderRadius: "10px",
  // textAlign: "center",
  // fontSize: "20px",
  // fontWeight: "bold",
};

export default BestSeller;

// *********************************

//   return (
//     <Box
//       sx={{
//         my: "2rem",
//         display: "flex",
//         flexDirection: "column",
//         width: "100%",
//       }}
//     >
//       {/* Top Heading Section */}
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           px: "5px",
//           mb: 2,
//         }}
//       >
//         <Box>
//           <Typography sx={{ fontSize: "2em" }}>BestSeller</Typography>
//           <Typography sx={{ fontWeight: "300" }}>
//             Do not miss the current offer until the end of March
//           </Typography>
//         </Box>
//         <Box>
//           <Button variant="outlined">
//             <Typography sx={{ fontSize: "0.82em", mr: "5px" }}>
//               View All
//             </Typography>
//             <ArrowForwardIosIcon sx={{ fontSize: "0.9em" }} />
//           </Button>
//         </Box>
//       </Box>

//       {/* Carousel Section */}
// <Box
//   sx={{
//     width: "100%",
//     background: "yellow", // just for debugging
//     p: "1em",
//   }}
// >
//   <Carousel responsive={responsive} infinite autoPlay>
//     {productList.map((r, index) => (
//       <Box key={index} sx={itemStyle}>
//         {r.name}
//       </Box>
//     ))}
//   </Carousel>
// </Box>
//     </Box>
//   );
// };

// const itemStyle = {
//   background: "#61dafb",
//   padding: "40px",
//   margin: "10px",
//   borderRadius: "10px",
//   textAlign: "center",
//   fontSize: "18px",
//   fontWeight: "bold",
// };

// export default BestSeller;

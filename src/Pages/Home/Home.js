import {
  BestSeller,
  Footer,
  NewProduct,
  ReactSlickSlider,
  FeaturedCategories,
  DiscountCard,
  CustomerCommentsCard,
  NewsLetter,
} from "../../Components";
import Box from "@mui/material/Box";

const Home = () => {
  return (
    <Box sx={{ height: "100vh" }}>
      <ReactSlickSlider />
      <FeaturedCategories />
      <BestSeller />
      <NewProduct />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          justifyContent: "center",
          alignItems: "center",
          // background: "red",
        }}
      >
        <CustomerCommentsCard />
        <DiscountCard />
      </Box>
      <NewsLetter />
      <Footer />
    </Box>
  );
};

export default Home;

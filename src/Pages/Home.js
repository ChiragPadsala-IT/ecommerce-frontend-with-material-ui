import {
  BestSeller,
  Footer,
  NewProduct,
  ReactSlickSlider,
  FeaturedCategories,
  DiscountCard,
  CustomerCommentsCard,
  NewsLetter,
  FilterProductDrawer,
  Header,
} from "../Components";
import Box from "@mui/material/Box";

const Home = () => {
  return (
    <Box sx={{ height: "100vh" }}>
      <Header />
      <ReactSlickSlider />
      <FeaturedCategories />
      <FilterProductDrawer />
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

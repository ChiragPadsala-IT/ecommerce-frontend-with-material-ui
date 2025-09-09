import { BestSeller, ReactSlickSlider } from "../../Components";
import Box from "@mui/material/Box";
import HomeItemBarMenu from "../../Components/HomeItemBarMenu";

const Home = () => {
  return (
    <Box sx={{ height: "76vh" }}>
      <ReactSlickSlider />

      <HomeItemBarMenu />

      <BestSeller />
    </Box>
  );
};

export default Home;

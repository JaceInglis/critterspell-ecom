import React from "react";
import { Box } from "@mui/material";
import { styles, Offset } from "./styles";
import { useTheme } from "@mui/material/styles";

import Products from "../Products/Products";
import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";

function Home({ products, onAddToCart }) {
  return (
    <>
      <Offset />
      <Box sx={styles.container}>
        <Banner />
        <Box sx={styles.content} id="products">
          <Products products={products} onAddToCart={onAddToCart} />
        </Box>
        <Footer />
      </Box>
    </>
  );
}

export default Home;

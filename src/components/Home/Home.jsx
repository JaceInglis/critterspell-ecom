import React from "react";
import { Box, Typography, Container, useTheme } from "@mui/material";
import { Styles, Offset } from "./styles";

import Products from "../Products/Products";
import Banner from "./Banner/Banner";
import TestName from "../TestName/TestName";

function Home({ products, onAddToCart, cartLoading }) {
  const theme = useTheme();
  const styles = Styles(theme);

  return (
    <>
      <Offset />
      <Box sx={styles.container}>
        <Banner />
        <Box id="products" sx={styles.wrapper} mt={theme.spacing(8)}>
          <Container sx={styles.content} maxWidth="xl">
            <Box maxWidth="md">
              <Typography variant="h1" gutterBottom>
                Crafted with quality
              </Typography>
              <Typography variant="body1">
                Our unwavering commitment to excellence ensures that your
                child's framed animal-themed name art will remain a beloved,
                enduring source of inspiration, comfort, and joy in their room,
                from their formative years and beyond. It's not just a
                decoration; it's a timeless keepsake that will continuously
                captivate their imagination.
              </Typography>
            </Box>

            <Box sx={styles.product}>
              <Products
                products={products}
                onAddToCart={onAddToCart}
                cartLoading={cartLoading}
              />
            </Box>
          </Container>
        </Box>
        <Container sx={styles.content} maxWidth="xl">
          <TestName />
        </Container>
      </Box>
    </>
  );
}

export default Home;

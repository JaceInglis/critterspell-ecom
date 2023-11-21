import React from "react";
import {
  Box,
  Typography,
  Container,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Styles, Offset } from "./styles";

import Banner from "./Banner/Banner";
import TestName from "../TestName/TestName";

function Home({ products, onAddToCart, cartLoading }) {
  const theme = useTheme();
  const styles = Styles(theme);

  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Offset />
      <Box sx={styles.container}>
        <Banner />
        <Container sx={styles.content} maxWidth="xl">
          <TestName
            cartLoading={cartLoading}
            onAddToCart={onAddToCart}
            products={products}
          />
        </Container>
        <Box sx={styles.wrapper} mb={8}>
          <Box sx={styles.content}>
            <Box padding={8}>
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
            <img
              src="IMG_6043.jpeg"
              alt="Critterspell"
              width={mobile ? "100%" : 700}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Home;

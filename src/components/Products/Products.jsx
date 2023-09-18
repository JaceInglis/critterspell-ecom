import React from "react";
import { Grid, Typography, Container, useTheme } from "@mui/material";
import { Styles } from "./styles";

import Product from "./Poduct/Product";

const Products = ({ products, onAddToCart }) => {
  const theme = useTheme();

  const styles = Styles(theme);

  return (
    <main>
      <Container sx={styles.container}>
        <Typography sx={styles.title} variant="h2">
          Our Products
        </Typography>
        <Grid
          sx={styles.products}
          container
          justifyContent="center"
          spacing={4}
        >
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={12} md={8} lg={6}>
              <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
};

export default Products;

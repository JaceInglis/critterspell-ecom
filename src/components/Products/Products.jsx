import React from "react";
import { Box, useTheme } from "@mui/material";
import { Styles } from "./styles";

import Product from "./Poduct/Product";

const Products = ({ products, onAddToCart }) => {
  const theme = useTheme();

  const styles = Styles(theme);

  return products.map((product) => (
    <Box maxWidth={450}>
      <Product product={product} onAddToCart={onAddToCart} />
    </Box>
  ));
};

export default Products;

import React from "react";
import { Box, useTheme } from "@mui/material";

import Product from "./Poduct/Product";

const Products = ({ products, onAddToCart, cartLoading }) => {
  const theme = useTheme();

  return products.map((product) => (
    <Box maxWidth={450}>
      <Product
        product={product}
        onAddToCart={onAddToCart}
        cartLoading={cartLoading}
      />
    </Box>
  ));
};

export default Products;

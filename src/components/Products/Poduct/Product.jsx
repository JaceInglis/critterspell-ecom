import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { styles } from "./styles";

const Product = ({ product, onAddToCart }) => {
  const handleAddToCart = () => onAddToCart(product.id, 1);

  return (
    <Box>
      <Card sx={styles.root}>
        <CardMedia
          sx={styles.media}
          image={product.image.url}
          title={product.name}
        />
        <CardContent>
          <Box sx={styles.cardContent}>
            <Typography variant="h5" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="h5">
              {product.price.formatted_with_symbol}
            </Typography>
          </Box>
          <Typography
            dangerouslySetInnerHTML={{ __html: product.description }}
            variant="body2"
            color="textSecondary"
          />
        </CardContent>
        <CardActions disableSpacing sx={styles.cardActions}>
          <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
            <AddShoppingCartIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Product;

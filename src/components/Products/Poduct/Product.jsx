import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Box,
  CircularProgress,
  Link,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CheckIcon from "@mui/icons-material/Check";

import { styles } from "./styles";

const Product = ({ product, onAddToCart, cartLoading }) => {
  const handleAddToCart = () => {
    onAddToCart(product.id, 1);
  };

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
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            width={56}
            height={56}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {cartLoading ? (
              <CircularProgress size={20} />
            ) : (
              <CardActions disableSpacing sx={styles.cardActions}>
                <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
                  <AddShoppingCartIcon />
                </IconButton>
              </CardActions>
            )}
          </Box>
          {cartLoading !== null && cartLoading !== true ? (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography mr={1}>
                Item added to{" "}
                <Link href="/cart" underline="hover">
                  your cart
                </Link>
              </Typography>{" "}
              <CheckIcon color="success" />
            </Box>
          ) : null}
        </Box>
      </Card>
    </Box>
  );
};

export default Product;

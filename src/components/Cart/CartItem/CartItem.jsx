import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";

import { styles } from "./styles";

function CartItem({ item, onCartRemove, name, soldOut }) {
  const handleRemoveFromCart = () => onCartRemove(item.id);

  return (
    <Card sx={styles.root}>
      <CardMedia sx={styles.media} title={item.name} image={item.image.url} />
      <CardContent>
        <Box sx={styles.cardContent}>
          <Typography variant="h5" gutterBottom>
            {item.name}
          </Typography>
          <Typography variant="h5">
            {soldOut ? "Sold Out" : item.price.formatted_with_symbol}
          </Typography>
        </Box>
      </CardContent>
      <CardActions sx={styles.cardActions}>
        <Typography>{`${name.length > 1 ? "Names" : "Name"}:${name.map(
          (text) => " " + text.name[0].toUpperCase() + text.name.slice(1)
        )}`}</Typography>

        <Button
          onClick={handleRemoveFromCart}
          type="button"
          size="small"
          color="tertiary"
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}

export default CartItem;

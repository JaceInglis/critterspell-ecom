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

function CartItem({ item, onCartUpdate, onCartRemove }) {
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
            {item.price.formatted_with_symbol}
          </Typography>
        </Box>
      </CardContent>
      <CardActions sx={styles.cardActions}>
        <Box sx={styles.buttons}>
          <Button
            onClick={() => onCartUpdate(item.id, item.quantity + 1)}
            type="button"
            size="small"
          >
            +
          </Button>
          <Typography variant="h6">{item.quantity}</Typography>
          <Button
            onClick={() => onCartUpdate(item.id, item.quantity - 1)}
            type="button"
            size="small"
          >
            -
          </Button>
        </Box>
        <Button onClick={handleRemoveFromCart} type="button" size="small">
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}

export default CartItem;

import React from "react";
import {
  Container,
  Typography,
  Button,
  Grid,
  Box,
  Divider,
  useMediaQuery,
} from "@mui/material";
import CartItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";

import { Styles, Offset } from "./styles";
import { useTheme } from "@mui/material/styles";
import { BsBag, BsBagX } from "react-icons/bs";

const Cart = ({ cart, onCartUpdate, onCartRemove }) => {
  const theme = useTheme();

  const styles = Styles(theme);

  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  const EmptyCart = () => (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        height: "300px",
      }}
    >
      <Divider sx={styles.divider} />
      <Box sx={{ textAlign: "center", color: "tertiary.main" }}>
        <BsBagX />
        <Typography variant="subtitle1">
          You have no itmes in your cart
        </Typography>
      </Box>
      <Divider sx={styles.divider} />
      <Button
        sx={styles.back}
        component={Link}
        to="/"
        variant="outlined"
        size="large"
        type="button"
        color="secondary"
      >
        Continue Shoping
      </Button>
    </Box>
  );

  const FilledCart = () => (
    <Container sx={styles.container}>
      {mobile && (
        <Typography variant="h4" sx={styles.subtotal}>
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
      )}
      <Grid sx={styles.items} container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem
              item={item}
              onCartUpdate={onCartUpdate}
              onCartRemove={onCartRemove}
            />
          </Grid>
        ))}
      </Grid>
      <Box sx={styles.cardDetails}>
        {!mobile && (
          <Typography variant="h4" sx={styles.subtotal}>
            Subtotal: {cart.subtotal.formatted_with_symbol}
          </Typography>
        )}
        <Box sx={styles.buttons}>
          <Button
            sx={styles.back}
            component={Link}
            to="/"
            size="large"
            type="button"
            color="secondary"
          >
            Continue Shopping
          </Button>
          <Button
            sx={styles.checkoutButton}
            component={Link}
            to="/checkout"
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>
        </Box>
      </Box>
    </Container>
  );

  if (!cart.line_items) return <div>Loading...</div>;

  return (
    <Container>
      <Offset />
      <Typography sx={styles.title} variant="h1">
        <BsBag sx={{ alignSelf: "center" }} /> Your Shopping Cart
      </Typography>

      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;

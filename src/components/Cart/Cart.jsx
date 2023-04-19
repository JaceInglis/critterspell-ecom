import React from 'react'
import { Container, Typography, Button, Grid, Box } from '@mui/material';
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';

import { styles, Offset } from './styles';

const Cart = ({ cart, onEmptyCart, onCartUpdate, onCartRemove }) => {

  const EmptyCart = () => (
    <Typography variant='subtitle1'>You have no itmes in your cart</Typography>
  )

  const handleEmptyCart = () => onEmptyCart();

  const FilledCart = () => (
    <>
        <Grid sx={styles.items} container spaceing={3}>
          {cart.line_items.map((item) => (
            <Grid item xs={12} sm={4} key={item.id}>
              <CartItem item={item} onCartUpdate={onCartUpdate} onCartRemove={onCartRemove} />
            </Grid>
          ))}
        </Grid>
        <Box sx={styles.cardDetails}>
            <Typography variant='h4'>Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
            <Box>
                <Button sx={styles.emptyButton} onClick={handleEmptyCart} size='large' type='button' variant='contained' color='secondary'>Empty Cart</Button>
                <Button sx={styles.checkoutButton} component={Link} to='/checkout' size='large' type='button' variant='contained' color='primary'>Checkout</Button>
            </Box>
        </Box>
    </>
  );

  if(!cart.line_items) return <div>Loading...</div>;
  
  return (
    <Container>
        <Offset />
        <Typography sx={styles.title} variant='h3'>Your Shopping Cart</Typography>
        { !cart.line_items.length ? <EmptyCart /> : <FilledCart /> }
    </Container>
  )
}

export default Cart
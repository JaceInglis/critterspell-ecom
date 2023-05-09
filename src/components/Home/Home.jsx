import React from 'react'
import { Typography, Box } from '@mui/material';
import { Offset } from './styles'

import Products from '../Products/Products';

function Home({ products, onAddToCart }) {
  return (
    <>
        <Offset />
        <Box>
            <Typography>Welcome to Critterspell</Typography>

            <Typography>Welcome to our charming world of custom name art! Our delightful animal-inspired
                letters are the perfect way to add a touch of whimsy to any child's room. Whether you're
                looking for a unique baby shower gift, a special birthday present, or a fun way to decorate your own child's space,
                our custom name art is sure to delight. Each letter is carefully crafted with love and
                attention to detail, resulting in a beautiful and personalized work of art that will be cherished for years to come.
                We invite you to browse our collection and discover the perfect combination of animals to spell out your child's name.
            </Typography>
        </Box>
        <Box>
            <Products products={products} onAddToCart={onAddToCart}/>
        </Box>
    </>
  )
}

export default Home
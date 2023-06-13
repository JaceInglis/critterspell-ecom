import React from 'react'
import { Typography, Box, Container, Button } from '@mui/material';
import { Styles, Offset } from './styles'
import { useTheme } from "@mui/material/styles"; 

import Products from '../Products/Products';
import { Link } from 'react-router-dom';

function Home({ products, onAddToCart }) {
    const theme = useTheme();
    const styles = Styles(theme);

  return (
    <>
        <Offset />
        <Container sx={styles.container}>
            <Box sx={styles.action}>
                <Typography sx={styles.title} variant='h1'>Welcome to Critterspell</Typography>

                <Typography sx={styles.content} variant='body1'>Welcome to our charming world of custom name art! Our delightful animal-inspired
                    letters are the perfect way to add a touch of whimsy to any child's room. Whether you're
                    looking for a unique baby shower gift, a special birthday present, or a fun way to decorate your own child's space,
                    our custom name art is sure to delight. Each letter is carefully crafted with love and
                    attention to detail, resulting in a beautiful and personalized work of art that will be cherished for years to come.
                    We invite you to browse our collection and discover the perfect combination of animals to spell out your child's name.
                </Typography>
                <a style={styles.link} href='#products'><Button size='large' variant='contained'>Buy Now</Button></a>
            </Box>
            <Box id='products'>
                <Products products={products} onAddToCart={onAddToCart}/>
            </Box>
        </Container>
    </>
  )
}

export default Home
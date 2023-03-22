import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, Box } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { styles } from './styles'

const Navbar = ({ totalItems }) => {
  return (
    <>
        <AppBar position='fixed' sx={styles.appBar} color="inherit">
            <Toolbar>
                <Box sx={styles.image}>
                    <img src='Critterspellpng.png' alt="Critterspell" height="55px" />
                </Box>
                <IconButton aria-label='Show cart items' color='inherit'>
                    <Badge badgeContent={totalItems} color='secondary'>
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    </>
  )
}

export default Navbar
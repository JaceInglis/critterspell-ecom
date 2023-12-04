import React from "react";
import { AppBar, Toolbar, IconButton, Badge, Box } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

import { styles } from "./styles";

const Navbar = ({ totalItems }) => {
  return (
    <>
      <AppBar position="fixed" sx={styles.appBar} color="inherit">
        <Toolbar>
          <Box sx={styles.image} component={Link} to="/">
            <img src="CritterspellLogo.png" alt="Critterspell" height="55px" />
          </Box>
          <IconButton
            component={Link}
            to="/cart"
            aria-label="Show cart items"
            color="inherit"
          >
            <Badge badgeContent={totalItems} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;

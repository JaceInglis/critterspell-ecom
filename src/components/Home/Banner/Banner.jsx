import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-scroll";
import { Styles } from "./styles";
import { useTheme } from "@mui/material";

const Banner = () => {
  const theme = useTheme();

  const styles = Styles(theme);

  return (
    <Box sx={styles.container}>
      <Box component="div" sx={styles.background} />
      <Typography sx={styles.title} variant="h1">
        Welcome to Critterspell
      </Typography>
      <Typography sx={styles.message} variant="body1">
        Welcome to our charming world of custom name art! Our delightful
        animal-inspired letters are the perfect way to add a touch of whimsy to
        any child's room. Whether you're looking for a unique baby shower gift,
        a special birthday present, or a fun way to decorate your own child's
        space, our custom name art is sure to delight. Each letter is carefully
        crafted with love and attention to detail, resulting in a beautiful and
        personalized work of art that will be cherished for years to come. We
        invite you to browse our collection and discover the perfect combination
        of animals to spell out your child's name.
      </Typography>
      <Link to="nameTest" smooth={true} duration={500}>
        <Button width="200px" size="large" variant="contained">
          Buy Now
        </Button>
      </Link>
    </Box>
  );
};

export default Banner;

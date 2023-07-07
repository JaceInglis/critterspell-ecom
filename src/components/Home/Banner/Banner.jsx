import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "600px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",

        "@media (max-width: 800px)": {
          height: "100vh",
        },
      }}
    >
      <Box
        component="div"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          filter: "blur(2px)",
          WebkitFilter: "blur(2px)",
          backgroundImage: "url(pexels-pnw-production-7677894.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.8,
        }}
      />
      <Typography
        sx={{
          color: "white",
          marginBottom: "20px",
          "@media (max-width: 800px)": {
            fontSize: "4rem",
          },
        }}
        variant="h1"
      >
        Welcome to Critterspell
      </Typography>
      <Typography
        sx={{ color: "white", width: "70%", marginBottom: "20px" }}
        variant="body1"
      >
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
      <Link to="products" smooth={true} duration={500}>
        <Button sx={{ width: "200px" }} size="large" variant="contained">
          Buy Now
        </Button>
      </Link>
    </Box>
  );
};

export default Banner;

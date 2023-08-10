import React from "react";
import { Typography, Box, Paper } from "@mui/material";
import { SocialIcon } from "react-social-icons";

import { styles } from  "./styles"

const Footer = () => {
  return (
    <footer style={{ marginTop: "auto" }}>
      <Paper
        elevation={12}
        sx={styles.paper}
      >
        <Box
          sx={styles.container}
        >
          <Typography>fun@critterspell.com</Typography>
          <Typography>250-826-7984</Typography>
        </Box>
        <Box sx={{ marginLeft: "auto", textAlign: "right" }}>
          <SocialIcon
            style={{ marginRight: 10 }}
            url="https://www.facebook.com/people/Critterspell/100057265586247/"
          />
          <SocialIcon
            style={{ marginRight: 10 }}
            url="https://www.instagram.com/"
          />
          <SocialIcon
            style={{ marginRight: 10 }}
            url="https://twitter.com/home"
          />
          <Typography mt={2} variant="body2">
            &copy; {new Date().getFullYear()} Critterspell. All rights reserved.
          </Typography>
        </Box>
      </Paper>
    </footer>
  );
};

export default Footer;

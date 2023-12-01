import React from "react";
import {
  Typography,
  Box,
  Paper,
  Container,
  Link,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

import { Styles } from "./styles";

const Footer = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const styles = Styles(theme);

  return (
    <>
      <Paper elevation={12} component="footer" sx={styles.paper} square>
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={styles.content}>
            <Box sx={styles.logo}>
              <Link href="/">
                <Box
                  component="img"
                  sx={{ display: "block" }}
                  src="CritterspellFooterLogo.gif"
                  alt="Logo"
                  width={250}
                  ml={mobile ? 1 : -1}
                />
              </Link>
              <Typography
                variant="caption"
                color="initial"
                sx={{ [theme.breakpoints.down("sm")]: { textAlign: "center" } }}
              >
                &copy;{new Date().getFullYear()} Critterspell. All rights
                reserved.
              </Typography>
            </Box>

            <Box sx={styles.contact}>
              <Typography variant="h6" mt={mobile && 2}>
                Get in touch
              </Typography>
              <Link underline="hover" href="tel:250-826-7984">
                250-826-7984
              </Link>
              <Link underline="hover" href="mailto:critterspell@fun.com">
                critterspell@fun.com
              </Link>
            </Box>
          </Box>

          <Divider />

          <Box>
            <Box width="100%" sx={styles.socials}>
              <FacebookIcon />
              <InstagramIcon />
              <TwitterIcon />
            </Box>
          </Box>
        </Container>
      </Paper>
    </>
  );
};

export default Footer;

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
import { SocialIcon } from "react-social-icons";

import { styles } from "./styles";

const Footer = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Paper
        elevation={12}
        component="footer"
        position
        sx={{ bottom: 0, width: "100%" }}
        square
      >
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              my: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              [theme.breakpoints.down("sm")]: {
                flexDirection: "column",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Link href="/">
                <Box
                  component="img"
                  sx={{ display: "block" }}
                  src="CritterSpell_logo.gif"
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

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                flexDirection: "column",
                [theme.breakpoints.down("sm")]: {
                  alignItems: "center",
                },
                gap: 1,
              }}
            >
              <Typography variant="h6" mt={mobile && 2}>
                Get in touch
              </Typography>
              <Link href="tel:250-826-7984">250-826-7984</Link>
              <Link href="mailto:critterspell@fun.com">
                critterspell@fun.com
              </Link>
            </Box>
          </Box>

          <Divider />

          <Box>
            <Box
              width="100%"
              sx={{ display: "flex", justifyContent: "center", gap: 4, my: 2 }}
            >
              {[
                "twitter.com",
                "instagram.com",
                "https://www.facebook.com/Critterspell-100057265586247",
              ].map((social, index) => (
                <SocialIcon
                  url={social}
                  fgColor="#000"
                  bgColor="transparent"
                  style={{
                    height: 35,
                    width: 35,
                    border: "1px solid #000",
                    borderRadius: "50%",
                  }}
                />
              ))}
            </Box>
          </Box>
        </Container>
      </Paper>
    </>
  );
};

export default Footer;

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#dcab3b",
    },
    secondary: {
      main: "#ff5757",
    },
    tertiary: {
      main: "#6c849c",
    },
    quaternary: {
      main: "#f3f3f3",
    },
    info: {
      main: "#a6a6a6",
    },
    success: {
      main: "#00E676",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    h1: {
      fontSize: "3rem",
      fontWeight: "bold",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: "bold",
    },
    h3: {
      fontSize: "1.8rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem",
    },
    button: {
      textTransform: "none",
      fontWeight: "bold",
    },
  },
  mixins: {
    footer: "118px",
    mobileFooter: "138px",
  },
  overrides: {
    MuiButton: {
      containedPrimary: {
        backgroundColor: "#FF5252",
      },
      containedSecondary: {
        backgroundColor: "#03A9F4",
      },
    },
  },
});

export default theme;

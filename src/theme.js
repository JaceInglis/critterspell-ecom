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
    fontFamily: ['"Inter"', "Arial", "sans-serif"].join(","),
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
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "50px",
        },
      },
    },
  },
});

export default theme;

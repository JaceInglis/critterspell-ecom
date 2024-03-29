export const Styles = (theme) => ({
  container: {
    position: "relative",
    height: "600px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    textShadow: "1px 1px 10px #333",

    [theme.breakpoints.down("sm")]: {
      height: "100vh",
    },
  },

  title: {
    color: "white",
    marginBottom: "20px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "10vw",
    },
  },

  message: {
    color: "white",
    [theme.breakpoints.down("sm")]: {
      fontSize: "4vw",
    },
    width: "75%",
    marginBottom: "20px",
  },

  background: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
    filter: "blur(2px)",
    WebkitFilter: "blur(2px)",
    backgroundImage: "url(IMG_6049.jpeg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 0.8,
  },
});

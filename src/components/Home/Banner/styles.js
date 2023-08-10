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
      fontSize: "3.5rem",
    },
    fontWeight: 700,
  },

  message: {
    color: "white",
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
    backgroundImage: "url(pexels-pnw-production-7677894.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 0.8,
  },
});

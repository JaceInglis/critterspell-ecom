export const Styles = (theme) => ({
  title: {
    marginTop: "5%",

    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5rem",
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  products: {
    marginTop: "3%",
  },
});

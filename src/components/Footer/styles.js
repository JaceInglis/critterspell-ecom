export const Styles = (theme) => ({
  content: {
    flexGrow: 1,
    my: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  contact: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
    },
    gap: 1,
  },
  socials: { display: "flex", justifyContent: "center", gap: 4, my: 2 },
  logo: {
    display: "flex",
    flexDirection: "column",
    gap: 1,
  },
  paper: { bottom: 0, width: "100%" },
});

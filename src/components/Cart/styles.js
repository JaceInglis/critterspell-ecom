import { styled } from "@mui/material/styles";

export const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

export const Styles = (theme) => ({
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "left",
      fontSize: "35px",
    },
    marginBottom: theme.spacing(4),
  },
  cardDetails: {
    marginTop: theme.spacing(4),
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  items: {
    marginTop: theme.spacing(4),
  },
  backFull: {
    minWidth: 150,
    [theme.breakpoints.up("sm")]: {
      marginRight: theme.spacing(4),
    },
    textAlign: "center",
  },
  backEmpty: {
    minWidth: 150,
    textAlign: "center",
  },
  checkoutButton: {
    minWidth: 150,
  },
  subtotal: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px",
    },
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      gap: 1,
    },
  },
  divider: {
    width: "70%",
  },
  container: {
    padding: 1,
  },
});

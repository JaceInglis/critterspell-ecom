import { styled } from "@mui/material/styles";

export const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

export const Styles = (theme) => ({
  title: {
    marginTop: 5,
    [theme.breakpoints.down("sm")]: {
      fontSize: "35px",
    },
    textAlign: "center",
    marginBottom: 5,
  },
  cardDetails: {
    marginTop: "10%",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  items: {
    marginTop: "3%",
  },
  back: {
    minWidth: 150,
    [theme.breakpoints.up("xs")]: {
      marginRight: "20px",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "5px",
    },
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
  },
  divider: {
    width: "70%",
  },
  container: {
    padding: 1,
  },
});

import { styled } from "@mui/material/styles";
export const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

export const Styles = (theme) => ({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    padding: "0px",
    margin: "0px",
  },
  content: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      padding: theme.spacing(4),
      gap: theme.spacing(4),
      alignItems: "space-between",
    },
    justifyContent: "space-between",
    alignItems: "center",
    padding: `${theme.spacing(6)} 0px`,
  },
  wrapper: {
    backgroundColor: theme.palette.quaternary.main,
  },
  product: {
    [theme.breakpoints.up("sm")]: {
      minWidth: 450,
    },
  },
});

import { styled } from "@mui/material/styles";

export const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

export const Styles = (theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
  },
  paper: {
    padding: theme.spacing(3),
    margin: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      width: "75%",
    },
  },
  stepper: {
    marginTop: 2,
    marginBottom: 2,
    display: "flex",
    justifyContent: "center",
  },
  loading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: theme.spacing(10),
  },
  message: {
    fontSize: "100px",
    color: "#00ab66",
  },
  mobile: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
});

import { styled } from "@mui/material/styles";

export const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

export const Styles = (theme) => ({
  container: {
    marginTop: "3%",
    display: "flex",
    justifyContent: "center",
  },
  paper: {
    padding: 3,
    width: "60%",
  },
  stepper: {
    marginTop: "5%",
    marginBottom: "5%",
    display: "flex",
    justifyContent: "center",
  },
  loading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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

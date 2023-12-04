import React, { useState, useEffect } from "react";
import AdressForm from "../AdressForm";
import PaymentForm from "../PaymentForm";

import { Link } from "react-router-dom";
import { commerce } from "../../../lib/commerce";
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Button,
  Box,
  Container,
  useTheme,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Offset, Styles } from "./styles";

function Checkout({ cart, onCaptureCheckout, name }) {
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState("");
  const [shippingData, setShippingData] = useState({});

  const theme = useTheme();

  const styles = Styles(theme);

  useEffect(() => {
    if (!cart.id || cart.line_items === 0) return;
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });

        setCheckoutToken(token);
      } catch (error) {
        console.error("Failed to generate checkout token: ", error);
      }
    };

    generateToken();
  }, [cart.id]);

  const nextStep = () => setActiveStep((prev) => prev + 1);
  const backStep = () => setActiveStep((prev) => prev - 1);

  const next = (data) => {
    setShippingData(data);
    nextStep();
  };

  const steps = ["Shipping adress", "Payment details"];

  const Form = () =>
    activeStep === 0 ? (
      <AdressForm
        next={next}
        checkoutToken={checkoutToken}
        checkoutTokenCallback={(token) => setCheckoutToken(token)}
      />
    ) : (
      <PaymentForm
        nextStep={nextStep}
        onCaptureCheckout={onCaptureCheckout}
        checkoutTokenCallback={(token) => setCheckoutToken(token)}
        checkoutToken={checkoutToken}
        backStep={backStep}
        shippingData={shippingData}
        name={name}
      />
    );

  const Loading = () => (
    <Box sx={styles.loading}>
      <CircularProgress color="tertiary" />
    </Box>
  );

  const Confrimation = () => (
    <>
      <Box sx={styles.mobile}>
        <Box textAlign="center">
          <CheckCircleOutlineIcon sx={styles.message} />

          <Typography variant="h5" fontWeight="700" color="primary">
            Order Successful
          </Typography>

          <Typography
            my={2}
            fontWeight="700"
          >{`Thank you for your order Jace!`}</Typography>

          <Button
            type="button"
            variant="outlined"
            color="tertiary"
            component={Link}
            to="/"
          >
            Back Home
          </Button>
        </Box>
      </Box>
    </>
  );

  return (
    <>
      <Offset />
      <Container sx={styles.container}>
        <Paper sx={styles.paper}>
          <Typography variant="h4">Checkout</Typography>
          <Stepper sx={styles.stepper} activeStep={activeStep}>
            {steps.map((step) => (
              <Step sx={styles.step} key={step}>
                <StepLabel sx={styles.stepLabel}>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <Confrimation />
          ) : checkoutToken ? (
            <Form />
          ) : (
            <Loading />
          )}
        </Paper>
      </Container>
    </>
  );
}

export default Checkout;

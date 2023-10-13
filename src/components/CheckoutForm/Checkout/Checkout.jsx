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
  Divider,
  CircularProgress,
  Button,
  Box,
  Container,
  useTheme,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Offset, Styles } from "./styles";

function Checkout({ cart, order, onCaptureCheckout, error, name }) {
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});

  const theme = useTheme();

  const styles = Styles(theme);

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });

        setCheckoutToken(token);
      } catch (error) {}
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
      <AdressForm next={next} checkoutToken={checkoutToken} />
    ) : (
      <PaymentForm
        nextStep={nextStep}
        onCaptureCheckout={onCaptureCheckout}
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
      {order.customer ? (
        <Box sx={styles.mobile}>
          <Typography variant="h6">Payment Complete</Typography>
          <Divider />
          <Box textAlign="center">
            <Typography
              mt={3}
              mb={3}
              variant="body1"
            >{`Thank you for your order ${order.shipping.name}! We have sent you an email regarding your purchase.`}</Typography>
            <CheckCircleOutlineIcon sx={styles.message} />
            <Typography mt={3} variant="h6">
              Order Number:
            </Typography>
            <Typography mb={3} fontWeight="700">
              {order.id}
            </Typography>
          </Box>
          <Button
            type="button"
            variant="contained"
            color="primary"
            component={Link}
            to="/"
          >
            Back Home
          </Button>
        </Box>
      ) : (
        <Loading />
      )}
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

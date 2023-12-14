import React, { useState } from "react";
import {
  Typography,
  Button,
  Divider,
  Box,
  Alert,
  CircularProgress,
} from "@mui/material";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { useTheme } from "@mui/material/styles";

import Review from "./Review";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

function PaymentForm({
  checkoutToken,
  checkoutTokenCallback,
  backStep,
  shippingData,
  name,
  onCaptureCheckout,
  nextStep,
}) {
  const theme = useTheme();

  const [alertError, setAlertError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event, elements, stripe) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setAlertError(true);
    } else {
      setAlertError(false);
      const orderData = {
        line_items: checkoutToken.line_items,
        customer: {
          firstname: shippingData.firstName,
          lastname: shippingData.lastName,
          email: shippingData.email,
        },
        shipping: {
          name: shippingData.firstName + " " + shippingData.lastName,
          street: shippingData.address1,
          town_city: shippingData.city,
          county_state: shippingData.shippingSubdivision,
          postal_zip_code: shippingData.zip,
          country: shippingData.shippingCountry,
        },
        fulfillment: { shipping_method: shippingData.shippingOption },
        billing: {
          name: shippingData.firstName + " " + shippingData.lastName,
          street: shippingData.address1,
          town_city: shippingData.city,
          county_state: shippingData.shippingSubdivision,
          postal_zip_code: shippingData.zip,
          country: shippingData.shippingCountry,
        },
        payment: {
          gateway: "test_gateway",
          card: {
            number: "4242424242424242",
            expiry_month: "02",
            expiry_year: "24",
            cvc: "123",
            postal_zip_code: "94107",
          },
        },
        extra_fields: {
          extr_VPvL5zjd35AQkX: JSON.stringify(name, null, 4),
        },
      };

      try {
        setLoading(true);
        await onCaptureCheckout(checkoutToken.id, orderData);
        setLoading(false);

        checkoutTokenCallback("");

        nextStep();
      } catch (error) {
        setLoading(false);
        setAlertError(true);
      }
    }
  };

  return (
    <>
      <Review checkoutToken={checkoutToken} />
      <Divider />
      <Typography mb={3} mt={1} variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ stripe, elements }) => (
            <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
              <CardElement />
              {alertError && (
                <Alert severity="error" sx={{ marginTop: 3 }}>
                  Sorry there was an error capturing your order
                </Alert>
              )}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 3,
                  [theme.breakpoints.down("sm")]: {
                    flexDirection: "column",
                  },
                }}
              >
                <Button
                  variant="text"
                  color="tertiary"
                  size="large"
                  onClick={backStep}
                >
                  Back
                </Button>
                {loading ? (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "80px",
                    }}
                  >
                    <CircularProgress size={30} />
                  </Box>
                ) : (
                  <Button
                    sx={{
                      [theme.breakpoints.down("sm")]: { marginBottom: "5px" },
                    }}
                    variant="contained"
                    type="submit"
                    color="primary"
                    size="large"
                    disabled={!stripe}
                  >
                    Pay Now
                  </Button>
                )}
              </Box>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </>
  );
}

export default PaymentForm;

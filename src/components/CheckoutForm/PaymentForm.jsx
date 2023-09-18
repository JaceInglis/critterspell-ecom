import React from "react";
import { Typography, Button, Divider, Box } from "@mui/material";
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
  backStep,
  shippingData,
  onCaptureCheckout,
  nextStep,
}) {
  const theme = useTheme();

  const handleSubmit = async (event, elements, stripe) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log(error);
    } else {
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
          gateway: "stripe",
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      };

      console.log(orderData);

      onCaptureCheckout(checkoutToken.id, orderData);

      nextStep();
    }
  };

  console.log(checkoutToken);

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
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
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
                  Pay {checkoutToken.subtotal.formatted_with_symbol}
                </Button>
              </Box>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </>
  );
}

export default PaymentForm;

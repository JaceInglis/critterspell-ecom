import React, { useState, useEffect } from 'react'
import AdressForm from '../AdressForm'
import PaymentForm from '../PaymentForm'

import { commerce } from '../../../lib/commerce';
import { Paper, Stepper, Step, StepLabel, Typography, Divider, CircularProgress, Button, Box, Container } from '@mui/material'
import { Offset, styles } from './styles'

function Checkout({ cart }) {
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' })

        setCheckoutToken(token)
      } catch (error) {

      }
    }

    generateToken();
  }, []);

  const nextStep = () => setActiveStep((prev) => prev +1);
  const backStep = () => setActiveStep((prev) => prev -1);

  const next = (data) => {
    console.log(data)
    setShippingData(data)
    nextStep()
  }

  const steps = ['Shipping adress', 'Payment details'];

  const Form = () => activeStep === 0 ? <AdressForm next={next} checkoutToken={checkoutToken} /> : <PaymentForm />;

  const Confrimation = () => (
    <div>Confrimation</div>
  )

  return (
    <>
        <Offset />
        <Container sx={styles.container}>
            <Paper sx={styles.paper}>
                <Typography variant='h4'>Checkout</Typography>
                <Stepper sx={styles.stepper} activeStep={activeStep}>
                    {steps.map((step) => (
                        <Step sx={styles.step} key={step}>
                            <StepLabel sx={styles.stepLabel}>{step}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length ? <Confrimation /> : checkoutToken && <Form />}
            </Paper>
        </Container>
    </>
  )
}

export default Checkout
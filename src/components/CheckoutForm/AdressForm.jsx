import React, { useState, useEffect } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { InputLabel, Select, MenuItem, Button, Grid, Typography, Box } from '@mui/material'
import { Link } from 'react-router-dom';

import { commerce } from '../../lib/commerce';

import FormInput from './CustomTextField'

function AdressForm({ checkoutToken, next }) {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState('');
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState('');
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState('');

  const methods = useForm();

  const countries = Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name}));
  const subdivisions = Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name}));

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);

    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  }

  const fetchSubdivisions = async (country) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(country);

    setShippingSubdivisions(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0]);
  }

  const fetchShippingMethods = async (checkoutTokenId, country, region = null) => {
    const shippingOptions = await commerce.checkout.getShippingOptions(checkoutTokenId, {
      country: country,
      region: region,})

    setShippingOptions(shippingOptions);
    setShippingOption(shippingOptions[0].id);
  }

  useEffect(() => {
      fetchShippingCountries(checkoutToken.id);
  },[]);

  useEffect(() => {
    shippingCountry && fetchSubdivisions(shippingCountry);
  }, [shippingCountry])

  useEffect(() => {
    fetchShippingMethods(checkoutToken.id, shippingCountry);
  },[shippingCountry])

  return (
    <>
        <Typography variant='h6'>Shipping Adress</Typography>
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit((data) => next({ ...data, shippingCountry, shippingSubdivision, shippingOption }))}>
                <Grid container spacing={3}>
                    <FormInput required name='firstName' label='First name' />
                    <FormInput required name='lastName' label='Last name' />
                    <FormInput required name='address1' label='Address' />
                    <FormInput required name='email' label='Email' />
                    <FormInput required name='city' label='City' />
                    <FormInput required name='zip' label='ZIP / Postal code' />

                    <Grid item xs={12} sm={6}>
                      <InputLabel>Shipping Country</InputLabel>
                      <Select variant='standard' value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                        {countries.map(country => (
                          <MenuItem key={country.id} value={country.id}>
                            {country.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <InputLabel>Shipping Subdivisons</InputLabel>
                      <Select variant='standard' value={shippingSubdivision} fullWidth onChange={(e) => setShippingSubdivision(e.target.value)}>
                        {subdivisions.map(subdivision => (
                          <MenuItem key={subdivision.id} value={subdivision.id}>
                            {subdivision.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </Grid>

                    <Grid item xs={12}>
                      <InputLabel>Shipping Options</InputLabel>
                      <Select variant='standard' value={shippingOption} fullWidth onChange={(e) => setShippingOption(e.target.value)}>
                        {shippingOptions.map(option => (
                          <MenuItem key={option.id} value={option.id}>
                            {option.description} - {option.price.formatted_with_symbol}
                          </MenuItem>
                        ))}
                      </Select>
                    </Grid>
                </Grid>
                <br />
                <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                  <Button component={Link} to='/cart' type='button' size='large' variant='outline' color='secondary'>Back to cart</Button>
                  <Button type="submit" size='large' variant='contained' color='primary'>Next</Button>
                </Box>
            </form>
        </FormProvider>
    </>
  )
}

export default AdressForm
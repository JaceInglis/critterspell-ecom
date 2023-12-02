import React, { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

import { commerce } from "../../lib/commerce";

import FormInput from "./CustomTextField";

function AdressForm({ checkoutToken, next }) {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");

  console.log(shippingOption.id, shippingSubdivision, shippingCountry);

  const methods = useForm();
  const theme = useTheme();

  const countries = Object.entries(shippingCountries).map(([code, name]) => ({
    id: code,
    label: name,
  }));
  const subdivisions = Object.entries(shippingSubdivisions).map(
    ([code, name]) => ({ id: code, label: name })
  );

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );

    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  };

  const fetchSubdivisions = async (country) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      country
    );

    setShippingSubdivisions(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0]);
  };

  const fetchShippingMethods = async (checkoutTokenId, country) => {
    const shippingOptions = await commerce.checkout.getShippingOptions(
      checkoutTokenId,
      { country: country }
    );

    setShippingOptions(shippingOptions);
    setShippingOption(shippingOptions[0]);
  };

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, [checkoutToken.id]);

  useEffect(() => {
    if (!shippingCountry) return;
    const fetchData = async () => {
      await Promise.all([
        fetchSubdivisions(shippingCountry),
        fetchShippingMethods(checkoutToken.id, shippingCountry),
      ]);
    };

    fetchData();
  }, [shippingCountry, checkoutToken.id]);

  return (
    <>
      <Typography variant="h6">Shipping Adress</Typography>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(async (data) => {
            await commerce.checkout
              .checkShippingOption(checkoutToken.id, {
                shipping_option_id: shippingOption.id,
                country: "CA",
                region: "BC",
              })
              .catch((error) => console.log("error", error));

            await commerce.checkout
              .setTaxZone(checkoutToken.id, {
                country: "CA",
                region: "BC",
                postal_zip_code: methods.getValues("zip"),
              })
              .catch((error) => console.log("error", error));

            next({
              ...data,
              shippingCountry,
              shippingSubdivision,
              shippingOption,
            });
          })}
        >
          <Grid container spacing={3}>
            <FormInput required name="firstName" label="First name" />
            <FormInput required name="lastName" label="Last name" />
            <FormInput required name="address1" label="Address" />
            <FormInput required name="email" label="Email" />
            <FormInput required name="city" label="City" />
            <FormInput required name="zip" label="ZIP / Postal code" />

            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select
                required
                variant="standard"
                name="country"
                value={shippingCountry || ""}
                fullWidth
                onChange={(e) => setShippingCountry(e.target.value)}
              >
                {countries.map((country) => (
                  <MenuItem key={country.id} value={country.id}>
                    {country.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>

            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Subdivisons</InputLabel>
              <Select
                required
                name="provinceState"
                variant="standard"
                value={shippingSubdivision || ""}
                fullWidth
                onChange={(e) => setShippingSubdivision(e.target.value)}
              >
                {subdivisions.map((subdivision) => (
                  <MenuItem key={subdivision.id} value={subdivision.id}>
                    {subdivision.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>

            <Grid item xs={12}>
              <InputLabel>Shipping Options</InputLabel>
              <Select
                required
                name="shippingOption"
                variant="standard"
                value={shippingOption || ""}
                fullWidth
                onChange={(e) => setShippingOption(e.target.value)}
              >
                {shippingOptions.map((option) => (
                  <MenuItem key={option.id} value={option}>
                    {option.description} - {option.price.formatted_with_symbol}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
          <br />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              [theme.breakpoints.down("sm")]: {
                flexDirection: "column",
              },
            }}
          >
            <Button
              component={Link}
              to="/cart"
              type="button"
              size="large"
              variant="text"
              color="tertiary"
            >
              Back to cart
            </Button>
            <Button
              sx={{ [theme.breakpoints.down("sm")]: { marginBottom: "5px" } }}
              type="submit"
              size="large"
              variant="contained"
              color="primary"
            >
              Next
            </Button>
          </Box>
        </form>
      </FormProvider>
    </>
  );
}

export default AdressForm;

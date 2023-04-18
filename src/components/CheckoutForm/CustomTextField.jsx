import React from 'react'
import { TextField, Grid } from '@mui/material'
import { useFormContext, Controller } from 'react-hook-form'

function FormInput({ name, label, required }) {
  const { control } = useFormContext();

  return (
    <Grid item xs={12} sm={6}>
        <Controller
            render={({ field }) => <TextField variant='standard' fullWidth label={label} name={name} required={required} {...field} />}
            control={control}
            name={name}
        />
    </Grid>
  )
}

export default FormInput
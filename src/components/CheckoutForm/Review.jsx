import React from 'react'
import { Typography, List, ListItem, ListItemText } from '@mui/material'

function Review({ checkoutToken }) {

  console.log(checkoutToken)
  return (
    <>
        <Typography variant='h6' gutterBottom >Order summary</Typography>
        <List disablePadding>
          {checkoutToken.line_items.map(product => (
            <ListItem key={product.id} sx={{ padding: '10px 0'}}>
              <ListItemText primary={product.product_name} secondary={`Quantity: ${product.quantity}`} />
              <Typography variant='body2'>{product.line_total.formatted_with_symbol}</Typography>
            </ListItem>
          ))}

          <ListItem sx={{ padding: '10px 0', display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
            <ListItemText primary='Total' />
            <Typography variant='subtitle1' sx={{ fontWeight: 700 }}>
              {checkoutToken.total.formatted_with_symbol}
            </Typography>
          </ListItem>
          
        </List>
    </>
  )
}

export default Review
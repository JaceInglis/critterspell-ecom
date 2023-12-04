import React from "react";
import { Typography, List, ListItem, ListItemText } from "@mui/material";

const Review = ({ checkoutToken }) => {
  return (
    <>
      <Typography variant="h6">Order summary</Typography>
      <List disablePadding>
        {checkoutToken.line_items.map((product) => (
          <ListItem key={product.id} sx={{ padding: "10px 0" }}>
            <ListItemText
              primary={product.product_name}
              secondary={`Quantity: ${product.quantity}`}
            />
            <Typography variant="body2">
              {product.line_total.formatted_with_symbol}
            </Typography>
          </ListItem>
        ))}

        <ListItem sx={{ padding: "10px 0" }}>
          <ListItemText
            primary="Shipping"
            secondary={checkoutToken.shipping.description}
          />
          <Typography variant="body2">
            {checkoutToken.shipping.price.formatted_with_symbol}
          </Typography>
        </ListItem>

        <ListItem sx={{ padding: "10px 0" }}>
          <ListItemText primary="Tax" secondary="GST" />
          <Typography variant="body2">
            ${checkoutToken.tax.breakdown[1].amount.toFixed(2)}
          </Typography>
        </ListItem>

        {!!checkoutToken.tax.breakdown[0].amount && (
          <ListItem sx={{ padding: "10px 0" }}>
            <ListItemText primary="Tax" secondary="PST" />
            <Typography variant="body2">
              ${checkoutToken.tax.breakdown[0].amount.toFixed(2)}
            </Typography>
          </ListItem>
        )}

        <ListItem
          sx={{
            padding: "10px 0",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {checkoutToken.total_due.formatted_with_symbol}
          </Typography>
        </ListItem>
      </List>
    </>
  );
};

export default Review;

import React from "react";
import { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/CheckoutForm/Checkout/Checkout";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import theme from "./theme";

import { Box, useMediaQuery, ThemeProvider } from "@mui/material";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [cartLoading, setCartLoading] = useState(null);
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantitiy) => {
    try {
      setCartLoading(true);
      const item = await commerce.cart.add(productId, quantitiy);
      setCart(item);
    } catch (error) {
      setCartLoading(error);
    } finally {
      setCartLoading(false);
    }
  };

  const handleCartUpdate = async (productId, amount) => {
    const response = await commerce.cart.update(productId, {
      quantity: amount,
    });

    setCart(response);
  };

  const handleRemoveFromCart = async (productId) => {
    const response = await commerce.cart.remove(productId);

    setCart(response);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );

      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box
          sx={{ minHeight: "90vh", display: "flex", flexDirection: "column" }}
        >
          <Navbar totalItems={cart.total_items} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Home
                  products={products}
                  cart={cart}
                  cartLoading={cartLoading}
                  onAddToCart={handleAddToCart}
                />
              }
            />

            <Route
              exact
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  onCartUpdate={handleCartUpdate}
                  onCartRemove={handleRemoveFromCart}
                />
              }
            />

            <Route
              exact
              path="/checkout"
              element={
                <Checkout
                  cart={cart}
                  order={order}
                  onCaptureCheckout={handleCaptureCheckout}
                  error={errorMessage}
                />
              }
            />
          </Routes>
        </Box>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;

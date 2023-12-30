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

import { Box, ThemeProvider, CssBaseline } from "@mui/material";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import MainPageMeta from "./components/MainPageMeta/MainPageMeta";

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState([]);
  const [cart, setCart] = useState({});
  const [cartLoading, setCartLoading] = useState(null);

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(JSON.parse(storedName));
    }
  }, []);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantitiy, name) => {
    try {
      setCartLoading(true);
      const item = await commerce.cart.add(productId, quantitiy);
      setCart(item);
    } catch (error) {
      setCartLoading(error);
    } finally {
      setCartLoading(false);
    }
    setName((prevState) => {
      const updatedName = [...prevState, name];
      localStorage.setItem("name", JSON.stringify(updatedName));
      return updatedName;
    });
  };

  const handleRemoveFromCart = async (productId) => {
    const response = await commerce.cart.remove(productId);

    setCart(response);
    setName([]);
    localStorage.removeItem("name");
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
    setName([]);
    localStorage.removeItem("name");
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    await commerce.checkout.capture(checkoutTokenId, newOrder);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Router>
          <ScrollToTop>
            <Box
              sx={{
                minHeight: "90vh",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <MainPageMeta />
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
                      name={name}
                      onCartRemove={handleRemoveFromCart}
                      soldOut={products[0]?.conditionals.is_sold_out}
                    />
                  }
                />

                <Route
                  exact
                  path="/checkout"
                  element={
                    <Checkout
                      cart={cart}
                      name={name}
                      onCartRefresh={refreshCart}
                      onCaptureCheckout={handleCaptureCheckout}
                    />
                  }
                />
              </Routes>
            </Box>
            <Footer />
          </ScrollToTop>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;

import React from 'react';
import { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Products from './components/Products/Products';
import Navbar from './components/Navbar/Navbar';
import Cart from './components/Cart/Cart'


function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  }

  const handleAddToCart = async (productId, quantitiy) => {
    const item = await commerce.cart.add(productId, quantitiy);

    setCart(item);
  }

  const handleEmptyCart = async () => {
    setCart(await commerce.cart.empty());
  }

  const handleCartUpdate = async (productId, amount) => {
    const response = await commerce.cart.update(productId, { quantity: amount });

    setCart(response);
  }

  const handleRemoveFromCart = async (productId) => {
    const response = await commerce.cart.remove(productId);

    setCart(response);
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);


  return (
    <Router>
      <div>
        <Navbar totalItems={cart.total_items}/>
        <Routes>
          <Route exact path='/' element={<Products products={products} onAddToCart={handleAddToCart} />} />

          <Route exact path='/cart' element={<Cart cart={cart} onEmptyCart={handleEmptyCart} onCartUpdate={handleCartUpdate} onCartRemove={handleRemoveFromCart} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
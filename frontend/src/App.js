
import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import Details from './components/Details';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import AdminLogin from './components/AdminLogin';
import Navbar from './components/Navbar';
import Categories from './components/Categories';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './CartContext';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5001/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <CartProvider>
      <Router>
        <Navbar />
        <div className="App">
        
          <Routes>
            <Route exact path="/" element={<Home products={products} />} />
            <Route path="/details/:id" element={<Details products={products} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/admin-login" element={<AdminLogin />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;

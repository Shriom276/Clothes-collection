import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';

function Navbar() {
  const { cart } = useCart();
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">MyStore</Link>
      <ul className="nav-links">
        <li>
          <Link to="/cart" className="nav-cart">
            Cart ({totalItems})
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

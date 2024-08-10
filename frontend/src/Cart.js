import React, { useState } from 'react';

function Cart() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item._id !== id));
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cart.map(item => (
          <li key={item._id}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(item._id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;

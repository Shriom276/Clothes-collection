import React, { useState } from 'react';
import { useCart } from '../CartContext';

function Checkout() {
    const { cart } = useCart();
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        creditCard: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mimic checkout process
        console.log('Order placed:', { cart, ...formData });
    };

    return (
        <div>
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                />
                <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Address"
                    required
                />
                <input
                    type="text"
                    name="creditCard"
                    value={formData.creditCard}
                    onChange={handleChange}
                    placeholder="Credit Card Number"
                    required
                />
                <button type="submit">Place Order</button>
            </form>
            <h3>Order Summary</h3>
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>
                        {item.name} - ${item.price} x {item.quantity}
                    </li>
                ))}
            </ul>
            <p>Total: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</p>
        </div>
    );
}

export default Checkout;

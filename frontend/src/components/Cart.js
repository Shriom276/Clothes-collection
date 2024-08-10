
import React from 'react';
import { useCart } from '../CartContext';
import '../style.css';
function Cart() {
    const { cart, dispatch } = useCart();

    const handleRemove = (id) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
    };

    const handleQuantityChange = (id, quantity) => {
        const updatedQuantity = parseInt(quantity, 10);
        if (updatedQuantity > 0) {
            dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity: updatedQuantity } });
        }
    };

    const handleOrderPlaced = () => {
        alert('Order Placed!');
        dispatch({ type: 'CLEAR_CART' });
    };

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    {cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.imageUrl} alt={item.name} style={{ width: '100px', height: '100px' }} />
                            <div>
                                <h3>{item.name}</h3>
                                <p>Price: ${item.price}</p>
                                <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                                <input
                                    type="number"
                                    min="1"
                                    value={item.quantity}
                                    onChange={(e) =>
                                        handleQuantityChange(item.id, e.target.value)
                                    }
                                    style={{ width: '50px', marginRight: '10px' }}
                                />
                                <button onClick={() => handleRemove(item.id)}>Remove</button>
                            </div>
                        </div>
                    ))}
                    <button onClick={handleOrderPlaced}>Place Order</button>
                </>
            )}
        </div>
    );
}

export default Cart;

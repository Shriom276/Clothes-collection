
import React, { createContext, useContext, useReducer } from 'react';

export const CartContext = createContext();

const initialState = [];

function cartReducer(state, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [...state, { ...action.payload, quantity: 1 }];
        case 'REMOVE_FROM_CART':
            return state.filter(item => item.id !== action.payload.id);
        case 'UPDATE_QUANTITY':
            return state.map(item =>
                item.id === action.payload.id
                    ? { ...item, quantity: action.payload.quantity }
                    : item
            );
        case 'CLEAR_CART':
            return [];
        default:
            return state;
    }
}

export const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, initialState);

    const addToCart = (product) => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

// Create a custom hook to use the CartContext
export const useCart = () => {
    return useContext(CartContext);
};

// cartProvider.jsx
import React, { useState } from 'react';
import cartContext from './cartContext';

function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart((prevCart) => [...prevCart, item]);
    };

    return (
        <cartContext.Provider value={{ cart, addToCart }}>
            {children}
        </cartContext.Provider>
    );
}

export default CartProvider;

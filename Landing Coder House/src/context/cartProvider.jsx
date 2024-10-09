// cartProvider.jsx
import React, { useState } from 'react';
import cartContext from './cartContext';

function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
            if (existingItem) {
                // Si el producto ya existe, incrementa la cantidad
                return prevCart.map(cartItem =>
                    cartItem.id === item.id 
                        ? { ...cartItem, qty: cartItem.qty + item.qty } // Suma la cantidad
                        : cartItem
                );
            } else {
                // Si no existe, añade el nuevo producto con la cantidad
                return [...prevCart, { ...item, qty: item.qty }];
            }
        });
    };

    const removeFromCart = (id) => {
        setCart((prevCart) => 
            prevCart.map((item) => 
                item.id === id ? { ...item, qty: item.qty - 1 } : item
            ).filter(item => item.qty > 0) // Elimina el item si la qty es 0
        );
    };

    return (
        <cartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </cartContext.Provider>
    );
}

export default CartProvider;

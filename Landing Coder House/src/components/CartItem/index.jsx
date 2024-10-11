// Cart.jsx
import React from 'react';
import { useCartContext } from '../../context/cartContext';
import styles from './CartItem.module.css';
import { FaDeleteLeft } from "react-icons/fa6";
function CartItem() {
    const { cart, removeFromCart } = useCartContext();
    return (
        <>
            <h3>Carrito:</h3>
            <ul>
                {cart.map((item, index) => (
                    <li key={index} className={styles.cartLi}>
                        {item.name} - ${item.price} - Cantidad: {item.qty} - Total: ${item.price * item.qty}
                        <FaDeleteLeft
                            className={styles.cartIconDelet}
                            onClick={() => removeFromCart(item.id)}
                        />
                    </li>
                ))}
            </ul>

        </>
    );
}

export default CartItem;

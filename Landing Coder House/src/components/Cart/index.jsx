// Cart.jsx
import React from 'react';
import { useCartContext } from '../../context/cartContext'; // Asegúrate de la ruta correcta
import styles from './Cart.module.css';

function Cart() {
    const { cart } = useCartContext();

    if (cart.length === 0) {
        return <div className={styles.emptyCart}>El carrito está vacío.</div>;
    }

    return (
        <div className={styles.cart}>
            <h2>Artículos en el Carrito:</h2>
            <ul>
                {cart.map((item, index) => (
                    <li key={index}>
                        {item.title} - Cantidad: {item.qty}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Cart;

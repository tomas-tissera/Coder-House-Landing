// Cart.jsx
import React from 'react';
import { useCartContext } from '../../context/cartContext'; 
import styles from './Cart.module.css';
import { FaDeleteLeft } from "react-icons/fa6";

function Cart() {
    const { cart ,removeFromCart  } = useCartContext();
    const totalPrice = cart.reduce((accumulator, item) => accumulator + (item.price * item.qty), 0);


    if (cart.length === 0) {
        return <div className={styles.emptyCart}>El carrito está vacío.</div>;
    }
    
    return (
        <div className={styles.cart}>
            <div className={styles.cartElement}>
                <h3>Carrito:</h3>
                <ul>
                    {cart.map((item, index) => (
                        <>
                        <li key={index} className={styles.cartLi}>
                            {item.name} - ${item.price} - Cantidad: {item.qty} - Total:${item.price * item.qty}
                        <FaDeleteLeft 
                            className={styles.cartIconDelet} onClick={() => 
                            removeFromCart(item.id)}
                        />
                        </li>
                        <hr></hr>
                        </>
                    ))}
                </ul>
            </div>
            <div className={styles.cartElement}>
                <h3>Datos Finales</h3>
                <p className={styles.cartTotal}>Total a pagar:${totalPrice}</p>
                <button className={styles.cartBtn}>Realizar Pago</button>
            </div>
        </div>
    );
}

export default Cart;

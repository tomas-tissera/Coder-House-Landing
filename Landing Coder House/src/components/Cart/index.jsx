// Cart.jsx
import React from 'react'; 
import { useCartContext } from '../../context/cartContext'; 
import styles from './Cart.module.css';
import CheckoutForm from '../CheckoutForm';
import CartItem from '../CartItem';
function Cart() {
    const { cart } = useCartContext();
    
    if (cart.length === 0) {
        return <div className={styles.emptyCart}>El carrito está vacío 😞</div>;
    }

    return (
        <div className={styles.cart}>
            <div className={styles.cartElement}>
                <CartItem/>
            </div>
            <div className={styles.cartElement}>
                <CheckoutForm/>
            </div>
        </div>
    );
}

export default Cart;

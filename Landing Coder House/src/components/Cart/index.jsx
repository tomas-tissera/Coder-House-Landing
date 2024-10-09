// Cart.jsx
import React, { useState } from 'react'; // Importar useState
import { useCartContext } from '../../context/cartContext'; 
import styles from './Cart.module.css';
import { FaDeleteLeft } from "react-icons/fa6";
import Swal from 'sweetalert2';
import { getCompra } from '../../firebase/db';

function Cart() {
    const { cart, removeFromCart,clearCart  } = useCartContext();
    const totalPrice = cart.reduce((accumulator, item) => accumulator + (item.price * item.qty), 0);
    
    // Estado para manejar la carga
    const [loading, setLoading] = useState(false);

    const pagar = () => {
        Swal.fire({
            title: "¿Está seguro?",
            text: "No podrá revertir esto!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí"
        }).then(async (result) => {
            if (result.isConfirmed) {
                setLoading(true); // Comienza la carga
                try {
                    await getCompra(totalPrice, cart); // Espera a que se complete la compra
                    clearCart(); // Vaciar el carrito
                } catch (error) {
                    console.error("Error al realizar la compra:", error);
                    Swal.fire("Error", "Hubo un problema al procesar su compra.", "error"); // Muestra un mensaje de error
                } finally {
                    setLoading(false); // Termina la carga
                }
            }
        });
    };

    if (cart.length === 0) {
        return <div className={styles.emptyCart}>El carrito está vacío.</div>;
    }

    return (
        <div className={styles.cart}>
            <div className={styles.cartElement}>
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
            </div>
            <div className={styles.cartElement}>
                <h3>Datos Finales</h3>
                <p className={styles.cartTotal}>Total a pagar: ${totalPrice}</p>
                <button className={styles.cartBtn} onClick={pagar} disabled={loading}>
                    {loading ? 'Cargando...' : 'Realizar Pago'} 
                </button>
            </div>
            {loading && (
                <div className={styles.loading}>
                    <p>Cargando...</p> 
                </div>
            )}
        </div>
    );
}

export default Cart;

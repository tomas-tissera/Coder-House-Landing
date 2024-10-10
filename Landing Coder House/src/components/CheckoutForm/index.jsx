// Cart.jsx
import React, { useState } from 'react'; // Importar useState
import { useCartContext } from '../../context/cartContext';
import styles from './CheckoutForm.module.css';
import { FaDeleteLeft } from "react-icons/fa6";
import Swal from 'sweetalert2';
import { getCompra } from '../../firebase/db';

function CheckoutForm() {
    const { cart, clearCart } = useCartContext();
    const totalPrice = cart.reduce((accumulator, item) => accumulator + (item.price * item.qty), 0);

    // Estado para manejar la carga
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        codigoPostal: 0,
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Datos enviados:", formData);
        // Aquí puedes manejar la lógica de envío, como realizar una petición a una API
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
                    await getCompra(totalPrice, cart , formData); // Espera a que se complete la compra
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

    return (
        <>
            <div className={styles.cartElement}>
                <h3>Datos Finales</h3>
                <form onSubmit={handleSubmit}>
                    <div className={styles.field}>
                        <label htmlFor="nombre">Nombre Completo:</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            placeholder="Perez Perez"
                            required
                        />
                    </div>
                    <div className={styles.field}>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="example@gmail.com"
                            required
                        />
                    </div>
                    <div className={styles.field}>
                        <label htmlFor="codigoPostal">Código Postal:</label>
                        <input
                            type="number"
                            id="codigoPostal"
                            name="codigoPostal"
                            value={formData.codigoPostal}
                            onChange={handleChange}
                            placeholder="5000"
                            required
                        />
                         <a href="https://www.correoargentino.com.ar/formularios/cpa" target="_blank" rel="noopener noreferrer" className={styles.link}>
                            ¿No sabes tu código postal?
                        </a>
                    </div>
                    
                <p className={styles.cartTotal}>Total a pagar: ${totalPrice}</p>
                    <button className={styles.submitButton} disabled={loading}>
                        {loading ? 'Cargando...' : 'Realizar Pago 🎉'}
                    </button>
                </form>
                
            </div>
            {loading && (
                <div className={styles.loading}>
                    <p>Cargando...</p>
                </div>
            )}
        </>

    );
}

export default CheckoutForm;

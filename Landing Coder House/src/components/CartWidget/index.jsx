import React from "react"
import styles from './CartWidget.module.css'
//Uso de React-Icon para llamar al icono de carrito
import { CiShoppingCart } from "react-icons/ci";
function CartWidget() {
  return (
    <>
    <div className={styles.carrito}>

        <CiShoppingCart className={styles.carritoIcono}/>
        <div className={styles.contadorCarrito}>0</div>
    </div>
    </>
  )
}

export default CartWidget

import React from "react"
import styles from './CartWidget.module.css'
//Uso de React-Icon para llamar al icono de carrito
import { CiShoppingCart } from "react-icons/ci";
import {useCartContext} from '../../context/cartContext'
function CartWidget() {
  const {cart } = useCartContext()
  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);
  return (
    <>
    <div className={styles.carrito}>

        <CiShoppingCart className={styles.carritoIcono}/>
        <div className={styles.contadorCarrito}>{totalItems}</div>
    </div>
    </>
  )
}

export default CartWidget

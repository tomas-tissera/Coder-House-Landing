import React from "react"
import styles from './CartWidget.module.css'
//Uso de React-Icon para llamar al icono de carrito
import { CiShoppingCart } from "react-icons/ci";
function CartWidget() {
  return (
    <>
      <CiShoppingCart className={styles.carrito}/>
    </>
  )
}

export default CartWidget

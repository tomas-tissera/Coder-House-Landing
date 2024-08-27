import React from "react"
import CartWidget from "../CartWidget"
import styles from './NavBar.module.css'


function NavBar() {
  return (
    <>
    <div className={styles.navbar}>
        <div className={styles.links}>
          <h1 className={styles.titulo}>Mi Tienda</h1>
          <a href="#Inicio">Inicio</a>
          <a href="#Productos">Productos</a>
          <a href="#Contacto">Contacto</a>
        </div> 
        <CartWidget />
    </div>
    </>
  )
}

export default NavBar

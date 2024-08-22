import React from "react"
import CartWidget from "../CartWidget"
import styles from './NavBar.module.css'


function NavBar() {
  return (
    <>
    <div className={styles.navbar}>
        <div className={styles.links}>
          <h1 className={styles.titulo}>Mi Tienda</h1>
          <a href="#item">item</a>
          <a href="#item">item</a>
          <a href="#item">item</a>
          <a href="#item">item</a>
        </div> 
        <CartWidget />
    </div>
    </>
  )
}

export default NavBar

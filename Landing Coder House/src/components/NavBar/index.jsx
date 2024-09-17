import React from "react"
import CartWidget from "../CartWidget"
import styles from './NavBar.module.css'
import { Link } from "react-router-dom"

function NavBar() {
  return (
    <>
    <div className={styles.navbar}>
        <div className={styles.links}>
          
          <Link to="/"><h1 className={styles.titulo}>Mi Tienda</h1></Link>
            <Link to="/" className={styles.navbarLink}>inicio</Link>
            <Link to="/category/men's clothing" className={styles.navbarLink}>men's clothing</Link>
            <Link to="/category/jewelery" className={styles.navbarLink}>jewelery</Link>
            <Link to="/category/electronics" className={styles.navbarLink}>electronics</Link>
            <Link to="/category/women's clothing" className={styles.navbarLink}>women's clothing</Link>

        </div> 
        <CartWidget />
    </div>
    </>
  )
}

export default NavBar

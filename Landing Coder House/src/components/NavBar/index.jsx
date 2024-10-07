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
            <Link to="/category/Accesorios" className={styles.navbarLink}>Accesorios</Link>
            <Link to="/category/Ropa" className={styles.navbarLink}>Ropa</Link>
            <Link to="/category/Herramientas" className={styles.navbarLink}>Herramientas</Link>
            <Link to="/category/Celulares" className={styles.navbarLink}>Celulares</Link>

        </div> 
        <Link to="/carrito">
          <CartWidget />
        </Link>
    </div>
    </>
  )
}

export default NavBar

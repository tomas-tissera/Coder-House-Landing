import React from "react"
import styles from './ItemListContainer.module.css'
function ItemListContainer(props) {
  return (
    <>
    <div className={styles.container}>
      <p>{ props.saludo }</p>
    </div>
    </>
  )
}

export default ItemListContainer

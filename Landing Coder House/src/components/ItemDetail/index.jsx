import React from 'react';
import ItemCount from '../ItemCount'; 
import styles from './ItemDetail.module.css'; 

function ItemDetail({ item }) {
  return (
    <div className={styles.container}>
      <h2>{item.name}</h2>
      <img src={item.image} alt={item.title} className={styles.image} />
      <h1 className={styles.title}>{item.title}</h1>
      <p className={styles.description}>{item.description}</p>
      <p className={styles.price}><strong>Precio:</strong> ${item.price}</p>
      <ItemCount item={item} />
    </div>
  );
}

export default ItemDetail;

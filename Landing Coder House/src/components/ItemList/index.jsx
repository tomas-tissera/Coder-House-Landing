import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ItemList.module.css';

function ItemList({ items }) {
  return (
    <ul className={styles.itemList}>
      {items.map(item => (
        <li key={item.id} className={styles.item}>
          <h3>{item.title}</h3>
          <div className={styles.itemDatos}>
            <img src={item.image} alt={item.title} className={styles.image} />
            <p className={styles.category}>Categoria: {item.category}</p>
            <p>{item.description}</p>
            <p className={styles.precio}>Precio: ${item.price}</p>
          </div>
          <Link to={`/product/${item.id}`} className={styles.link}>
            <p className={styles.linkText}>Ver más</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default ItemList;

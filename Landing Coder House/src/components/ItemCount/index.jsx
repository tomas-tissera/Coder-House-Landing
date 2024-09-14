// ItemCount.jsx
import React, { useState } from 'react';
import styles from './ItemCount.module.css'; 

function ItemCount({ item }) {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount(prevCount => Math.max(prevCount - 1, 1));
  };

  return (
    <div className={styles.itemCount}>
        <div className={styles.itemContador}>
            <button onClick={handleDecrement}>-</button>
            <span>{count}</span>
            <button onClick={handleIncrement}>+</button>
        </div>
      <button className={styles.addButton}>Añadir al carrito</button>
    </div>
  );
}

export default ItemCount;

// ItemCount.jsx
import React, { useState } from 'react';
import styles from './ItemCount.module.css'; 
import { useCartContext } from '../../context/cartContext';

import Swal from 'sweetalert2';
function ItemCount({ item }) {
  const [count, setCount] = useState(1);
  const { addToCart } = useCartContext();

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount(prevCount => Math.max(prevCount - 1, 1));
  };
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  const anadir = () =>{ 
    addToCart({ ...item, qty: count })
    Toast.fire({
      icon: "success",
      title: "Se agrego al carrito correctamente"
    });
  };

  return (
    <div className={styles.itemCount}>
      <div className={styles.itemContador}>
        <button onClick={handleDecrement}>-</button>
        <span>{count}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
      <button className={styles.addButton} onClick={anadir}>Añadir al carrito</button>
    </div>
  );
}

export default ItemCount;

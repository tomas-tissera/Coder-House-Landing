import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/INDEX.JSX';
import styles from './ItemListContainer.module.css'; 

function ItemListContainer() {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // Filtrar por categoría si categoryId está definido
        const filteredItems = categoryId
          ? data.filter(item => item.category === categoryId)
          : data;
        setItems(filteredItems);
      } catch (error) {
        console.error('Error fetching items:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [categoryId]);

  if (loading) return <div className={styles.loading}>Cargando...</div>;

  return (
    <div className={styles.container}>
      <h2>{categoryId ? `Productos de la categoría ${categoryId}` : 'Todos los productos'}</h2>
      <ItemList items={items} />
    </div>
  );
}

export default ItemListContainer;

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/INDEX.JSX';
import styles from './ItemListContainer.module.css'; 
import getProducts, { getProductsFromCategory } from '../../firebase/db';

function ItemListContainer() {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        let fetchedItems;
        if (categoryId) {
          // Obtener productos filtrados por categoría
          fetchedItems = await getProductsFromCategory(categoryId);
        } else {
          // Obtener todos los productos
          fetchedItems = await getProducts();
        }
        setItems(fetchedItems);
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

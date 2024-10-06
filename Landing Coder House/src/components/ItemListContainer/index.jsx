import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/INDEX.JSX';
import styles from './ItemListContainer.module.css'; 
import getProducts from '../../firebase/db';  // Asegúrate de que esté exportado correctamente

function ItemListContainer() {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFirebaseItems = async () => {
      try {
        const firebaseItems = await getProducts();
        const filteredItems = categoryId
          ? firebaseItems.filter(item => item.category === categoryId)
          : firebaseItems;
        setItems(filteredItems);
      } catch (error) {
        console.error('Error fetching items from Firebase:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFirebaseItems();
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

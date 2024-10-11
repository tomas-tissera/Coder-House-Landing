import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail';
import styles from './ItemDetailContainer.module.css'; 
import getProducts from '../../firebase/db';  

function ItemDetailContainer() {
  const { id } = useParams(); 
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const allProducts = await getProducts();  
        const foundItem = allProducts.find(product => product.id === id);  
        if (!foundItem) {
          throw new Error('Producto no encontrado');
        }
        setItem(foundItem);  
      } catch (error) {
        console.error('Error fetching item details:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItemDetails();
  }, [id]);

  if (loading) return <div className={styles.loading}>Cargando...</div>;
  if (error) return <div className={styles.error}>Error: {error}</div>;
  if (!item) return <div className={styles.notFound}>Producto no encontrado</div>;

  return (
    <ItemDetail item={item} />
  );
}

export default ItemDetailContainer;

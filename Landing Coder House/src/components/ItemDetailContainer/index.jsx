import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './ItemDetailContainer.module.css'; // Asegúrate de que este archivo CSS exista

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(id);
    
    const fetchItemDetails = async () => {
        try {
          const url = `https://fakestoreapi.com/products/${id}`;
          console.log(`Fetching from: ${url}`); // Verifica la URL
          const response = await fetch(url);
      
          // Verifica el estado de la respuesta
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
      
          // Verifica si la respuesta tiene contenido
          const text = await response.text();
          if (!text) {
            throw new Error('Empty response');
          }
      
          const data = JSON.parse(text);
          setItem(data);
        } catch (error) {
          console.error('Error fetching item details:', error);
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
      

    fetchItemDetails();
  }, [id]);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!item) return <div>Producto no encontrado</div>;

  return (
    <div className={styles.container}>
      <img src={item.image} alt={item.title} className={styles.image} />
      <h1 className={styles.title}>{item.title}</h1>
      <p className={styles.description}>{item.description}</p>
      <p className={styles.price}><strong>Precio:</strong> ${item.price}</p>
    </div>
  );
}

export default ItemDetailContainer;

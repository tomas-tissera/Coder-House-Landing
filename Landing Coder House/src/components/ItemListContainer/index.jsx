import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
        // Aquí filtramos por categoría si categoryId está definido
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

  if (loading) return <div>Cargando...</div>;

  return (
    <div>
      <h2>{categoryId ? `Productos de la categoría ${categoryId}` : 'Todos los productos'}</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <h3>{item.category}</h3>
            <img src={item.image} alt={item.title} style={{ width: '100px', height: '100px' }} />
            <p>{item.description}</p>
            <Link to={`/product/${item.id}`}>Ver más</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemListContainer;

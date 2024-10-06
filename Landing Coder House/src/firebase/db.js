import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import app from "./config.js";

const db = getFirestore(app);

// Obtener todos los productos
const getProducts = async () => {
  const querySnapshot = await getDocs(collection(db, 'items'));
  const products = [];
  querySnapshot.forEach((doc) => {
    products.push(doc.data());
  });
  return products;
};

export default getProducts;

// Obtener productos por categoría
export const getProductsFromCategory = async (category) => {
  if (!category) {
    console.error('Error: categoría no definida');
    return [];
  }

  try {
    const itemsRef = collection(db, 'items');
    const q = query(itemsRef, where('category', '==', category));
    const querySnapshot = await getDocs(q);
    const products = [];
    querySnapshot.forEach((doc) => {
      products.push({ id: doc.id, ...doc.data() });
    });
    return products;
  } catch (error) {
    console.error('Error fetching category items:', error);
    return [];
  }
};

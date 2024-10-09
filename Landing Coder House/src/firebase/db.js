import { collection, getDocs, getFirestore, query, where , addDoc  } from "firebase/firestore";
import app from "./config.js";
import Swal from 'sweetalert2'

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

export const getCompra = async(total,compra) => {
  const now = new Date();
  const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;

  const docData = {
    total: total,
    compra:compra,
    dateExample: formattedDate 
};
  console.log(docData);
  try {
    // Agregar el documento a la colección "compras" en Firestore
    const docRef = await addDoc(collection(db, 'compras'), docData);
    console.log("Documento escrito con ID: ", docRef.id);
    Swal.fire({
      title: `Pagado! Id de la compra: ${docRef.id}`,
      text: "¡Su compra fue realizada con exicto!",
      icon: "success"
    });
    
  } catch (error) {
    console.error("Error al agregar documento: ", error);
  }
}
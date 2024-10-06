import { collection, getDocs, getFirestore } from "firebase/firestore";
import app from "./config.js";

const db = getFirestore(app);

const getProducts = async () => {
  const querySnapshot = await getDocs(collection(db, 'items'));
  const products = [];
  querySnapshot.forEach((doc) => {
    products.push({ id: doc.id, ...doc.data() });
  });
  return products;
};

export default getProducts;

import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase/config";


export const getProducts = async () => {
  const productsCollection = collection(db, "productos");
  const productsSnapshot = await getDocs(productsCollection);
  const productList = productsSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return productList;
};


export const createProduct = async (productData) => {
  const docRef = await addDoc(collection(db, "productos"), productData);
  return docRef.id;
};


export const updateProduct = async (productId, productData) => {
  const docRef = doc(db, "productos", productId);
  await updateDoc(docRef, productData);
};


export const deleteProduct = async (productId) => {
  await deleteDoc(doc(db, "productos", productId));
};

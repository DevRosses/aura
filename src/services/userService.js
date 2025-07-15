import {
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  getDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { db } from "../firebase/config";


// Obtiene el rol de un usuario
export const getUserRole = async (uid) => {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data().role;
  } else {
    return "user"; // Si no hay rol definido, asumimos que es un usuario normal
  }
};

// Obtiene todos los usuarios de la colección 'users'.
export const getUsers = async () => {
  const usersCollection = collection(db, "users");
  const usersSnapshot = await getDocs(usersCollection);
  const userList = usersSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return userList;
};

// Actualiza los datos de un usuario específico.
//Lo usaremos principalmente para cambiar el rol
export const updateUser = async (userId, dataToUpdate) => {
  const userDoc = doc(db, "users", userId);
  await updateDoc(userDoc, dataToUpdate);
};

//  Elimina el documento de un usuario de la colección 'users'
export const deleteUser = async (userId) => {
  const userDoc = doc(db, "users", userId);
  await deleteDoc(userDoc);
};

// Agrega o elimina un producto del array de favoritos de un usuario.
export const toggleFavorite = async (userId, productId) => {
  const userDocRef = doc(db, "users", userId);
  const userDoc = await getDoc(userDocRef);

  if (userDoc.exists()) {
    const userData = userDoc.data();
    const favorites = userData.favorites || [];

    if (favorites.includes(productId)) {
      // Si ya es favorito, lo quitamos
      await updateDoc(userDocRef, {
        favorites: arrayRemove(productId),
      });
    } else {
      // Si no es favorito, lo agregamos
      await updateDoc(userDocRef, {
        favorites: arrayUnion(productId),
      });
    }
  }
};

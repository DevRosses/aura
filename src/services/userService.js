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
import { recuperarPassword } from "../firebase/config";
import { dispararSweetBasico } from "../utils/SweetAlert";



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

export const getUserProfile = async (uid) => {
  // Una pequeña guarda para evitar errores si el uid es nulo
  if (!uid) return null;

  const userDocRef = doc(db, "users", uid);
  const userDocSnap = await getDoc(userDocRef);

  if (userDocSnap.exists()) {
    // Si el documento existe, devuelve todos sus datos
    return userDocSnap.data();
  } else {
    // Esto puede pasar si un usuario se elimina de Firestore pero no de Auth
    console.warn("No se encontró un perfil para el usuario con UID:", uid);
    return null;
  }
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

//  Proceso completo de recuperación de contraseña.
export const sendPasswordResetEmail = async (email) => {
  // Primero, validamos que el email no esté vacío
  if (!email || email.trim() === "") {
    dispararSweetBasico(
      "info",
      "Falta tu correo",
      "Por favor, escribe tu email en el campo correspondiente.",
      "Entendido"
    );
    return; // Detenemos la ejecución si no hay email
  }

  try {
    await recuperarPassword(email);
    // Mensaje de éxito genérico por seguridad
    dispararSweetBasico(
      "success",
      "Solicitud Enviada",
      `Si la dirección ${email} está registrada, recibirás un correo en breve.`,
      "¡Genial!"
    );
  } catch (error) {
    // Incluso si hay un error, mostramos un mensaje genérico para no dar pistas
    console.error("Error al intentar enviar correo de recuperación:", error);
    dispararSweetBasico(
      "error",
      "Error",
      "Ocurrió un problema al procesar tu solicitud. Inténtalo más tarde.",
      "Ok"
    );
  }
};

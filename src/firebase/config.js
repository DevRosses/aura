import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

console.log("Firebase Config en uso:", firebaseConfig);

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export function crearUsuario(email, password) {
  // Crea el usuario y luego envía el email de verificación
  return createUserWithEmailAndPassword(auth, email, password).then(
    (userCredential) => {
      return sendEmailVerification(userCredential.user).then(
        () => userCredential
      );
    }
  );
}

export function loginUsuario(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function recuperarPassword(email) {
  return sendPasswordResetEmail(auth, email);
}

export function reenviarVerificacion(user) {
  return sendEmailVerification(user);
}

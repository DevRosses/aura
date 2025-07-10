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
  apiKey: "AIzaSyA6y_X8KT2Z3xWAjr6ezF-DpH3eVyugM2E",
  authDomain: "aura-ed062.firebaseapp.com",
  projectId: "aura-ed062",
  storageBucket: "aura-ed062.firebasestorage.app",
  messagingSenderId: "107763894455",
  appId: "1:107763894455:web:3627e7731e6595f0c32532",
};

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

import {
  createUserWithEmailAndPassword,
  sendEmailVerification, 
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase/config";


export const registerUser = async (email, password, userData) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);

  // 2. Envía el correo de verificación justo después de crear el usuario
  await sendEmailVerification(user);

  // 3. Guarda los datos del usuario en Firestore
  await setDoc(doc(db, "users", user.uid), {
    role: "user",
    ...userData,
    email: user.email,
  });

  // 4.Cerramos la sesión para forzar al usuario a verificar su email antes de entrar.
  await auth.signOut();

  return user;
};

export const loginUser = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);

  // Verificamos la propiedad 'emailVerified'
  if (!userCredential.user.emailVerified) {
    // Si no está verificado, cerramos la sesión para que no quede logueado
    await auth.signOut();
    // Y lanzamos un error específico que el componente pueda identificar
    throw new Error("EMAIL_NOT_VERIFIED");
  }

  // Si está verificado, devolvemos el usuario como antes
  return userCredential;
};

export const logoutUser = () => {
  return signOut(auth);
};

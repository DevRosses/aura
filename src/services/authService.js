import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase/config";


export const registerUser = async (email, password, userData) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);

  await setDoc(doc(db, "users", user.uid), { role: "user", ...userData, email: user.email });
  return user;
};


export const loginUser = async (email, password) => {
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  return user;
};


export const logoutUser = () => {
  return signOut(auth);
};

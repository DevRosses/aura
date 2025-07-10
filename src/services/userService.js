import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";


export const getUserRole = async (uid) => {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data().role; 
  } else {
    return "user"; // Si no hay rol definido, asumimos que es un usuario normal
  }
};

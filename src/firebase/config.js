import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


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

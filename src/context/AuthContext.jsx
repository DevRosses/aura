import { createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase/config";
import * as authService from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setLoading(true);
      if (currentUser) {
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);

        setUser(currentUser);

        if (docSnap.exists()) {
          setUserProfile(docSnap.data());
        } else {
          setUserProfile(null);
        }
      } else {
        setUser(null);
        setUserProfile(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = (email, password) => {
    return authService.loginUser(email, password);
  };

  const register = (email, password, userProfile) => {
    return authService.registerUser(email, password, userProfile);
  };

  const logout = () => {
    return authService.logoutUser();
  };

  const value = {
    user,
    userProfile,
    loading,
    login,
    register,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

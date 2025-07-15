import { createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config"; 
import { getUserProfile } from "../services/userService";

import {
  loginUser as loginService,
  registerUser as registerService,
} from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setLoading(true);
      if (currentUser && currentUser.emailVerified) {
        const profile = await getUserProfile(currentUser.uid);
        setUser(currentUser);
        setUserProfile(profile);
      } else {
        setUser(null);
        setUserProfile(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Las funciones ahora solo llaman a los servicios importados
  const login = (email, password) => {
    return loginService(email, password);
  };

  const register = (email, password, userData) => {
    return registerService(email, password, userData);
  };

  // 3. Mejoramos la función de logout
  const logout = async () => {
    await auth.signOut();
    // El listener onAuthStateChanged se encargará del resto
  };

  const value = {
    user,
    userProfile,
    loading,
    login,
    register,
    logout,
    setUserProfile,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

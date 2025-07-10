import { createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";
import { getUserRole } from "../services/userService";
import * as authService from "../services/authService";


const AuthContext = createContext({
  user: null,
  userRole: null,
  login: () => {},
  register: () => {},
  logout: () => {},
});


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setLoading(true);
      if (currentUser) {
        
        const role = await getUserRole(currentUser.uid);
        setUser(currentUser);
        setUserRole(role);
      } else {
        setUser(null);
        setUserRole(null);
      }
      setLoading(false);
    });

    
    return () => unsubscribe();
  }, []);

  const login = (email, password) => {
    return authService.loginUser(email, password);
  };

  const register = (email, password) => {
    return authService.registerUser(email, password);
  };

  const logout = () => {
    return authService.logoutUser();
  };

  const value = {
    user,
    userRole,
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

export { AuthContext };

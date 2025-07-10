import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ROUTES } from "../constants/routes";

// Este es nuestro "Guardia". Revisa si el empleado tiene credencial.
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  // Si aún estamos verificando la credencial, que espere.
  if (loading) return <p>Verificando credenciales...</p>;

  // Si no tiene credencial, lo mandamos a la entrada.
  if (!user) {
    return <Navigate to={ROUTES.LOGIN} />;
  }

  // Si tiene credencial, puede pasar.
  return children;
};

export default ProtectedRoute;

import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { ROUTES } from "../constants/routes";

// Este es nuestro "Guardia". Revisa si el empleado tiene credencial.
const ProtectedRoute = ({ children, allowedRole }) => {
  const { user, userRole, loading } = useAuth();

  console.log("Rol del usuario desde el Guardia ProtectedRoute:", userRole);
  // Si aún estamos verificando la credencial, que espere.
  if (loading) return <p>Verificando credenciales...</p>;

  // Si no hay usuario, lo mandamos a la entrada.
  if (!user) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }
  // Si el rol no es el permitido, lo mandamos a la entrada.
  if (allowedRole && userRole !== allowedRole) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }
  // Si tiene credencial, puede pasar.
  return children;
};

export default ProtectedRoute;

import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { ROUTES } from "../constants/routes";

const ProtectedRoute = ({ children, allowedRole }) => {
  const { userProfile, loading } = useAuth();

  if (loading) {
    return <p>Verificando credenciales...</p>;
  }

  // 1. Verificamos si userProfile NO existe
  if (!userProfile) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  // 2. SOLO DESPUÉS de saber que userProfile existe, verificamos el rol
  if (allowedRole && userProfile.role !== allowedRole) {
    return <Navigate to={ROUTES.DASHBOARD} replace />;
  }

  // Si todo está bien, puede pasar.
  return children;
};

export default ProtectedRoute;

import { useAuth } from "../context/AuthContext";
import AdminDashboard from "../pages/DashboardAdminPage";
import UserDashboard from "../pages/DashboardUserPage";

// Este es el "Recepcionista". Revisa tu rol y te dirige.
const Dashboard = () => {
  const { userRole } = useAuth();

  if (userRole === "admin") {
    return <AdminDashboard />;
  }

  if (userRole === "user") {
    return <UserDashboard />;
  }

  // Por si acaso, mientras se carga el rol.
  return <p>Cargando tu espacio de trabajo...</p>;
};

export default Dashboard;

import { useAuth } from "../hooks/useAuth";
import AdminDashboard from "../pages/DashboardAdminPage";
import UserDashboard from "../pages/DashboardUserPage";

// Este es el "Recepcionista". Revisa tu rol y te dirige.
const Dashboard = () => {
  const { userRole } = useAuth();

  console.log("Rol del usuario desde el Receptionista Dashboard:", userRole);

  if (userRole === "admin") {
    return <AdminDashboard />;
  }

  if (userRole === "user") {
    return <UserDashboard />;
  }

  if (!userRole) {
    return (
      <div className="text-center mt-5">
        <p>Cargando tu espacio de trabajo...</p>
        <div className="spinner-border text-secondary" role="status"></div>
      </div>
    );
  }
  
};

export default Dashboard;

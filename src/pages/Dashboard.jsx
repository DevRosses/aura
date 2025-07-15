import { useAuth } from "../hooks/useAuth";
import AdminDashboard from "../pages/DashboardAdminPage";
import UserDashboard from "../pages/DashboardUserPage";

// Este es el "Recepcionista". Revisa tu rol y te dirige.
const Dashboard = () => {
  const { userProfile } = useAuth();

  console.log("Rol del usuario desde el Receptionista Dashboard:", userProfile.role);

  if (userProfile && userProfile.role === "admin") {
    return <AdminDashboard />;
  }

  if (userProfile && userProfile.role === "user") {
    return <UserDashboard />;
  }

  if (!userProfile) {
    return (
      <div className="text-center mt-5">
        <p>Cargando tu espacio de trabajo...</p>
        <div className="spinner-border text-secondary" role="status"></div>
      </div>
    );
  }
  
};

export default Dashboard;

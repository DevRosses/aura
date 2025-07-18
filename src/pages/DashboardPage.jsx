
import DashboardLayout from "../../components/layout/DashboardLayout";
import { ROUTES } from "../../constants/routes";

// sidebar del usuario
const userNavigationLinks = [
  { to: ROUTES.DASHBOARD, label: "Mi Perfil" },
  { to: `${ROUTES.DASHBOARD}/pedidos`, label: "Mis Pedidos" },
  // Si tuvieras más secciones, las añades aquí
];

const DashboardPage = () => {
  // Simplemente renderizamos el Layout y le pasamos los links
  return <DashboardLayout navigationLinks={userNavigationLinks} />;
};

export default DashboardPage;

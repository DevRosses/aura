import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import "../../assets/styles/components/ui/panel.css";

const SidebarAdmin = () => {
  return (
    <div className="panel-header">
      <h2>Panel de Administrador</h2>
      <div className="panel-header-nav">
        <NavLink to={ROUTES.ADMIN_PRODUCTS}>📦</NavLink>

        <NavLink to={ROUTES.ADMIN_USERS}>👥</NavLink>
      </div>
    </div>
  );
};

export default SidebarAdmin;

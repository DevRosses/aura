import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

const SidebarAdmin = () => {
  return (
    <div className="d-flex flex-column p-3 h-100">
      <h4 className="text-center mb-4">Panel Admin</h4>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink to={ROUTES.ADMIN_PRODUCTS} className="nav-link text-white">
            📦 Productos
          </NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.ADMIN_USERS} className="nav-link text-white">
            👥 Usuarios
          </NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.ADMIN_SETTINGS} className="nav-link text-white">
            🔐 Permisos
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SidebarAdmin;

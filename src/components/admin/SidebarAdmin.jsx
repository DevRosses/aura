import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

import "../../assets/styles/components/admin/SidebarAdmin.css"; 

const SidebarAdmin = () => {
  return (
    <div className="container-fluid">
      <div className="bg-dark text-white px-4 py-2  sticky-top z-3 shadow-sm d-flex flex-row justify-content-around">
        <h5 className="m-0">Panel Admin</h5>

        <NavLink
          to={ROUTES.ADMIN_PRODUCTS}
          className="text-decoration-none text-white d-flex align-items-center gap-1"
        >
          📦
        </NavLink>

        <NavLink
          to={ROUTES.ADMIN_USERS}
          className="text-decoration-none text-white d-flex align-items-center gap-1"
        >
          👥
        </NavLink>

        <NavLink
          to={ROUTES.ADMIN_PERMISSIONS}
          className="text-decoration-none text-white d-flex align-items-center gap-1"
        >
          🔐
        </NavLink>
      </div>
    </div>
  );
};

export default SidebarAdmin;

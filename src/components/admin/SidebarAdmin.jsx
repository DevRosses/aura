import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

import "../../assets/styles/components/admin/SidebarAdmin.css"; 

const SidebarAdmin = () => {
  return (
    <div className="bg-dark text-white px-4 py-2  sticky-top z-3 shadow-sm">
      <div className="d-flex flex-row gap-3 justify-content-around w-100">
        <h5 className="m-0">Panel Admin</h5>

        <Link
          to={ROUTES.ADMIN_PRODUCTS}
          className="text-decoration-none text-white d-flex align-items-center gap-1"
        >
          📦
        </Link>

        <Link
          to={ROUTES.ADMIN_USERS}
          className="text-decoration-none text-white d-flex align-items-center gap-1"
        >
          👥
        </Link>

        <Link
          to={ROUTES.ADMIN_PERMISSIONS}
          className="text-decoration-none text-white d-flex align-items-center gap-1"
        >
          🔐
        </Link>
      </div>
    </div>
  );
};

export default SidebarAdmin;

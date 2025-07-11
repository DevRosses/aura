import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

import "../../assets/styles/components/admin/SidebarAdmin.css";

const SidebarUser = () => {
  return (
    <div className="container-fluid">
      <div className="bg-dark text-white px-4 py-2  sticky-top z-3 shadow-sm d-flex flex-row justify-content-around">
        <h5 className="m-0">Panel Usuario</h5>

        <NavLink
          to={ROUTES.CART}
          className="text-decoration-none text-white d-flex align-items-center gap-1"
        >
          🛒
        </NavLink>

        <NavLink
          to={ROUTES.USER_FAVORITES}
          className="text-decoration-none text-white d-flex align-items-center gap-1"
        >
          ⭐
        </NavLink>

        <NavLink
          to={ROUTES.USER_HISTORY}
          className="text-decoration-none text-white d-flex align-items-center gap-1"
        >
          📜
        </NavLink>
      </div>
    </div>
  );
};

export default SidebarUser;

import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { ROUTES } from "../../constants/routes";
import "../../assets/styles/components/layout/NavbarBottom.css";
function NavbarBottom() {
  const { user } = useAuth();

  return (
    <footer className="navbar-bottom bg-light border-top d-flex justify-content-around align-items-center w-100">
      <NavLink to={ROUTES.HOME} className="nav-icon">
        <i className="bi bi-house-door-fill"></i>
      </NavLink>
      <NavLink to={ROUTES.PRODUCTS} className="nav-icon">
        <i className="bi bi-search"></i>
      </NavLink>

      {/* Ícono de Dashboard condicional y más grande */}
      {user && (
        <NavLink to={ROUTES.DASHBOARD} className="nav-icon-dashboard">
          <i className="bi bi-grid-1x2-fill"></i>
        </NavLink>
      )}

      <NavLink to="#" className="nav-icon">
        <i className="bi bi-heart-fill"></i>
      </NavLink>
      <NavLink to={ROUTES.LOGIN} className="nav-icon">
        <i className="bi bi-person-fill"></i>
      </NavLink>
    </footer>
  );
};

export default NavbarBottom;

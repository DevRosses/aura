import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { ROUTES } from "../../constants/routes";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useAuth } from "../../hooks/useAuth";
import { dispararSweetDecision } from "../../utils/SweetAlert";

function NavbarTop() {
  const { cartCount } = useCart();
  const { userProfile, logout, loading } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispararSweetDecision(
      "warning",
      "¿Estás seguro de que deseas cerrar sesión?",
      "Esta acción no se puede deshacer.",
      "Sí, cerrar sesión",
      "Cancelar"
    ).then((result) => {
      if (result.isConfirmed) {
        logout();
        navigate(ROUTES.HOME);
      }
    });
  };

  if (loading) {
    return <header className="sticky-top px-4 pt-3 pb-2"></header>;
  }

  return (
    <header className="sticky-top px-4 pt-3 pb-2 align-items-center justify-content-center">
      <div className="d-flex justify-content-between align-items-center ">
        {/* Logo */}
        <Link to={ROUTES.HOME} className="text-dark text-decoration-none">
          <h3>AURA</h3>
        </Link>
        {/* Vínculos */}
        <div className="d-flex align-items-center">
          {userProfile ? (
            <div className="d-flex align-items-center ">
              <Icon icon="mdi:account" className="me-2" />
              <span className="me-2">
                Hola, <span className="fw">{userProfile.nombre}</span>
              </span>
              <button
                className="btn btn-link text-decoration-none"
                onClick={handleLogout}
                title="Cerrar sesión"
              >
                <Icon icon="mdi:logout" />
              </button>
            </div>
          ) : (
            <Link
              to={ROUTES.LOGIN}
              className="btn btn-sm btn-outline-secondary me-2"
            >
              <Icon icon="mdi:account-lock-outline" />
            </Link>
          )}

          <Link to={ROUTES.CART} className="position-relative ms-3">
            <Icon icon="icon-park-outline:shopping-bag" />
            {cartCount > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default NavbarTop;

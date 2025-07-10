import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { ROUTES } from "../../constants/routes";

const NavbarTop = () => {
  const { cartCount } = useCart();

  return (
    <header className="py-2 px-3 bg-light border-bottom sticky-top">
      <div className="d-flex justify-content-between align-items-center">
        {/* Logo */}
        <Link to={ROUTES.HOME} className="text-dark text-decoration-none">
          <h3>AURA
          </h3>
        </Link>

        {/* Vínculos */}
        <div className="d-flex align-items-center">
          <Link
            to={ROUTES.LOGIN}
            className="btn btn-sm btn-outline-secondary me-2"
          >
            Login
          </Link>

          <Link to={ROUTES.CART} className="position-relative">
            <i className="bi bi-cart-fill fs-4"></i>
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
};

export default NavbarTop;


import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useCart } from "../../hooks/useCart";
import { ROUTES } from "../../constants/routes";
import { Icon } from "@iconify/react";
import { dispararSweetDecision } from "../../utils/SweetAlert";
import "../../assets/styles/components/layout/NavBar.css";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { userProfile, logout } = useAuth();
  const { cartCount } = useCart();
  const navigate = useNavigate();

  
  const navLinks = [
    { to: ROUTES.HOME, icon: "hugeicons:castle-01", label: "Inicio" },
    {
      to: ROUTES.ABOUT_US,
      icon: "fluent:planet-32-regular",
      label: "Nosotros",
    },
    { to: ROUTES.PRODUCTS, icon: "fluent:wand-24-regular", label: "Productos" },
    {
      to: ROUTES.RITUALS,
      icon: "fluent-emoji-high-contrast:crystal-ball",
      label: "Rituales",
    },
    { to: ROUTES.CONTACT_US, icon: "ph:phone-call", label: "Contacto" },
  ];

  // Si el usuario está logueado, se añade el link al Dashboard
  if (userProfile) {
    navLinks.unshift({
      to: ROUTES.DASHBOARD,
      icon: "material-symbols:dashboard-outline",
      label: "Dashboard",
    });
  }

  const handleLogout = () => {
    dispararSweetDecision(
      "warning",
      "¿Deseas cerrar sesión?",
      "",
      "Sí, cerrar sesión",
      "Cancelar"
    ).then((result) => {
      if (result.isConfirmed) {
        logout();
        navigate(ROUTES.HOME);
      }
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* ===== Marca / Logo ===== */}
      <Link to={ROUTES.HOME} className="navbar__brand">
        <h3>AURA</h3>
      </Link>

      {/* ===== Enlaces de Navegación (Menú principal) ===== */}
      <div className={`navbar__menu ${isMenuOpen ? "active" : ""}`}>
        <ul className="navbar__links">
          {navLinks.map((item) => (
            <li key={item.to} className="navbar__link">
              <NavLink to={item.to} onClick={() => setIsMenuOpen(false)}
              end
              >
                <Icon icon={item.icon} className="navbar__link-icon" />
                <span className="navbar__link-label">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* ===== Sección de Usuario (Login/Logout) - Visible en el menú desplegable móvil ===== */}
        <div className="navbar__user-mobile">
          {userProfile ? (
            <button onClick={handleLogout} className="navbar__user-button">
              <Icon icon="mdi:logout" /> Cerrar Sesión
            </button>
          ) : (
            <Link
              to={ROUTES.LOGIN}
              className="navbar__user-button"
              onClick={() => setIsMenuOpen(false)}
            >
              <Icon icon="mdi:account" /> Iniciar Sesión
            </Link>
          )}
        </div>
      </div>

      {/* ===== Acciones del lado derecho (Carrito, Usuario en Desktop, Hamburguesa) ===== */}
      <div className="navbar__actions">
        {/* --- Saludo de usuario en Desktop --- */}
        <div className="navbar__user-desktop">
          {userProfile ? (
            <div className="user-info">
              <span>Hola, {userProfile.nombre}</span>
              <button onClick={handleLogout} title="Cerrar sesión">
                <Icon icon="mdi:logout" />
              </button>
            </div>
          ) : (
            <Link
              to={ROUTES.LOGIN}
              className="btn-login"
              title="Iniciar Sesión"
            >
              <Icon icon="mdi:account-lock-outline" />
            </Link>
          )}
        </div>

        {/* --- Carrito de compras --- */}
        <Link
          to={ROUTES.CART}
          className="navbar__cart-widget"
          title="Carrito de compras"
        >
          <Icon icon="icon-park-outline:shopping-bag" />
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </Link>

        {/* --- Botón de Hamburguesa --- */}
        <button
          className="navbar__hamburger"
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          <Icon icon={isMenuOpen ? "mdi:close" : "mdi:menu"} />
        </button>
      </div>
    </nav>
  );
}

export default NavBar;

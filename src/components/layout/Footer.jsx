import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { Icon } from "@iconify/react";
import "../../assets/styles/components/layout/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__navigation">
          <Link to={ROUTES.ABOUT_US}>Nosotros</Link>
          <Link to={ROUTES.CONTACT_US}>Contacto</Link>
          <Link to={ROUTES.PRODUCTS}>Productos</Link>
          {/* Añade más enlaces si es necesario */}
        </div>
        <div className="footer__social">
          {/* Puedes añadir aquí iconos de redes sociales con enlaces */}
          {/* <Link to="#"><Icon icon="ri:instagram-line" /></Link> */}
          {/* <Link to="#"><Icon icon="ri:facebook-line" /></Link> */}
        </div>
        <div className="footer__copyright">
          <p>
            &copy; {new Date().getFullYear()} Aura. Todos los derechos
            reservados.
          </p>
          <p className="footer__disclaimer">
            Cosmética natural ancestral con energía y propósito.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

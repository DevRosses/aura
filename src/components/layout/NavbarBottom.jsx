import { NavLink} from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { ROUTES } from "../../constants/routes";
import { Icon } from "@iconify/react";
import "../../assets/styles/components/layout/NavbarBottom.css";
function NavbarBottom() {
  const { user } = useAuth();

  const navBar = [
    { to: ROUTES.HOME, icon: "hugeicons:castle-01" },
    { to: ROUTES.ABOUT_US, icon: "fluent:planet-32-regular" },
    { to: ROUTES.PRODUCTS, icon: "fluent:wand-24-regular" },
    {
      to: ROUTES.RITUALS,
      icon: "fluent-emoji-high-contrast:crystal-ball",
    },
    { to: ROUTES.CONTACT_US, icon: "ph:phone-call" },
  ];

  if (user) {
    navBar.unshift({
      to: ROUTES.DASHBOARD,
      icon: "material-symbols:dashboard-outline",
      animate: true,
    });
  }

  return (
    <nav className="navbar-bottom bg-light border-top d-flex justify-content-around align-items-center w-100">
      <ul className="d-flex justify-content-around align-items-center w-100 m-0 p-0 list-unstyled">
        {navBar.map((item, index) => (
          <li key={index}>
            <NavLink to={item.to} className="nav-icon">
              <Icon icon={item.icon} />
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavbarBottom;


import { Outlet } from "react-router-dom"; 
import "./DashboardLayout.css";


const DashboardLayout = ({ navigationLinks }) => {
  return (
    <div className="dashboard-layout container">
      <aside className="dashboard-sidebar">
        <nav>
          <ul>
            {navigationLinks.map((link) => (
              <li key={link.to}>
                {/* Aquí podrías usar NavLink para el estilo activo */}
                <a href={link.to}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="dashboard-content">

        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;

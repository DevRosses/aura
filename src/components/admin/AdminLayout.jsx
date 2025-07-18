import { Outlet } from "react-router-dom";
import SidebarAdmin from "./SidebarAdmin";
import "../../assets/styles/components/ui/panel.css"

const AdminLayout = () => {
  return (
    <div className="panel-container">
      <SidebarAdmin />
      <div className="panel-section">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;

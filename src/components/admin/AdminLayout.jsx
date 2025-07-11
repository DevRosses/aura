import { Outlet } from "react-router-dom";
import SidebarAdmin from "./SidebarAdmin";

const AdminLayout = () => {
  return (
    <div className="container-fluid">
      <SidebarAdmin />
      <Outlet />
    </div>
  );
};

export default AdminLayout;

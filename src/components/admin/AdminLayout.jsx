import { Outlet } from "react-router-dom";
import SidebarAdmin from "./SidebarAdmin";

const AdminLayout = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        
        <div className="col-md-3 col-lg-2 bg-dark text-white min-vh-100 p-0">
          <SidebarAdmin />
        </div>

        
        <div className="col-md-9 col-lg-10 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;

import { Outlet } from "react-router-dom";
import SidebarAdmin from "./SidebarAdmin";

const AdminLayout = () => {
  return (
    <div className="container-fluid">
      <div className="row">
  
          <div className="offcanvas-body p-0">
            <SidebarAdmin />
          </div>


        
        <div className="col-md-9 col-lg-10 p-4 offset-md-3 offset-lg-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;

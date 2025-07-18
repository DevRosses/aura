import { Outlet } from "react-router-dom";
import SidebarAdmin from "./SidebarAdmin";

const AdminLayout = () => {
  return (
    <div className="">
      <SidebarAdmin />
      <Outlet />
    </div>
  );
};

export default AdminLayout;

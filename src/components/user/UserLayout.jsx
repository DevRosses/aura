import { Outlet } from "react-router-dom";
import SidebarUser from "./SidebarUser";

const UserLayout = () => {
  return (
    <div className="container-fluid">
      <SidebarUser />
      <Outlet />
    </div>
  );
};

export default UserLayout;

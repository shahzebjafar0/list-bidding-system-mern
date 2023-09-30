import Nav from "@/components/navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col w-full">

      <Nav />
      <Outlet />
    </div>
  );
};

export default Layout;

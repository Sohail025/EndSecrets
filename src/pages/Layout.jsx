import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
export const Layout = () => {
  return (
    <div className="flex flex-row w-screen h-screen font-[Inter]">
      <Sidebar />
      <div className="flex flex-col w-[83%] ">
        <Navbar />
        <div className="bg-[#718EBF] h-[88%] bg-opacity-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Layout;

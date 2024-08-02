import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
export const Login = () => {
  return (
    <div className="w-screen h-screen flex flex-row font-[Poppins]">
      <div className="bg-[#ffffff] w-full md:w-[60%] h-full flex justify-center items-center">
        <div className="md:w-[60%] w-[74%] sm:w-[68%]  h-auto flex flex-col">
          <Outlet />
        </div>
      </div>
      <div className="bg-[#F7F8FB] w-[40%] h-full flex flex-col justify-center items-center gap-12 hidden md:block md:flex">
        <Sidebar />
      </div>
    </div>
  );
};
export default Login;

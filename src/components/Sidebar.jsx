import { sidebarOptions } from "../redux/Variables/LayoutVariables";
import SidebarOption from "./SidebarOption";

export const Sidebar = () => {
  return (
    <div className="w-[16%] h-full border-[#c3c0c0] border-opacity-25 border-r-[.1rem] bg-[#0c132c]">
      <div className="h-[12%] flex justify-center items-center gap-2">
        <span className="w-6 h-auto">
          <img src="secret.png" alt="" />
        </span>
        <p className="text-white">End Secrets</p>
      </div>
      <div className="flex justify-center items-center">
        <div className="mt-10 w-full flex flex-col gap-4 items-center justify-center">
          {sidebarOptions.map((item) => (
            <SidebarOption name={item} key={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;

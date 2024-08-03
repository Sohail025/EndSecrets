import { Inventory } from "@mui/icons-material";
import useCurrentRoute from "../Hooks/useCurrentRoute";
import { Link } from "react-router-dom";
export const SidebarOption = ({ name }) => {
  const [Header] = useCurrentRoute();
  const profile = name === "Profile";
  const feed = name === "Feed";
  const login = name === "Login";

  return (
    <div className="flex flex-row gap-2 font-[Poppins]">
      <div
        className={` ${
          Header === name
            ? "border-[#2a2b2c] border-opacity-40 border-solid rounded-tr rounded-br border-l-[0.35rem]"
            : "border-white border-solid rounded-tr rounded-br border-l-[0.35rem]"
        }`}
      ></div>
      <div className="flex px-2 font-extralight items-center w-[90%]">
        <Link
          className="w-full"
          to={
            profile
              ? "/profile"
              : feed
              ? "/feed"
              : login
              ? "/login"
              : "/settings"
          }
        >
          <div
            className={`flex flex-row items-center gap-2 px-3 rounded-[0.55rem] w-full cursor-pointer hover:bg-[#404143] hover:bg-opacity-5 ${
              name === Header && "bg-[#404143] bg-opacity-5"
            }`}
          >
            <Inventory style={{ color: "#6c6f75" }} />
            <span className="text-[#373c41] hover:text-[#2a2b2c] font-medium py-2 w-full ">
              {name}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default SidebarOption;

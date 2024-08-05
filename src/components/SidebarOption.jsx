import { Inventory, Style } from "@mui/icons-material";
import useCurrentRoute from "../Hooks/useCurrentRoute";
import { Link } from "react-router-dom";
import { SidebarBtn } from "../Theme/CustomButtons";
import theme from "../Theme/theme";
export const SidebarOption = ({ name }) => {
  const [Header] = useCurrentRoute();
  const activeOption = Header === name;
  const profile = name === "Trustees";
  const feed = name === "Feed";
  const login = name === "Login";
  return (
    <div className="flex flex-row gap-2 font-[Poppins]">
      <div className="flex px-2 font-extralight">
        <Link
          className="w-full"
          to={
            profile
              ? "/trustees"
              : feed
              ? "/feed"
              : login
              ? "/login"
              : "/settings"
          }
        >
          <SidebarBtn
            startIcon={<Inventory />}
            variant={activeOption && "contained"}
            style={{ color: activeOption && theme.palette.primary.dark }}
          >
            {name}
          </SidebarBtn>
        </Link>
      </div>
    </div>
  );
};
export default SidebarOption;

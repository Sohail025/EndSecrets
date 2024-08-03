import {
  Settings,
  NotificationAdd,
  AccountBox,
  Search,
} from "@mui/icons-material";
import useCurrentRoute from "../Hooks/useCurrentRoute";
export const Navbar = () => {
  const [Header] = useCurrentRoute();
  return (
    <>
      <div className="h-[12%] w-full bg-white flex items-center text-[1.4rem] font-semibold">
        <div className="mx-6 flex flex-row justify-between w-full">
          <p className="text-[#2c2d2d] text-opacity-70">{Header}</p>

          <div className="flex flex-row gap-5 items-center justify-center">
            <form className="flex flex-row items-center">
              <div className="flex flex-row border-solid border-[.1rem] border-[#00000045] rounded-[0.3rem] items-center w-[13rem] px-1">
                <span className="cursor-pointer flex justify-center items-center">
                  <Search
                    sx={{ fontSize: 20 }}
                    style={{ color: "#00000045" }}
                  />
                </span>

                <input
                  className="outline-none text-[0.78rem] indent-1 py-[0.3rem] rounded w-full"
                  placeholder="Search..."
                  spellCheck={false}
                  autoComplete="off"
                />
              </div>
            </form>
            <div className="flex justify-center items-center">
              <Settings sx={{ fontSize: 30 }} style={{ color: "#2f2f30" }} />
            </div>
            <div className="flex justify-center items-center">
              <NotificationAdd
                sx={{ fontSize: 30 }}
                style={{ color: "#2f2f30" }}
              />
            </div>
            <div className="flex justify-center items-center">
              <AccountBox sx={{ fontSize: 30 }} style={{ color: "#2f2f30" }} />
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};
export default Navbar;

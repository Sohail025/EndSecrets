import { ourPlans } from "../redux/Variables/LoginVariables";
export const LoginSidebar = () => {
  return (
    <>
      <div className="w-[60%]">
        <span className="">
          <img className="w-[15rem] h-auto" src="BannerImage.svg" alt="" />
        </span>
      </div>
      <div className="w-[60%] flex flex-col gap-3">
        <div>
          <h1 className=" text-[1.8rem] font-medium text-[#666666] ">
            Our plan includes
          </h1>
        </div>
        <ul className="list-disc space-y-2">
          {ourPlans.map((item) => (
            <li
              className="text-[0.85rem] text-[#666666] text-opacity-95"
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default LoginSidebar;

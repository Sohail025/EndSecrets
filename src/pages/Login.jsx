import LoginSidebar from "../components/LoginSidebar";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import { useSelector } from "react-redux";
export const Login = () => {
  const { status } = useSelector((state) => state.loginSlice);
  return (
    <div className="w-screen h-screen flex flex-row font-[Poppins]">
      <div className="bg-[#ffffff] w-full md:w-[60%] h-full flex justify-center items-center">
        <div className="md:w-[60%] w-[74%] sm:w-[68%]  h-auto flex flex-col">
          {status === 0 && <SignInForm />}
          {status === 1 && <SignUpForm />}
        </div>
      </div>
      <div className="bg-[#F7F8FB] w-[40%] h-full flex flex-col justify-center items-center gap-12 hidden md:block md:flex">
        <LoginSidebar />
      </div>
    </div>
  );
};
export default Login;

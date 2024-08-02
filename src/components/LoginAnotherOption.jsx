import { Link } from "react-router-dom";
import {
  signupAsAnotherOption,
  singinAsAnotherOption,
} from "../redux/Variables";
export const LoginAnotherOption = ({ value }) => {
  const Login = value === "Login";
  return (
    <div className="flex items-center justify-center text-[0.87rem] text-[#333333] my-2 ">
      <div className="flex flex-row justify-center items-center gap-1">
        <p>
          {Login ? signupAsAnotherOption.text : singinAsAnotherOption.text}{" "}
        </p>
        <Link to={Login ? "/signup" : "/login"}>
          <span className="font-bold cursor-pointer">
            {Login ? signupAsAnotherOption.btn : singinAsAnotherOption.btn}
          </span>
        </Link>
      </div>
    </div>
  );
};
export default LoginAnotherOption;

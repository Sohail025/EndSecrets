import { useDispatch } from "react-redux";
import {
  signupAsAnotherOption,
  singinAsAnotherOption,
} from "../redux/Variables/LoginVariables";
import { StatusChanger } from "../redux/Features/LoginSlice";
export const LoginAnotherOption = ({ value }) => {
  const dispatch = useDispatch();
  const login = value === "Login";
  const StatusChangeHandler = () => {
    login ? dispatch(StatusChanger(1)) : dispatch(StatusChanger(0));
  };
  return (
    <div className="flex items-center justify-center text-[0.87rem] text-[#333333] my-2 ">
      <div className="flex flex-row justify-center items-center gap-1">
        <p>
          {login ? signupAsAnotherOption.text : singinAsAnotherOption.text}{" "}
        </p>
        <span
          onClick={StatusChangeHandler}
          className="font-bold cursor-pointer"
        >
          {login ? signupAsAnotherOption.btn : singinAsAnotherOption.btn}
        </span>
      </div>
    </div>
  );
};
export default LoginAnotherOption;

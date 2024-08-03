import { useState } from "react";
import {
  emailValidPattern,
  emailRequireCheck,
  passwordRequireCheck,
  firstNameRequireCheck,
  lastNameRequireCheck,
} from "../redux/Variables/LoginVariables";
import PasswordVisibilityCheck from "./PasswordVisibilityCheck";
export const LoginFormInputField = ({ name, register, errors, value }) => {
  const email = name === "Email";
  const password = name === "Password";
  const firstName = name === "First Name";
  const [show, setShow] = useState(true);
  const registerCheck = value === "Register";
  const errorCheck = errors?.email || errors?.password;
  return (
    <div className="flex flex-col w-full gap-[.2rem]">
      <label
        className="text-[0.84rem] text-[#666666] font-medium"
        htmlFor="email"
      >
        {name}{" "}
        {(errors?.email || errors?.password) && (
          <span className="text-[0.6rem] text-red-700">
            {email
              ? errors?.email?.message
              : password
              ? errors?.password?.message
              : firstName
              ? errors?.firstName?.message
              : errors?.lastName?.message}
          </span>
        )}
      </label>
      <div className="border-[0.1rem] border-[#666666] border-opacity-15 rounded-[0.6rem] w-[100%] flex justify-between items-center">
        <input
          className={`outline-none indent-2 text-[0.8rem] w-[80%] rounded-[0.6rem] ${
            registerCheck ? "py-[0.48rem]" : "py-3"
          } ${password && "placeholder:text-[2rem]"}`}
          placeholder={
            email
              ? "example@gmail.com"
              : password
              ? "...................."
              : firstName
              ? "Jonas"
              : "Poll"
          }
          spellCheck={false}
          autoComplete="off"
          type={password && show ? "password" : "text"}
          {...register(
            email
              ? "email"
              : password
              ? "password"
              : firstName
              ? "firstName"
              : "lastName",
            {
              required: email
                ? emailRequireCheck
                : password
                ? passwordRequireCheck
                : firstName
                ? firstNameRequireCheck
                : lastNameRequireCheck,
              pattern: email && emailValidPattern,
            }
          )}
        />
        <PasswordVisibilityCheck
          show={show}
          setShow={setShow}
          password={password}
        />
      </div>
    </div>
  );
};
export default LoginFormInputField;

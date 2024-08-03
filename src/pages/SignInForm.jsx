import { useForm } from "react-hook-form";
import LoginBtn from "../components/LoginBtn";
import LoginFormInputField from "../components/LoginFormInputField";
import LoginAnotherOption from "../components/LoginAnotherOption";
import TermsAndConditions from "../components/TermsAndConditions";
import { signInInputFields } from "../redux/Variables/LoginVariables";
export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-4"
    >
      <div className="flex items-center justify-center my-8">
        <h1 className="text-[2.8rem]">Sign In</h1>
      </div>
      <TermsAndConditions />
      {signInInputFields.map((item) => (
        <LoginFormInputField
          register={register}
          errors={errors}
          name={item}
          key={item}
        />
      ))}
      <LoginBtn name={"Sign in"} />
      <LoginAnotherOption value={"Login"} />
    </form>
  );
};
export default SignInForm;

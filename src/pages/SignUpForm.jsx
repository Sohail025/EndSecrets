import { useForm } from "react-hook-form";
import LoginBtn from "../components/LoginBtn";
import LoginFormInputField from "../components/LoginFormInputField";
import LoginAnotherOption from "../components/LoginAnotherOption";
import TermsAndConditions from "../components/TermsAndConditions";
import { signUpInputFields } from "../redux/Variables";
export const SignUpForm = () => {
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
      <div className="flex items-center justify-center my-[0.4rem]">
        <h1 className="text-[2.8rem]">Sign Up</h1>
      </div>
      <TermsAndConditions value={"Register"} />
      {signUpInputFields.map((item) => (
        <LoginFormInputField
          register={register}
          errors={errors}
          name={item}
          value={"Register"}
          key={item}
        />
      ))}
      <LoginBtn name={"Sign up"} />
      <LoginAnotherOption value={"Register"} />
    </form>
  );
};
export default SignUpForm;

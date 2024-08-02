export const TermsAndConditions = ({ value }) => {
  const register = value === "Register";
  return (
    <p
      className={`text-[0.8rem] text-[#333333] text-opacity-75 ${
        register ? "my-0" : "my-1"
      }`}
    >
      By signing {register ? "up" : "in"}, you agree to the{" "}
      <span className="underline-offset-1 underline cursor-pointer">
        Terms of use
      </span>{" "}
      and{" "}
      <span className="underline-offset-1 underline cursor-pointer">
        Privacy Policy
      </span>
      .
    </p>
  );
};
export default TermsAndConditions;

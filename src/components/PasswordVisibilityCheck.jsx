import { Visibility, VisibilityOff } from "@mui/icons-material";

export const PasswordVisibilityCheck = ({ password, show, setShow }) => {
  const Handler = () => {
    setShow(!show);
  };
  return (
    <span
      className={`flex justify-center items-center mr-3 cursor-pointer ${
        !password && "hidden"
      }`}
    >
      {!show && <Visibility style={{ color: "#666666" }} onClick={Handler} />}
      {show && <VisibilityOff style={{ color: "#666666" }} onClick={Handler} />}
    </span>
  );
};
export default PasswordVisibilityCheck;

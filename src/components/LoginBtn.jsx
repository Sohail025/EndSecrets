export const LoginBtn = ({ name }) => {
  return (
    <button
      type="submit"
      className="w-full rounded-[1.5rem] bg-[#111111] text-center py-2 text-white"
    >
      {name}
    </button>
  );
};
export default LoginBtn;

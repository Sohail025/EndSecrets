import { Stack } from "@mui/material";
import TrusteeList from "../components/TrusteeList";
export const Trustees = () => {
  return (
    <Stack direction={"row"} spacing={4}>
      <TrusteeList />
      <Stack sx={{ width: "70%", height: "100vh" }}>hi</Stack>
    </Stack>
  );
};
export default Trustees;

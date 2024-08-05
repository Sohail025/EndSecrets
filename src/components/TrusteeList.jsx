import { PlusOne } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import theme from "../Theme/theme";
import TursteeListItem from "./TursteeListItem";
export const TrusteeList = () => {
  const { trusteeList } = theme.palette;
  return (
    <Stack
      sx={{ width: "30%", height: "100vh" }}
      style={{
        backgroundColor: trusteeList.bg,
      }}
    >
      <Stack
        sx={{ justifyContent: "space-between" }}
        direction={"row"}
        style={{
          backgroundColor: trusteeList.header,
        }}
      >
        <Typography
          sx={{ py: 1, mx: 1 }}
          style={{ color: trusteeList.headertxt }}
        >
          Trustees
        </Typography>
        <Button startIcon={<PlusOne />}>Add Trustees</Button>
      </Stack>
      <Stack
        direction={"column"}
        spacing={2}
        sx={{
          mx: "0.5rem",
          mt: 5,
        }}
      >
        <TursteeListItem />
        <TursteeListItem />
        <TursteeListItem />
        <TursteeListItem />
      </Stack>
    </Stack>
  );
};
export default TrusteeList;

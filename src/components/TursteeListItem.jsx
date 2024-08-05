import { Stack, Typography } from "@mui/material";
import theme from "../Theme/theme";
import { alpha } from "@mui/system";
export const TursteeListItem = () => {
  const { trusteeList } = theme.palette;
  return (
    <Stack
      direction={"row"}
      spacing={2}
      style={{
        alignItems: "center",
        ":hover": {
          backgroundColor: trusteeList.headertxt,
        },
      }}
      sx={{
        ":hover": {
          backgroundColor: alpha(trusteeList.itemBg, 0.5),
          borderRadius: 2,
        },
        py: 1,
        px: 1,
      }}
    >
      <Stack
        sx={{ width: 40, height: 40, borderRadius: "50%" }}
        style={{
          backgroundColor: trusteeList.headertxt,
        }}
      ></Stack>
      <Stack direction={"column"} style={{ color: trusteeList.headertxt }}>
        <Typography>Brother</Typography>
        <Typography variant="h9">Sohail</Typography>
      </Stack>
    </Stack>
  );
};
export default TursteeListItem;

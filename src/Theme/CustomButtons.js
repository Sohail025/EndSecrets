import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
export const SidebarBtn = styled(Button)(({ theme }) => ({
  // backgroundColor: "transparent",
  color: theme.palette.primary.contrastText,
  textTransform: "none",
  fontFamily: '"Roboto", sans-serif',
  borderRadius: "0.27rem",
  width: "14vw",
  padding: "0.45vw 1vw",
  justifyContent: "flex-start",
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.dark,
  },
}));

import { createTheme, responsiveFontSizes } from "@mui/material";
const theme = createTheme({
  palette: {
    primary: {
      main: "#f6ce5c",
      contrastText: "#ffffff",
      dark: "#000000",
    },
    secondary: {
      main: "#f6ce5c",
    },
    trusteeList: {
      bg: "#2b2c2e",
      header: "#5d4969",
      headertxt: "#ffffff",
      itemBg: "#757171",
    },
  },
});
export default responsiveFontSizes(theme);

import { createTheme } from "@mui/material";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#F5F7FA",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#2E3440",
      secondary: "#4C566A",
    },
    primary: {
      main: "#5C6BC0",
    },
    success: {
      main: "#A3BE8C",
    },
    warning: {
      main: "#EBCB8B",
    },
    error: {
      main: "#BF616A",
    },
    divider: "#D8DEE9",
  },
});

export default lightTheme;

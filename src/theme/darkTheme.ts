import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0B0D17",
      paper: "#11131F",
    },
    text: {
      primary: "#A0A4B8",
      secondary: "#7C819C",
    },
    primary: {
      main: "#5C6BC0",
    },
    success: {
      main: "#4C6B5C",
    },
    warning: {
      main: "#A68A4C",
    },
    error: {
      main: "#A65C6B",
    },
    divider: "#1C1F2B",
  },
});

export default darkTheme;

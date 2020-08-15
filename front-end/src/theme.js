import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#fff", // whites
      main: "#000", // black
      dark: "#001427", // rich black-blue
    },
    secondary: {
      main: "#fff", // accent buttons, baby pink
      dark: "#EA526F", // dark pink
    },
    background: {
      default: "#fff", // white in background
    },
    text: {
      primary: "#000", // black
      secondary: "#fff", // white
    },
  },
  navbar: {
    default: "#fff",
  },
  purple: {
    color: "#CABBE9",
  },
  overrides: {
    MuiLink: {
      root: {
        cursor: "pointer",
      },
    },
  },
});

export default theme;

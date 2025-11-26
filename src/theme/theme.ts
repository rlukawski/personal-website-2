"use client";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

let theme = createTheme({
  palette: {
    background: {
      default: grey[100],
    },
    text: {
      primary: grey[900],
      secondary: grey[700],
    },
  },
  typography: {
    fontFamily: "var(--font-geist-sans), Arial, sans-serif",
    h3: {
      fontFamily: "var(--font-geist-mono), monospace",
      fontWeight: 700,
      letterSpacing: ".2rem",
      color: grey[800],
    },
    h4: {
      fontFamily: "var(--font-geist-mono), monospace",
      fontWeight: 700,
      letterSpacing: ".2rem",
      color: grey[800],
    },
    h5: {
      fontFamily: "var(--font-geist-mono), monospace",
      fontWeight: 600,
      color: grey[800],
    },
    h6: {
      fontWeight: 600,
      color: grey[800],
    },
    body1: {
      color: grey[700],
      lineHeight: 1.8,
    },
    body2: {
      color: grey[600],
    },
    button: {
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;

"use client";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

declare module '@mui/material/styles' {
  interface TypographyVariants {
    footerLink: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    footerLink?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    footerLink: true;
  }
}

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
});

// Now we can reference theme.breakpoints
theme = createTheme(theme, {
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
      lineHeight: 1.4,
      fontSize: "1rem",
      [theme.breakpoints.up("md")]: {
        fontSize: "1.1rem",
      },
    },
    body2: {
      color: grey[600],
      fontSize: "0.9rem",
      lineHeight: 1.4,
      [theme.breakpoints.up("md")]: {
        fontSize: "1rem",
      },
    },
    footerLink: {
      color: grey[700],
      fontSize: "0.9rem",
      lineHeight: 1.5,
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

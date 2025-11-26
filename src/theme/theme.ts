"use client";

import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    background: {
      default: grey[100],
    },
  },
});

export default theme;


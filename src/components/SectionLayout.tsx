import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { grey } from "@mui/material/colors";
import { TRANSITION_TIMEOUT } from "./AnimatedHamburger";
import { ReactNode } from "react";

interface SectionLayoutProps {
  title: string;
  children: ReactNode;
  subtitle?: string;
}

export function SectionLayout({ title, children, subtitle }: SectionLayoutProps) {
  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 4, md: 6 },
        px: { xs: 2, md: 4 },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            backgroundColor: 'white',
            border: `1px solid rgba(255, 255, 255, 0.3)`,
            p: { xs: 3, md: 5 },
            transition: `all ${TRANSITION_TIMEOUT}ms ease`,
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            "&:hover": {
              boxShadow: "0 12px 40px 0 rgba(31, 38, 135, 0.2)",
            },
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: grey[800],
              mb: 1,
            }}
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography
              variant="body2"
              sx={{
                color: grey[600],
                mb: 4,
                fontSize: { xs: "0.9rem", md: "1rem" },
              }}
            >
              {subtitle}
            </Typography>
          )}
          {children}
        </Box>
      </Container>
    </Box>
  );
}


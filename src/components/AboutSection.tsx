import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { grey } from "@mui/material/colors";
import { TRANSITION_TIMEOUT } from "./AnimatedHamburger";

export function AboutSection() {
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
              mb: 3,
            }}
          >
            About
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{
              color: grey[700],
              lineHeight: 1.8,
              fontSize: { xs: "1rem", md: "1.1rem" },
              mb: 3,
            }}
          >
            Hello, my name is Rafał Łukawski. I'm a full-stack developer with
            over 5 years of modern frontend/backend experience and over 20 years
            in IT. I'm passionate about the entire software development
            lifecycle—from system architecture, through implementation, to
            production deployment.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: grey[700],
              lineHeight: 1.8,
              fontSize: { xs: "1rem", md: "1.1rem" },
            }}
          >
            Google Cloud Professional Architect (2024) | Professional Scrum
            Master | Built systems for millions of users at Onet.pl | Led
            telecommunications projects at TP.SA | Currently developing complex
            React/Next.js applications and mentoring developers.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}


import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";
import { SectionLayout } from "./SectionLayout";

export function AboutSection() {
  return (
    <SectionLayout title="About" id="about">
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
    </SectionLayout>
  );
}


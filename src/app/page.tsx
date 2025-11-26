"use client";

import Container from "@mui/material/Container";
import { grey } from "@mui/material/colors";
import { ResponsiveAppBar } from "@/components/ResponsiveAppBar";
import { HeaderSection } from "@/components/HeaderSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { CertificatesSection } from "@/components/CertificatesSection";
import { ContactSection } from "@/components/ContactSection";

export default function Page() {
  return (
    <Container maxWidth="xl" sx={{ backgroundColor: grey[100], paddingX: 0 }}>
      <ResponsiveAppBar />
      <HeaderSection />
      <AboutSection />
      <ProjectsSection />
      <CertificatesSection />
      <ContactSection />
    </Container>
  );
}

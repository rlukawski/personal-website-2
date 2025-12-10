"use client";

import Container from "@mui/material/Container";
import { ResponsiveAppBar } from "@/components/ResponsiveAppBar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { TechnologiesSection } from "@/components/TechnologiesSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { CertificatesSection } from "@/components/CertificatesSection";
import { ContactSection } from "@/components/ContactSection";
import { ProjectManagementSection } from "@/components/ProjectManagementSection";

export default function Page() {
  return (
    <Container maxWidth="lg" sx={{ paddingX: 0 }}>
      <ResponsiveAppBar />
      <HeroSection />
      <AboutSection />
      <ProjectManagementSection />
      <TechnologiesSection />
      <ProjectsSection />
      <CertificatesSection />
      <ContactSection />
    </Container>
  );
}

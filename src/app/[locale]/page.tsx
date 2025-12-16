"use client";

import Container from "@mui/material/Container";
import { ResponsiveAppBar } from "@/components/ResponsiveAppBar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { StackSection } from "@/components/StackSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { CertificatesSection } from "@/components/CertificatesSection";
import { ContactSection } from "@/components/ContactSection";
import { ProjectManagementSection } from "@/components/ProjectManagementSection";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

export default function Page() {
  // Dodaj efekt płynnego scrollowania z momentum
  useSmoothScroll();
  
  return (
    <Container maxWidth="lg" sx={{ paddingX: 0 }}>
      <ResponsiveAppBar />
      <HeroSection />
      <AboutSection />
      <ProjectManagementSection />
      <StackSection />
      <ProjectsSection />
      <CertificatesSection />
      <ContactSection />
    </Container>
  );
}

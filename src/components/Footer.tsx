"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { grey } from "@mui/material/colors";
import { FaArrowUp, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { scrollToSection } from "@/hooks/useScrollSpy";

const sitemapItems = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Certificates", id: "certificates" },
  { label: "Contact", id: "contact" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/rafal-lukawski/",
    icon: FaLinkedin,
  },
  {
    name: "GitHub",
    url: "https://github.com/rlukawski",
    icon: FaGithub,
    iconsize: 20,
  },
  {
    name: "Email",
    url: "mailto:rafal@lukawski.eu",
    icon: FaEnvelope,
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    scrollToSection("hero");
  };

  return (
    <Box
      component="footer"
      sx={{
        mt: 12,
        mb: 4,
        borderTop: `1px solid ${grey[300]}`,
        pt: 8,
        pb: 4,
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 6, md: 10 },
            justifyContent: "center",
            mb: 4,
          }}
        >
          {/* Call to Action Section */}
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 2 }}>
            <Typography variant="h4" component="h3">
              Let&apos;s build <Box component="span" sx={{ color: grey[500] }}>something together!</Box>
            </Typography>
            <Button
              variant="contained"
              onClick={scrollToTop}
              startIcon={<FaArrowUp />}
              sx={{
                backgroundColor: grey[800],
                color: "white",
                textTransform: "none",
                px: 3,
                py: 1.5,
                "&:hover": {
                  backgroundColor: grey[700],
                },
              }}
            >
              Start project
            </Button>
          </Box>

          {/* Sitemap Section */}
          <Box>
            <Typography variant="h6" component="h4" sx={{ mb: 2 }}>
              Sitemap
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0, display: "flex", flexDirection: "column", gap: 1 }}>
              {sitemapItems.map((item) => (
                <Box component="li" key={item.label}>
                  <Link
                    href={`#${item.id}`}
                    underline="hover"
                    sx={{ color: grey[700], fontSize: "0.875rem", cursor: "pointer" }}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                  >
                    {item.label}
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Socials Section */}
          <Box>
            <Typography variant="h6" component="h4" sx={{ mb: 2 }}>
              Socials
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0, display: "flex", flexDirection: "column", gap: 1 }}>
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Box component="li" key={social.name}>
                    <Link
                      href={social.url}
                      target={social.url.startsWith("mailto:") ? undefined : "_blank"}
                      rel={social.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                      underline="hover"
                      sx={{
                        color: grey[700],
                        fontSize: "0.875rem",
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <Icon />
                      {social.name}
                    </Link>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>

        {/* Copyright */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", pt: 2 }}>
          <Typography variant="body2">
            © {currentYear} Rafał Łukawski
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}


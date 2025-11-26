"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { SectionLayout } from "./SectionLayout";
import { useTranslations } from "next-intl";

interface TechItem {
  name: string;
}

interface TechCategory {
  title: string;
  items: TechItem[];
}

export function TechnologiesSection() {
  const t = useTranslations("technologies");

  const categories: TechCategory[] = [
    {
      title: t("frontend"),
      items: [
        { name: "React" },
        { name: "TypeScript" },
        { name: "Next.js" },
        { name: "Angular" },
      ],
    },
    {
      title: t("stateManagement"),
      items: [
        { name: "Redux Toolkit" },
        { name: "Zustand" },
      ],
    },
    {
      title: t("uiLibraries"),
      items: [
        { name: "Chakra-UI" },
        { name: "Material-UI" },
        { name: "Tailwind CSS" },
      ],
    },
    {
      title: t("testing"),
      items: [
        { name: "Cypress" },
        { name: "Jest" },
      ],
    },
    {
      title: t("backend"),
      items: [
        { name: "Node.js" },
        { name: "Express" },
        { name: "PostgreSQL" },
        { name: "MySQL" },
      ],
    },
    {
      title: t("cloudDevops"),
      items: [
        { name: "Git" },
        { name: "GCP" },
        { name: "Docker + Swarm" },
        { name: "CI/CD" },
      ],
    },
    {
      title: t("methodologies"),
      items: [
        { name: "Agile/Scrum" },
      ],
    },
  ];

  return (
    <SectionLayout title={t("title")} id="technologies">
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: 4,
        }}
      >
        {categories.map((category) => (
          <Box key={category.title}>
            <Typography
              variant="h6"
              component="h3"
              sx={{
                mb: 2,
                fontWeight: 600,
              }}
            >
              {category.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              {category.items.map((item) => (
                <Chip
                  key={item.name}
                  label={item.name}
                  sx={{
                    justifyContent: "flex-start",
                    fontSize: "0.875rem",
                  }}
                />
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </SectionLayout>
  );
}


"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { SectionLayout } from "./SectionLayout";
import { useTranslations } from "next-intl";

interface TechItem {
  name: string;
  years?: string;
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
        { name: "React", years: "5+" },
        { name: "TypeScript", years: "5+" },
        { name: "Next.js", years: "3+" },
        { name: "Angular", years: "2+" },
      ],
    },
    {
      title: t("stateManagement"),
      items: [
        { name: "Redux Toolkit", years: "3+" },
        { name: "Zustand", years: "2+" },
      ],
    },
    {
      title: t("uiLibraries"),
      items: [
        { name: "Chakra-UI", years: "4+" },
        { name: "Material-UI", years: "1+" },
        { name: "Tailwind CSS", years: "1+" },
      ],
    },
    {
      title: t("testing"),
      items: [
        { name: "Cypress", years: "3+" },
        { name: "Jest", years: "3+" },
      ],
    },
    {
      title: t("backend"),
      items: [
        { name: "Node.js", years: "1+" },
        { name: "Express", years: "1+" },
        { name: "PostgreSQL", years: "1+" },
        { name: "MySQL", years: "5+" },
      ],
    },
    {
      title: t("cloudDevops"),
      items: [
        { name: "Git", years: "4+" },
        { name: "GCP", years: "3+" },
        { name: "Docker + Swarm", years: "3+" },
        { name: "CI/CD", years: "3+" },
      ],
    },
    {
      title: t("methodologies"),
      items: [
        { name: "Agile/Scrum", years: "6+" },
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
                  label={
                    item.years ? `${item.name} (${item.years})` : item.name
                  }
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


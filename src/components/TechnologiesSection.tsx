"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { SectionLayout } from "./SectionLayout";
import { useTranslations } from "next-intl";
import { grey } from "@mui/material/colors";
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiAngular,
  SiRedux,
  SiChakraui,
  SiMui,
  SiTailwindcss,
  SiCypress,
  SiJest,
  SiNodedotjs,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiGooglecloud,
  SiDocker,
  SiDotnet,
} from "react-icons/si";
import { IoMdSettings } from "react-icons/io";
import { MdLoop } from "react-icons/md";
import { IconType } from "react-icons";
import { Categories } from "@/components/Categories";

interface TechItem {
  name: string;
  icon?: IconType;
  emoji?: string;
  color: string;
}

interface TechCategory {
  title: string;
  items: TechItem[];
}

export function TechnologiesSection() {
  const t = useTranslations("technologies");

  const iconColor = "#6b7280"; // Uniform gray color for all icons

  const categories: TechCategory[] = [
    {
      title: t("frontend"),
      items: [
        { name: "React", icon: SiReact, color: iconColor },
        { name: "TypeScript", icon: SiTypescript, color: iconColor },
        { name: "Next.js", icon: SiNextdotjs, color: iconColor },
        { name: "Angular", icon: SiAngular, color: iconColor },
      ],
    },
    {
      title: t("stateManagement"),
      items: [
        { name: "Redux Toolkit", icon: SiRedux, color: iconColor },
        { name: "Zustand", emoji: "🐻", color: iconColor },
      ],
    },
    {
      title: t("uiLibraries"),
      items: [
        { name: "Chakra-UI", icon: SiChakraui, color: iconColor },
        { name: "Material-UI", icon: SiMui, color: iconColor },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: iconColor },
      ],
    },
    {
      title: t("testing"),
      items: [
        { name: "Cypress", icon: SiCypress, color: iconColor },
        { name: "Jest", icon: SiJest, color: iconColor },
      ],
    },
    {
      title: t("backend"),
      items: [
        { name: "Node.js", icon: SiNodedotjs, color: iconColor },
        { name: "Express", emoji: "E", color: iconColor },
        { name: "PostgreSQL", icon: SiPostgresql, color: iconColor },
        { name: "MySQL", icon: SiMysql, color: iconColor },
        { name: ".NET", icon: SiDotnet, color: iconColor },
      ],
    },
    {
      title: t("cloudDevops"),
      items: [
        { name: "Git", icon: SiGit, color: iconColor },
        { name: "GCP", icon: SiGooglecloud, color: iconColor },
        { name: "Docker + Swarm", icon: SiDocker, color: iconColor },
        { name: "CI/CD", icon: IoMdSettings, color: iconColor },
      ],
    },
  ];

  return (
    <SectionLayout title={t("title")} id="technologies">
      <Categories categories={categories} />
    </SectionLayout>
  );
}

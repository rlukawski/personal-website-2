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

export function ProjectManagementSection() {
  const t = useTranslations("projectManagement");

  const iconColor = "#6b7280"; // Uniform gray color for all icons

  const categories: TechCategory[] = [
    {
      title: t("methodologies"),
      items: [
        { name: "Scrum", icon: MdLoop, color: iconColor },
        { name: "Kanban", emoji: "📌", color: iconColor },
        { name: "Waterfall", emoji: "📋", color: iconColor },
      ],
    },
  ];

  return (
    <SectionLayout title={t("title")} id="technologies">
      <Categories categories={categories} />
    </SectionLayout>
  );
}

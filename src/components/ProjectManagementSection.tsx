"use client";

import { SectionLayout } from "./SectionLayout";
import { useTranslations } from "next-intl";
import {
  SiJira,
  SiConfluence,
  SiGithub,
  SiAsana,
} from "react-icons/si";
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
    {
      title: t("tools"),
      items: [
        { name: "Jira", icon: SiJira, color: iconColor },
        { name: "Confluence", icon: SiConfluence, color: iconColor },
        { name: "GitHub", icon: SiGithub, color: iconColor },
        { name: "Asana", icon: SiAsana, color: iconColor },
      ],
    },
  ];

  return (
    <SectionLayout title={t("title")} id="pm">
      <Categories 
        categories={categories} 
        template={{ xs: "1fr", sm: "repeat(2, minmax(200px, 230px))" }} 
        orientation="column" 
      />
    </SectionLayout>
  );
}

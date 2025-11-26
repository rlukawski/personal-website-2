"use client";

import Typography from "@mui/material/Typography";
import { SectionLayout } from "./SectionLayout";
import { useTranslations } from "next-intl";

export function AboutSection() {
  const t = useTranslations("about");
  return (
    <SectionLayout title={t("title")} id="about">
      <Typography
        variant="body1"
        paragraph
        sx={{
          mb: 3,
        }}
      >
        {t("paragraph1")}
      </Typography>
      <Typography
        variant="body1"
      >
        {t("paragraph2")}
      </Typography>
    </SectionLayout>
  );
}


"use client";

import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";
import { useRouter, usePathname } from "@/i18n/routing";
import { useParams } from "next/navigation";
import LanguageIcon from "@mui/icons-material/Language";

const languages = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "pl", label: "Polski", flag: "🇵🇱" },
];

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = params.locale as string;
  
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (locale: string) => {
    handleClose();
    router.replace(pathname, { locale });
  };

  const currentLanguage = languages.find((lang) => lang.code === currentLocale);

  return (
    <>
      <IconButton
        onClick={handleClick}
        size="large"
        aria-label="change language"
        aria-controls={open ? "language-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        sx={{
          color: grey[800],
        }}
      >
        <LanguageIcon />
      </IconButton>
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "language-button",
        }}
      >
        {languages.map((language) => (
          <MenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            selected={language.code === currentLocale}
          >
            <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <span>{language.flag}</span>
              <span>{language.label}</span>
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}


"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { grey } from "@mui/material/colors";
import { AnimatedHamburger, TRANSITION_TIMEOUT } from "./AnimatedHamburger";
import { useScrollSpy, scrollToSection } from "@/hooks/useScrollSpy";
import { sections } from "@/config/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ScrambleText } from "./ScrambleText";
import { useTranslations } from "next-intl";

export function ResponsiveAppBar() {
  const t = useTranslations("navigation");
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const activeSection = useScrollSpy(sections.map((section) => section.id));

  const navItems = sections.filter((section) => section.showInHeader);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavClick = (id: string) => {
    handleCloseNavMenu();
    scrollToSection(id);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{ alignItems: "center", minHeight: 64, height: 64 }}
        >
          <Box sx={{ display: "flex", alignItems: "baseline", flexGrow: 1 }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              onClick={() => {
                scrollToSection("hero");
              }}
              sx={{
                mr: 2,
                display: "flex",
                flexGrow: { xs: 1, md: 0 },
                fontFamily: "monospace",
                letterSpacing: ".3rem",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              Rafał Łukawski
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                gap: { xs: 0, sm: 0, lg: 2},
              }}
            >
              {navItems.map((page) => (
                <Button
                  key={page.id}
                  onClick={() => handleNavClick(page.id)}
                  sx={{
                    color: activeSection === page.id ? "black" : grey[800],
                    display: "block",
                    textTransform: "uppercase",
                    backgroundColor: page.isCta ? grey[200] : "transparent",
                    px: 1,
                    py: page.isCta ? 1 : "6px",
                    borderRadius: page.isCta ? 2 : 0,
                    ml: page.isCta ? 1 : 0,
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      backgroundColor: page.isCta ? grey[300] : undefined,
                    },
                    whiteSpace: "",
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      display: "block",
                      position: "relative",
                      height: "1.5em",
                    }}
                  >
                    {/* Hidden bold text to reserve space */}
                    <Box
                      component="span"
                      sx={{
                        fontWeight: 700,
                        visibility: "hidden",
                        display: "block",
                      }}
                    >
                      {t(page.id).toUpperCase()}
                    </Box>
                    {/* Visible text overlaid */}
                    <Box
                      component="span"
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: activeSection === page.id ? 700 : 500,
                      }}
                    >
                      <ScrambleText text={t(page.id).toUpperCase()} />
                    </Box>
                  </Box>
                </Button>
              ))}
            </Box>
          </Box>

          {/* Single Language Switcher - visible on both mobile and desktop */}
          <LanguageSwitcher />

          {/* Mobile menu hamburger */}
          <Box sx={{ display: { xs: "flex", md: "none" }, ml: 1 }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <AnimatedHamburger isOpen={Boolean(anchorElNav)} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
              transitionDuration={TRANSITION_TIMEOUT}
            >
              {navItems.map((page) => (
                <MenuItem
                  key={page.id}
                  onClick={() => handleNavClick(page.id)}
                  sx={{
                    backgroundColor: page.isCta ? grey[200] : "transparent",
                    color: "inherit",
                    "&:hover": {
                      backgroundColor: page.isCta ? grey[300] : undefined,
                    },
                    my: page.isCta ? 1 : 0,
                    borderRadius: page.isCta ? 1 : 0,
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontWeight: activeSection === page.id ? 700 : 500,
                      color: "inherit",
                    }}
                  >
                    <ScrambleText text={t(page.id).toUpperCase()} />
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

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
import Fade from "@mui/material/Fade";
import { grey } from "@mui/material/colors";
import Image from "next/image";

const pages = ["About", "Projects", "Certificates", "Contact"];

interface AnimatedHamburgerProps {
  isOpen: boolean;
}
const TRANSITION_TIMEOUT = 200;
function AnimatedHamburger({ isOpen }: AnimatedHamburgerProps) {
  return (
    <Box
      sx={{
        width: 24,
        height: 18,
        position: "relative",
        color: grey[800],
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: isOpen ? "50%" : 0,
          left: 0,
          width: "100%",
          height: 2,
          backgroundColor: "currentColor",
          borderRadius: 1,
          transition: `all ${TRANSITION_TIMEOUT}ms ease-in-out`,
          transformOrigin: "center",
          transform: isOpen ? "translateY(-50%) rotate(45deg)" : "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: 0,
          width: "100%",
          height: 2,
          backgroundColor: "currentColor",
          borderRadius: 1,
          transition: `all ${TRANSITION_TIMEOUT}ms ease-in-out`,
          opacity: isOpen ? 0 : 1,
          transform: "translateY(-50%)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: isOpen ? "50%" : "100%",
          left: 0,
          width: "100%",
          height: 2,
          backgroundColor: "currentColor",
          borderRadius: 1,
          transition: `all ${TRANSITION_TIMEOUT}ms ease-in-out`,
          transformOrigin: "center",
          transform: isOpen
            ? "translateY(-50%) rotate(-45deg)"
            : "translateY(-100%)",
        }}
      />
    </Box>
  );
}

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ alignItems: "center", minHeight: 64, height: 64 }}
        >
          <Box sx={{ display: "flex", alignItems: "baseline", flexGrow: 1 }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: "flex",
                flexGrow: { xs: 1, md: 0 },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                textDecoration: "none",
                color: grey[800],
              }}
            >
              Rafał Łukawski
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ color: grey[800], display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
function HeaderSection() {
  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 4, md: 6 },
        mt: { xs: 8, md: 8 },
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "center", md: "center" },
            justifyContent: "space-evenly",
            gap: { xs: 3, md: 4 },
          }}
        >
          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography
              variant="h3"
              component="h1"
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".2rem",
                color: grey[800],
                mb: 1,
              }}
            >
              Rafał Łukawski
            </Typography>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                color: grey[600],
                fontWeight: 400,
                mb: 2,
              }}
            >
              Software Developer and IT Project Manager
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                pl: { xs: 0, md: 2 },
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: "#22c55e",
                  flexShrink: 0,
                }}
              />
              <Typography
                variant="h6"
                component="p"
                sx={{
                  color: grey[800],
                  fontWeight: 600,
                }}
              >
                Let's build products that matter!
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: { xs: 200, md: 256 },
              height: { xs: 200, md: 256 },
              position: "relative",
              overflow: "hidden",
              flexShrink: 0,
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
            }}
          >
            <Image
              src="/author.jpg"
              alt="Rafał Łukawski"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

function AboutSection() {
  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 4, md: 6 },
        px: { xs: 2, md: 4 },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            backgroundColor: 'white',
            border: `1px solid rgba(255, 255, 255, 0.3)`,
            p: { xs: 3, md: 5 },
            transition: `all ${TRANSITION_TIMEOUT}ms ease`,
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            "&:hover": {
              boxShadow: "0 12px 40px 0 rgba(31, 38, 135, 0.2)",
            },
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: grey[800],
              mb: 3,
            }}
          >
            About
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{
              color: grey[700],
              lineHeight: 1.8,
              fontSize: { xs: "1rem", md: "1.1rem" },
              mb: 3,
            }}
          >
            Hello, my name is Rafał Łukawski. I'm a full-stack developer with
            over 5 years of modern frontend/backend experience and over 20 years
            in IT. I'm passionate about the entire software development
            lifecycle—from system architecture, through implementation, to
            production deployment.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: grey[700],
              lineHeight: 1.8,
              fontSize: { xs: "1rem", md: "1.1rem" },
            }}
          >
            Google Cloud Professional Architect (2024) | Professional Scrum
            Master | Built systems for millions of users at Onet.pl | Led
            telecommunications projects at TP.SA | Currently developing complex
            React/Next.js applications and mentoring developers.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default function Page() {
  return (
    <Container maxWidth="xl" sx={{ backgroundColor: grey[100] }}>
      <ResponsiveAppBar />
      <HeaderSection />
      <AboutSection />
      <Container maxWidth="xl" sx={{ py: 4, px: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Lorem Ipsum
        </Typography>
        <Typography variant="body1" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        <Typography variant="body1" paragraph>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
        </Typography>
        <Typography variant="body1" paragraph>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
          enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        </Typography>
        <Typography variant="body1" paragraph>
          Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
          quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
          voluptas nulla pariatur? At vero eos et accusamus et iusto odio
          dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
          atque corrupti quos dolores et quas molestias excepturi sint occaecati
          cupiditate non provident.
        </Typography>
        <Typography variant="body1" paragraph>
          Similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
          distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
          cumque nihil impedit quo minus id quod maxime placeat facere possimus,
          omnis voluptas assumenda est, omnis dolor repellendus.
        </Typography>
        <Typography variant="body1" paragraph>
          Temporibus autem quibusdam et aut officiis debitis aut rerum
          necessitatibus saepe eveniet ut et voluptates repudiandae sint et
          molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
          delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut
          perferendis doloribus asperiores repellat.
        </Typography>
      </Container>
    </Container>
  );
}

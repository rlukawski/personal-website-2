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
import Link from "@mui/material/Link";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { grey } from "@mui/material/colors";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

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

interface Screenshot {
  id: string;
  src: string;
  alt: string;
  sourceUrl?: string;
}

interface Project {
  id: string;
  title: string;
  dateRange: string;
  customer?: string | { display: string; url: string };
  url?: string;
  description: string;
  screenshots: Screenshot[];
}

function ProjectsSection() {
  const [selectedProjectId, setSelectedProjectId] = React.useState<string | null>(null);
  const [selectedScreenshotIndex, setSelectedScreenshotIndex] = React.useState<number | null>(null);

  const projects: Project[] = [
    {
      id: "egzoclinic",
      title: "EGZOClinic",
      dateRange: "January 2022 - present",
      customer: { display: "EGZOTech.com", url: "https://egzotech.com" },
      description: "Comprehensive software platform for physiotherapy and neurorehabilitation. The application runs on robotic medical devices including Stella BIO, Sidra LEG, and Meissa OT, facilitating rehabilitation for conditions like strokes and spinal cord injuries. Features include progressive continuous passive motion (CPM) therapy, computer-assisted movement (CAM) exercises including CAM Isokinetic and CAM Torque, graphical interface for EMS parameter configuration, comprehensive reporting with EMG data analysis, spasticity protection, electrode placement guidance, rehabilitation games, and multilingual support.",
      screenshots: [
        {
          id: "screen1",
          src: "/egzoclinic-1.png",
          alt: "EGZOClinic Screen 1",
          sourceUrl: "egzotech.com",
        },
        {
          id: "screen2",
          src: "/egzoclinic-2.png",
          alt: "EGZOClinic Screen 2",
          sourceUrl: "egzotech.com",
        },
      ],
    },
    {
      id: "generator",
      title: "Generator Pasków",
      dateRange: "December 2024 - present",
      customer: "Rafał Łukawski",
      url: "https://generator-paskow.pl",
      description: "Full-stack meme generator platform for Polish TV programs. Built from scratch using modern Next.js stack with PostgreSQL database, Prisma ORM, and tRPC APIs. The platform enables users to create and share memes based on popular Polish television content. Features include image upload and manipulation, template management, user-generated content sharing, and responsive design. Deployed with Docker and CI/CD pipeline for production-ready reliability.",
      screenshots: [
        {
          id: "screen1",
          src: "/generator-1.png",
          alt: "Generator Pasków Screen 1",
          sourceUrl: "generator-paskow.pl",
        },
        {
          id: "screen2",
          src: "/generator-2.png",
          alt: "Generator Pasków Screen 2",
          sourceUrl: "generator-paskow.pl",
        },
      ],
    },
    {
      id: "stella",
      title: "Stella BIO App",
      dateRange: "March 2019 - April 2024",
      customer: { display: "EGZOTech.com", url: "https://egzotech.com" },
      url: "https://app.egzotech.com",
      description: "Online web application for managing and configuring the Stella BIO portable medical device, which provides advanced electromyography (EMG) and functional electrical stimulation (FES) capabilities. The application enables healthcare professionals and patients to remotely configure therapy programs, monitor EMG measurements, and manage treatment protocols. Built with Angular frontend and NestJS backend, the platform supports both clinical and home-based rehabilitation for neurological, orthopedic, oncological, pain management, sports, and pelvic floor conditions. Features include user authentication, EMG program configuration, therapy session management, and comprehensive reporting.",
      screenshots: [
        {
          id: "screen1",
          src: "/stella-app_login-page.png",
          alt: "Stella BIO App Login Page",
          sourceUrl: "egzotech.com",
        },
        {
          id: "screen2",
          src: "/stella-app_emg-program.png",
          alt: "Stella BIO App EMG Program",
          sourceUrl: "egzotech.com",
        },
      ],
    },
    {
      id: "multibenefit",
      title: "Multibenefit",
      dateRange: "June 2013 - February 2016",
      customer: { display: "Benefit Systems", url: "https://www.benefitsystems.pl/" },
      description: "E-commerce platform designed to provide employees with access to a variety of non-wage benefits. The platform enabled employees to select from a range of perks including MultiSport cards, gift vouchers, and tickets to cultural events. Built from scratch with full-stack architecture, implementation, and project management. The platform aimed to enhance employee satisfaction and well-being by offering personalized benefits tailored to individual preferences, while providing employers with efficient tools to manage and distribute these benefits.",
      screenshots: [
        {
          id: "screen1",
          src: "/multi-1.png",
          alt: "Multibenefit.pl Screen 1",
          sourceUrl: "web.archive.org",
        },
        {
          id: "screen2",
          src: "/multi-2.png",
          alt: "Multibenefit.pl Screen 2",
          sourceUrl: "web.archive.org",
        },
      ],
    },
  ];

  const handleScreenshotClick = (projectId: string, index: number) => {
    setSelectedProjectId(projectId);
    setSelectedScreenshotIndex(index);
  };

  const handleCloseDialog = React.useCallback(() => {
    setSelectedProjectId(null);
    setSelectedScreenshotIndex(null);
  }, []);

  const handlePrevious = React.useCallback(() => {
    if (selectedProjectId !== null && selectedScreenshotIndex !== null) {
      const project = projects.find((p) => p.id === selectedProjectId);
      if (project) {
        const newIndex =
          selectedScreenshotIndex > 0
            ? selectedScreenshotIndex - 1
            : project.screenshots.length - 1;
        setSelectedScreenshotIndex(newIndex);
      }
    }
  }, [selectedProjectId, selectedScreenshotIndex, projects]);

  const handleNext = React.useCallback(() => {
    if (selectedProjectId !== null && selectedScreenshotIndex !== null) {
      const project = projects.find((p) => p.id === selectedProjectId);
      if (project) {
        const newIndex =
          selectedScreenshotIndex < project.screenshots.length - 1
            ? selectedScreenshotIndex + 1
            : 0;
        setSelectedScreenshotIndex(newIndex);
      }
    }
  }, [selectedProjectId, selectedScreenshotIndex, projects]);

  // Handle keyboard navigation
  React.useEffect(() => {
    if (selectedScreenshotIndex === null || selectedProjectId === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrevious();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      } else if (e.key === "Escape") {
        handleCloseDialog();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedScreenshotIndex, selectedProjectId, handlePrevious, handleNext, handleCloseDialog]);

  const selectedProject =
    selectedProjectId !== null
      ? projects.find((p) => p.id === selectedProjectId)
      : null;
  const selectedScreenshot =
    selectedProject && selectedScreenshotIndex !== null
      ? selectedProject.screenshots[selectedScreenshotIndex]
      : null;

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
            Projects
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: grey[600],
              mb: 4,
              fontSize: { xs: "0.9rem", md: "1rem" },
            }}
          >
            Selected projects
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {projects.map((project, index) => (
              <Box
                key={project.id}
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "1fr auto" },
                  gap: { xs: 3, md: 4 },
                  pb: index < projects.length - 1 ? 4 : 0,
                  borderBottom: index < projects.length - 1 ? `1px solid ${grey[300]}` : "none",
                }}
              >
                {/* Left side: Project info */}
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1, mb: 1 }}>
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        fontFamily: "monospace",
                        fontWeight: 600,
                        color: grey[800],
                      }}
                    >
                      {project.title}
                    </Typography>
                    {project.url && (
                      <Link
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: grey[600],
                          "&:hover": {
                            color: grey[800],
                          },
                          textDecoration: "none",
                          fontSize: "0.9rem",
                          mt: 0.5,
                        }}
                      >
                        ↗
                      </Link>
                    )}
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: grey[600],
                      mb: 1,
                      fontSize: { xs: "0.85rem", md: "0.9rem" },
                    }}
                  >
                    {project.dateRange}
                  </Typography>
                  {project.customer && (
                    <Typography
                      variant="body2"
                      sx={{
                        color: grey[700],
                        mb: 2,
                        fontSize: { xs: "0.85rem", md: "0.9rem" },
                      }}
                    >
                      <Box component="span" sx={{ fontWeight: 600 }}>
                        Customer:{" "}
                      </Box>
                      {typeof project.customer === "object" ? (
                        <Link
                          href={project.customer.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            color: grey[700],
                            textDecoration: "underline",
                            "&:hover": {
                              color: grey[900],
                            },
                          }}
                        >
                          {project.customer.display}
                        </Link>
                      ) : (
                        <Box component="span">{project.customer}</Box>
                      )}
                    </Typography>
                  )}
                  <Typography
                    variant="body1"
                    sx={{
                      color: grey[700],
                      lineHeight: 1.8,
                      fontSize: { xs: "1rem", md: "1.1rem" },
                    }}
                  >
                    {project.description}
                  </Typography>
                </Box>

                {/* Right side: Thumbnail */}
                {project.screenshots.length > 0 && (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: { xs: "flex-start", md: "center" },
                    }}
                  >
                    <Box
                      component="button"
                      onClick={() => handleScreenshotClick(project.id, 0)}
                      sx={{
                        position: "relative",
                        width: { xs: 180, md: 200 },
                        height: "auto",
                        cursor: "pointer",
                        border: `2px solid ${grey[300]}`,
                        borderRadius: 2,
                        overflow: "hidden",
                        backgroundColor: grey[50],
                        p: 0.5,
                        transition: "all 0.2s ease",
                        "&:hover": {
                          borderColor: grey[400],
                          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                          transform: "scale(1.02)",
                        },
                      }}
                    >
                      <Image
                        src={project.screenshots[0].src}
                        alt={project.screenshots[0].alt}
                        width={200}
                        height={150}
                        style={{
                          width: "100%",
                          height: "auto",
                          display: "block",
                          borderRadius: 4,
                        }}
                        unoptimized
                      />
                    </Box>
                  </Box>
                )}
              </Box>
            ))}
          </Box>

          {/* Gallery Dialog */}
          <Dialog
            open={selectedScreenshotIndex !== null && selectedProject !== null}
            onClose={handleCloseDialog}
            maxWidth="lg"
            fullWidth
            PaperProps={{
              sx: {
                backgroundColor: "white",
                maxHeight: "90vh",
                position: "relative",
              },
            }}
          >
            {selectedProject && selectedScreenshot && selectedScreenshotIndex !== null && (
              <>
                <IconButton
                  onClick={handleCloseDialog}
                  sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    zIndex: 10,
                    backgroundColor: "white",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                    "&:hover": {
                      backgroundColor: grey[100],
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  <CloseIcon />
                </IconButton>

                <DialogContent
                  sx={{
                    p: 4,
                    position: "relative",
                    minHeight: 200,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {/* Left navigation arrow */}
                  {selectedProject.screenshots.length > 1 && (
                    <IconButton
                      onClick={handlePrevious}
                      sx={{
                        position: "absolute",
                        left: 16,
                        top: "50%",
                        transform: "translateY(-50%)",
                        zIndex: 10,
                        backgroundColor: "white",
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                        "&:hover": {
                          backgroundColor: grey[100],
                          transform: "translateY(-50%) scale(1.1)",
                        },
                      }}
                    >
                      <ChevronLeftIcon />
                    </IconButton>
                  )}

                  {/* Image */}
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        maxWidth: "100%",
                        borderRadius: 2,
                        overflow: "hidden",
                        position: "relative",
                      }}
                    >
                      <Image
                        key={selectedScreenshotIndex}
                        src={selectedScreenshot.src}
                        alt={selectedScreenshot.alt}
                        width={1200}
                        height={800}
                        style={{
                          width: "100%",
                          height: "auto",
                          display: "block",
                        }}
                        unoptimized
                      />
                    </Box>

                    {/* Source */}
                    {selectedScreenshot.sourceUrl && (
                      <Typography
                        variant="body2"
                        sx={{
                          mt: 2,
                          textAlign: "right",
                          width: "100%",
                          color: grey[600],
                          fontSize: "0.85rem",
                        }}
                      >
                        Source: {selectedScreenshot.sourceUrl}
                      </Typography>
                    )}
                  </Box>

                  {/* Right navigation arrow */}
                  {selectedProject.screenshots.length > 1 && (
                    <IconButton
                      onClick={handleNext}
                      sx={{
                        position: "absolute",
                        right: 16,
                        top: "50%",
                        transform: "translateY(-50%)",
                        zIndex: 10,
                        backgroundColor: "white",
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                        "&:hover": {
                          backgroundColor: grey[100],
                          transform: "translateY(-50%) scale(1.1)",
                        },
                      }}
                    >
                      <ChevronRightIcon />
                    </IconButton>
                  )}
                </DialogContent>
              </>
            )}
          </Dialog>
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
      <ProjectsSection />
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

"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import { grey } from "@mui/material/colors";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { SectionLayout } from "./SectionLayout";
import { Project } from "./types";

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

export function ProjectsSection() {
  const [selectedProjectId, setSelectedProjectId] = React.useState<string | null>(null);
  const [selectedScreenshotIndex, setSelectedScreenshotIndex] = React.useState<number | null>(null);

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
  }, [selectedProjectId, selectedScreenshotIndex]);

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
  }, [selectedProjectId, selectedScreenshotIndex]);

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
    <SectionLayout title="Projects" subtitle="Latest projects">
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
    </SectionLayout>
  );
}


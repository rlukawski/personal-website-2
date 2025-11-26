import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { grey } from "@mui/material/colors";
import Image from "next/image";

export function HeaderSection() {
  return (
    <Box
      id="top"
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


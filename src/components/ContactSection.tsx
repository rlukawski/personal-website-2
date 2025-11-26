import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Alert from "@mui/material/Alert";
import { grey } from "@mui/material/colors";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { SectionLayout } from "./SectionLayout";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xldargao", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <SectionLayout title="Contact" id="contact">
      <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 8 }}>
        {/* Contact Information */}
        <Box>
          <Typography variant="h6" component="h3" sx={{ mb: 3, fontWeight: 600, color: grey[800] }}>
            Get in Touch
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <FaLinkedin size={24} color={grey[600]} />
              <Link
                href="https://www.linkedin.com/in/rafal-lukawski/"
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
                sx={{ color: "#1976d2", fontSize: "1rem" }}
              >
                LinkedIn Profile
              </Link>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <FaGithub size={24} color={grey[600]} />
              <Link
                href="https://github.com/rlukawski"
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
                sx={{ color: "#1976d2", fontSize: "1rem" }}
              >
                GitHub Profile
              </Link>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <FaEnvelope size={24} color={grey[600]} />
              <Link
                href="mailto:rafal@lukawski.eu"
                underline="hover"
                sx={{ color: "#1976d2", fontSize: "1rem" }}
              >
                rafal@lukawski.eu
              </Link>
            </Box>
          </Box>
        </Box>

        {/* Contact Form */}
        <Box>
          <Typography variant="h6" component="h3" sx={{ mb: 3, fontWeight: 600, color: grey[800] }}>
            Send a Message
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <TextField
                label="Name"
                name="name"
                variant="outlined"
                fullWidth
                required
              />
              <TextField
                label="Email"
                name="email"
                type="email"
                variant="outlined"
                fullWidth
                required
              />
              <TextField
                label="Message"
                name="message"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                required
              />
              <Button
                type="submit"
                variant="contained"
                disabled={status === "submitting"}
                sx={{
                  py: 1.5,
                  textTransform: "none",
                  fontSize: "1rem",
                  backgroundColor: status === "success" ? "success.main" : "primary.main",
                  "&:hover": {
                    backgroundColor: status === "success" ? "success.dark" : "primary.dark",
                  },
                }}
              >
                {status === "submitting"
                  ? "Sending..."
                  : status === "success"
                  ? "Message Sent!"
                  : status === "error"
                  ? "Error - Try Again"
                  : "Send Message"}
              </Button>
              {status === "success" && (
                <Alert severity="success">Thank you! Your message has been sent.</Alert>
              )}
              {status === "error" && (
                <Alert severity="error">There was an error sending your message. Please try again.</Alert>
              )}
            </Box>
          </form>
        </Box>
      </Box>
    </SectionLayout>
  );
}


"use client";

import { useState, useCallback, useRef } from "react";
import Box from "@mui/material/Box";
import { SxProps, Theme } from "@mui/material/styles";

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*";
const EFFECT_DURATION = 200;
const SCRAMBLE_INTERVAL = 30;

interface ScrambleTextProps {
  text: string;
  sx?: SxProps<Theme>;
}

const getRandomChar = () => {
  return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
};

const scrambleText = (original: string): string => {
  return original
    .split("")
    .map((char) => {
      if (char === " ") return char;
      // ~40% chance to scramble each character
      return Math.random() < 0.4 ? getRandomChar() : char;
    })
    .join("");
};

export function ScrambleText({ text, sx }: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = useCallback(() => {
    // Clear any existing timers
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    // Start scrambling
    intervalRef.current = setInterval(() => {
      setDisplayText(scrambleText(text));
    }, SCRAMBLE_INTERVAL);

    // Stop after EFFECT_DURATION and restore original text
    timeoutRef.current = setTimeout(() => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setDisplayText(text);
    }, EFFECT_DURATION);
  }, [text]);

  const handleMouseLeave = useCallback(() => {
    // Clear timers and restore original text immediately
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setDisplayText(text);
  }, [text]);

  return (
    <Box
      component="span"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        textWrap: "nowrap",
        ...sx,
      }}
    >
      {displayText}
    </Box>
  );
}


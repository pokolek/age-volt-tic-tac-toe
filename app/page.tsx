"use client";

import {
  Box,
  createTheme,
  Switch,
  ThemeProvider,
  Typography,
  CssBaseline,
  Stack,
} from "@mui/material";
import GameBoard from "./components/GameBoard/GameBoard";
import { useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import Image from "next/image";
import avLogo from "./public/av-logo.svg";

export default function Home() {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const appTheme = createTheme({
    palette: {
      mode: mode,
      action: {
        disabledBackground: mode === "light" 
          ? "rgba(25, 118, 210, 0.12)"
          : "rgba(25, 118, 210, 0.5)",
        disabled: mode === "light" 
          ? "rgba(25, 118, 210, 1)"
          : "rgba(255, 255, 255, 1)",
      },
    },
  });

  const handleChange = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <Box
        component="main"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          p: 2,
          textAlign: "center",
        }}
      >
        <Image
          src={avLogo}
          alt="I hope you will hire me :)"
          style={{
            filter: appTheme.palette.mode === "dark" ? "invert(0)" : "invert(1)",
          }}
          width={333}
        />

        <Typography
          variant="h1"
          gutterBottom
          sx={{
            fontSize: { xs: "36px", sm: "48px", md: "64px" },
            fontWeight: "bold",
          }}
        >
          Tic Tac Toe
        </Typography>

        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          justifyContent="center"
        >
          {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
          <Switch
            checked={mode === "dark"}
            onChange={handleChange}
            sx={{ mb: 2 }}
          />
        </Stack>
        <GameBoard />
      </Box>
    </ThemeProvider>
  );
}

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

export default function Home() {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const appTheme = createTheme({
    palette: {
      mode: mode,
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
        <Typography
          variant="h3"
          gutterBottom
          sx={{ fontSize: { xs: "24px", sm: "32px", md: "36px" } }}
        >
          AgeVolt
        </Typography>

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
            inputProps={{ "aria-label": "controlled" }}
            sx={{ mb: 2 }}
          />
        </Stack>
        <GameBoard />
      </Box>
    </ThemeProvider>
  );
}

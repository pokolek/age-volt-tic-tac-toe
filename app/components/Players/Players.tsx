import { Box, Stack, Typography, useTheme } from "@mui/material";

interface PlayersProps {
  activePlayer: "X" | "O";
}

export default function Players({ activePlayer }: PlayersProps) {
  const theme = useTheme(); // Access the current theme

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 5, sm: 10 }}
      m={5}
      alignItems="center"
      justifyContent="center"
      sx={{ width: "100%" }}
    >
      {/* Player 1 Box */}
      <Box
        component="section"
        sx={{
          p: { xs: 2, sm: 3 }, // More padding for a cleaner look
          border:
            activePlayer === "X"
              ? `2px solid ${theme.palette.primary.main}`
              : `2px solid ${theme.palette.grey[500]}`,
          backgroundColor:
            activePlayer === "X"
              ? theme.palette.mode === "dark"
                ? theme.palette.primary.light
                : theme.palette.primary.main
              : theme.palette.background.paper,
          color:
            activePlayer === "X"
              ? theme.palette.getContrastText(theme.palette.primary.main)
              : theme.palette.text.primary,
          width: { xs: "100%", sm: "auto" },
          textAlign: "center",
          borderRadius: "12px", // Add rounded corners
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)", // Soft shadow for elevation
          transition: "background-color 0.3s ease, border 0.3s ease", // Smooth transitions
          ":hover": {
            backgroundColor:
              activePlayer === "X"
                ? theme.palette.mode === "dark"
                  ? theme.palette.primary.main
                  : theme.palette.primary.dark
                : theme.palette.action.hover,
          },
        }}
      >
        <Stack
          direction="row"
          spacing={5}
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            variant="h5"
            sx={{ fontSize: { xs: "18px", sm: "24px" } }}
          >
            Player 1
          </Typography>
          <Typography
            variant="h5"
            sx={{ fontSize: { xs: "18px", sm: "24px" } }}
          >
            X
          </Typography>
        </Stack>
      </Box>

      {/* Player 2 Box */}
      <Box
        component="section"
        sx={{
          p: { xs: 2, sm: 3 },
          border:
            activePlayer === "O"
              ? `2px solid ${theme.palette.primary.main}`
              : `2px solid ${theme.palette.grey[500]}`,
          backgroundColor:
            activePlayer === "O"
              ? theme.palette.mode === "dark"
                ? theme.palette.primary.light
                : theme.palette.primary.main
              : theme.palette.background.paper,
          color:
            activePlayer === "O"
              ? theme.palette.getContrastText(theme.palette.primary.main)
              : theme.palette.text.primary,
          width: { xs: "100%", sm: "auto" },
          textAlign: "center",
          borderRadius: "12px", // Add rounded corners
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)", // Soft shadow for elevation
          transition: "background-color 0.3s ease, border 0.3s ease", // Smooth transitions
          ":hover": {
            backgroundColor:
              activePlayer === "O"
                ? theme.palette.mode === "dark"
                  ? theme.palette.primary.main
                  : theme.palette.primary.dark
                : theme.palette.action.hover,
          },
        }}
      >
        <Stack
          direction="row"
          spacing={5}
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            variant="h5"
            sx={{ fontSize: { xs: "18px", sm: "24px" } }}
          >
            Player 2
          </Typography>
          <Typography
            variant="h5"
            sx={{ fontSize: { xs: "18px", sm: "24px" } }}
          >
            O
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
}

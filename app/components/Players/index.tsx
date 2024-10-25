import { Box, Stack, Typography, useTheme } from "@mui/material";

interface PlayersProps {
  activePlayer: "X" | "O";
}

export default function Players({ activePlayer }: PlayersProps) {
  const theme = useTheme();

  const getPlayerBoxStyles = (player: "X" | "O") => ({
    p: { xs: 2, sm: 3 },
    border:
      activePlayer === player
        ? `2px solid ${theme.palette.primary.main}`
        : `2px solid ${theme.palette.grey[500]}`,
    backgroundColor:
      activePlayer === player
        ? theme.palette.mode === "dark"
          ? theme.palette.primary.light
          : theme.palette.primary.main
        : theme.palette.background.paper,
    color:
      activePlayer === player
        ? theme.palette.getContrastText(theme.palette.primary.main)
        : theme.palette.text.primary,
    width: { xs: "100%", sm: "auto" },
    textAlign: "center",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    transition: "background-color 0.3s, border 0.3s",
  });

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 5, sm: 10 }}
      m={5}
      alignItems="center"
      justifyContent="center"
      sx={{ width: "100%" }}
    >
      <Box component="section" sx={getPlayerBoxStyles("X")}>
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

      <Box component="section" sx={getPlayerBoxStyles("O")}>
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

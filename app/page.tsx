import { Box, Typography } from "@mui/material";
import GameBoard from "./components/GameBoard/GameBoard";

export default function Home() {
  return (
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
        Age Volt
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

      <GameBoard />
    </Box>
  );
}

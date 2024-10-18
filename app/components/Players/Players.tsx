import { Box, Stack, Typography } from "@mui/material";

interface PlayersProps {
  activePlayer: "X" | "O";
}

export default function Players({ activePlayer }: PlayersProps) {
  return (
    <Stack direction="row" spacing={20}>
      <Box
        component="section"
        sx={{
          p: 2,
          border: activePlayer === "X" ? "2px solid blue" : "1px dashed grey",
          backgroundColor: activePlayer === "X" ? "lightblue" : "transparent",
        }}
      >
        <Stack direction="row" spacing={20}>
          <Typography variant="h5">Player 1</Typography>
          <Typography variant="h5">X</Typography>
        </Stack>
      </Box>
      
      <Box
        component="section"
        sx={{
          p: 2,
          border: activePlayer === "O" ? "2px solid blue" : "1px dashed grey",
          backgroundColor: activePlayer === "O" ? "lightblue" : "transparent",
        }}
      >
        <Stack direction="row" spacing={20}>
          <Typography variant="h5">Player 2</Typography>
          <Typography variant="h5">O</Typography>
        </Stack>
      </Box>
    </Stack>
  );
}

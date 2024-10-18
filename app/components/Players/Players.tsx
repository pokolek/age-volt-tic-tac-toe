import { Box, Stack, Typography } from "@mui/material";

interface PlayersProps {
  activePlayer: "X" | "O";
}

export default function Players({ activePlayer }: PlayersProps) {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 5, sm: 10 }}
      m={5}
      alignItems="center"
      justifyContent="center"
      sx={{ width: "100%" }}
    >
      <Box
        component="section"
        sx={{
          p: { xs: 1, sm: 2 },
          border: activePlayer === "X" ? "2px solid blue" : "1px dashed grey",
          backgroundColor: activePlayer === "X" ? "lightblue" : "transparent",
          width: { xs: "100%", sm: "auto" },
          textAlign: "center",
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

      <Box
        component="section"
        sx={{
          p: { xs: 1, sm: 2 },
          border: activePlayer === "O" ? "2px solid blue" : "1px dashed grey",
          backgroundColor: activePlayer === "O" ? "lightblue" : "transparent",
          width: { xs: "100%", sm: "auto" },
          textAlign: "center",
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

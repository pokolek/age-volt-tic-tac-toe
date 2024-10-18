import { Typography } from "@mui/material";
import GameBoard from "./components/GameBoard/GameBoard";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Typography variant="h3" gutterBottom>
        Age Volt
      </Typography>
      <Typography variant="h1" gutterBottom>
        Tic Tac Toe
      </Typography>
      <GameBoard />
    </main>
  );
}

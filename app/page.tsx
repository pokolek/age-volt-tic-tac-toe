"use client";
import { Stack, Typography } from "@mui/material";
import Player from "./components/Player/Player";
import GameBoard from './components/GameBoard/GameBoard';
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver/GameOver";


const INITIAL_GAME_BOARD: (string | null)[][] = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const PLAYERS = {
  X: "Player1",
  O: "Player2",
};

interface GameTurn {
  square: {
    rowIndex: number,
    colIndex: number,
  },
  player: string
}


export default function Home() {

  const [gameTurns, setGameTurns] = useState<GameTurn[]>([]);

  function deriveWinner(gameBoard, players) {
    let winner;
  
    for (const combination of WINNING_COMBINATIONS) {
      const firstSquareSymbol =
        gameBoard[combination[0].row][combination[0].column];
      const secondSquareSymbol =
        gameBoard[combination[1].row][combination[1].column];
      const thirdSquareSymbol =
        gameBoard[combination[2].row][combination[2].column];
  
      if (
        firstSquareSymbol &&
        firstSquareSymbol === secondSquareSymbol &&
        firstSquareSymbol === thirdSquareSymbol
      ) {
        winner = players[firstSquareSymbol];
      }
    }
  
    return winner;
  }

  function getActivePlayer(gameTurns: GameTurn[] | undefined) {
    let currentPlayer = "X";
    console.log(gameTurns)
  
    if (gameTurns?.length && gameTurns[0].player === "X") {
      currentPlayer = "O";
    }
    return currentPlayer;
  }

  function handleSelectSquare(rowIndex: number, colIndex: number) {
    setGameTurns((prevTurns: GameTurn[]) => {
      const currentPlayer = getActivePlayer(prevTurns);
  
      const updatedTurns: GameTurn[] = [
        { square: { rowIndex: rowIndex, colIndex: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
  
      return updatedTurns;
    });
  }
  
  function deriveGameBoard(gameTurns: GameTurn[]) {
    
    const gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];
  
    for (const turn of gameTurns) {
      const { square, player } = turn;
      const { rowIndex, colIndex } = square;
  
      gameBoard[rowIndex][colIndex] = player;
    }
    return gameBoard;
  }
  const [players, setPlayers] = useState(PLAYERS);

  const gameBoard = deriveGameBoard(gameTurns);

  const winner = deriveWinner(gameBoard, players);

  const hasDraw = gameTurns.length === 9 && !winner;
  function handleRematch() {
    setGameTurns([]);
  }

  return (
    <main className="flex flex-col items-center">
      <Typography variant="h3" gutterBottom>
        Age Volt
      </Typography>
      <Typography variant="h1" gutterBottom>
        Tic Tac Toe
      </Typography>
      <Stack direction="row" spacing={20}>
        <Player></Player>
        <Player></Player>
      </Stack>
      {(winner || hasDraw) && (
          <GameOver winner={winner} onRematch={handleRematch} />
        )}
      <GameBoard board={gameBoard} onSelectSquare={handleSelectSquare}/>
    </main>
  );
}

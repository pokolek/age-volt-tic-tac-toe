"use client";
import React, { useState, useEffect, useRef } from "react";
import Grid from "@mui/material/Grid2";
import { Button } from "@mui/material";
import { getWinner, getActivePlayer, getGameBoard } from "@/app/utils/utils";
import GameOver from "../GameOver/GameOver";
import { INITIAL_GAME_BOARD, PLAYERS } from "../../constants/constants";
import Players from "../Players/Players";
import GameTurn from "@/app/types/gameTurn";

const GameBoard = () => {
  const [gameTurns, setGameTurns] = useState<GameTurn[]>([]);
  const [winner, setWinner] = useState<string | undefined>();
  const [hasDraw, setHasDraw] = useState<boolean>(false);
  const gameOverRef = useRef<{ handleClickOpen: () => void }>(null);
  const gameBoard = getGameBoard(gameTurns, INITIAL_GAME_BOARD);

  function handleRematch() {
    gameOverRef.current?.handleClickOpen();
  }

  useEffect(() => {
    const winner = getWinner(gameBoard, PLAYERS);
    const draw = gameTurns.length === 9 && !winner;

    setWinner(winner);
    setHasDraw(draw);

    if ((winner || draw) && gameOverRef.current) {
      gameOverRef.current.handleClickOpen();
    }
  }, [gameTurns, gameBoard, gameOverRef]);

  function handleSelectSquare(rowIndex: number, colIndex: number) {
    setGameTurns((prevTurns: GameTurn[]) => {
      const currentPlayer = getActivePlayer(prevTurns);

      const updatedTurns: GameTurn[] = [
        { square: { rowIndex, colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  return (
    <>
      <Players activePlayer={getActivePlayer(gameTurns)} />
      <Grid container spacing={1} justifyContent="center">
        {gameBoard.map((row, rowIndex) => (
          <Grid container key={rowIndex} justifyContent="center">
            {row.map((playerSymbol, colIndex) => (
              <Grid key={colIndex} size={{ xs: 8, sm: 8, md: 8, lg: 8 }}>
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={() => handleSelectSquare(rowIndex, colIndex)}
                  disabled={!!playerSymbol}
                  sx={{
                    height: { xs: "60px", sm: "80px", md: "100px" },
                    fontSize: { xs: "16px", sm: "20px", md: "24px" },
                  }}
                >
                  {playerSymbol ?? " "}
                </Button>
              </Grid>
            ))}
          </Grid>
        ))}
      </Grid>
      {(winner || hasDraw) && (
        <GameOver
          ref={gameOverRef}
          winner={winner}
          onRematch={() => {
            setGameTurns([]);
            setWinner(undefined);
            setHasDraw(false);
            handleRematch();
          }}
        />
      )}
    </>
  );
};

export default GameBoard;

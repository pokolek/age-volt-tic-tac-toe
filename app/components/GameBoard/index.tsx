"use client";
import React, { useState, useEffect, useRef } from "react";
import Grid from "@mui/material/Grid2";
import { Button, CircularProgress, useTheme } from "@mui/material";
import { getWinner, getActivePlayer, getGameBoard } from "@/app/utils/utils";
import GameOver from "../GameOver";
import { INITIAL_GAME_BOARD, PLAYERS } from "../../constants/constants";
import Players from "../Players";
import GameTurn from "@/app/types/gameTurn";

const GameBoard = () => {
  const theme = useTheme();
  const [gameTurns, setGameTurns] = useState<GameTurn[]>([]);
  const [winner, setWinner] = useState<string | undefined>();
  const [hasDraw, setHasDraw] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const gameOverRef = useRef<{ handleClickOpen: () => void }>(null);
  const gameBoard = getGameBoard(gameTurns, INITIAL_GAME_BOARD);

  useEffect(() => {
    const savedGameTurns = localStorage.getItem("ticTacToeGameTurns");
    const savedWinner = localStorage.getItem("ticTacToeWinner");
    const savedHasDraw = localStorage.getItem("ticTacToeHasDraw");

    if (savedGameTurns) {
      setGameTurns(JSON.parse(savedGameTurns));
    }
    if (savedWinner && savedWinner !== "null") {
      setWinner(JSON.parse(savedWinner));
    }
    if (savedHasDraw && savedHasDraw !== "null") {
      setHasDraw(JSON.parse(savedHasDraw));
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("ticTacToeGameTurns", JSON.stringify(gameTurns));
    localStorage.setItem("ticTacToeWinner", JSON.stringify(winner ?? null));
    localStorage.setItem("ticTacToeHasDraw", JSON.stringify(hasDraw));
  }, [gameTurns, winner, hasDraw]);

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

  let gameBoardContent = <CircularProgress sx={{ m: 10 }} />;

  if (!loading) {
    gameBoardContent = (
      <>
        <Players activePlayer={getActivePlayer(gameTurns)} />
        <Grid
          container
          spacing={{ xs: 4, sm: 3, md: 3, lg: 3 }}
          justifyContent="center"
          sx={{ mt: 4, mb: 4 }}
        >
          {gameBoard.map((row, rowIndex) => (
            <Grid
              container
              key={rowIndex}
              spacing={{ xs: 4, sm: 2, md: 2, lg: 2 }}
              justifyContent="center"
            >
              {row.map((playerSymbol, colIndex) => (
                <Grid key={colIndex} size={{ xs: 4, sm: 8, md: 8, lg: 8 }}>
                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={() => handleSelectSquare(rowIndex, colIndex)}
                    disabled={!!playerSymbol}
                    sx={{
                      height: { xs: "80px", sm: "100px", md: "120px" },
                      fontSize: { xs: "24px", sm: "30px", md: "36px" },
                      color: playerSymbol
                        ? theme.palette.action.disabled
                        : theme.palette.text.primary,
                      backgroundColor: playerSymbol
                        ? theme.palette.action.disabledBackground
                        : theme.palette.background.paper,
                      borderColor: playerSymbol
                        ? theme.palette.action.disabledBackground
                        : theme.palette.primary.main,
                      "&:hover": {
                        backgroundColor: playerSymbol
                          ? theme.palette.action.disabledBackground
                          : theme.palette.primary.light,
                      },
                      transition:
                        "background-color 0.3s ease, border-color 0.3s ease",
                    }}
                  >
                    {playerSymbol ?? " "}
                  </Button>
                </Grid>
              ))}
            </Grid>
          ))}
        </Grid>
        <Button
          sx={{ mt: 5 }}
          onClick={() => {
            setGameTurns([]);
            setWinner(undefined);
            setHasDraw(false);
            handleRematch();
            localStorage.removeItem("ticTacToeGameTurns");
            localStorage.removeItem("ticTacToeWinner");
            localStorage.removeItem("ticTacToeHasDraw");
          }}
          variant="outlined"
          color="primary"
          size="large"
        >
          Rematch
        </Button>
      </>
    );
  }

  return (
    <>
      {gameBoardContent}
      {(winner || hasDraw) && (
        <GameOver
          ref={gameOverRef}
          winner={winner}
          onRematch={() => {
            setGameTurns([]);
            setWinner(undefined);
            setHasDraw(false);
            handleRematch();
            localStorage.removeItem("ticTacToeGameTurns");
            localStorage.removeItem("ticTacToeWinner");
            localStorage.removeItem("ticTacToeHasDraw");
          }}
        />
      )}
    </>
  );
};

export default GameBoard;

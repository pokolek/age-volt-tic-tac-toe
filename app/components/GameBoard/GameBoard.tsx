"use client";
import React from "react";
import Grid from "@mui/material/Grid2";
import { Button } from "@mui/material";

interface GameBoardProps {
  board: (string | null)[][];
  onSelectSquare: (rowIndex: number, colIndex: number) => void;
}

const GameBoard = ({ board, onSelectSquare }: GameBoardProps) => {
  return (
    <Grid container spacing={1} id="game-board" justifyContent="center">
      {board.map((row, rowIndex) => (
        <Grid container key={rowIndex} justifyContent="center" >
          {" "}
          {row.map((playerSymbol, colIndex) => (
            <Grid key={colIndex}  size={{ xs: 8, sm:8, md: 8, lg:8}}>
              <Button
                variant="outlined"
                fullWidth
                onClick={() => onSelectSquare(rowIndex, colIndex)}
                disabled={!!playerSymbol}
                style={{
                  height: "100px",
                  fontSize: "24px",
                }}
              >
                {playerSymbol ?? " "}
              </Button>
            </Grid>
          ))}
        </Grid>
      ))}
    </Grid>
  );
};

export default GameBoard;

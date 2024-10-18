"use client";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import React, { forwardRef, useImperativeHandle } from "react";

interface GameOverProps {
  winner: string | undefined;
  onRematch: () => void;
}

const GameOver = forwardRef(({ winner, onRematch }: GameOverProps, ref) => {
  const [open, setOpen] = React.useState(false);

  useImperativeHandle(ref, () => ({
    handleClickOpen,
  }));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    onRematch();
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
    >
      <DialogTitle>{winner ? `${winner} won!` : "It's a draw!"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {winner ? `${winner} is the champion!` : "The game ended in a tie."}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Rematch</Button>
      </DialogActions>
    </Dialog>
  );
});

GameOver.displayName = "GameOver";
export default GameOver;

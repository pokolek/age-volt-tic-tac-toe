"use client";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Box,
} from "@mui/material";
import React, { forwardRef, useImperativeHandle, useState } from "react";

interface GameOverProps {
  winner: string | undefined;
  onRematch: () => void;
}

const GameOver = forwardRef(({ winner, onRematch }: GameOverProps, ref) => {
  const [open, setOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    handleClickOpen: () => setOpen(true),
  }));

  const handleClose = () => {
    onRematch();
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="game-over-dialog-title"
      PaperProps={{
        sx: {
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
          textAlign: "center",
        },
      }}
    >
      <DialogTitle id="game-over-dialog-title">
        {winner ? `${winner} Won! 🎉` : "It's a Draw! 🤝"}
      </DialogTitle>

      <DialogContent>
        <DialogContentText>
          {winner
            ? `${winner} has triumphed in this round of Tic Tac Toe!`
            : "The game has ended with no winners this time."}
        </DialogContentText>
      </DialogContent>

      <DialogActions sx={{ justifyContent: "center", mt: 2 }}>
        <Box>
          <Button
            onClick={handleClose}
            variant="contained"
            color="primary"
            size="large"
            sx={{
              padding: "10px 20px",
              fontSize: "16px",
              marginRight: "10px",
              backgroundColor: "#4CAF50",
              "&:hover": {
                backgroundColor: "#45A049",
              },
            }}
          >
            Rematch
          </Button>
          <Button
            onClick={() => setOpen(false)}
            variant="outlined"
            size="large"
            sx={{
              padding: "10px 20px",
              fontSize: "16px",
              borderColor: "#f44336",
              color: "#f44336",
              "&:hover": {
                backgroundColor: "rgba(244, 67, 54, 0.08)",
                borderColor: "#f44336",
              },
            }}
          >
            Close
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
});

GameOver.displayName = "GameOver";
export default GameOver;

'use client'
import React from "react";

interface GameOverProps {
  winner: string | null; // Winner can be a string or null
  onRematch: () => void;  // Function to handle rematch
}

const GameOver: React.FC<GameOverProps> = ({ winner, onRematch }) => {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner ? <p>{winner} won!</p> : <p>It is a draw!</p>}
      <p>
        <button onClick={onRematch}>Rematch!</button>
      </p>
    </div>
  );
};

export default GameOver;

import { WINNING_COMBINATIONS } from "../winning-combinations";
import GameTurn from "../types/gameTurn";
import Players from "../types/players";
import { GameBoard } from "../types/gameBoard";

export function getWinner(
  gameBoard: GameBoard,
  players: Players
): string | undefined {
  let winner: string | undefined;

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
      winner = players[firstSquareSymbol as keyof Players];
    }
  }

  return winner;
}

export function getActivePlayer(gameTurns: GameTurn[]): "X" | "O" {
  let currentPlayer: "X" | "O" = "X";

  if (gameTurns?.length && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

export function getGameBoard(
  gameTurns: GameTurn[],
  initialGameBoard: GameBoard
): GameBoard {
  const gameBoard = [...initialGameBoard.map((array) => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { rowIndex, colIndex } = square;

    gameBoard[rowIndex][colIndex] = player;
  }
  return gameBoard;
}

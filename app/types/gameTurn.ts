export default interface GameTurn {
  square: {
    rowIndex: number;
    colIndex: number;
  };
  player: string;
}

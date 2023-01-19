import { WINNER_COMBINATIONS } from "../constantes";

export const checkWinnerFrom = (boardToCheck) => {
    // revisamos todas las combinaciones posibles
    for (const combination of WINNER_COMBINATIONS) {
      const [a, b, c] = combination;
      if (boardToCheck[a] && // 0 -> x u o 
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]) {
        return boardToCheck[a]; // x u o
      }
    }
    // si no hay ganador
    return null;
  }

export const checkEndGame = (newBoard) => {
    // revisamos si hay empate
    // si no hay casillas vacias
    // en el tablero
    return newBoard.every((square) => square !== null);
  }
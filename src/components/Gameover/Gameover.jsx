import React, { useContext } from "react";
import { TicTacToeContext } from "../../Context/TicTacToe";

export default function Gameover() {
  const { state } = useContext(TicTacToeContext);

  switch (state) {
    case 1:
      return <div className="game-over">X wins</div>;
    case 2:
      return <div className="game-over">O wins</div>;
    case 3:
      return <div className="game-over">Draw</div>;
    default:
      return <></>;
  }
}

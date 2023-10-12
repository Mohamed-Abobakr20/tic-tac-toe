import React, { useContext } from "react";
import { TicTacToeContext } from "../../Context/TicTacToe";

export default function Reset() {
  const { state, reset } = useContext(TicTacToeContext);
  if (state !== 0) {
    return (
      <button onClick={reset} className="reset-button">
        Reset
      </button>
    );
  }
  return <></>;
}

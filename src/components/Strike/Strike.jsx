import React, { useContext } from "react";
import { TicTacToeContext } from "../../Context/TicTacToe";

export default function Strike() {
  const { strike } = useContext(TicTacToeContext);

  return <div className={`strike ${strike}`}></div>;
}

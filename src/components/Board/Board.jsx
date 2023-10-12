import React, { useContext } from "react";
import Tile from "../Tile/Tile";
import Strike from "../Strike/Strike";
import { TicTacToeContext } from "../../Context/TicTacToe";

export default function Board() {
  const { tiles } = useContext(TicTacToeContext);

  return (
    <div className="board">
      {tiles.map((tile, index) => (
        <Tile tile={tile} id={index} key={index} />
      ))}

      <Strike />
    </div>
  );
}

import React, { useContext } from "react";
import { TicTacToeContext } from "../../Context/TicTacToe";

export default function Tile({ tile, id }) {
  const { handleTileClick, turn, tiles, hover } = useContext(TicTacToeContext);
  let hoverCheck = null;
  if (tiles[id] === null && hover) {
    hoverCheck = `${turn.toLowerCase()}-hover`;
  }
  return (
    <div className={`tile ${hoverCheck}`} onClick={() => handleTileClick(id)}>
      {tile}
    </div>
  );
}

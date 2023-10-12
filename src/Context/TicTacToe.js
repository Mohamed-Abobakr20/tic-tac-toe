import { createContext, useEffect, useState } from "react";
import { winningCombinations, gameState } from "../data";

export const TicTacToeContext = createContext();

export default function TicTacToeContextProvider({ children }) {
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState("X");
  const [strike, setStrike] = useState(null);
  const [state, setState] = useState(gameState.progress);
  const [hover, setHover] = useState(true);
  const [start, setStart] = useState(false);

  function reset() {
    setStrike(null);
    setState(gameState.progress);
    setTiles(Array(9).fill(null));
    setTurn("X");
    setHover(true);
    setStart(false);
  }

  function handleTileClick(id) {
    if (state !== gameState.progress) {
      return;
    }

    if (tiles[id] === null) {
      console.log(id);
      const newTiles = [...tiles];
      newTiles[id] = turn;
      setTiles(newTiles);
      if (turn === "X") {
        setTurn("O");
      } else {
        setTurn("X");
      }
    }
  }

  function checkWinner() {
    for (const { combo, strikeClass } of winningCombinations) {
      if (
        (tiles[combo[0]] !== null && tiles[combo[0]]) === tiles[combo[1]] &&
        tiles[combo[0]] === tiles[combo[2]]
      ) {
        setStrike(strikeClass);
        setHover(false);
        if (tiles[combo[0]] === "X") {
          setState(gameState.x);
        } else {
          setState(gameState.o);
        }
        return;
      }
    }

    const checkForDraw = tiles.every((tile) => tile !== null);
    if (checkForDraw) {
      setHover(false);
      setState(gameState.draw);
    }
  }

  useEffect(() => {
    checkWinner();
  }, [tiles]);

  return (
    <TicTacToeContext.Provider
      value={{
        tiles,
        setTiles,
        turn,
        setTurn,
        handleTileClick,
        strike,
        state,
        reset,
        hover,
        start,
        setStart,
      }}>
      {children}
    </TicTacToeContext.Provider>
  );
}

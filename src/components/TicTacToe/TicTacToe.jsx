import React, { useContext } from "react";
import Board from "../Board/Board";
import Gameover from "../Gameover/Gameover";
import Reset from "../Reset/Reset";
import { TicTacToeContext } from "../../Context/TicTacToe";

export default function TicTacToe() {
  const { start, setStart } = useContext(TicTacToeContext);
  return (
    <div>
      <h1>Tic Tac Toe</h1>
      {start ? (
        <>
          <Board />
          <Gameover />
          <Reset />
        </>
      ) : (
        <div className="container">
          <div className="description">
            <ul>
              <li>
                The game is played on a grid that's 3 squares by 3 squares.
              </li>
              <li>You are X , your friend is O.</li>
              <li>Players take turns putting their marks in empty squares.</li>
              <li>
                The first player to get 3 of (his or her) marks in a row (up,
                down, across, or diagonally) is the winner.
              </li>
            </ul>
          </div>
          <button className="start" onClick={() => setStart(true)}>
            Start
          </button>
        </div>
      )}
    </div>
  );
}

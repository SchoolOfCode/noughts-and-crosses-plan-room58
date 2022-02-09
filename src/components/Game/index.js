import "./App.css";
import { useState } from "react";
import Board from "../Board";
function Game() {
  const [nextPlayer, setNextPlayer] = useState("X");
  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  return (
    <div className="App">
      <Board
        setBoard={setBoard}
        board={board}
        nextPlayer={nextPlayer}
        setNextPlayer={setNextPlayer}
      />
      <div>next player: {nextPlayer}</div>
      <div>Winner: </div>
    </div>
  );
}

export default Game;

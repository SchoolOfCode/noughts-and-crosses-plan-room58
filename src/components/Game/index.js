import "./App.css";
import { useState, useEffect } from "react";
import Board from "../Board";
import Button from "../Button";
function Game() {
  const [nextPlayer, setNextPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

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

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }

    if (squares.every((square) => square !== null)) {
      return "DRAW";
    }

    return null;
  }

  useEffect(() => {
    let result = calculateWinner(board);

    if (result) {
      setWinner(result);
    }
  }, [board]);

  return (
    <div className="App">
      <Board
        winner={winner}
        setBoard={setBoard}
        board={board}
        nextPlayer={nextPlayer}
        setNextPlayer={setNextPlayer}
      />

      {!winner && <div data-testid='nextPlayer'> next player: {nextPlayer}</div>}
      {winner === "DRAW" ? (
        <div>Result: {winner}</div>
      ) : (
        <div>Winner: {winner}</div>
      )}
      {winner && (
        <Button
          setBoard={setBoard}
          setWinner={setWinner}
          setNextPlayer={setNextPlayer}
        />
      )}
    </div>
  );
}

export default Game;

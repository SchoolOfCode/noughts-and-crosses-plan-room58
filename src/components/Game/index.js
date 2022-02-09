import './App.css';
import { useState } from 'react';
import Board from '../Board';
function Game() {
  const [nextPlayer, setNextPlayer] = useState("X")
  return (
    <div className="App">
      <Board />
      <div> next player: {nextPlayer}</div>
    </div>
  );
}

export default Game;

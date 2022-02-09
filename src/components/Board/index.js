import React from 'react';
import Square from '../Square';
import css from './board.module.css';
const Board = ({ board, setBoard, nextPlayer, setNextPlayer, winner }) => {
  return (
    <div className={css.board}>
      {board.map((square, index) => {
        return (
          <Square
            winner={winner}
            key={index}
            value={square}
            setBoard={setBoard}
            index={index}
            board={board}
            nextPlayer={nextPlayer}
            setNextPlayer={setNextPlayer}
          />
        );
      })}
    </div>
  );
};

export default Board;

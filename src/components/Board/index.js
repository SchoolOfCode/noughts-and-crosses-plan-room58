import React from "react";
import Square from "../Square";
import css from "./board.module.css";
const Board = ({ board, setBoard, nextPlayer }) => {
  return (
    <div className={css.board}>
      {board.map((square, index) => {
        return (
          <Square
            key={index}
            value={square}
            setBoard={setBoard}
            index={index}
            board={board}
            nextPlayer={nextPlayer}
          />
        );
      })}
    </div>
  );
};

export default Board;

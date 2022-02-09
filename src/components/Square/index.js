import React from "react";
import css from "./square.module.css";

const Square = ({ value, setBoard, index, board, nextPlayer }) => {
  function handleClick() {
    let newBoard = [
      ...board.slice(0, index),
      nextPlayer,
      ...board.slice(index + 1),
    ];
    setBoard(newBoard);
  }

  return (
    <div className={css.square} onClick={handleClick}>
      {value}
    </div>
  );
};

export default Square;

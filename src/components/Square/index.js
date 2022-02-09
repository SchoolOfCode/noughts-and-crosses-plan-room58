import React from "react";
import css from "./square.module.css";

const Square = ({
  value,
  setBoard,
  index,
  board,
  nextPlayer,
  setNextPlayer,
}) => {
  function handleClick() {
    if (value) {
      return;
    }
    let newBoard = [
      ...board.slice(0, index),
      nextPlayer,
      ...board.slice(index + 1),
    ];
    setBoard(newBoard);
    changePlayer(nextPlayer);
  }

  function changePlayer(currentPlayer) {
    if (currentPlayer === "X") {
      setNextPlayer("O");
    } else {
      setNextPlayer("X");
    }
  }

  return (
    <div className={css.square} onClick={handleClick}>
      {value}
    </div>
  );
};

export default Square;

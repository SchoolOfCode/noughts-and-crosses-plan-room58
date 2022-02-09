import React from 'react';
import Square from '../Square';
import css from './board.module.css';
type square = {
  value: string;
}
type Props = {
  board: [square, square, square, square, square, square, square, square, square];
  setBoard: () => void;
  nextPlayer: string;
  setNextPlayer: () => void;
  winner: string;
}

const Board = (props: Props): JSX.Element => {

  return (
    <div className={css.board} data-testid='boardContainer'>
      {props.board.map((square, index) => {
        return (
          <Square
            winner={props.winner}
            key={index}
            value={square}
            setBoard={props.setBoard}
            index={index}
            board={props.board}
            nextPlayer={props.nextPlayer}
            setNextPlayer={props.setNextPlayer}
          />
        );
      })}
    </div>
  );
};

export default Board;

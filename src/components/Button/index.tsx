import React from 'react'
type square = {
  value: string | null;
}
type Props = {
  setBoard: (array: square[]) => void;
  setWinner: (s: null | string) => void;
  setNextPlayer: (s: null | string) => void;

}

const Button = (props: Props) => {
  const handleClick = () => {
    props.setBoard([null, null, null, null, null, null, null, null, null])
    props.setWinner(null)
    props.setNextPlayer("X")
  }
  return (
    <button onClick={handleClick}>
      play again

    </button>
  )
}

export default Button

import React from 'react'

const Button = ({setBoard, setWinner, setNextPlayer}) => {
    const handleClick = () => {
        setBoard(Array(9).fill(null))
        setWinner(null) 
        setNextPlayer("X")
    }
  return (
    <button onClick={handleClick} data-testid = 'button'>
     play again

    </button>
  )
}

export default Button

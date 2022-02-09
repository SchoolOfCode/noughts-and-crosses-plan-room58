import React from 'react'

const Button = ({setBoard, setWinner, setNextPlayer}) => {
    const handleClick = () => {
        setBoard([null, null, null, null, null, null, null, null, null])
        setWinner(null) 
        setNextPlayer("X")
    }
  return (
    <button onClick={handleClick}>
     play again

    </button>
  )
}

export default Button

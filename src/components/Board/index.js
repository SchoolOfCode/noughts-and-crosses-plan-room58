import React from 'react'
import Square from '../Square'
import css from './board.module.css'
const Board = ({board, setBoard}) => {

    return (
        <div className={css.board}>
        {board.map((square) =>{
            return <Square />
        }) 
        }
            
        </div>
    )
}

export default Board
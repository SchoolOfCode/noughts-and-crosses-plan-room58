import React from 'react'
import Square from '../Square'
import css from './board.module.css'
const Board = () => {

    return (
        <div className={css.board}>
       <Square />
            
       <Square />
            
       <Square />
            
       <Square />
            
       <Square />
            
       <Square />
            
       <Square />
            
       <Square />
            
       <Square />
            
        </div>
    )
}

export default Board
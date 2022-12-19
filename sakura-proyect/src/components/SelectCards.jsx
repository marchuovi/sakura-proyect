import React from 'react'
import {selectCards} from './Card'
import '../styles/board.css'


console.log(selectCards)

const SelectCards = () => {
  return (

    <div className='board'>
        {
        selectCards.map((card) => (
            <>
                <img id={card.idCard} src={card.frontFace}/>
                <h2>PASADO
                    <p>{card.meaning}</p>
                </h2>
                
            </>
        ))
        }
    </div>
  )
}

export default SelectCards
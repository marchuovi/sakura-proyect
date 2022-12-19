import React from 'react'
import { selectCards } from './Card'
import '../styles/board.css'


console.log(selectCards)

const SelectCards = () => {
  return (

    <div className='board'>
      {
        selectCards.map((card, index) => (
          <>
            {index === 0 && <h2>Pasado</h2>}
            {index === 1 && <h2>Presente</h2>}
            {index === 2 && <h2>Futuro</h2>}
            <img id={card.idCard} src={card.frontFace} />
            <p>{card.meaning}</p>
          </>
        ))
      }
    </div>
  )
}

export default SelectCards
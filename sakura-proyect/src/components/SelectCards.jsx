import React from 'react'
import { selectCards } from './Card'
import '../styles/destine.css'


console.log(selectCards)

const SelectCards = () => {
  return (
    <div className='board-destine'>
      {
        selectCards.map((card, index) => (
          <div className='cardD' key={card.id}>
            {index === 0 && <h2>Pasado</h2>}
            {index === 1 && <h2>Presente</h2>}
            {index === 2 && <h2>Futuro</h2>}
            <img key={card.idCard} src={card.frontFace} />
            <p>{card.meaning}</p>
          </div>
        ))
      }
    </div>
  )
}

export default SelectCards
import React from 'react'
import { selectCards } from './Card'
import '../styles/board.css'


console.log(selectCards)
const ppp = ['PASADO', 'PRESENTE', 'FUTURO']

const SelectCards = () => {
  return (

    <div className='board'>
      {
        selectCards.map((card, index) => (
          <div key={`dest-${card.id}`} >
            <img id={card.idCard} src={card.frontFace} />
            <h2>
              <p>{card.meaning}</p>
            </h2>
          </div>))
      }
    </div>
  )
}

export default SelectCards
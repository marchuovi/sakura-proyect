
import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import '../styles/board.css';

export let selectCards = [];


const Card = ({ frontFace, backFace, id, meaning }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = (event) => {
    const idCard = event.target.id;
    if (selectCards.length < 3) {
      setIsFlipped(!isFlipped);
      selectCards.push(idCard);
    }
    else{
      console.warn('No mas')
    }
  }
  return (
    <div className='card'>
      <ReactCardFlip isFlipped={isFlipped}>
        <img className='card-image' src={backFace} alt="Back face" id={id} meaning={meaning} onClick={event => handleClick(event)} />
        <img className='card-image' src={frontFace} alt="Front face" />
      </ReactCardFlip>
    </div>
  )
}

export default Card
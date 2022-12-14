
import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import '../styles/board.css';
import Swal from 'sweetalert2'


export let selectCards = [];

const Card = ({ frontFace, backFace, id, meaning }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = (event) => {
    const idCard = event.target;
    if (selectCards.length < 3) {
      setIsFlipped(!isFlipped);
      selectCards.push({ meaning, idCard, frontFace, id }); //usar useState
    }
    else {
      Swal.fire('Ya tienes tus 3 cartas. Haz click en Destino')
    }
  }
  return (
    <div className='card'>
      <ReactCardFlip isFlipped={isFlipped}>
        <img className='card-image' key={id} src={backFace} alt="Back face" id={id} meaning={meaning} onClick={event => handleClick(event)} />
        <img className='card-image' src={frontFace} alt="Front face" />
      </ReactCardFlip>
    </div>
  )
}


export default Card
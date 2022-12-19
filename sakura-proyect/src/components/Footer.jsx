import React from 'react'
import logofooter from '../assets/logofooter.png'
import '../styles/footer.css'

function Footer() {
  return (
    <div className='footer'>
      <img src= {logofooter} alt="" />
      <h6>Copy Right Sakura Tarot | 2022</h6>
    </div>
  )
}

export default Footer
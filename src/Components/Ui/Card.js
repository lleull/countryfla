import React from 'react'
import './card.css'
const Card = (props) => {
  return (
    <div className='cards'>
        {props.children}
    </div>
  )
}

export default Card
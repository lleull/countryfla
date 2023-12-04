import React from 'react'
import './navbar.css'
import emptymoon from  './halfmoon.png'
import fullmoon from  './fullmoon.png'

const Navbar = (props) => {
 
  return (
    <div className='header'>
             <h2>Where is the World?</h2>
         
                <h3 onClick={props.changebackg}><img className='moon' src={props.dark ?fullmoon: emptymoon} alt='dark'/>Darkmode</h3>
             
    </div>
  )
}

export default Navbar
import React from 'react'
import { Link } from 'react-router-dom'

export default function Piece(props) {
  return (
   <>
    <li className="piece">
    <Link className='link' to={props.path}>
    
    <img 
      src={props.src}
      className='img'
      alt="Piece"
       />
   
    <div className='info'>
      <h5 className="text">{props.text}</h5>
    </div>
    </Link>
    </li>
   </>
  )
}

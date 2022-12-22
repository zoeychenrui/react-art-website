import React from 'react'
import { Link } from 'react-router-dom'

export default function Piece(props) {
  return (
    <figure className="image-item">
    <Link to={props.path}>
    <img 
      src={props.src}
      className='img'
      alt="Piece"
       />
    <figcaption class="overlay"><span>{props.text}</span></figcaption>
    </Link>
    </figure>
  )
}

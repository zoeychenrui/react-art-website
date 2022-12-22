import React from 'react'
import { Link } from 'react-router-dom'

export default function Piece(props) {
  return (
    <figure className="image-item">
    <Link className="no-line" to={props.path}>
    <img 
      src={props.src}
      className='img'
      alt="Piece"/>
    <img 
      src={props.src2}
      className='hover-img'
      alt="Piece"/>
    <figcaption><span>{props.text}</span></figcaption>
    </Link>
    </figure>
  )
}

import React from 'react'

export default function Student(props) {
  return (
    <figure className="image-item">
    <img 
      src={props.src}
      className='img'
      alt="Piece"/>
    </figure>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

export default function Class(props) {
  return (
    <figure className="image-item">
    <Link className="no-line" to={props.path}>
    <div className='img'>
        
    </div>
    <figcaption><span>{props.text}</span></figcaption>
    </Link>
    </figure>
  )
}
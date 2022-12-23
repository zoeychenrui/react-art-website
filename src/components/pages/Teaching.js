import React from 'react'
import '../Piece.css';
import PandaSlider from "../sliders/PandaSlider";
import { Link } from 'react-router-dom'

export default function Teaching () {

    return (
        <div className='container'>
            <h2>class galleries</h2>
            <div className='image-gallery'>
            <div className="column">
                <figure className="image-item">
                    <Link className="no-line" to='/teaching'>
                    <div className='img'>
                        <PandaSlider />
                    </div>
                    <figcaption><span>panda</span></figcaption>
                    </Link>
                </figure>
                <figure className="image-item">
                    <Link className="no-line" to='/teaching'>
                    <div className='img'>
                        <PandaSlider />
                    </div>
                    <figcaption><span>panda</span></figcaption>
                    </Link>
                </figure>
                <figure className="image-item">
                    <Link className="no-line" to='/teaching'>
                    <div className='img'>
                        <PandaSlider />
                    </div>
                    <figcaption><span>panda</span></figcaption>
                    </Link>
                </figure>
            </div>
            <div className="column">
            <figure className="image-item">
                    <Link className="no-line" to='/teaching'>
                    <div className='img'>
                        <PandaSlider />
                    </div>
                    <figcaption><span>panda</span></figcaption>
                    </Link>
                </figure>
                <figure className="image-item">
                    <Link className="no-line" to='/teaching'>
                    <div className='img'>
                        <PandaSlider />
                    </div>
                    <figcaption><span>panda</span></figcaption>
                    </Link>
                </figure>
                <figure className="image-item">
                    <Link className="no-line" to='/teaching'>
                    <div className='img'>
                        <PandaSlider />
                    </div>
                    <figcaption><span>panda</span></figcaption>
                    </Link>
                </figure>
            </div>
            <div className="column">
            <figure className="image-item">
                    <Link className="no-line" to='/teaching'>
                    <div className='img'>
                        <PandaSlider />
                    </div>
                    <figcaption><span>panda</span></figcaption>
                    </Link>
                </figure>
                <figure className="image-item">
                    <Link className="no-line" to='/teaching'>
                    <div className='img'>
                        <PandaSlider />
                    </div>
                    <figcaption><span>panda</span></figcaption>
                    </Link>
                </figure>
            </div>
            </div>
        </div>
    )
}


import React from 'react'
import PandaSlider from "../sliders/PandaSlider";

export default function Teaching () {

    return (
        <div className='container'>
            <h2>class galleries</h2>
            <div className='image-gallery'>
            <div className="column">
                <PandaSlider />
                <PandaSlider />
                <PandaSlider />
            </div>
            <div className="column">
                <PandaSlider />
                <PandaSlider />
                <PandaSlider />
            </div>
            <div className="column">
                <PandaSlider />
                <PandaSlider />
                <PandaSlider />
            </div>
            </div>
        </div>
    )
}


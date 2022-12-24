import React from 'react'
import Slider from "../sliders/Slider";

export default function Teaching () {

    return (
    
        <div className='container'>
            <h2>class galleries</h2>
            <div className='image-gallery'>
            <div className="column">
               
                <Slider name="panda" text="panda 4.5.2020" url="/panda"/>
                <Slider name="rainbowSky" text="rainbow sky 5.24.2020" url="/rainbowSky"/>
                <Slider name="firefly" text="firefly 5.17.2020" url="/firefly"/>
            </div>
            <div className="column">
            <Slider name="abstractFlowers" text="abstract flowers 6.14.2020" url="/abstractFlowers"/>
            <Slider name="firefly" text="firefly 5.17.2020" url="/firefly"/>
            <Slider name="firefly" text="firefly 5.17.2020" url="/firefly"/>
            </div>
            <div className="column">
            <Slider name="firefly" text="firefly 5.17.2020" url="/firefly"/>
            <Slider name="firefly" text="firefly 5.17.2020" url="/firefly"/>
            <Slider name="firefly" text="firefly 5.17.2020" url="/firefly"/>
            </div>
            </div>
        </div>
    )
}


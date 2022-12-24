import React from 'react'
import Slider from "../sliders/Slider";

export default function Teaching () {

    return (
    
        <div className='container'>
            <h2>class galleries</h2>
            <div className='image-gallery'>
            <div className="column">
               
                <Slider name="panda" text="panda 4.5.2020" url="/panda"/>
                <Slider name="panda" text="panda 4.5.2020" url="/panda"/>
                <Slider name="panda" text="panda 4.5.2020" url="/panda"/>
            </div>
            <div className="column">
                <Slider />
                <Slider />
                <Slider />
            </div>
            <div className="column">
                <Slider />
                <Slider />
                <Slider />
            </div>
            </div>
        </div>
    )
}


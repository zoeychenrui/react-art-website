import { useState, useEffect } from "react";
import React from 'react';
import { abstractFlowersData, cherryBlossomData, fireflyData, flowersData, hummingbirdData, lavendarData, littleBirdData, lotusFlowerData, nightSkyData, PandaData, peacockData, rainbowSkyData, SunflowersData, sunsetMountainsData } from "./SliderData";
import "./Slider.css";
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export default function Slider (props) {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    var sliderData = [];
    if(props.name == "panda") {
        sliderData= PandaData;
    }
    if(props.name == "rainbowSky") {
        sliderData= rainbowSkyData;
    }
    if(props.name == "firefly") {
        sliderData= fireflyData;
    }
    if(props.name == "abstractFlowers") {
        sliderData= abstractFlowersData;
    }
    if(props.name == "sunflowers") {
        sliderData= SunflowersData;
    }
    if(props.name == "flowers") {
        sliderData= flowersData;
    }
    if(props.name == "littleBird") {
        sliderData= littleBirdData;
    }
    if(props.name == "sunsetMountains") {
        sliderData= sunsetMountainsData;
    }
    if(props.name == "nightSky") {
        sliderData= nightSkyData;
    }
    if(props.name == "lavendar") {
        sliderData= lavendarData;
    }
    if(props.name == "cherryBlossom") {
        sliderData= cherryBlossomData;
    }
    if(props.name == "lotusFlower") {
        sliderData= lotusFlowerData;
    }
    if(props.name == "peacock") {
        sliderData= peacockData;
    }
    if(props.name == "hummingbird") {
        sliderData= hummingbirdData;
    }

    const slideLength = sliderData.length;
   
    let slideInterval;
    let intervalTime = 5000;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
       
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
      
    };

    function auto() {
        slideInterval = setInterval(nextSlide, intervalTime);
    }

    useEffect(() => {
        setCurrentSlide(0);
    }, []);

    useEffect(() => {
        auto();
        return () => clearInterval(slideInterval);
    }, [currentSlide]);

    return (
        
        <figure className="image-item">
        <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide}/>
        <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />

        <Link className="no-line" to={props.url}>
        <div className="slider">
            {sliderData.map((slide, index) => {
                return (
                    <div
                        className={index === currentSlide ? "slide current" : "slide"}
                        key={index}
                    >
                    {index === currentSlide && (
                        <div className='img'>
                        <img src={slide.image} alt="slide"  />
                        </div>
                        
                    )}

                    </div>  
                );
            })}
        </div>
        <figcaption><span>{props.text}</span></figcaption>
        </Link>
        </figure>
    )

};

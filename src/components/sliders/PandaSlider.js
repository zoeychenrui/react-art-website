import { useState, useEffect } from "react";
import { sliderData } from "./PandaData";
import "./Slider.css";
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const PandaSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = sliderData.length;

    const autoScroll = true;
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
        if(autoScroll) {
            auto();
        }
        return () => clearInterval(slideInterval);
    }, [currentSlide]);

    return (
        <figure className="image-item">
        <Link className="no-line" to='/teaching'>
        <div className="slider">
            <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide}/>
            <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
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
        <figcaption><span>panda</span></figcaption>
        </Link>
        </figure>
    )

};
export default PandaSlider;
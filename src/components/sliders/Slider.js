import { useState, useEffect } from "react";
import React from 'react';
import { abstractFlowersData, assortedFlowersData, auroraBorealisData, beachData, birdsData, cherryBlossomData, desertData, fireflyData, flowersData, foxData, goldenGateBridgeData, hotAirBalloonData, hummingbirdData, keyToSummerData, koiData, lavendarData, lavendarFarmData, littleBirdData, lotusFlowerData, midnightData, mountainsData, nightSkyData, PandaData, parisData, peacockData, pottedCactiData, rainbowSkyData, redBirdData, riverReflectionsData, secludedBridgeData, springShadeData, SunflowersData, sunsetData, sunsetInMoroccoData, sunsetMountainsData, whiteFusionCalatheaData, winterWoodsData, yearOfTheCowData } from "./SliderData";
import "./Slider.css";
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import storage from "./Config";

export default function Slider (props) {

    var sliderData = [];
    // if(props.name == "pandaClass/") {
    //     sliderData= PandaData;
    // }
    // if(props.name == "rainbowSkyClass/") {
    //     sliderData= rainbowSkyData;
    // }
    // if(props.name == "fireflyClass/") {
    //     sliderData= fireflyData;
    // }
    // if(props.name == "abstractFlowersClass/") {
    //     sliderData= abstractFlowersData;
    // }
    // if(props.name == "sunflowersClass/") {
    //     sliderData= SunflowersData;
    // }
    // if(props.name == "flowers/") {
    //     sliderData= flowersData;
    // }
    // if(props.name == "littleBirdClass/") {
    //     sliderData= littleBirdData;
    // }
    // if(props.name == "sunset/") {
    //     sliderData= sunsetMountainsData;
    // }
    // if(props.name == "nightSky/") {
    //     sliderData= nightSkyData;
    // }
    // if(props.name == "lavendar/") {
    //     sliderData= lavendarData;
    // }
    // if(props.name == "cherryBlossom/") {
    //     sliderData= cherryBlossomData;
    // }
    // if(props.name == "lotusFlower/") {
    //     sliderData= lotusFlowerData;
    // }
    // if(props.name == "peacock/") {
    //     sliderData= peacockData;
    // }
    // if(props.name == "hummingbird/") {
    //     sliderData= hummingbirdData;
    // }
    // if(props.name == "hotAirBalloon/") {
    //     sliderData= hotAirBalloonData;
    // }
    // if(props.name == "desert/") {
    //     sliderData= desertData;
    // }
    // if(props.name == "beach/") {
    //     sliderData= beachData;
    // }
    // if(props.name == "birds/") {
    //     sliderData= birdsData;
    // }
    // if(props.name == "pottedCacti/") {
    //     sliderData= pottedCactiData;
    // }
    // if(props.name == "assortedFlowers/") {
    //     sliderData= assortedFlowersData;
    // }
    // if(props.name == "goldenGateBridge/") {
    //     sliderData= goldenGateBridgeData;
    // }
    // if(props.name == "auroraBorealis/") {
    //     sliderData= auroraBorealisData;
    // }
    // if(props.name == "sunset/") {
    //     sliderData= sunsetData;
    // }
    // if(props.name == "redBird/") {
    //     sliderData= redBirdData;
    // }
    // if(props.name == "fox/") {
    //     sliderData= foxData;
    // }
    // if(props.name == "midnight/") {
    //     sliderData= midnightData;
    // }
    // if(props.name == "winterWoods/") {
    //     sliderData= winterWoodsData;
    // }
    // if(props.name == "lavendarFarm/") {
    //     sliderData= lavendarFarmData;
    // }
    // if(props.name == "paris/") {
    //     sliderData= parisData;
    // }
    // if(props.name == "whiteFusionCalathea/") {
    //     sliderData= whiteFusionCalatheaData;
    // }
    // if(props.name == "secludedBridge/") {
    //     sliderData= secludedBridgeData;
    // }
    // if(props.name == "riverReflections/") {
    //     sliderData= riverReflectionsData;
    // }
    // if(props.name == "sunsetInMorocco/") {
    //     sliderData= sunsetInMoroccoData;
    // }
    // if(props.name == "mountains/") {
    //     sliderData= mountainsData;
    // }
    // if(props.name == "yearOfTheCow/") {
    //     sliderData= yearOfTheCowData;
    // }
    // if(props.name == "springShade/") {
    //     sliderData= springShadeData;
    // }
    // if(props.name == "keyToSummer/") {
    //     sliderData= keyToSummerData;
    // }
    // if(props.name == "koi/") {
    //     sliderData= koiData;
    // }

    const [allImages, setImages] = useState([]);

    const [currentSlide, setCurrentSlide] = useState(0);

    // can change to sliderData
    const slideLength = allImages.length;
   
    let slideInterval;

    const intervals = [4000, 4500, 5000, 5500];

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      }

    let intervalTime = intervals[getRndInteger(1,4)];

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
       
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
      
    };

    function auto() {
        slideInterval = setInterval(nextSlide, intervalTime);
    }

    const getFromFirebase = () => {
        let storageRef = storage.ref().child(props.name);
        storageRef.listAll().then(function (res) {
            res.items.forEach((imageRef) => {
              imageRef.getDownloadURL().then((url) => {
                  setImages((allImages) => [...allImages, url]);
              });
            });
          })
          .catch(function (error) {
            console.log(error);
          });
      };
      console.log(allImages);

    useEffect(() => {
        getFromFirebase();
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
       
            {allImages.map((slide, index) => {
                return (
                    <div
                        className={index === currentSlide ? "slide current" : "slide"}
                        key={index}
                    >
                    {index === currentSlide && (
                        <div >
                        <img src={slide} alt="slide"  />
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

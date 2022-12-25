import React from 'react'
import Slider from "../sliders/Slider";

export default function Teaching () {

    return (
    
        <div className='container'>
            <h2>class galleries</h2>
            <div className='image-gallery'>
            <div className="column">
                <Slider name="panda" text="panda 4.5.2020" url="/panda"/>
                <Slider name="sunflowers" text="sunflowers 4.26.2020" url="/sunflowers"/>
                <Slider name="rainbowSky" text="rainbow sky 5.24.2020" url="/rainbowSky"/>
                <Slider name="firefly" text="firefly 5.17.2020" url="/firefly"/>
                <Slider name="abstractFlowers" text="abstract flowers 6.14.2020" url="/abstractFlowers"/>
                <Slider name="flowers" text="flowers 4.12.2020" url="/flowers"/>
            </div>
            
            <div className="column">
                <Slider name="littleBird" text="little bird 5.3.2020" url="/littleBird"/>
                <Slider name="sunsetMountains" text="sunset mountains 6.21.2020" url="/sunsetMountains"/>
                <Slider name="nightSky" text="night sky 6.28.2020" url="/nightSky"/>
                <Slider name="lavendar" text="lavendar 7.5.2020" url="/lavendar"/>
                <Slider name="cherryBlossom" text="cherry blossom 5.10.2020" url="/cherryBlossom"/>
                <Slider name="lotusFlower" text="lotus flower 7.12.2020" url="/lotusFlower"/>
            </div>
            <div className="column">
                <Slider name="peacock" text="peacock 7.26.2020" url="/peacock"/>
                <Slider name="hummingbird" text="hummingbird 8.16.2020" url="/hummingbird"/>
                <Slider name="hotAirBalloon" text="hot air balloon 8.23.2020" url="/hotAirBalloon"/>
                <Slider name="desert" text="desert 8.9.2020" url="/desert"/>
                <Slider name="beach" text="beach 8.2.2020" url="/beach"/>
                <Slider name="birds" text="birds 9.6.2020" url="/birds"/>
            </div>
            
            <div className="column">
                <Slider name="pottedCacti" text="potted cacti 9.13.2020" url="/pottedCacti"/>
                <Slider name="assortedFlowers" text="assorted flowers 8.30.2020" url="/assortedFlowers"/>
                <Slider name="goldenGateBridge" text="golden gate bridge 9.27.2020" url="/goldenGateBridge"/>
                <Slider name="paris" text="paris 2.14.2021" url="/paris"/>
                <Slider name="lavendarFarm" text="lavendar farm 2.28.2021" url="/lavendarFarm"/>
                <Slider name="yearOfTheCow" text="year of the cow 2.7.2021" url="/yearOfTheCow"/>
            </div>
            <div className="column">
                <Slider name="auroraBorealis" text="aurora borealis 11.29.2020" url="/auroraBorealis"/>
                <Slider name="sunset" text="sunset 12.13.2020" url="/sunset"/>
                <Slider name="redBird" text="red bird 12.20.2020" url="/redBird"/>
                <Slider name="fox" text="fox 12.6.2020" url="/fox"/>
                <Slider name="winterWoods" text="winter woods 1.24.2021" url="/winterWoods"/>
                <Slider name="midnight" text="midnight 3.7.2021" url="/midnight"/>
            </div>
            <div className="column">
                <Slider name="riverReflections" text="river reflections 3.14.2021" url="/riverReflections"/>
                <Slider name="whiteFusionCalathea" text="white fusion calathea 1.31.2021" url="/whiteFusionCalathea"/>
                <Slider name="secludedBridge" text="secluded bridge 1.17.2021" url="/secludedBridge"/>
            </div>

            </div>
        </div>
    )
}


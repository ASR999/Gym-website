import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

const Hero = () => {
  return (
    <div className="hero">
        <div className="left-h">
            <Header/>

            {/* THE BEST ADD */}
            <div className="the-best-ad">
              <div></div>
              <span>The best fitness club in the town</span>
            </div>

            {/* HERO HEADING   */}

            <div className='hero-text'>
              <div>
                <span className='stroke-text'>SHAPE</span>
                <span>YOUR</span>
              </div>
              <div>
                <span>IDEAL BODY</span>
              </div>
              <div>
                <span>Get into the apex shape of your life</span>
              </div>
            </div>

            {/* figures */}

            <div className="figures">
              <div><span>140</span><span>Expert Coaches</span></div>

              <div><span>978</span><span>Members joined</span></div>

              <div><span>50</span><span>Fitness programs</span></div>
              
            </div>

            {/* hero buttons */}

            <div className="hero-buttons">
              <buttons className="btn">Get Started</buttons>
              <buttons className="btn">Learn More</buttons>
            </div>


        </div>



        <div className="right-h">
            <button className='btn'>Join Now</button>

            <div className="heart-rate">
              <img src={Heart} alt="" />
              <span>Heart Rate</span><span>112 bpm</span>
            </div>

        {/* Hero images */}

        <img src={hero_image} alt="" className='hero-image'/>
        <img src={hero_image_back} alt="" className='hero-image-back'/>

        {/* calories */}

        <div className="calories">
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
          
        </div>



        </div>



    </div>
  )
}

export default Hero
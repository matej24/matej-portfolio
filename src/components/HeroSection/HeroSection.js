import React, {useState} from 'react'
import Video from "../../videos/video.mp4"
import {MdKeyboardArrowRight, MdArrowForward} from "react-icons/md"
import {Button} from "../ButtonElement"
import "./HeroSection.css"

const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <div className="hero__container" id="home">
            <div className="heroBg">
                <video className="hero__videoBg" autoPlay loop muted src={Video} type="video/mp4" />
            </div>
            <div className="hero__content">
                <h1 className="hero__h1">Hi, <span className="gradient__text">Welcome </span>:)</h1>
                <p className="hero_p">"Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live" - John Woods</p>
                <div className="hero__btn__wrapper">
                    <Button className="glow-on-hover" to="about" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
                        Get to know me {hover ? <MdArrowForward style={{marginLeft: "8px", fontSize: "20px" }}/> : <MdKeyboardArrowRight style={{marginLeft: "8px", fontSize: "20px" }} />}
                    </Button>
                    
                </div>
            </div>
        </div>
    )
}

export default HeroSection

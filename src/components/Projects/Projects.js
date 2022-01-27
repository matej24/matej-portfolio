import React from 'react'
import Icon1 from "../../images/svg-4.svg"
import Icon2 from "../../images/svg-3.svg"
 import "./Projects.css"

const Services = () => {
    return (
        <div className="projects__container" id="projects">
            <h1 className="projects__h1">My projects</h1>
            <div className="projects__wrapper">
                <a className="projects__a" href="https://food-shop-matej.herokuapp.com/" >
                <div className="projects__card">
                    <img className="projects__icon" src={Icon1} alt="IloveFooD" />
                    <h2 className="projects__h2">I 	&lt;3 Food</h2>
                    <p className="projects__p">MERN - showcase purposes (Outdated - 2019)</p>
                </div>
                </a>
                <div className="projects__card">
                    <img className="projects__icon" src={Icon2} alt="construction" />
                    <h2 className="projects__h2">Under construction</h2>
                    <p className="projects__p">Future projects will be showcased here</p>
                </div>
                <div className="projects__card">
                    <img className="projects__icon" src={Icon2} alt="construction"/>
                    <h2 className="projects__h2">Under construction</h2>
                    <p className="projects__p">Future projects will be showcased here</p>
                </div>
            </div>
        </div>
    )
}

export default Services

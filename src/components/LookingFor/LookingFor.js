import React from 'react'
import imgPath from "../../images/svg-2.svg"
import "./LookingFor.css"

const LookingFor = ({ primary, dark, dark2}) => {
    return (
        <div>
        <div className="looking4__container" id="looking4" >
            <div className="looking4__wrapper">
                <div className="looking4__row" >
                    <div className="looking4__col1">
                        <div className="looking4__text__wrapper">
                            <p className="looking4__topLine">
                               Company profile
                            </p>
                            <h1 className="looking4__heading" >
                                What Im looking for?
                            </h1>
                            <p className="looking4__text" >
                                I am looking for a frendly IT company which puts knowledge, success and well being of their employees in first place. 
                            </p>
                            <p className="looking4__text" >
                            What I would like to have at work place:
                            </p>
                            <ul className="looking4__list">
                                <li>Mentorship</li>
                                <li>Stress free environment</li>                                
                            </ul>
                                                           
                        </div>
                    </div>
                    <div className="looking4__col2">
                        <div className="looking4__img__wrap">
                         <img className="looking4__img" src={imgPath} alt="react"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default LookingFor

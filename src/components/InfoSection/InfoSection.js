import React, {useState} from 'react'
import {Link as LinkR} from "react-router-dom";
import imgPath from "../../images/svg-1.svg"
import "./InfoSection.css"


const InfoSection = ({ primary, dark, dark2}) => {

    const dropdownOptions = [{
        value: "hr",
        label: "HR"
    },
    {
        value: "eng",
        label: "ENG"
    }
    ]

    const [dropDownSelected, setDropDownSelected] = useState(dropdownOptions[0].value);



    return (
        <div>
            <div className="about__container" id="about" >
                <div className="about__wrapper">
                    <div className="about__row" >
                        <div className="about__col1">
                            <div className="about__text__wrapper">
                                <p className="about__topLine">
                                    Points of interest
                                </p>
                                <h1 className="about__heading" >
                                    Get to know me
                                </h1>
                                <p className="about__text" >
                                    In future, I see myself as a senior ME<span className="about__colorLetter">R</span>N developer with proficiency in React.
                                    Currently I am looking to expand knowledge and bring my skill to higher level
                                </p>
                                <p className="about__text" >
                                That said, I would like to work with:
                                </p>
                                <ul className="about__list">
                                    <li>React</li>
                                    <li>NodeJS/Express</li>
                                    <li>MongoDB</li>
                                </ul>
                                <p className="about__text" >
                                But I am also interested in: Python, ML
                                </p>                               
                                <div className="about__btn__wrap">
                                   <LinkR to={dropDownSelected === "hr" ? "/cvmatejsekulic.doc" : "/cvmatejsekuliceng.doc"} target="_blank" download className="glow-on-hover button__download"  dark={dark ? 1 : 0} dark2={dark2 ? 1 : 0}>Download my CV</LinkR>
                                </div>
                                <select className="about__select" value={dropDownSelected} onChange={e => setDropDownSelected(e.target.value)}>
                                    {dropdownOptions.map(opt => (
                                        <option key={Math.random()} value={opt.value}>{opt.label}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="about__col2">
                            <div className="about__img__wrap">
                             <img className="about__img" src={imgPath} alt="react"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoSection

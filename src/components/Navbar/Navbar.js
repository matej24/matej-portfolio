import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {Link as LinkR} from "react-router-dom";
import {Link as LinkS} from "react-scroll";
import {animateScroll as scroll} from "react-scroll"
import "./Navbar.css"

const Navbar = ({toggleSidebar}) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
       
       <>
        <nav className="nav__container" style={scrollNav ? {background: "#000"} : {background: "transparent"}}>
            <div className="nav__wrapper">
                <LinkR to="/" onClick={toggleHome} className="nav__linkR">
                    MatejPort
                </LinkR>
                <div className="nav__mobileIcon" onClick={toggleSidebar}>
                    <FaBars />
                </div>
                <ul className="nav__menu">
                    <li className="nav__item">
                        <LinkS className="nav__link" to="about" activeClass="nav__linkA" smooth={true} duration={500} spy={true} exact="true" offset={-80} >About</LinkS>
                    </li>
                    <li className="nav__item">
                        <LinkS className="nav__link" to="looking4" activeClass="nav__linkA" smooth={true} duration={500} spy={true} exact="true" offset={-80} >Looking 4</LinkS>
                    </li>
                    <li className="nav__item">
                        <LinkS className="nav__link" to="projects" activeClass="nav__linkA"  smooth={true} duration={500} spy={true} exact="true" offset={-80}>Projects</LinkS>
                    </li>
                </ul>
                <nav className="nav__btn">
                    <LinkR className="nav__btn__cv" to="/cvmatejsekulic.doc" target="_blank" download>Get My CV</LinkR>
                </nav>
            </div>
        </nav>
       </>
    )
}

export default Navbar;

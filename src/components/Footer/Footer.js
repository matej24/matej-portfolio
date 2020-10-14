import React from 'react'
import {FaLinkedin, FaGithub} from "react-icons/fa";
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer__container">
            <div className="footer__wrapper"> 
              <FaLinkedin className="footer__icon__link" />
              <FaGithub className="footer__icon__git"/>
            </div>
        </footer>
    )
}

export default Footer

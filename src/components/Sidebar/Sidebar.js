import React from 'react'
import {FaTimes} from "react-icons/fa";
import {Link as LinkS} from "react-scroll";
import {Link as LinkR} from "react-router-dom"
import "./Sidebar.css";

const Sidebar = ({toggleSidebar, isOpen}) => {
    return (
        <aside className="sidebar__container" 
        onClick={toggleSidebar}  
        style={isOpen ? {opacity: "100%", top:"0"} : {opacity: "0", top:"-100%"}}>
            <div className="sidebar__icon__holder" onClick={toggleSidebar}>
                <FaTimes className="sidebar_icon" />
            </div>
            <div className="sidebar__wrapper">
                <ul className="sidebar__menu">
                    <LinkS className="sidebar__links" to="about" onClick={toggleSidebar}>
                        About
                    </LinkS>
                    <LinkS className="sidebar__links" to="looking4" onClick={toggleSidebar}>
                        Looking 4
                    </LinkS>
                    <LinkS className="sidebar__links" to="projects" onClick={toggleSidebar}>
                        Projects
                    </LinkS>
                </ul>
                <div className="sidebar__button__wrap" >
                    <LinkR className="sidebar__button" to="/signin">My CV</LinkR>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar;


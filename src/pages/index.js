import React, {useState} from 'react'
import HeroSection from '../components/HeroSection/HeroSection';
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import InfoSection from "../components/InfoSection/InfoSection"
import Projects from "../components/Projects/Projects"
import LookingFor from "../components/LookingFor/LookingFor"
import Footer from "../components/Footer/Footer"

function Home() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
        <Navbar toggleSidebar={toggleSidebar}/>
        <HeroSection />
        <InfoSection  /> 
        <LookingFor />
        <Projects /> 
        <Footer /> 
        </>
    )
}

export default Home

import React from "react";
import "./AboutMe.css"
import aboutMePhoto from "../../assets/me.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import ScrollAnimation from "react-animate-on-scroll";

const AboutMe = () => {
    return (
        <div id={"aboutme"} className={"component"}>
            <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} offset={50}>
                <h1 className={"page-title"}>about me.</h1>
            </ScrollAnimation>
            <div className={"me"}>

<div className={"test"}>
                <div className={"me-text"}>
                    <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} offset={50}>
                        <p>I'm a graduate software developer based in the Midlands in the UK.</p>
                        <p>I previously worked as an electrical technician at Aston Martin, working on electrical and microcontroller devices before leaving to pursue a master's degree in computer science.</p>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} offset={50}>
                        <div className={"me-links"}>
                            <a className={"link hoverable"} href="mailto:AlexCrosby@live.co.uk"  target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faEnvelope} size="3x"/></a>
                            <a className={"link hoverable"} href="https://github.com/AlexCrosby"  target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} size="3x"/></a>
                            <a className={"link hoverable"} href="https://linkedin.com/in/AlexanderCrosby"  target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} size="3x"/></a>
                        </div>
                    </ScrollAnimation>
                </div>

                    <div className={"me-photo"}>
                        <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} offset={50}>
                        <img src={aboutMePhoto} alt={"It's me!"}/>
                        </ScrollAnimation>
                    </div>
    </div>

            </div>
        </div>
    )
}


export default AboutMe
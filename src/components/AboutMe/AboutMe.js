import React from "react";
import "./AboutMe.css"
import aboutMePhoto from "../../assets/me.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from '@fortawesome/free-regular-svg-icons'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import ScrollAnimation from "react-animate-on-scroll";

const AboutMe = () => {
    return (
        <div id={"aboutme"} className={"component"}>
            <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} offset={50}>
            <h1 className={"title"}>about me.</h1>
                </ScrollAnimation>
            <div className={"me"}>


                <div className={"me-text"}>
                    <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} offset={50}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} offset={50}>
                    <div className={"me-links"}>
                        <a className={"link"} href="mailto:AlexCrosby@live.co.uk">
                            <FontAwesomeIcon icon={faEnvelope} size="3x"/></a>
                        <a className={"link"} href="https://github.com/AlexCrosby">
                            <FontAwesomeIcon icon={faGithub} size="3x"/></a>
                        <a className={"link"} href="https://linkedin.com/in/AlexanderCrosby">
                            <FontAwesomeIcon icon={faLinkedin} size="3x"/></a>
                    </div>
                    </ScrollAnimation>
                </div>
                <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} offset={50}>
                <div className={"me-photo"}>
                    <img  height={100} src={aboutMePhoto} alt={"It's me!"}/>
                </div>
                </ScrollAnimation>
            </div>
        </div>
    )
}


export default AboutMe
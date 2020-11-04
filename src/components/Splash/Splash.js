import React from 'react';
import './Splash.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import Typist from 'react-typist';


const Splash = () => {
    return (
        <div className={"splash-container component"}>
            <div className={"splash-body"}>
                <h1 className={"splash-title"}><Typist startDelay={1000} avgTypingDelay={100}>Hello, Wold!<Typist.Delay
                    ms={300}/><Typist.Backspace count={3} delay={200} />rld!</Typist></h1>
                <p className={"splash-subtitle animate__animated animate__fadeInUp animate__delay-4s"}>text1</p>
                <p className={"splash-subtitle animate__animated animate__fadeInUp animate__delay-5s"}>text2</p>
                {/*<p className={"splash-subtitle splash-subsubtitle animate__animated animate__fadeInUp animate__delay-5s"}>text3</p>*/}
            </div>
            <div className={"chevron"}>
                <a href={"#skills"}>
                    <FontAwesomeIcon className={"chevron-pulse"} icon={faChevronDown} size="2x"/>
                </a>
            </div>
        </div>

    )
}


export default Splash
import React from 'react';
import './Splash.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'


const Splash = () => {
    return (
        <div className={"splash-container"}>
            <div className={"splash-body"}>
                <h1 className={"splash-title"}>hello</h1>
                <p className={"splash-subtitle"}>text1</p>
                <p className={"splash-subtitle"}>text2</p>
                <p className={"splash-subtitle splash-subsubtitle"}>text3</p>
            </div>
<a href="#">
    <FontAwesomeIcon className={"chevron-pulse"} icon={faChevronDown} size="2x"/>
    </a>


        </div>

    )
}


export default Splash
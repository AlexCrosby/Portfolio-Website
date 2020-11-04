import React, {useState} from 'react';
import Modal from 'react-modal';
import './ProjectModals.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {faTimes} from '@fortawesome/free-solid-svg-icons'
import ScrollAnimation from "react-animate-on-scroll";


const ProjectModal = ({modal}) => {
    const [visible, setVisible] = useState(false);
    const changeVisible = (value) => {
        setVisible(value)
    }


    return (

        <div className={"project"}>
            <ScrollAnimation animateIn="animate__fadeIn"
                             animateOnce={true}
                             offset={50}>
            <div onClick={() => changeVisible(true)}>
                <img
                    className={"icon"}
                    src={require("../../assets/sketchericon.jpg").default}
                    alt={"Sketcher"}/>
                <h1 className={"projectTitle"}>Sketcher</h1>
            </div></ScrollAnimation>
            <Modal className="modal"
                   overlayClassName={"modalOverlay"}
                   isOpen={visible}
                   onRequestClose={() => changeVisible(false)}>
                <div className={"header"}>
                    <h1 className={"title2"}>
                        {modal.title}
                    </h1>
                    <FontAwesomeIcon
                        onClick={() => changeVisible(false)}
                        className={"close"}
                        icon={faTimes}
                        size="2x"
                    />
                </div>
                {modal.body}
            </Modal>
        </div>


    )
}
export default ProjectModal
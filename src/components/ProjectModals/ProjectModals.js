import React, {useState} from 'react';
import Modal from 'react-modal';
import './ProjectModals.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import ScrollAnimation from "react-animate-on-scroll";

const ProjectModal = ({modal}) => {
    const [visible, setVisible] = useState(false);
    const changeVisible = (value) => {
        setVisible(value)
    }


    return (<div className={"project"}>
        <ScrollAnimation animateIn="animate__fadeIn"
                         animateOnce={true}
                         offset={50}>
            <div onClick={() => changeVisible(true)}>
                <img
                    className={"icon"}
                    src={require(`../../assets/${modal.icon}.jpg`).default}
                    alt={"Sketcher"}/>
                <h4 className={"projectTitle"}>Sketcher</h4>
            </div>
        </ScrollAnimation>


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
            <div className={"modal-body"}>

                <div className={"modal-images"}>
                    <img src={require(`../../assets/${modal.image}.jpg`).default} alt={"It's me!"}/>
                </div>
                <div className={"modal-text"}>
                    <div className={"modal-text-text"}>
                        {modal.body}</div>
                    <div className={"modal-link"}>
                        <a href={modal.link} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} size="3x"/></a>
                    </div>

                </div>

            </div>


        </Modal>
    </div>)
}
export default ProjectModal
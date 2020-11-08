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

    const OptionalLink = () => {

        if (modal.link) {
            return (<div className={"modal-link"}>
                <a className={"hoverable"} href={modal.link} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="3x"/></a>
            </div>);
        }
        return null;
    }


    return (<div className={"project"}>
        <ScrollAnimation animateIn="animate__fadeIn"
                         animateOnce={true}
                         offset={50}>
            <div onClick={() => changeVisible(true)}>
                <div className={"image-effect"}>
                    <img
                        className={"icon"}
                        src={require(`../../assets/${modal.icon}.jpg`).default}
                        alt={modal.title}/>
                </div>
                <h4 className={"projectTitle"}>{modal.title}</h4>
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
                    className={"close hoverable"}
                    icon={faTimes}
                    size="2x"
                />
            </div>
            <div className={"modal-body"}>

                <div className={"modal-images"}>
                    <img className={"modal-image"} src={require(`../../assets/${modal.image}.jpg`).default} alt={modal.title}/>
                </div>
                <div className={"modal-text"}>
                    <div className={"modal-text-text"}>
                        {modal.body}</div>

                    <OptionalLink/>

                </div>

            </div>


        </Modal>
    </div>)
}
export default ProjectModal
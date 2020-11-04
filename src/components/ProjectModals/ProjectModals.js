import React, {useState} from 'react';
import Modal from 'react-modal';
import './ProjectModals.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {faTimes} from '@fortawesome/free-solid-svg-icons'


const ProjectModal = ({modal}) => {
    const [visible, setVisible] = useState(false);
    const changeVisible = (value) => {
        setVisible(value)
    }


    return (

            <div className={"project"} >
                <img
                    className={"icon"}
                     src={require("../../assets/sketchericon.jpg").default}
                     alt={"Sketcher"}
                     onClick={() => changeVisible(true)}/>
                <h1 className={"projectTitle"}>Sketcher</h1>
                <Modal className="modal"
                   isOpen={visible}
                   onRequestClose={() => changeVisible(false)}>
                <div className={"header"}>
                    <h1 className={"title"}>
                        {modal.title}
                    </h1>
                    <FontAwesomeIcon onClick={() => changeVisible(false)} className={"close"} icon={faTimes} size="2x"/>
                </div>
                {modal.body}
            </Modal>
        </div>


    )
}
export default ProjectModal
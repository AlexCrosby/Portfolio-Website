import React from "react";
import "./Projects.css"
import ScrollAnimation from "react-animate-on-scroll";
import ProjectModal from "../ProjectModals/ProjectModals";
import Modal from "react-modal";

Modal.setAppElement("#root")


const Projects = () => {


    const sketcher = {
        title: "Sketcher",
        body: "This is the body text of the sketcher modal.",
        icon: "sketchericon"
    }


    return (
        <div className={"component projects2"}>


            <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} offset={50}>
                <h1>projects.</h1>
            </ScrollAnimation>

            <div className={"list-container"}>

                <ul className={"project-items"}>
                    <li className={"project-item"}><ProjectModal  modal={sketcher}/></li>
                    <li className={"project-item"}><ProjectModal  modal={sketcher}/></li>
                    <li className={"project-item"}><ProjectModal  modal={sketcher}/></li>
                    <li className={"project-item"}><ProjectModal  modal={sketcher}/></li>
                    <li className={"project-item"}><ProjectModal  modal={sketcher}/></li>
                    <li className={"project-item"}><ProjectModal  modal={sketcher}/></li>
                    <li className={"project-item"}><ProjectModal  modal={sketcher}/></li>
                    <li className={"project-item"}><ProjectModal  modal={sketcher}/></li>
                    <li className={"project-item"}><ProjectModal  modal={sketcher}/></li>
                    <li className={"project-item"}><ProjectModal  modal={sketcher}/></li>

                </ul>
            </div>


        </div>
    )
}


export default Projects
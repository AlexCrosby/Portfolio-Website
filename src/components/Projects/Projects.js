import React from "react";
import "./Projects.css"
import ScrollAnimation from "react-animate-on-scroll";
import ProjectModal from "../ProjectModals/ProjectModals";
import Modal from "react-modal";

Modal.setAppElement("#root")
const skillItems = ['Java',
    'JavaFX',
    'Python',
    'PostgreSQL',
    'MongoDB',
    'Linux',
    'TensorFlow',
    'Git',
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node.js',
    'Google Cloud',
    'Amazon Web Services',
    'Arduino']

const Projects = () => {


    const sketcher = {
        title: "Sketcher",
        body: "This is the body text of the sketcher modal.",
        icon: "sketchericon"
    }


    return (
        <div id={"projects"} className={"component skills-container "}>
            <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} offset={50}>
                <h1>projects.</h1>
            </ScrollAnimation>


            <div className={"skills-items-body"}>

                <div className={"project-items"}>
                    <ProjectModal modal={sketcher}/>
                    <ProjectModal modal={sketcher}/>
                    <ProjectModal modal={sketcher}/>
                    <ProjectModal modal={sketcher}/>
                    <ProjectModal modal={sketcher}/>
                    <ProjectModal modal={sketcher}/>
                    <ProjectModal modal={sketcher}/>
                    <ProjectModal modal={sketcher}/>
                    <ProjectModal modal={sketcher}/>
                    <ProjectModal modal={sketcher}/>
                </div>
            </div>
        </div>
    )
}


export default Projects
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
        icon:"sketchericon"
    }





    return (
        <div id={"projects"} className={"component"}>


            <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} offset={50}>
                <h1>projects.</h1>
            </ScrollAnimation>


            <div>


                <ProjectModal modal={sketcher}/>



            </div>

        </div>
)
}


export default Projects
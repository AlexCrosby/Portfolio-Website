import React from "react";
import "./Projects.css"
import ScrollAnimation from "react-animate-on-scroll";
import ProjectModal from "../ProjectModals/ProjectModals";
import Modal from "react-modal";

Modal.setAppElement("#root")


const Projects = () => {


    const sketcher = {
        title: "Sketcher",
        icon: "sketchericon",
        image: "sketcher",
        link: "https://github.com/AlexCrosby/Bham-Group-Project",
        body: (<div><p>Sketcher is a pictionary-esque game created as part of a group project for the University of
            Birmingham Computer Science Msc.</p>
            <p>It allows multiple people to connect to a server in which multiple games are hosted. When a game is in
                progress, players take turns to draw a given word while other players try to guess what it is.
                Players are scored on correct guesses, and the highest scorer after a number of rounds is the
                winner.</p>
            <p>Sketcher is built primarily in Java, using JavaFX for the GUI. It contains three main components: The
                client which handles the user front end for each player; the server which handles the game rooms, game
                logic, and communication between clients; and a database which stores login details and lifetime player
                scores.</p>
        </div>)
    }
    const aisoco = {
        title: "AI-SOCO",
        icon: "aisocoicon",
        image: "aisoco",
        link: "https://https://github.com/AlexCrosby/AI-SOCO",
        body: (<div><p>Sketcher is a pictionary-esque game created as part of a group project for the University of
            Birmingham Computer Science Msc.</p>
            <p>It allows multiple people to connect to a server in which multiple games are hosted. When a game is in
                progress, players take turns to draw a given word while other players try to guess what it is.
                Players are scored on correct guesses, and the highest scorer after a number of rounds is the
                winner.</p>
            <p>Sketcher is built primarily in Java, using JavaFX for the GUI. It contains three main components: The
                client which handles the user front end for each player; the server which handles the game rooms, game
                logic, and communication between clients; and a database which stores login details and lifetime player
                scores.</p>
        </div>)
    }


    return (
        <div id={"projects"} className={"component skills-container "}>
            <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} offset={50}>
                <h1 className={"page-title"}>projects.</h1>
            </ScrollAnimation>


            <div className={"skills-items-body"}>

                <div className={"project-items"}>
                    <div className={"grid-item"}><ProjectModal modal={sketcher}/></div>
                    <div className={"grid-item"}><ProjectModal modal={aisoco}/></div>


                </div>
            </div>
        </div>
    )
}


export default Projects
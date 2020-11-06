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
        link: "https://github.com/AlexCrosby/AI-SOCO",
        body: (
            <div><p>AI-SOCO 2020 is a task organised by PAN for the Forum for the FIRE 2020 conference. The task requests the identification of effective
                strategies that solve the issue of source code authorship attribution in issues related to “cheating, in
                academic, work and open source environments” and that help in the detection of authors of malware
                software.</p>
                <p>I participated in this task as part of my final project at the University of Birmingham.</p>
                <p>For this task I created a neural network architecture capable of making such authorship predictions,
                    achieving first place in terms of accuracy.</p>
                <p>I am currently in the process of publishing my results.</p>
            </div>)
    }
    const this_website = {
        title: "This",
        icon: "thisicon",
        image: "this",
        link: "https://github.com/AlexCrosby/portfolio-website",
        body: (<div><p>I built this website as a large project for the purposes of learning HTML, CSS and the React framework, trying to use responsive design principles.</p>
            <p>It's main purpose is to act as a portfolio to show off my skills and projects I have worked on.</p>
        </div>)
    }

    const arduino = {
        title: "Arduino",
        icon: "arduinoicon",
        image: "arduino",
        link: "https://github.com/AlexCrosby/Arduino-projects",
        body: (<div><p>My first experience with programming was with the arduino microcontroller while working aat Aston Martin.</p>
            <p>I made a variety of devices used in vehicle testing including: Cable  continuity testers with LCD displays, thermocouple temperature warning indicators, door closing speed recorders, and fan speed pulse-width modulators.</p>
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
                    <div className={"grid-item"}><ProjectModal modal={this_website}/></div>
                    <div className={"grid-item"}><ProjectModal modal={arduino}/></div>


                </div>
            </div>
        </div>
    )
}


export default Projects
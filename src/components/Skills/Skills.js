import React from "react";
import "./Skills.css";
import "animate.css";


import ScrollAnimation from "react-animate-on-scroll";


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

const Skills = () => {

    return (
        <div id={"skills"} className={"component skills-container "}>
            <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true} offset={50}>
                <h1 className={"page-title"}>skills.</h1>
            </ScrollAnimation>


            <div className={"skills-items-body"}>

                <ul className={"skill-items"}>
                    {
                        skillItems.map(item => (
                            <li className={"skill"} key={item}>
                                <ScrollAnimation animateIn="animate__fadeIn"
                                                 animateOnce={true}
                                                 offset={50}>
                                    {item}
                                </ScrollAnimation>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    )
}


export default Skills
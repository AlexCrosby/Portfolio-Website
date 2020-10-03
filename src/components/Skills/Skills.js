import React from "react";
import "./Skills.css"


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

    return (<div id={"skills"} className={"skills-container"}>
            <h1>skills.</h1>


            <div className={"skills-items-body"}>
                <ul className={"skill-items"}>
                    {skillItems.map(item => (<li className={"skill"} key={item}>{item}</li>))}
                </ul>
            </div>
        </div>
    )
}


export default Skills
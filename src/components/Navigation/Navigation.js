import React from 'react';
import "./Navigation.css"


const Navigation = () => {
    return (
        <div className="navbar component" >
            <p className={"navbar-text"}>
                <a className={"hoverable"} href={"#skills"}>skills</a>
                &nbsp;|&nbsp;
                <a className={"hoverable"} href={"#projects"}>projects</a>
                &nbsp;|&nbsp;
                <a className={"hoverable"} href={"#aboutme"}>about me</a>
            </p>
        </div>
    )


}


export default Navigation;
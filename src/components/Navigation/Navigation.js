import React from 'react';
import "./Navigation.css"


const Navigation = () => {
    return (
        <div className={"navbar"}><p className={"navbar-text"}>
            <a className={"hoverable"} href={"#skills"}>skills</a>
            &nbsp;|&nbsp;
            <a className={"hoverable"} href={"#splash"}>projects</a>
            &nbsp;|&nbsp;
            <a className={"hoverable"} href={"#splash"}>about me</a>

        </p>
        </div>
    )


}


export default Navigation;
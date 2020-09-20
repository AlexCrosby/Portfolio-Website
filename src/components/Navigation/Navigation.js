import React from 'react';
import "./Navigation.css"


const Navigation = () => {
    return (
        <div className={"navbar"}><p>
            <a className={"hoverable"} href="#">skills</a>
            &nbsp;|&nbsp;
            <a className={"hoverable"} href="#">projects</a>
            &nbsp;|&nbsp;
            <a className={"hoverable"} href="#">about me</a>
        </p>
        </div>
    )


}


export default Navigation;
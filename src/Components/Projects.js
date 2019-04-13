import React from "react";
import PersonalPublication from "./ProjectPages/PersonalPublication";
import BartenderBlackBook from "./ProjectPages/BartendersBlackBook";
import League from "./ProjectPages/LoL";


export default function Projects(props) {
    let selectedProject;
    if (props.current === "PersonalPub") {
        selectedProject = <PersonalPublication />
    } else if(props.current === "BartendersBB") {
        selectedProject = <BartenderBlackBook />
    } else {
        selectedProject = <League />
    }
    return (
    <section className="hero is-light is-bold is-fullheight">
        <div id="Projects" className="hero-body">
            <div className="container projects">
                <h1 className="title">
                    Projects:
                </h1>
                <div className="controls">
                {/* want to make the projcets change on click */}
                {/* want to add a nice transitions to the leaving project */}
                    <button className="previous arrow" onClick={props.Click}></button>
                {selectedProject}
                    <button className="next arrow" onClick={props.Click}></button>
                </div>
                {/* <p>CURRENT ONE</p> */}
            </div>
        </div>
    </section>
    )
}
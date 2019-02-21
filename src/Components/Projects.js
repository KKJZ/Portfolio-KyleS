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
    {/* <!-- Hero content: will be in the middle --> */}
    <a name="Projects" />
        <div className="hero-body">
            <div className="container">
                <h1 className="title">
                    Projects:
                </h1>
                <div className="controls">
                {/* want to make the projcets change on click */}
                {/* want to add a nice transitions to the leaving project */}
                    <button className="previous round" onClick={props.Click}>&#8249;</button>
                    <button className="next round" onClick={props.Click}>&#8250;</button>
                </div>
                {selectedProject}
            </div>
        </div>
    </section>
    )
}
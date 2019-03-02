import React from "react";
import "../css/mystyles.css";

export default function Home(props) {
    return (
    <section className="hero is-success is-fullheight landing">
        <div id="Home" className="hero-body">
            <div className="container">
                <h1 className="title">
                    Hello World!
                </h1>
                <h2 className="subtitle">
                    I am a Full Stack Developer Living in Portland, Oregon
                </h2>
                <h2 className="subtitle">
                    Currently looking for new challenges!
                </h2>
            </div>
        </div>
    </section>
    )
}